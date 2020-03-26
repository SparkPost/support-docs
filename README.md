

# SparkPost and Momentum documentation

[![Build Status](https://travis-ci.org/SparkPost/support-docs.svg?branch=master)](https://travis-ci.org/SparkPost/support-docs)

This repo contains the SparkPost and Momentum documentation published at https://www.sparkpost.com/docs and https://www.sparkpost.com/momentum.

SparkPost documentation is located in the `support/` directory.

Momentum documentation is located in the `momentum/` directory.


All content is formatted in [Markdown](https://daringfireball.net/projects/markdown/syntax).

* [SparkPost and Momentum documentation](#sparkpost-and-momentum-documentation)
  * [Resources](#resources)
  * [Directory Structure](#directory-structure)
* [Content](#content)
  * [Articles](#articles)
    * [Frontmatter](#frontmatter)
  * [Images and other media](#images-and-other-media)
  * [Categories](#categories)
    * [Category Types](#category-types)
  * [Navigation](#navigation)
* [Deployment](#deployment)
  * [Pipeline](#pipeline)
* [Development](#development)
  * [Installation](#installation)
  * [Local environment variables](#local-environment-variables)
  * [Sync locally](#sync-locally)
  * [Cleaning WordPress](#cleaning-wordpress)

### Resources

* [Markdown tutorial](http://www.markdowntutorial.com/)
* [YAML tutorial](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)

### Directory Structure

```
├── bin/      – Scripts for rendering the markdown to html and deploying the HTML to WordPress
├── example/  – A example folder for a category, article and media
├── momentum/ – Momentum documentation for 4.x, 3.x, and Mobile
└── support/  – The full SparkPost documentation
```

## Content

**Important note:** the functionality for the Momentum and SparkPost documentation is identical

While this document 

### Articles

Markdown articles live in the `support` or `momentum` folders. Every folder inside of the `support` or `momentum` folder is category (e.g. api, billing). The articles are formatted using [Markdown](https://daringfireball.net/projects/markdown/syntax). Each article contains YAML metadata at the top, called frontmatter, used to set the title, description, and other options.

The rest of the article content is written in plain Markdown, a simple syntax that can be used to write content for the web. A [Markdown tutorial](http://www.markdowntutorial.com/) is available on GitHub.


#### Frontmatter

**Fields:**

* `title` – Top-level title of the article. This will show up at the top of the page and in search results.
* `description` – Description of the article. This is used for SEO, the search results, and the list of articles in each category.
* `notification` – A notification to show at the top of the article, before the content and below the title. [How to Use Binding Groups](https://github.com/SparkPost/support-docs/blob/master/support/tech-resources/binding-groups.md) is an example of this.

**Example:**

```yaml
title: "Example Support Article"
description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
```

### Images and other media

Images and other media should be placed in `support/<category>/media/<slug>/`, where `category` is the name of the folder containing the article and `slug` is the name of the file without the `.md` extension. For example, the following structure shows an article in the category `api` with some media:

```
support/api
├── media
│   └── managing-sending-domains
│       └── some-image.png
├── index.md
└── managing-sending-domains.md
```

Note how the name of the file without the `.md` extension is same as the name of the subfolder in the `media` folder.

The file `managing-sending-domains.md` would then contain some Markdown like this:

```markdown
...

![some image](media/managing-sending-domains/some-image.png)

...
```

_While this folder structure is encouraged for organizational purposes, any media referenced in the markdown will be imported._

### Categories

Both the Momentum articles and SparkPost support articles are organized into categories. The category is defined by the containing folder. The folder categories are translated into [WordPress taxonomies](https://wordpress.org/support/article/taxonomies/).

Categories can be nested to create nested URL structures. For example in the following folder structure, the file `my-article.md` will be deployed to `https://sparkpost.com/docs/category/subcategory/my-article`

```
support
├── category
│   └── subcategory
│       └── my-article.md
```

Categories are configured through the `index.md` in the folder. The markdown should contain at least a `name` and `description`.

```md
---
name: "Category Name Here"
description: "Description of the category here"
---
```

#### Category Types

You may need different behavior from your categories depending on what type of content you are documenting. Categories have three potential types to help cover diferent use-cases. You can define the type through the `type` frontmatter, as seen below.

```md
---
type: "custom"
---
```

##### list

The `list` category type is the default behavior. Type `list` category pages will contain a list of all articles inside the category, with a snippet of content from the description. It will be paginated and will be sorted with the most recently updated article at the top.

##### custom

Type `custom` category pages will function almost identically to a regular article page. This is useful for when you want to put many articles into a category and have a fully fleshed out description and introduction for the section. You can write regular markdown content inside of the body of `custom` category pages and it will look identical to a article page. 

**Note**: To use media on a `custom` category page, you need to link to an absolute file - media is not automatically imported for these pages.

##### rollup

Type `custom` category pages are used when you have a large set of articles that are short and, while they are worth managing on their own, are better displayed to the user as one long single page.

### Navigation

For each article page hosted on the sparkpost.com website, there is a sidebar menu. The top-level menu is configured through Wordpress. To edit this, speak to SparkPost Marketing team.

For large sets of organized documentation it is important that there is a clear navigation and hierarchy. The subnavigation is set through the `navigation.yml` file. This is used to generate the Momentum 4.x, Momentum 3.x, and Momentum Mobile navigation in the sidebar seen in the [Momentum documentation](http://sparkpost.com/momentum).

## Deployment

![diagram of deployment pipeline](pipeline.png)

### Pipeline

Deployment of support articles is handled automatically through [Travis CI](https://travis-ci.org/SparkPost/support-docs). Once code is merged down to the master branch, a build/deployment are triggered. The following occurs during this automated process:

| Step | Script |
| --- | --- |
| Navigation file (navigation.yml) is synced to WordPress | `./bin/deploy-navigation.sh` |
| <ul><li>Categories for the articles are synced with WordPress</li><li> If it is a "custom" type, the content is converted from Markdown to HTML before it is synced</li></ul> |  `./bin/deploy-categories.sh` |
| <ul><li>Articles are converted from Markdown to HTML </li><li> Articles and their images are synced with WordPress </li></ul> |  `./bin/deploy-articles.sh` |

## Development

The following instructions walk you through how to sync your local version of this repository to your local version of the sparkpost.com website. This is only needed when you are debugging the sync scripts or adding new functionality. 

**This is not a required step in contributing to the documentation**

### Installation

Run the following command to install the [Wordpress CLI](http://wp-cli.org/), [jq](https://stedolan.github.io/jq/), and NPM dependencies. Note the script is written to work on Macs only.

```bash
./bin/bootstrap.sh
```

### Local environment variables

To run the sync scripts locally you need to define the following environment variables. You can use the below values as a template:

```bash
export WP_DEVELOPMENT="/my_wp/path" # This needs to be set to the absolute path to the wordpress core directory
export WP_USER="my.account@example.com" # Defaults to the Wordpress Support account
export GITHUB_TOKEN="some_access_token" # This is set to raise the rate limiting to get the contributors
```

### Sync locally

After installing the dependencies and setting up the required environment variables, you are ready to sync your local support-docs repository to your local WordPress instance.

Run the following three commands in sequence to sync all the support articles.

The `--all` flag on the each of the deploy scripts redeploys all the of respective resource. If this is not set, then the files edits in the commit range inside of the `$TRAVIS_COMMIT_RANGE` is used. Learn more about the 
[$TRAVIS_COMMIT_RANGE](https://docs.travis-ci.com/user/environment-variables/#default-environment-variables).

```bash
./bin/deploy-navigation.sh --directory='support' --type='support_article' --tax='support_category' --all
./bin/deploy-categories.sh --directory='support' --type='support_article' --tax='support_category' --all
./bin/deploy-articles.sh --directory='support' --type='support_article' --tax='support_category' --all
```

To sync all of the Momentum articles, run the following:

```bash
./bin/deploy-navigation.sh --directory='momentum' --type='momentum_article' --tax='momentum_category' --all
./bin/deploy-categories.sh --directory='momentum' --type='momentum_article' --tax='momentum_category' --all
./bin/deploy-articles.sh --directory='momentum' --type='momentum_article' --tax='momentum_category' --all
```

### Cleaning WordPress

If you want to clean out the navigation, articles, categories, and related media, run the following command:

```bash
./bin/clear-data.sh
```