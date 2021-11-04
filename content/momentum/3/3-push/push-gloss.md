---
lastUpdated: "03/26/2020"
title: "Glossary"
description: "Apple Push Notification server AP Ns The Apple Push Notification service AP Ns is a gateway for push notifications sent to Apple devices Apple defines push notifications in the following way Push notifications also known as remote notifications arrive from outside a device They originate on a remote server the..."
---

<dl>

<dt><a name="push.gloss.apns"></a> Apple Push Notification server (APNs)</dt>

<dd class="glossdef">

The Apple Push Notification service (APNs) is a gateway for push notifications sent to Apple devices. Apple defines push notifications in the following way:

“Push notifications—also known as remote notifications—arrive from outside a device. They originate on a remote server—the application’s provider—and are pushed to applications on devices (via the Apple Push Notification service) when there are messages to see or data to download.”

*Note*: Apple uses the acronym `APNs` for the Apple Push Notification service. This document follows the same convention.

</dd>

<dt><a name="push.gloss.ccs"></a> Cloud Connection Server (CCS)</dt>

<dd class="glossdef">

This is an alternate method of sending Google push notifications. It is described by Google at [Google Cloud Messaging for Android](http://developer.android.com/google/gcm/index.html):

“GCM's Cloud Connection Service (CCS) lets you communicate with Android devices over a persistent XMPP connection. The primary advantages of CCS are speed, and the ability to receive upstream messages (that is, messages from a device to the cloud).”

CCS has the advantage of supporting persistent TCP connections, using the XMPP protocol, sending messages asynchronously and support for bidirectional communication. CCS is not supported in the initial release of Momentum for push notifications.

</dd>

<dt><a name="gloss.device_token"></a> Device Token</dt>

<dd class="glossdef">

This terminology is specific to APNs and is described by Apple at [Apple Push Notification Service](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html):

“The device token is analogous to a phone number; it contains information that enables APNs to locate the device on which the client application is installed. APNs also uses it to authenticate the routing of a notification.”

When sending notifications via APNs, you must provide this identifier. It is typically stored in the backend and retrieved when a notification is injected. It is set in the `X-Device-Token` header. If it is not specified as a header, the module will look for the ID in the `DLV_Dest_ID` context variable. The equivalent GCM identifier is [Registration ID](/momentum/3/3-push/push-gloss#gloss.registration_id).

</dd>

<dt><a name="push.gloss.gcm"></a> Google Cloud Messaging (GCM)</dt>

<dd class="glossdef">

Google defines Google Cloud Messaging in the following way:

“Google Cloud Messaging for Android (GCM) is a service that allows you to send data from your server to your users' Android-powered device, and also to receive messages from devices on the same connection.”

Currently, Momentum only supports GCM. See also [Cloud Connection Server](/momentum/3/3-push/push-gloss#push.gloss.ccs).

</dd>

<dt><a name="push.gloss.mcmt"></a> Multi-Channel Message Type (MCMT)</dt>

<dd class="glossdef">

A Multi-Channel Message Type (MCMT) message is a multi-part MIME message. A MCMT message has a required email attachment with the Content-Type: `message/rfc2822` and optionally other parts with content suitable for delivery over non-email channels such as SMPP and MM7\. For push notifications, MCMT messages carry the JSON payload.

See [The MCMT_Reception option](/momentum/mobile/mobile-reference/mm-7-mcmt-reception) for a description of configuring Momentum for MCMT reception.

</dd>

<dt><a name="gloss.registration_id"></a> Registration ID</dt>

<dd class="glossdef">

This terminology is specific to GCM and is described by Google at [Google Cloud Messaging for Android](http://developer.android.com/google/gcm/gcm.html):

“An ID issued by the GCM servers to the Android application that allows it to receive messages. Once the Android application has the registration ID, it sends it to the 3rd-party application server, which uses it to identify each device that has registered to receive messages for a given Android application. In other words, a registration ID is tied to a particular Android application running on a particular device.”

When sending a GCM notification you must provide this identifier. It is typically stored in the backend and retrieved when a notification is injected. It is set in the `X-Registration-ID` header. If it is not specified as a header, the module will look for the ID in the `DLV_Dest_ID` context variable.

</dd>

<dt><a name="push.gloss.send-to-sync"></a> Send-to-sync Message</dt>

<dd class="glossdef">

As described by Google at [Google Cloud Messaging for Android](http://developer.android.com/google/gcm/index.html):

“A send-to-sync (collapsible) message is often a "tickle" that tells a mobile application to sync data from the server. For example, suppose you have an email application. When a user receives new email on the server, the server pings the mobile application with a "New mail" message. This tells the application to sync to the server to pick up the new email.”

</dd>

</dl>