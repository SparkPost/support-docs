# SparkPost support docs
[![Build Status](https://travis-ci.org/SparkPost/support-docs.svg?branch=master)](https://travis-ci.org/SparkPost/support-docs)
[![Slack Status](http://slack.sparkpost.com/badge.svg)](http://slack.sparkpost.com)

Add some docs about contributing and the repo here.


# Development

## Install required libraries

Run the following command to install the [Wordpress CLI](http://wp-cli.org/), [jq](https://stedolan.github.io/jq/), and NPM dependencies:

```bash
./bin/bootstrap.sh
```

## Running locally

To run the import locally you'll need to define a couple of environment variables. You can use the below values as a template:

```bash
export WP_DEVELOPMENT="/my_wp/path" # This needs to be set to the absolute path to the wordpress core directory
export WP_USER="my.account@example.com" # Defaults to the Wordpress Support account
```


Run the `deploy-categories.sh` script followed by the `deploy-articles.sh` script.

```bash
./bin/deploy-categories.sh && ./bin/deploy-articles.sh
```

If you want to clear out the articles, categories, and related media imported support you can run the following magic.

```bash
./bin/clear-data.sh
```

To reimport everything use the `--all` flag on the each of the deploy scripts.

## Exporting from Desk

Previously the SparkPost Support articles were hosted on desk.com.

Set the desk.com credentials to export the data.
```bash
export DESK_USERNAME=desk_email@domain.com
export DESK_PASSWORD=desk_password
```

To export from desk run `npm run live`. To test this with pre-downloaded data run `npm run local`. At last run there are 25 topics which will be saved to the `/articles` folder.

Each topic will be its own folder with an `index.md` file that defines the metadata about the topic pulled from desk. Each markdown file (other then `index.md`) is an article pulled from desk.com. The related media is stored in `/media` folder in the the folder with the corresponding name. 
