---
title: "Using Mobile Universal and App Links with SparkPost"
description: "A guide to including iOS universal links and Android App Links in your SparkPost-delivered email"
---

## Introduction

Both Universal and App links are a mechanism in iOS (9 and later) and Android (6.0 and later) that allows you to link deeply into your apps from web pages and HTML email. ***Note: Deep Link, Unversal Link, and App Link terms will be used interchangeably.*** To use deep linking, you must publish the URLs you'd like your app to handle and then add support for them into the app itself. When your users receive an email containing a deep link, the mobile device then recognizes the domain and path of the URL and triggers your app. As a result, it's important to keep the URLs in your HTML emails intact to ensure your deep links function correctly.

This article describes the various ways you can use deep links with email sent through your SparkPost account.

The following developer documentation explains the deep linking mechanisims in detail.
- [Apple's Universal Links](https://developer.apple.com/library/content/documentation/General/Conceptual/AppSearch/UniversalLinks.html) 

- [Android App Links](https://developer.android.com/training/app-links/index.html)



## Prerequisites

- a mobile app with deep linking support
- a deep linking spec file(`apple-app-site-association` or `assetlinks.json`) hosted on a Content Delivery Network (CDN) or equivalent

#### Sidebar: SparkPost Click Tracking

In the discussion below, it might be useful to understand how the SparkPost click tracking feature works. In essence, when the feature is enabled and SparkPost encounters an anchor tag in an HTML email, it will replace the `href` attribute with a new URL pointing to it's click tracking service. When your recipient clicks that link, the click tracker receives the request, records the "click" and redirects the recipient to your original URL.

You can customize the domain SparkPost uses in your tracked links by setting up a [custom tracking domain](https://www.sparkpost.com/docs/tech-resources/enabling-multiple-custom-tracking-domains/)). This is useful from a branding and reputation standpoint and it also offers a mechanism for including universal links in your HTML email.

**Note:** When you set up a custom tracking domain on your SparkPost account, you must verify the tracking domain either by publishing a CNAME record in DNS which points to the SparkPost click tracking service, or redirect the tracking domain to the SparkPost click tracking service. This can make it difficult to serve other content on that domain, including your deep linking spec file. The solution is to use a CDN or equivalent that can host your deep linking spec file while redirecting the custom tracking domain to the SparkPost click tracking service.

You can also have SparkPost include a specific string in the path part of a tracked URL by setting the `data-msys-sublink` attribute:

```html
<a href="http://my.universal-link.example.com" data-msys-sublink="open-in-app">Open in app</a>
```

This will cause the tracked URL path to start with `/f/open-in-app/` which simplifies writing your `apple-app-site-association` file.

### Scenario 1: Universal Links Without Click Tracking

Pros:
- Very simple
 
Cons:
- No click tracking on deep links

This is the simplest option: if you disable SparkPost's click tracking for the mobile deep links in your email, they work just fine with your mobile app with no further effort. This works because SparkPost does not alter untracked links in your email.

#### Disabling Click Tracking
- If you're using the SparkPost REST API, you can use the `data-msys-clicktrack` attribute to [disable click tracking for a single link in your email](https://developers.sparkpost.com/api/template-language/#header-per-link-disabling-of-click-tracking):

    ```html
    <a data-msys-clicktrack="0" href="http://my.universallink.example.com/path/">Open in app</a>
    ```

- You can also [disable click tracking for a whole transmission request](https://developers.sparkpost.com/api/transmissions.html#header-options-attributes) by setting the `click_tracking` option to `false`.
- [The SMTP API supports a similar flag](https://developers.sparkpost.com/api/smtp-api.html#header-open-and-click-tracking).
- You can control [click tracking for SMTP messages](https://app.sparkpost.com/account/smtp) at the account level too.

### Scenario 2: Deep Links With Click Tracking

Pros:
- Minimal development effort
- Provides click tracking on deep links

Cons:
- Requires mobile app support
- Requires use of a CDN
- Configuration of a CDN

If you'd like to use SparkPost to track when people click the universal links in your email, you can use a custom tracking domain and have your app pass each click event to SparkPost. Depending on the configuration of your `apple-app-site-assocation` or `assetlinks.json` file, different configurations can be used.  SparkPost supports the use of custom sub-paths on an individual link basis.  This can allow customers to configure what app opens depending on the custom subpath.  If a custom subpath is not used, the deep link files must be configured to open on a wildcard path.  When using custom sub-paths, SparkPost replaces the link with a tracked version using your tracking domain and includes the named path in the tracked URL. When your recipients click on any link from an Android or Apple device, the device requests a configured deep link file in accordance with their documentation. Your app should then make an HTTP request to the tracked URL which lets SparkPost know your recipient has visited that universal link.

The setup steps are as follows:

1. Configure a CDN to host your custom tracking domain.  One example can be found [here](https://www.sparkpost.com/docs/tech-resources/enabling-https-engagement-tracking-on-sparkpost/).
**Note:** The CDN needs to support file hosting such as AWS CloudFront.
1. [Configure a custom tracking domain on your SparkPost account.](https://app.sparkpost.com/account/tracking-domains)
1. If you wish to customize the path that is used for deep linking, you can [use a "custom link sub-path" in your links.](https://developers.sparkpost.com/api/template-language/#header-custom-link-sub-paths).  If not, you will need to ensure that the `paths` configuration has the necessary wildcard matches.
1. Publish the deep linking spec file for your app using both the tracking domain and link sub-path.  This should be hosted on your CDN under  **\<your-tracking-domain>\\.well-known\\**.
    
    Example apple-app-site-association file:
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
    Example assetlinks.json file:
    ```javascript
    [{
        "relation": ["delegate_permission/common.handle_all_urls"],
        "target": {
            "namespace": "app_namespace",
            "package_name": "com.example.deeplinking",
            "sha256_cert_fingerprints":
            [<Your_APP_FINGERPRINT>]
        }
    }]
    ```
1. Send your email through SparkPost with click tracking enabled, using your custom tracking domain and link sub-path:
    ```
    Your invoice is available <a data-msys-sublink="open-in-app" href="http://www.example.com/invoice/101">here</a>.
    ```
1. Update your mobile app to make an HTTP GET request to the SparkPost click tracking service when it handles the incoming click event. There are more details and sample code for this below.
1. (Optional) Have your app take action based on the original URL which SparkPost returns in its "3xx redirect" HTTP response.

#### Forwarding Clicks From iOS To SparkPost

When an iOS email client recognizes that your recipient has tapped on a universal link, it sends your application delegate an `NSUserActivity`. To allow SparkPost to track this universal link "click" event, you must call the SparkPost click tracking service to tell it about the activity. The click tracker will respond with a "3xx" redirect to the original URL from your email which may be useful to control app behaviour.

Here's a sample `application:continueUserActivity:restorationHandler` method which calls the SparkPost click tracker to register a click event and also retrieves the original URL:

```objc
- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity
 restorationHandler:(void (^)(NSArray *))restorationHandler {

    // Ignore non-universal link activities
    if (![userActivity.activityType isEqualToString:NSUserActivityTypeBrowsingWeb] || userActivity.webpageURL == nil) {
        return NO;
    }

    // Create a task to call the SparkPost click tracker, expecting a 3xx redirect to your original URL.
    // On completion, the handler will receive an NSURLResponse which knows the original target URL.
    NSURLSessionDataTask* clickTask = [[NSURLSession sharedSession] dataTaskWithURL:[componentsWithURL:userActivity.webpageURL URL] completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
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

#### Forwarding Clicks From Android To SparkPost

When an Android email client recognizes that an app link has been clicked based on your apps' `AndroidManifest.xml`, it sends an `intent` which triggers the registered `Activity` in your app. You can then make an HTTP request to the link to trigger a "click" event in Sparkpost and retrieve the original tracked URL from the message.

Here is a sample `Activity` with the corresponding `AsyncTask` that will perform an HTTP GET to the SparkPost click tracking service after an Android App Link has been clicked:
```java
public class LinkDestinationActivity extends AppCompatActivity{

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.link_destination_activity);

        //Grab the Tracking Link from the intent
        Intent intent = getIntent();
        Uri linkUri = intent.getData();

        //Pass the tracking link into the AsyncTask for network communication
        RequestTask task = new RequestTask();
        task.executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR, linkUri.toString());
    }

    /**
     * Android requires network communication off the main UI thread
     */
    protected class RequestTask extends AsyncTask<String, Void, Void> {

        @Override
        protected Void doInBackground(String... strings) {
            String uri = strings[0];
            //Activate Click Tracking
            try {
                URL url = new URL(uri);
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();

                InputStream in = new BufferedInputStream(connection.getInputStream());

                int numRead = 0;
                byte [] buffer = new byte[1024];
                StringBuilder builder = new StringBuilder();

                while ((numRead = in.read(buffer)) > 0) {
                    String newString = new String(buffer, 0, numRead);
                    builder.append(newString);
                }
                //Simply print out the response
                System.out.println(builder.toString());
                connection.disconnect();
            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return null;
        }
    }
}
```