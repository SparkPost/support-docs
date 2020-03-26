#!/usr/bin/env bash
source ./bin/utils.sh

# get the changed directories by their index file
CHANGED_DIRECTORIES=()
for filepath in "${CHANGED_FILES[@]}"; do
  if [ $(get_filename "$filepath") == "index" ]; then
    CHANGED_DIRECTORIES+=("$(dirname "${filepath}")")
  fi
done
CHANGED_DIRECTORIES=($(printf '%s\n' "${CHANGED_DIRECTORIES[@]}" | sort -u))

print_section "Deploying categories"

if [ ${#CHANGED_DIRECTORIES[@]} -eq 0 ]; then
  echo "No changes to be made"
  echo ""
fi

# push them in to wordpress
for directory in "${CHANGED_DIRECTORIES[@]}"; do
  slug=$(slugify "$(basename "$directory")")
  parent="$(basename "$(dirname "$directory")")"
  wp_parent_id=""

  # remove the parent value if it is a top level directory in the content directory
  if [[ "$DIRECTORY" != "$parent" ]] ; then
    wp_parent_index=$(index_of "${WP_CATEGORY_SLUGS[@]}" "$parent")

    # if we don't have the parent category it is likely that it was created in the same pr
    # so we need to refresh our cache of category info
    if [ "-1" == "$wp_parent_index" ]; then
      refresh_categories
      wp_parent_index=$(index_of "${WP_CATEGORY_SLUGS[@]}" "$parent")
    fi

    wp_parent_id=${WP_CATEGORY_IDS[$wp_parent_index]}
  fi

  print_title "$slug"
  
  wp_cat_index=$(index_of "${WP_CATEGORY_SLUGS[@]}" "$slug")

  # get the category markdown
  md_cat=$(node bin/markdown.js $directory/index.md)
  md_cat_images=("$(echo $md_cat | jq --compact-output --raw-output '.images')")
  md_cat_name="$(echo $md_cat | jq '.meta.name' --raw-output)"
  md_cat_description="$(echo $md_cat | jq '.meta.description' --raw-output)"
  [ "$md_cat_description" == "null" ] && md_cat_description="" || md_cat_description=$md_cat_description
  md_cat_type="$(echo $md_cat | jq '.meta.type' --raw-output)"

  if [ "$md_cat_type" == "null" ]; then
    md_cat_type=''
  fi

  # create
  if [ "-1" == "$wp_cat_index" ] && [ -f "$directory/index.md" ]; then
      echo " - Creating category"

      wp_cat_id=$(trim "$(do_wp term create "$WP_CUSTOM_TAX" "$md_cat_name" --slug="$slug" --description="$md_cat_description" --parent="$wp_parent_id" --porcelain)")
      
      if [[ $wp_cat_id =~ $NUMBER_PATTERN ]]; then
        echo " - Success: Created category $wp_cat_id."

        # add type
        echo " - $(trim "$(do_wp term meta add "$wp_cat_id" "type" "$md_cat_type")")"

        if [ "$md_cat_type" == "custom" ]; then
          # add contributors
          contributors=$(get_contributors "$directory/index.md")
          echo " - $(trim "$(do_wp term meta add "$wp_cat_id" "contributors" "$contributors")")"

          # add the content
          md_cat_content=$(generate_html "$directory/index.md")

          echo " - $(trim "$(do_wp term meta add "$wp_cat_id" "content" "$md_cat_content")")"
        fi
      else
        echo " - $wp_cat_id"
      fi
  fi

  # update
  if [ "-1" != "$wp_cat_index" ] && [ -f "$directory/index.md" ]; then
    wp_cat_id=${WP_CATEGORY_IDS[$wp_cat_index]}
    echo " - Updating category"
    echo " - $(trim "$(do_wp term update "$WP_CUSTOM_TAX" "$wp_cat_id" --name="$md_cat_name" --description="$md_cat_description" --parent="$wp_parent_id")")"
    
    # add type
    echo " - $(trim "$(do_wp term meta update "$wp_cat_id" "type" "$md_cat_type")")"

    if [ "$md_cat_type" == "custom" ]; then
      # add contributors
      contributors=$(get_contributors "$directory/index.md")
      echo " - $(trim "$(do_wp term meta update "$wp_cat_id" "contributors" "$contributors")")"

      # add the content
      md_cat_content=$(generate_html "$directory/index.md")

      echo " - $(trim "$(do_wp term meta update "$wp_cat_id" "content" "$md_cat_content")")"
    fi
  fi

  # delete
  if [ "-1" != "$wp_cat_index" ] && [ ! -f "$directory/index.md" ]; then
    wp_cat_id=${WP_CATEGORY_IDS[$wp_cat_index]}
    echo " - Deleting category"

    echo " - $(trim "$(do_wp term delete "$WP_CUSTOM_TAX" "$wp_cat_id")")"
  fi

  # something broke
  if [ "-1" == "$wp_cat_index" ] && [ ! -f "$directory/index.md" ]; then
    echo " - No index file and no category with $slug – unknown case"
  fi

  echo ""
done
