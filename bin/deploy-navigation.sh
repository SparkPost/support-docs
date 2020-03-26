#!/usr/bin/env bash
source ./bin/utils.sh

print_section "Deploying navigation"


filepath="${DIRECTORY}/navigation.yml"
navigation_file_was_changed="false"
navigation_file_exists="false"
navigation_option_exists="false"

# set navigation_file_was_changed
for file in "${CHANGED_FILES[@]}"; do
  if [ "$file" == "$filepath" ]; then
    navigation_file_was_changed="true"
  fi
done

# set navigation_option_exists
if [ -f "$filepath" ]; then
  navigation_file_exists="true"
fi

# set navigation_option_exists
if [ -n "$WP_NAVIGATION_OPTION" ]; then
  navigation_option_exists="true"
fi

if [ "$navigation_file_was_changed" == "false" ]; then
  echo "No changes to be made"
else 
  # if we have the file but don't have the option - create
  if [[ "$navigation_file_exists" == "true" ]] && [[ "$navigation_option_exists" == "false" ]]; then
    echo " - Creating navigation option"
    json="$(./bin/node_modules/.bin/js-yaml "$filepath" 2>&1)"
    if [[ "$json" == *"YAMLException"* ]] || [[ "$json" == "null" ]]; then
      echo -e "\n${COLOR_RED}ERROR${COLOR_NONE}: Error parsing navigation.yml for ${DIRECTORY}/"
      exit 1
    fi
    echo " - $(trim "$(do_wp option add "${DIRECTORY}_article_navigation" "$json")")"
  fi

  # if we have the file and we have the option - update
  if [[ "$navigation_file_exists" == "true" ]] && [[ "$navigation_option_exists" == "true" ]]; then
    echo " - Updating navigation option"
    json="$(./bin/node_modules/.bin/js-yaml "$filepath" 2>&1)"
    if [[ "$json" == *"YAMLException"* ]] || [[ "$json" == "null" ]]; then
      echo -e "\n${COLOR_RED}ERROR${COLOR_NONE}: Error parsing navigation.yml for ${DIRECTORY}/"
      exit 1
    fi
    echo " - $(trim "$(do_wp option update "${DIRECTORY}_article_navigation" "$json")")"
  fi

  # if we don't have file and we have the option - delete
  if [[ "$navigation_file_exists" == "false" ]] && [[ "$navigation_option_exists" == "true" ]]; then
    echo " - Deleting navigation option"
    echo " - $(trim "$(do_wp option delete "${DIRECTORY}_article_navigation")")"
  fi

  # if we don't have the file and we don't have the option - error case
  if [[ "$navigation_file_exists" == "false" ]] && [[ "$navigation_option_exists" == "false" ]]; then
    echo " - No navigation file and no stored navigation option – unknown case"
  fi
fi

echo ""