---
title: "Using iOS Universal Links with SparkPost"
description: "A guide to including iOS universal links in your SparkPost-delivered email"
---

## Introduction

Universal links are a mechanism in iOS 9 and later that allows you to link deeply into your iOS apps from web pages and HTML email. To use universal links, you must publish the URLs you'd like your iOS app to handle and then add support for them into the app itself. When your users receive an email containing a universal link, iOS then recognises the domain and path of the URL and triggers your app. As a result, it's important to keep the URLs in your HTML emails intact to ensure your universal links function correctly.

This article describes the various ways you can use universal links with email sent through your SparkPost account.

[Apple's Universal Links](https://developer.apple.com/library/content/documentation/General/Conceptual/AppSearch/UniversalLinks.html) documentation explains the iOS app mechanisms in detail. As such, we will not restate those details here.

## Prerequisites

- an iOS app with universal link support
- an apple-app-site-association file hosted on your own domain

#### Sidebar: SparkPost Click Tracking

In the discussion below, it might be useful to understand how the SparkPost click tracking feature works. In essence, when the feature is enabled and SparkPost encounters an anchor tag in an HTML email, it will replace the `href` attribute with a new URL pointing to it's click tracking service. When your recipient clicks that link, the click tracker receives the request, records the "click" and redirects the recipient to your original URL.

You can customize the domain SparkPost uses in your tracked links by setting up a [custom tracking domain](https://www.sparkpost.com/docs/tech-resources/enabling-multiple-custom-tracking-domains/)). This is useful from a branding and reputation standpoint and it also offers a mechanism for including universal links in your HTML email.

**Note:** When you set up a custom tracking domain on your SparkPost account, you must publish a CNAME record in DNS which points to the SparkPost click tracking service. This makes it difficult to serve other content on that domain, including your `apple-app-site-association` file. The solution is to complete the tracking domain verification procedure on your SparkPost account and then remove the CNAME as detailed in Scenario 2 below.

You can also have SparkPost include a specific string in the path part of a tracked URL by setting the `data-msys-sublink` attribute:

```html
<a href="http://my.universal-link.example.com" data-msys-sublink="open-in-app">Open in app</a>
```

This will cause the tracked URL path to start with `/f/open-in-app/` which simplifies writing your `apple-app-site-association` file.

### Scenario 1: Universal Links Without Click Tracking

Pros:
- Very simple
 
Cons:
- No click tracking on universal links

This is the simplest option: if you disable SparkPost's click tracking for the universal links in your email, they work just fine with your iOS app with no further effort. This works because SparkPost does not alter untracked links in your email.

#### Disabling Click Tracking
- If you're using the SparkPost REST API, you can use the `data-msys-clicktrack` attribute to [disable click tracking for a single link in your email](https://developers.sparkpost.com/api/substitutions-reference.html#header-per-link-disabling-of-click-tracking):

    ```html
    <a data-msys-clicktrack="0" href="http://my.universallink.example.com/path/">Open in app</a>
    ```

- You can also [disable click tracking for a whole transmission request](https://developers.sparkpost.com/api/transmissions.html#header-options-attributes) by setting the `click_tracking` option to `false`.
- [The SMTP API supports a similar flag](https://developers.sparkpost.com/api/smtp-api.html#header-open-and-click-tracking).
- You can control [click tracking for SMTP messages](https://app.sparkpost.com/account/smtp) at the account level too.

### Scenario 2: Universal Links With Click Tracking

Pros:
- Minimal development effort

Cons:
- Requires iOS app support

If you'd like to use SparkPost to track when people click the universal links in your email, you can use a custom tracking domain and have your app pass each click event to SparkPost. In this scenario, you nominate a link in your email as universal by enabling click tracking on it and setting a specific "custom link sub-path". SparkPost replaces the link with a tracked version using your tracking domain and including the named path in the tracked URL. When your recipients click on the link, the domain and path match your published universal links and iOS opens your app. Your app then makes an HTTP request to the tracked URL which lets SparkPost know your recipient has visited that universal link.

The setup steps are as follows:

1. [Configure a custom tracking domain on your SparkPost account.](https://app.sparkpost.com/account/tracking-domains)
1. After verifying your tracking domain, remove the CNAME DNS record so you can serve `apple-app-site-association` and fallback content for recipients without your iOS app installed.
1. [Use a "custom link sub-path" in your links.](https://developers.sparkpost.com/api/substitutions-reference.html#header-custom-link-sub-paths)
1. Publish the universal links for your app using both the tracking domain and link sub-path. Your apple-app-site-association file might include the following:
    ```javascript
    {
      "applinks": {
        "apps": [],
        "details": [
          {
            "appID": "<YOUR_APP_ID>",
            "paths": [
              "/f/open-in-app/*"
            ]
          }
        ]
      }
    }
    ```
1. Send your email through SparkPost with click tracking enabled, using your custom tracking domain and link sub-path:
    ```
    Your invoice is available <a data-msys-sublink="open-in-app" href="http://www.example.com/invoice/101">here</a>.
    ```
1. Update your iOS app to make an HTTP GET request to the SparkPost click tracking service when it handles the incoming click event. There are more details and sample code for this below.
1. (Optional) Have your iOS app take action based on the original URL which SparkPost returns in its "3xx redirect" HTTP response.

#### Forwarding Clicks From iOS To SparkPost

When an iOS email client recognises that your recipient has tapped on a universal link, it sends your application delegate an `NSUserActivity`. To allow SparkPost to track this universal link "click" event, you must call the SparkPost click tracking service to tell it about the activity. The click tracker will respond with a "3xx" redirect to the original URL from your email which may be useful to control app behaviour.

Important: remember that the universal link uses your tracking domain but the SparkPost click tracker lives on `spgo.io`. As a result, your app must swap out the tracking domain in your universal link with `spgo.io` before_ making the HTTP call.

Here's a sample `application:continueUserActivity:restorationHandler` method which calls the SparkPost click tracker to register a click event and also retrieves the original URL:

```objc
- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity
 restorationHandler:(void (^)(NSArray *))restorationHandler {

    // Ignore non-universal link activities
    if (![userActivity.activityType isEqualToString:NSUserActivityTypeBrowsingWeb] || userActivity.webpageURL == nil) {
        return NO;
    }

    // Replace the universal link domain with the SparkPost click tracker service
    NSURLComponents* trackedURL = [NSURLComponents componentsWithURL:userActivity.webpageURL resolvingAgainstBaseURL:TRUE];
    [trackedURL setHost:SPARKPOST_CLICK_TRACKER_HOST];

    // Create a task to call the SparkPost click tracker, expecting a 3xx redirect to your original URL.
    // On completion, the handler will receive an NSURLResponse which knows the original target URL.
    NSURLSessionDataTask* clickTask = [[NSURLSession sharedSession] dataTaskWithURL:[trackedURL URL] completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSURL* originalURL = [response URL];
            if (originalURL) {
                NSLog(@"Target URL %@", originalURL.absoluteString);
            }
        }
    }];

    // Kick off the task
    [clickTask resume];

    return YES;
}
```

With a little configuration, a single additional handler in your app but without any additional hosting requirements, you can enable and track iOS universal links through your SparkPost account just as if they were any other link.

