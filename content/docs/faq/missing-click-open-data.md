---
lastUpdated: "02/08/2020"
title: "I'm Missing Click/Open Data"
description: "There are a few reasons why you may not be seeing open click data for your transmissions Please review the following list of conditions and configurations to debug your open click data not displaying If you're using a Template in your transmissions does the template have the Open Tracking and..."
---

There are a few reasons why you may not be seeing open/click data for your transmissions. Please review the following list of conditions and configurations to debug your open/click data not displaying:

If you're using a Template in your transmissions, does the template have the "Open Tracking" and/or "Click Tracking" features enabled? The Template setting for these properties will be overridden by the Template's settings.

If you are using a RESTful Inline Transmission (no template) for your email, have you included the following options property on the Template object?

* `options.open_tracking` set to `true`
* `options.click_tracking` set to `true`

  Note: If you have enabled the "Open Tracking" and/or "Click Tracking" features in the dashboard but you have them set to "false" in the API, the API will override the template settings and they will not work. 

Here is an example [Transmission Object](https://www.sparkpost.com/api#/reference/transmissions) that has these options set properly:
```
{
  "options": {
    "open_tracking": true,
    "click_tracking": true
}
```
If you believe you have your transmission configured properly, are you making sure to "download images" in your email client? If you do not do this, then the "opens/views" data will NOT be populated. SparkPost needs the recipients of your transmissions to download these images in order to report any type of view/open information through the metrics.

If you are using the Webhooks feature of SparkPost to capture opens, clicks, or other Metric data please make sure that you have configured the timezone correctly for your reports to be returned with accurate data.

If you are using the SparkPost Application (UI) to view your open/click data, make sure your browser has the correct timezone set since all times in the UI are based on the browser's timezone setting.
