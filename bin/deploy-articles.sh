#!/usr/bin/env bash
source ./bin/utils.sh

print_section "Deploying articles"

if [ ${#CHANGED_FILES[@]} -eq 0 ]; then
  echo "No changes to be made"
fi

for filepath in "${CHANGED_FILES[@]}"; do
  slug=$(slugify "$(get_filename $filepath)")
  cat_slug=$(slugify "$(basename "$(dirname "$filepath")")")
  
  print_title "$cat_slug/$slug"

  if [ $(get_ext "$filepath") != "md" ]; then
    echo "Unknown extension - skipping"
    echo ""
    continue
  fi

  if [ $slug == "index" ]; then
    echo "Category descriptor - skipping"
    echo ""
    continue
  fi

  contributors=$(get_contributors "$filepath")
  wp_post_index=$(index_of "${WP_POST_SLUGS[@]}" "$slug")

  md_post=$(node bin/markdown.js "$filepath")
  md_post_images=("$(echo $md_post | jq --compact-output --raw-output '.images')")
  md_post_title="$(echo $md_post | jq '.meta.title' --raw-output)"
  md_post_excerpt="$(echo $md_post | jq '.meta.description' --raw-output)"
  md_post_notification="$(echo $md_post | jq '.meta.notification' --raw-output)"
  
  if [ "$md_post_notification" == "null" ]; then
    md_post_notification=''
  fi
  

  # create
  if [ -n "$md_post" ] && [ "-1" == "$wp_post_index" ]; then
    echo " - Creating post"
    wp_post_id=$(trim "$(do_wp post create --post_name=$slug --post_status="publish" --post_title="$md_post_title" --post_type=$WP_POST_TYPE --porcelain)")

    if [[ $wp_post_id =~ $NUMBER_PATTERN ]]; then
      echo " - Success: Created post $wp_post_id."

      # add category
      echo " - $(trim "$(do_wp post term add "$wp_post_id" "$WP_CUSTOM_TAX" "$cat_slug")")"

      # add contributors
      echo " - $(trim "$(do_wp post meta add "$wp_post_id" "contributors" "$contributors")")"

      # add notification
      echo " - $(trim "$(do_wp post meta add "$wp_post_id" "notification" "$md_post_notification")")"

      # add media
      echo " - Importing related media"
      imported_image_ids=($(import_related_media "$wp_post_id" "$(dirname "$filepath")" "$md_post_images"))
      echo " - Imported ${#imported_image_ids[@]} files"

      # update the content with the images in it
      md_post_content=$(generate_html "$filepath" "${imported_image_ids[@]}")

      echo " - $(trim "$(do_wp post update $wp_post_id --post_content=<<<"$md_post_content" --post_excerpt="$md_post_excerpt")")"
    else
      echo " - $wp_post_id"
    fi

    continue;
  fi

  # update
  if [ -n "$md_post" ] && [ "-1" != "$wp_post_index" ]; then
    wp_post_id=${WP_POST_IDS[$wp_post_index]}
    
    echo " - Updating post"

    # update category
    current_terms=$(trim "$(do_wp post term list "$wp_post_id" "$WP_CUSTOM_TAX" --format=ids)")
    echo " - $(trim "$(do_wp post term remove "$wp_post_id" "$WP_CUSTOM_TAX" $current_terms)")"
    echo " - $(trim "$(do_wp post term add "$wp_post_id" "$WP_CUSTOM_TAX" "$cat_slug")")"

    # update contributors
    echo " - $(trim "$(do_wp post meta update "$wp_post_id" "contributors" "$contributors")")"

    # add notification
    echo " - $(trim "$(do_wp post meta update "$wp_post_id" "notification" "$md_post_notification")")"

    # update media
    echo " - Deleting related media"
    deleted_image_ids=($(delete_related_media "$wp_post_id"))
    echo " - Deleted ${#deleted_image_ids[@]} files"

    echo " - Importing related media"
    imported_image_ids=($(import_related_media "$wp_post_id" "$(dirname "$filepath")" "$md_post_images"))
    echo " - Imported ${#imported_image_ids[@]} files"

    # update the content
    md_post_content=$(generate_html "$filepath" "${imported_image_ids[@]}")

    echo " - $(trim "$(do_wp post update $wp_post_id --post_title="$md_post_title" --post_content=<<<"$md_post_content" --post_excerpt="$md_post_excerpt")")"

    continue;
  fi

  # delete
  if [ -z "$md_post" ] && [ "-1" != "$wp_post_index" ]; then
    wp_post_id=${WP_POST_IDS[$wp_post_index]}
    echo " - Deleting post"

    echo " - Deleting related media"
    deleted_image_ids=($(delete_related_media "$wp_post_id"))
    echo " - Deleted ${#deleted_image_ids[@]} files"

    echo " - $(trim "$(do_wp post delete $wp_post_id --force)")"

    continue;
  fi

  # something broke
  if [ -z "$md_post" ] && [ "-1" == "$wp_post_index" ]; then
    echo " - No post markdown and no ID with $slug – unknown case"
  fi

  echo ""
done
