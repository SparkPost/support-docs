---
title: "Using iOS Universal Links with SparkPost Enterprise"
description: "Note This Knowledge Base Article Is For Spark Post Enterprise Only Table of Contents Use these quick links to jump to certain sections of this article Introduction Benefits of Universal Links Summarized Workflow of Universal Links Setup and Operation As a Spark Post Enterprise Customer What Steps Do I Need..."
---

**Note**: This Knowledge Base Article Is For SparkPost Enterprise Only

## Table of Contents

Use these quick links to jump to certain sections of this article:

* [Introduction](#introduction)
* [Benefits of Universal Links](#benefits-of-universal-links)
* [Summarized Workflow of Universal Links Setup and Operation](#summarized-workflow-of-universal-links-setup-and-operation)
* [As a SparkPost Enterprise Customer, What Steps Do I Need to Take?](#as-a-sparkpost-enterprise-customer-what-steps-do-i-need-to-take)
* [Creating Universal Links in Templates with Sub-Pathing](#creating-universal-links-in-templates-with-sub-pathing)
* [Full Examples](#full-examples)
* [End User Caveats with Universal Links](#end-user-caveats-with-universal-links)

## Introduction

**Note: Universal Links only function on iOS devices which have iOS 9.0 or greater installed.** Prior versions of iOS will automatically route links to the end user's default browser. Additionally, you MUST be using HTTPS click tracking and have a signed certificate provided to SparkPost for your engagement tracking domain(s) in order for Universal Links to function, as Apple only serves up the apple-app-assocation file via HTTPS.

iOS Universal Links allow email recipients who click on a link in an email on their mobile device, to be directed to the mobile app (assuming it's installed) rather than the Safari browser in iOS.

Before Universal Links were introduced, the primary mechanism to open up an app when it was installed was by trying to redirect to an app’s Uniform Resource Identifier (URI) scheme (registered in the app’s PLIST) in Safari. This put the routing logic in Safari, but there was no way to check if the app was installed or not. This meant that developers would try to call the URI scheme 100% of the time, on the off chance that the app was installed, then fallback gracefully to the App Store when not by using a timer.

iOS 9 Universal Links were intended to fix this. Instead of opening up Safari first when a link is clicked, iOS 9 will check if a Universal Link has been registered for the domain associated with the link, then check if the corresponding app is installed. If the app is currently installed, it will be opened. If it’s not, Safari will open and the http(s) link will load.

The purpose of this article is to explain in detail how to integrate Universal Links with SparkPost Enterprise, but does not go into in-depth detail on how to complete the registration of your app with Apple, or full details on the Apple-specific portions of this feature.

## Benefits of Universal Links

Universal Links give you several key benefits that you don’t get using traditional custom URL schemes. [Apple's developer website](https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html) explains the benefits of using Universal Links in great detail. We recommend you visit that page to learn more. 

## Summarized Workflow of Universal Links Setup and Operation

**Note**: If you are not using Enterprise's engagement tracking, no configuration steps are necessary on Enterprise; you will handle your Universal Link setup as per Apple specs. However, most customers use Enterprise's engagement tracking; we encode/wrap the links and change the link host to point to the engagement tracking host first. This host is what Apple devices use to retrieve the app association file.

The following is a diagram of how the flow of Universal Links occurs, from initial setup to continual operation. Your responsibilities are in **blue** boxes, Enterprise responsibilities are in **orange**, and user interactions/iOS functionality are found in **gray**.

 ![](media/ios-universal-links/UL-workflow-final_original.png)

## As a SparkPost Enterprise Customer, What Steps Do I Need to Take?

**Note**: The following steps below assume you are already a SparkPost Enterprise customer, have a configured tracking domain, and are familiar with how links are used.

**Get familiar with Apple developer documentation related to the support of Universal Links.**

Detailed information from Apple on Universal Links functionality, preparing your iOS app to support Universal Links, and creating an apple-app-site-association file can be found [here](https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html).

When referring to the documentation above, keep in mind the steps on uploading the apple-app-site-association file to the root of your HTTPS web server will instead be replaced by the steps outlined below to submit the file to your SparkPost Enterprise TAM. Also, when the document refers to "domains", this is referencing your SparkPost Enterprise engagement tracking domain.

**Create / Prepare your iOS mobile app.**

You may already have a mobile app that supports Universal links – if that is the case, great!  You can go through the following steps to configure an apple-app-site-association file for use with your SparkPost Enterprise engagement tracking domain to learn how to use SparkPost Enterprise with this feature.

As a customer you will need to develop and/or prepare your app according to Apple instructions for handling Universal Links.  Please refer to the Apple Developer documentation link above and any other resources that may pertain to app development.

**Create an apple-app-site-association file for use with your SPE engagement tracking domain(s).**

If you have configured multiple engagement tracking domains in your SparkPost Enterprise environment, you will need an apple-app-site-association file for each unique domain. Apple-app-site-association files do not propagate across subdomains.

The `paths` key-value pair in the apple-app-site-association file is used to specify which links should be directed to your website, and which to direct to the mobile app. SparkPost Enterprise supports Universal Links by using what are known as "sub-pathed" links. The default behavior for all non-sub-pathed links will always look like the following example, after message generation has occurred:

```
http://<engagement tracking domain>/f/a/<base64 encoded redirection link>
```

SparkPost Enterprise will automatically add the `/f/a/` subdirectories to your engagement tracking domain by default for non-sub-pathed links. If a custom sub-path is included by using a custom HTML attribute detailed below, the links will appear like this:

```
http://<engagement tracking domain>/f/<customsubpath>/<base64 encoded redirection link>
```

Custom sub-paths can be set using the `data-msys-sublink` URL attribute in your HTML code. By using this attribute, you can segment your website content to push links to either your mobile app, or to the end user's default browser. Detailed info on how to properly use the  `data-msys-sublink` URL attribute to create sub-pathed links is illustrated in this article [here](https://www.sparkpost.com/docs/tech-resources/ios-universal-links/#creating-universal-links-in-templates-with-sub-pathing).

In addition, the following caveats below should be taken into account when configuring Universal Links with SparkPost Enterprise:

* **We strongly recommend that you begin all paths in your apple-app-site-association file with `/*/<customsubpath>/`**. While mentioned above that all sub-pathed links first begin with `/f/`, we encourage you to use a wildcard (`/*/`) instead of `/f/`, as changes could be made in the future to our link translation, which may break the currently set schema of starting with `/f/`. Using the wildcard will ensure that even if we make changes, such as a single character change, to making it multiple characters, your Universal Links will continue to function and no changes will be required to your app-association file. We have confirmed with Apple development that the wildcard usage above will function correctly as explained above.
* As a reminder, a path of simply `/<customsubpath>/*` **will match every link in your template that begins with that unique sub-path**, and thus will attempt to kick the user to the app each time for those links. However, many companies have web URLs which don't work properly in their apps, such as unsubscribe pages or preference centers. You will want to exclude these URLs from being routed to your app. This will require you to set up sub-paths for use in your app-association file.
* If the URL of a given link does not match any path set in your app-association file, links will be pushed to Safari or the user's default web browsing application.
* If you have multiple unique apps in your product ecosystem and wish to utilize Universal Links for multiple unique apps, your app-association file will need to specify an appID for each unique application nested under the details array. Different pathways can be specified between each app; they do not need to match.
* If you have multiple apps in your app-association file, the order of the dictionaries in the details array determines the order the system follows when looking for a match, so you can specify an app to handle particular URLs.​
* Path exclusion will be supported in iOS 9.2 and greater, which will allow certain paths, such as unsubscribe links, to be more easily excluded from being forwarded to your app. This is done with the NOT operator within your apple-app-site-association file. However, because path exclusion will not be respected in iOS devices 9.1.x and below, we do not recommend you adopt this pathing convention in the near future.
* Similar to how the system follows the order of dictionaries for each application ID, it follows the same logic for path matching. It is important to know that the system **stops evaluating when a positive or negative match is found** (negative matches occur through using the "NOT" statement in your JSON). Therefore, you should specify high priority paths before low priority ones. Note that only the path component of the URL is used for comparison; other components, such as the query string or fragment identifier, are ignored. 

**Contact TAM to upload the apple-app-site-association file.**

Contact your SparkPost TAM and provide your completed apple-app-site-association file(s) to them. SparkPost will to upload your file to the correct location and make it accessible to iOS devices.

The apple-app-site-association file needs to be signed. SparkPost is serving the file via http and https, however, unsigned apple-app-site-association files should not be served via http. Please refer to Apple documentation on how to sign your file(s) before submitting them to your SparkPost TAM.

You can verify that the association file has been uploaded and configured properly by retrieving it via `curl` or `wget` commands to the tracking domain host.

Examples that test that the apple-app-site-association file is present and configured correctly on SparkPost follow below.

* Using curl with the tracking domain post.example.com: 

```
curl -v -X GET https://post.example.com/apple-app-site-association
```

* Using wget with the tracking domain post.example.com: 

```
wget https://post.example.com/apple-app-site-association
```

**Create an email containing a Universal Link and Test**

Create a test email which contains a Universal Link that will match the pathing schema you created in your apple-app-site-association file. You will need iOS 9.0 or greater on your device, and of course, your app installed.

## Creating Universal Links in Templates with Sub-Pathing

Customers have the ability to code the URLs in their email message to specify whether that link should redirect the recipient to the mobile browser or to the mobile app on Apple (iOS 9.0 or greater) mobile devices. This allows the user to specify in the apple-app-site-association file which paths should be routed to the app vs. those that shouldn't and go to the browser. This is done by using link sub-pathing for SparkPost Enterprise.

**1) To make a URL with a custom sub-path:**

Use the attribute `data-msys-sublink`, as in the following examples:

HTML Example: `<a data-msys-sublink="Custom Subpath" href="https://www.sparkpost.com">Link Name</a>`

Link will be rendered as: `https://<engagement hostname>/f/Custom_Subpath/<encoded target url>`

**2) Default link behavior:**

If no data-msys-sublink attribute is provided, the default sub-path `/f/a/` is used.

HTML example: `<a href="http://www.sparkpost.com">Link Name</a>`

Link will be rendered as: `http://<engagement hostname>/f/a/<encoded target url>`

**Note**: The sub-link attributes you provide **do not** need leading or trailing "/" characters; these are added automatically by our system during message generation.

Spaces within data-msys-sublink attributes (only allowed in HTML templates, not in text templates) are converted to underscores after going through message generation. The attribute section of a text link (`[[<attributes]]`) may not contain any spaces. This includes spaces between attributes, within attributes, and in between double brackets.

**Note**: Click reporting available through webhook data, message events API data, or through the Enterprise UI cannot differentiate reported clicks as routing to the mobile browser versus the app!

## Full Examples

The following is a example of what an implementation of iOS Universal Links looks like with SparkPost:

1. Assume a company sends an email containing links to the following websites (target URL):
    `www.customer.com/rewards`
    `www.customer.com/rewards/travel`
    `www.customer.com/rewards/travel/hotels/greathotel`
    
1. For these links above, the company wants to send the users to their app instead of a browser. They would then assign a data-msys-sublink attribute to each of the links, like so:
    `<a data-msys-sublink=“rew” href="https://www.customer.com/rewards“>Link Name</a>`
    `<a data-msys-sublink=“rt” href="https://www.customer.com/rewards/travel“>Link Name</a>`
    `<a data-msys-sublink=“rthm” href="https://www.customer.com/rewards/travel/hotels/greathotel“>Link Name</a>`
    
1. SparkPost would then encode the links to allow for click tracking to occur, incorporating the custom subpaths set in the HTTP attribute as listed above. These are what the finalized links would look like:
    `https://<trackingserver>/f/rew/<encoded target url>`
    
    `https://<trackingserver>/f/rt/<encoded target url>`
    
    `https://<trackingserver>/f/rthm/<encoded target url>`
    
1. The customer would then need to create the corresponding path entries in their apple-app-site-association file. In this example, they want these custom subpath links to all be kicked to the app, so their apple-app-site-association path array(s) would look like this:
    `"paths" : [ "/f/rew/" ]`
    
    `"paths" : [ "/f/rt/" ]`
    
    `"paths" : [ "/f/rthm/" ]`

## End User Caveats with Universal Links

The following are important caveats to be aware of regarding the end user experience with Universal Links:

1. When a user taps a Universal Link that you handle, iOS also examines the user’s recent choices to determine whether to open your app or your website. For example, a user who has tapped a Universal Link to open your app can later choose to open your website in Safari by tapping a breadcrumb button in the status bar. After the user makes this choice, iOS 9 continues to open your website in Safari until the user chooses to open your app by tapping OPEN in the Smart App Banner on the webpage.
1. To ensure maximum efficiency with Universal Link direction, we do provide an option to turn off base 64 encoding on the redirect/target portion of link URLs. This will reduce processing time when links are clicked since base 64 decoding for the target URL will not be necessary. Applying this option is system-wide, meaning all tracked links will not have base 64 encoding on the target URL when this configuration takes effect. No additional API or SMTP modifications are required in your calls/payloads; to turn this option on, please contact your TAM and request it.

Here are some specific examples of what non-base 64 target encoded links look like:

Link in the template text or html part:

`https://google.com/purchase`

Link as encoded as a click track link with the Target URL as a query parameter:

`https://click.customer.com/f/a/1nLyONgylXZCMADaan5jUA~~/AAAAAQA~/RgRX8RCYP?target=http%3a%2f%2fgoogle.com%2fpurchase`

Basic form of a click track link:

`<scheme>://<engagement_host>/f/<path>/<hmac>/<track_info1>/<track_info2>/?target=<target>`
