#!/usr/bin/env bash
#set -e

COLOR_RED="\033[1;31m"
COLOR_GREEN="\033[1;32m"
COLOR_BLUE="\033[0;36m"
COLOR_NONE="\033[0m"
NUMBER_PATTERN="^[0-9]+$"

## Defaults
WP_USER="${WP_USER:-Support}"
WP_POST_TYPE=""
WP_CUSTOM_TAX=""
DIRECTORY=""
ALL_FLAG="false"
CHANGED_FILES=""

for i in "$@"
do
case $i in
    --directory=*)
    DIRECTORY="${i#*=}"
    shift
    ;;
    --type=*)
    WP_POST_TYPE="${i#*=}"
    shift
    ;;
    --tax=*)
    WP_CUSTOM_TAX="${i#*=}"
    shift
    ;;
    --all)
    ALL_FLAG="true"
    shift
    ;;
    *)
      # unknown option
    ;;
esac
done

if [[ "$DIRECTORY" == "" ]] ; then
    echo -e "${COLOR_RED}ERROR${COLOR_NONE}: --directory flag is required"
    exit 1
fi

if [[ "$WP_POST_TYPE" == "" ]] ; then
    echo -e "${COLOR_RED}ERROR${COLOR_NONE}: --type flag is required"
    exit 1
fi

if [[ "$WP_CUSTOM_TAX" == "" ]] ; then
    echo -e "${COLOR_RED}ERROR${COLOR_NONE}: --tax flag is required"
    exit 1
fi

if [ "$ALL_FLAG" == "false" ]; then
  CHANGED_FILES=($(git diff --name-only $TRAVIS_COMMIT_RANGE -- $DIRECTORY))
else
  CHANGED_FILES=($(find $DIRECTORY -type f))
fi


function do_wp() {
  if [ "$DEPLOY_ENV" == "DEVELOPMENT" ]; then
    wp "$@" --user="$WP_USER" --path="$WP_CONNECTION" --url="http://www.sparkpost.dev:8900"
  else
    if [ "$DEPLOY_ENV" == "STAGING" ]; then
      wp "$@" --user="$WP_USER" --ssh="$WP_CONNECTION" --url="https://staging.sparkpost.com"
    else
      wp "$@" --user="$WP_USER" --ssh="$WP_CONNECTION" --url="https://www.sparkpost.com"
    fi
  fi
}

function get_filename() {
  local filepath=$1
  echo $(basename "${filepath%.*}")
}

function slugify() {
  local slug="$1"
  slug=$(echo ${slug// /-})
  slug=$(echo "$slug" | tr '[:upper:]' '[:lower:]')

  echo $slug
}

function index_of() {
    local n=$#
    local value=${!n}

    for ((i=1;i < $#;i++)) {
        if [ "${!i}" == "${value}" ]; then
          echo $(expr $i - 1)
          return 1
        fi
    }

    echo "-1"
}

function get_ext() {  
  local filename=$(basename "$1")
  local extension="${filename##*.}"
  extension=$(echo "$extension" | tr '[:upper:]' '[:lower:]')

  echo $extension
}

function print_title() {
  echo -e "${COLOR_BLUE}$1${COLOR_NONE}"
}


function print_section() {
  echo -e "${COLOR_GREEN}$1"
  echo "------------------------------"
  echo -e "${COLOR_NONE}"
}

DEPLOY_ENV="false"
WP_CONNECTION="false"

if [ "$CI" != "true" ]; then
  DEPLOY_ENV="DEVELOPMENT"
else
  if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
    DEPLOY_ENV="PRODUCTION"
  else
    DEPLOY_ENV="STAGING"
  fi
fi

eval "WP_CONNECTION=\$WP_$DEPLOY_ENV"

if [ -z "$WP_CONNECTION" ]; then
  echo -e "${COLOR_RED}Unable to find connection details for \"$DEPLOY_ENV\" environment${COLOR_NONE}"
  exit 1
fi

# get the wordpress post stuff
WP_POSTS=$(do_wp post list --post_type="$WP_POST_TYPE" --format=json --fields=ID,post_name)
WP_POST_SLUGS=($(echo "$WP_POSTS" | jq '.[].post_name' --raw-output))
WP_POST_IDS=($(echo "$WP_POSTS" | jq '.[].ID' --raw-output))

# get the wordpress category stuff
WP_CATEGORIES=$(do_wp term list "$WP_CUSTOM_TAX" --format=json --fields=term_id,slug)
WP_CATEGORY_SLUGS=($(echo "$WP_CATEGORIES" | jq '.[].slug' --raw-output))
WP_CATEGORY_IDS=($(echo "$WP_CATEGORIES" | jq '.[].term_id' --raw-output))


# refresh the categories cache – used for when we create a parent and child category in the same PR
function refresh_categories() {
  WP_CATEGORIES=$(do_wp term list "$WP_CUSTOM_TAX" --format=json --fields=term_id,slug)
  WP_CATEGORY_SLUGS=($(echo "$WP_CATEGORIES" | jq '.[].slug' --raw-output))
  WP_CATEGORY_IDS=($(echo "$WP_CATEGORIES" | jq '.[].term_id' --raw-output))
}


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

  echo $(echo $result | jq '[ .[] | {name: .commit.author.name, html_url: .author.html_url, avatar_url: .author.avatar_url} ] | unique_by(.html_url)')
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