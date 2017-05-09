#!/usr/bin/env bash
source ./bin/utils.sh

function import_related_media() {
  local post_id="$1"
  local path_base="$2"

  local md_post_images=()
  local image_ids=()
  while read -r line; do
    md_post_images+=("$line")
  done <<< "$(echo "$3" | jq '.[]' --compact-output)"


  if [ "$md_post_images" != "" ]; then
    for image in "${md_post_images[@]}"; do
      local src="$(echo "$image" | jq '.src' --raw-output)"
      local alt="$(echo "$image" | jq '.alt' --raw-output)"
      local title="$(echo "$image" | jq '.title' --raw-output)"

      if [[ $src = http* ]] ; then
        path="$src"
      else
        if [[ $DEPLOY_ENV = "DEVELOPMENT" ]]; then
          path="$path_base/$src"
        else
          if [[ $TRAVIS_PULL_REQUEST = "false" ]]; then
            path="https://raw.githubusercontent.com/$TRAVIS_REPO_SLUG/master/$path_base/$src"
          else
            path="https://raw.githubusercontent.com/$TRAVIS_PULL_REQUEST_SLUG/$TRAVIS_PULL_REQUEST_BRANCH/$path_base/$src"
          fi
        fi
      fi

      new_id=$(do_wp media import "$path" --title="$title" --alt="$alt" --post_id="$post_id" --porcelain)
      image_ids+=("$new_id")
    done

    echo "${image_ids[@]}"
  fi
}

function delete_related_media() {
  local post_id="$1"
  local image_ids=($(do_wp post list --post_type='attachment' --format=ids --post_parent="$post_id"))

  if [ ${#image_ids[@]} -ne 0 ]; then
    do_wp post delete "${image_ids[@]}" --force > /dev/null 2>&1
  fi

  echo "${image_ids[@]}"
}

function get_contributors() {
  local filepath="$1"
  local curl_url="https://api.github.com/repos/SparkPost/support-docs/commits?path=$filepath"

  if [  -z ${GITHUB_TOKEN+x} ]; then
    result=$(curl -s $curl_url)
  else
    result=$(curl -s -H "Authorization: token $GITHUB_TOKEN" $curl_url)
  fi

  echo $(echo $result | jq '[ .[] | {name: .commit.committer.name, html_url: .committer.html_url, avatar_url: .committer.avatar_url} ] | unique')
}

function generate_html() {
  local filepath="$1"
  local imported_image_ids=("${@:2}")

  replace_images_array=""
  for image_id in "${imported_image_ids[@]}"; do
    replace_images_array="$replace_images_array[gallery columns='1' link='file' size='full' ids='$image_id'], "
  done

  echo "$(node bin/markdown.js "$filepath" "$replace_images_array" | jq '.html' --raw-output)"
}

print_section "now da articles"

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
  
  if [ $md_post_notification == 'null' ]; then
    md_post_notification=''
  fi
  

  # create
  if [ -n "$md_post" ] && [ "-1" == "$wp_post_index" ]; then
    echo " - Creating post"
    wp_post_id=$(do_wp post create --post_name=$slug --post_status="publish" --post_title="$md_post_title" --post_type=$WP_POST_TYPE --porcelain)

    if [[ $wp_post_id =~ $NUMBER_PATTERN ]]; then
      echo " - Success: Created post $wp_post_id."

      # add category
      echo " - $(do_wp post term add "$wp_post_id" "$WP_CUSTOM_TAX" "$cat_slug")"

      # add contributors
      echo " - $(do_wp post meta add "$wp_post_id" "contributors" "$contributors")"

      # add notification
      echo " - $(do_wp post meta add "$wp_post_id" "notification" "$md_post_notification")"

      # add media
      echo " - Importing related media"
      imported_image_ids=($(import_related_media "$wp_post_id" "$(dirname "$filepath")" "$md_post_images"))
      echo " - Imported ${#imported_image_ids[@]} files"

      # update the content with the images in it
      md_post_content=$(generate_html "$filepath" "${imported_image_ids[@]}")

      echo " - $(do_wp post update $wp_post_id --post_content="$md_post_content" --post_excerpt="$md_post_excerpt")"
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
    echo " - $(do_wp post term remove "$wp_post_id" "$WP_CUSTOM_TAX" $(do_wp post term list "$wp_post_id" "$WP_CUSTOM_TAX" --format=ids))"
    echo " - $(do_wp post term add "$wp_post_id" "$WP_CUSTOM_TAX" "$cat_slug")"

    # update contributors
    echo " - $(do_wp post meta update "$wp_post_id" "contributors" "$contributors")"

    # add notification
    echo " - $(do_wp post meta update "$wp_post_id" "notification" "$md_post_notification")"

    # update media
    echo " - Deleting related media"
    deleted_image_ids=($(delete_related_media "$wp_post_id"))
    echo " - Deleted ${#deleted_image_ids[@]} files"

    echo " - Importing related media"
    imported_image_ids=($(import_related_media "$wp_post_id" "$(dirname "$filepath")" "$md_post_images"))
    echo " - Imported ${#imported_image_ids[@]} files"

    # update the content
    md_post_content=$(generate_html "$filepath" "${imported_image_ids[@]}")

    echo " - $(do_wp post update $wp_post_id --post_title="$md_post_title" --post_content="$md_post_content" --post_excerpt="$md_post_excerpt")"

    continue;
  fi

  # delete
  if [ -z "$md_post" ] && [ "-1" != "$wp_post_index" ]; then
    wp_post_id=${WP_POST_IDS[$wp_post_index]}
    echo " - Deleting post"

    echo " - Deleting related media"
    deleted_image_ids=($(delete_related_media "$wp_post_id"))
    echo " - Deleted ${#deleted_image_ids[@]} files"

    echo " - $(do_wp post delete $wp_post_id --force)"

    continue;
  fi

  # somethin' broke
  if [ -z "$md_post" ] && [ "-1" == "$wp_post_index" ]; then
    echo " - No post markdown and no ID with $slug...idk what to do"
  fi

  echo ""
done
