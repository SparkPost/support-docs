#!/usr/bin/env bash
echo "Are you sure you want to clear out the data?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) break;;
        No ) exit;;
    esac
done

source ./bin/utils.sh
echo "Deleting articles, categories, and related media."

# delete the navigation
echo " - $(do_wp option delete "${DIRECTORY}_article_navigation")"

# delete the categories
for category_id in "${WP_CATEGORY_IDS[@]}"; do
  do_wp term delete "$WP_CUSTOM_TAX" "$category_id"
done

# delete the posts
for post_id in "${WP_POST_IDS[@]}"; do
  image_ids=($(do_wp post list --post_type='attachment' --format=ids --post_parent="$post_id" $NO_PAGINATION_FLAGS))
  do_wp post delete "${image_ids[@]}" --force

  do_wp post delete $post_id --force
done

echo "Done."
