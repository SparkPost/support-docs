---
title: "Using Mobile Universal and App Links with SparkPost"
description: "A guide to including iOS universal links and Android App Links in your SparkPost-delivered email"
---

## Introduction

Email is often read and engaged with on mobile devices. Both iOS (9 and later) and Android (6.0 and later) provide a way for links in your content to take your users directly into an app that you have created, providing your users with a richer interactive experience.

This article describes how to configure your content and mobile apps to support deep links.

> iOS uses the term Universal Link. The Android term is "App link". We use the term "deep link" in this article to cover the aspects common to both.

When correctly configured, a deep link takes your user directly from the email to your app, without opening the mobile browser. If the app is not installed, the mobile browser will open and display the specified page instead.

## Setup requirements

- Known URL path(s) that you want to deep link to your application.
    - When using SparkPost Click Tracking, you  choose the Tracking Domain and the custom link sub-path, explained [here](#tracking).

- Deep linking spec files hosted on your website or CDN, in the correct location for the devices to find. The spec file declares the identity of your app, and which URL paths lead to your app - described [here](#specfiles).

- A mobile app that is registered to handle incoming deep link requests - see [example code](#app-examples).

The deep link will operate only when all of these match correctly. When you're ready, check your setup against the [summary of setup steps](#summary).

##  <a name="app"></a> Writing your mobile app
The following developer documentation explains the deep linking mechanisms in detail.
- [Apple's Universal Links](https://developer.apple.com/library/content/documentation/General/Conceptual/AppSearch/UniversalLinks.html)

- [Android App Links](https://developer.android.com/training/app-links/index.html)

## <a name="spec-file"></a>Deep linking spec files

The spec files must be published on your domain(s) and accessible via HTTPS. They may be hosted on a Content Delivery Network (CDN) or a regular web server - examples [here]().

- For iOS devices, the file is named `apple-app-site-association`
- For Android devices, the file is named `assetlinks.json`


These files should be placed on your website in the directory `/.well-known`.

@@ check if tracking domain specifics can be used

### iOS: example `apple-app-site-association`

```javascript
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "ABCD1234.com.mycompany.testlinks",
        "paths": [
          "/f/open-in-app/*"
        ]
      }
    ]
  }
}

```

The `appID` is available from your XCode development environment, or from your [Apple Developer Account](https://developer.apple.com/), and follows a specific format:
- A hex prefix (e.g. `ABCD1234`)
- A "team ID" or "bundle ID" that identifies the developer of the app (e.g. `com.mycompany`)
- The app name (e.g. `testlinks`).

Your app needs access to the [Apple "associated domains" entitlement](https://developer.apple.com/documentation/safariservices/supporting_associated_domains). You need a paid Apple Developer account for this. Set up the "associated domains" to match your paths.

![](media/deep-links-self-serve/deep-links-apple-xcode-assoc-domains.png)


Configure the `paths` section to match the links in your email HTML content, depending on your chosen SparkPost click tracking setup (explained [here](#tracking)).

### Android: example `assetlinks.json`

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


---
## <a name="tracking"></a> Deep links and click tracking

Setting up a [custom tracking domain](https://www.sparkpost.com/docs/tech-resources/enabling-multiple-custom-tracking-domains/) is useful for branding and email reputation. It is required for click-tracking of deep links in your HTML email.

It's best to choose a subdomain (e.g. `track.example.com`), so that subdomain can be redirected while your website uses the main top-level domain. Each tracking domain can serve regular email tracked links and deep links. Your content can use a mixture of both kinds of link inside the same email.

### HTTPS secure links

It is good practice to use secure (HTTPS) tracking domains, and it's essential if your but website has an [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) policy. We have articles describing the setup of this for:

-  [Various CDNs](https://www.sparkpost.com/docs/tech-resources/enabling-https-engagement-tracking-on-sparkpost/)
- Your own [web server reverse proxy such as NGINX](https://www.sparkpost.com/docs/tech-resources/using-proxy-https-tracking-domain/)

In both cases, your CDN (or proxy) redirects the specific tracking subdomain(s) to the SparkPost click tracking service, while your web content is served in the usual way.

### How click tracking works

It might be useful to understand how the SparkPost click tracking feature works with HTML links. Other email-service-provider click tracking services work in a similar way.

> In essence, when SparkPost encounters an anchor tag in an HTML email, it will replace the `href` attribute with a new URL pointing to the SparkPost click tracking service. When your recipient clicks that link, the SparkPost service receives the request (via CDN for HTTPS links), records the click, and redirects the recipient to your original URL.

![](media/deep-links-self-serve/deep-links-click-tracking-simple.png)
*Normal click tracking (without deep links)*

Deep links supersede this flow; after checking the spec file, the  device passes the request directly to your app instead. This means your app will receive the tracked link via an API call and can show the user an appropriate part of your app.

SparkPost won't receive the request and won't register the click in your analytics, unless your app code makes it happen.

A workaround is to disable click-tracking for deep links. This may be appropriate if you already have analytics for measuring in-app activity.

The preferred solution is to set up Sparkpost click tracking and include code in your app to follow the link. We'll review each of these.

### Workaround: Disabling Tracking of deep links

If you disable SparkPost's click tracking for the mobile deep links in your email, they work just fine with your mobile app with no further effort. This works because SparkPost does not alter untracked links in your email.

The "path" in your Apple spec file needs to match your iOS app "associated domains".

If you're using the SparkPost REST API, you can use the `data-msys-clicktrack` attribute to [disable click tracking for a single link in your email](https://developers.sparkpost.com/api/template-language/#header-per-link-disabling-of-click-tracking):

```html
<a data-msys-clicktrack="0" href="http://my.universallink.example.com/path/">Open in app</a>
```

This is appropriate where your content has a mix of deep links and links leading to an ordinary website destination.

Alternatively, you can [disable click tracking for a whole transmission request](https://developers.sparkpost.com/api/transmissions.html#header-options-attributes) by setting the `click_tracking` option to `false`. The [SMTP API](https://developers.sparkpost.com/api/smtp-api.html#header-open-and-click-tracking)  supports a similar flag.
You can control [click tracking for SMTP messages](https://app.sparkpost.com/account/smtp) at the account level too.

### Preferred solution: Using SparkPost click-tracking on deep links

![](media/deep-links-self-serve/deep-links-app-flow.png)
*Deep link flow (preferred solution - app triggers the click tracking)*

Set up your spec files to match your [custom tracking domain](https://www.sparkpost.com/docs/tech-resources/enabling-multiple-custom-tracking-domains/).

The device operating system "wakes up" your app with an API call, passing in  the URL. Your app issues an HTTP(S) GET to the URL, which registers the click. Your app receives the original URL in the response "Location" header; there's no need to follow the redirect and fetch the entire web-page.

#### Custom Link Sub-Paths

Your spec file states which *link paths* should be treated as deep links. Any other paths on that domain will be opened via the device browser in the usual way. This enables you to use both regular tracked links and deep links with that tracking domain. Deep links are distinguished from regular tracked links as follows.

You can have SparkPost include a specific string *in the path part* of a tracked URL by setting the `data-msys-sublink` attribute:, for example:

```html
<a href="http://my.universal-link.example.com" data-msys-sublink="open-in-app">Open in app</a>
```

This will cause the tracked link path to start with `/f/open-in-app/` which simplifies writing your `apple-app-site-association` file.

SparkPost supports the use of custom sub-paths on an individual link basis.  This allows you to choose, when setting up your spec file, which app opens depending on the custom subpath.

If a custom sub-path is not used, the spec files can be configured to open on a wildcard path.

Examples for iOS and Android are shown [here](#app-examples).

---
## <a name="summary"></a> Summary of setup steps

1. Configure your CDN or reverse proxy to host your custom tracking domain.
1. Configure and verify a custom tracking domain on your SparkPost account.
1. Choose the link sub-path(s) to be used for deep linking.
1. Ensure the spec files are set up for your tracking domain(s) and link sub-path(s).
1. Test that your spec files are accessible via HTTPS.
1. Send your email through SparkPost with click tracking enabled, using your custom tracking domain and link sub-path:
    ```
    Your invoice is available <a data-msys-sublink="open-in-app" href="https://www.example.com/invoice/101">here</a>.
    ```
1. Check the fallback cases:
    - the link opens correctly via desktop browser.
    - on a mobile device without your app installed, the link opens via browser.
1. Check the link launches your app on mobile devices.

    *To enable SparkPost to track deep links:*
1.  Have your mobile app code make an HTTP GET request to the SparkPost click tracking service when it handles the incoming click event. Details and sample code for this [below](#app-examples).
1. Have your app take action based on the original URL which SparkPost returns in its "3xx redirect" HTTP response.


---
## <a name="app-examples"></a> Example application code

## iOS - Swift - forwarding clicks to SparkPost

In your app `AppDelegate.swift`, in class `AppDelegate`, add a handler for an `NSUserActivity`:

```swift
func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
    print("Continue User Activity called: ") // debug
    if userActivity.activityType == NSUserActivityTypeBrowsingWeb,
        let url = userActivity.webpageURL {

        // Follow the link to trigger click tracking

        let task = URLSession.shared.dataTask(with: url, completionHandler: { (data, response, error) in
            guard let originalURL = response?.url else {
                print("Unexpected URL \(url.absoluteString)")
                return
            }
            print(originalURL)
        })
        task.resume()
        }
    }
    return true
}
```

This code calls the SparkPost click tracking service, which responds with a "3xx" redirect to the original URL from your email, which can be used by your app.

This simple code gets the Location: header and also follows the redirect to fetch the web-page, which consumes device bandwidth. It's more efficient to stop after the "302" response is received; this is shown in a complete app example [here]().

#### iOS User Agent
In SparkPost event reporting, the attribute "user_agent" carries information on app name and OS version, for example `"testlinks/1 CFNetwork/1197 Darwin/20.0.0"`. This enables you to use SparkPost analytics to find out which links are being opened via your app.

## Forwarding Clicks From Android To SparkPost

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
Java example (@@note: update for Kotlin)

---
##  <a name="cdn"></a> Hosting the spec files

@@Examples to follow.

---
## Further reading

1. [Branch.io](https://blog.branch.io/how-to-setup-universal-links-to-deep-link-on-apple-ios/) article on setting up iOS Universal Links
1. [Apple](https://developer.apple.com/documentation/xcode/allowing_apps_and_websites_to_link_to_your_content/supporting_universal_links_in_your_app) article on Universal Links including info on MacOS and WatchOS as well as iOS
1. [Tips](https://shinesolutions.com/2017/06/15/universal-linking-a-few-things-to-be-prepared-for/) on iOS app debugging with Universal Links and the XCode device simulator


