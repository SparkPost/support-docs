---
title: "Using Templates with the SparkPost WordPress Plugin"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2409547-using-templates-with-the-sparkpost-wordpress-plugin"
description: "When using stored templates with the Spark Post Word Press plugin we pass through substitution data that you can use as variables in your template to specify some dynamic settings content the main body of the email subject the subject of the email from the email address of the sender..."
---

When using stored templates with the [SparkPost WordPress plugin](https://wordpress.org/plugins/sparkpost/), we pass through substitution data that you can use as variables in your template to specify some dynamic settings:

* content - the main body of the email
* subject - the subject of the email
* from - the email address of the sender (e.g. Rick Sanchez <rick.sanchez@DimensionC-137.com>)
* reply_to - the email address to use when users reply to your email

To use these variables in your templates, you'll have to use our [Templates API](https://developers.sparkpost.com/api/#/reference/templates). Our web UI does not currently support using variables for from or reply_to. When you create or update your template, you can supply a payload that looks like this:

```json
{
  "id" : "wordpress-testing",
  "name" : "wordpress testing",
  "published" : true,
  "options": {
    "open_tracking" : true,
    "click_tracking" : true
  },
  "content": {
    "html": " {{{content}}}",
    "subject": "{{subject}}",
    "from": "{{from}}",
    "reply_to": "{{reply_to}}"
  }
}
```

Note that content is enclosed in triple curly braces - this allows HTML content to be substituted. In the WordPress admin, on the settings screen for the SparkPost plugin, remember to fill in the Template field (in this example wordpress-testing):

![](media/using-templates-sparkpost-wordpress/wordpress_templates_screenshot_original.png)