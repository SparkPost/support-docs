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

print_section "do dem categories"

if [ ${#CHANGED_DIRECTORIES[@]} -eq 0 ]; then
  echo "No changes to be made"
  echo ""
fi

# push em in to wordpress
for directory in "${CHANGED_DIRECTORIES[@]}"; do
  slug=$(slugify "$(basename "$directory")")
  print_title "$slug"

  wp_cat_index=$(index_of "${WP_CATEGORY_SLUGS[@]}" "$slug")

  # get the category markdown
  md_cat=$(node bin/markdown.js $directory/index.md)
  md_cat_name="$(echo $md_cat | jq '.meta.name' --raw-output)"
  md_cat_description="$(echo $md_cat | jq '.meta.description' --raw-output)"
  [ "$md_cat_description" == "null" ] && md_cat_description="" || md_cat_description=$md_cat_description

  # create
  if [ "-1" == "$wp_cat_index" ] && [ -f "$directory/index.md" ]; then
      echo " - Creating category"
      echo " - $(do_wp term create "$WP_CUSTOM_TAX" "$md_cat_name" --slug="$slug" --description="$md_cat_description")"
  fi

  # update
  if [ "-1" != "$wp_cat_index" ] && [ -f "$directory/index.md" ]; then
    wp_cat_id=${WP_CATEGORY_IDS[$wp_cat_index]}
    echo " - Updating category"
    echo " - $(do_wp term update "$WP_CUSTOM_TAX" "$wp_cat_id" --name="$md_cat_name" --slug="$slug" --description="$md_cat_description")"
  fi

  # delete
  if [ "-1" != "$wp_cat_index" ] && [ ! -f "$directory/index.md" ]; then
    wp_cat_id=${WP_CATEGORY_IDS[$wp_cat_index]}
    echo " - Deleting category"
    echo " - $(do_wp term delete "$WP_CUSTOM_TAX" "$wp_cat_id")"
  fi

  # somethin' broke
  if [ "-1" == "$wp_cat_index" ] && [ ! -f "$directory/index.md" ]; then
    echo " - No index file and no category with $slug...idk what to do"
  fi

  echo ""
done
