# CMS

We use [Netlify CMS](https://www.netlifycms.org/) to make it easier for non-developers to contribute to our documentation.

Netlify CMS:
> A CMS for static site generators. Give non-technical users a simple way to edit and add content to any site built with a static site generator.

The CMS is deployed to [sparkpost-docs.netlify.com](https://sparkpost-docs.netlify.com/) for easy access.

## Getting started

### Installing dependencies

1. `cd support-docs/cms` to go into the cms directory
1. Run `npm install` to install the npm dependencies

### Local development

1. Run `npm run develop`
1. Open [http://localhost:1234/](http://localhost:1234/) to view the CMS.

## Configuration

The configuration for Netlify CMS lives in `cms/admin/config.yml`. The CMS index file is bundled by parcel from `cms/src/index.html` into `cms/admin/index.html`. The custom JavaScript and CMS initialization is in `cms/src/cms.js`.

### Authentication

Netlify CMS uses [Auth 2.0 providers](https://www.netlifycms.org/docs/authentication-backends/) for authentication. We use GitHub as our authentication provider with Netlify as the back-end.

### Categories

Each category in the `articles/` directory (.i.e. "faq") is defined as its own [folder collection](https://www.netlifycms.org/docs/collection-types/#folder-collections). All of the collections should have the same configuration, so if you make a change to one, be sure to make a change to the others.

To add a new category, duplicate an existing collection and change the `label`, `name`, and `label_singular` to match the new category name. Most importantly, update the `folder` to the path to the new articles: `"/articles/{{new-category-folder}}".

To remove a category, delete the corresponding collection configuration.

### Media folder

The [`media_folder`](https://www.netlifycms.org/docs/configuration-options/#media-and-public-folders) is the folder used to store all images uploaded via the CMS.

While, this deviates from our usual media file structure, but is still clear about the image location.

## Custom Previews

Because the media files are stored in both the `articles/{{category}}/media` and in the `cms/global_media` folder, the default markdown preview doesn't work correctly. To handle this situation, we have a custom preview for the categories located in `cms/src/cms.js`.

## Deployment

We use Netlify as the host for the CMS. Because the CMS lives in the `/admin/` directory, we have the `cms/_redirects` redirect the home page to the admin page.

Configuration for the GitHub authentication and deployment live in the [Netlify configuration](https://app.netlify.com/sites/sparkpost-docs/settings/deploys). 
