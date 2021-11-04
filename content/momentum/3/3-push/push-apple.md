---
lastUpdated: "03/26/2020"
title: "Configuring Momentum for Apple Push Notification service (APNs)"
description: "Overview of Apple Push Notifications The Apple Push Notification service AP Ns is a gateway for push notifications sent to Apple devices Apple defines push notifications in the following way Push notifications also known as remote notifications arrive from outside a device They originate on a remote server the application’s..."
---

## <a name="apns.overview"></a> Overview of Apple Push Notifications

<a name="apns.overview.start"></a> The Apple Push Notification service (APNs) is a gateway for push notifications sent to Apple devices. Apple defines push notifications in the following way:

“Push notifications—also known as remote notifications—arrive from outside a device. They originate on a remote server—the application’s provider—and are pushed to applications on devices (via the Apple Push Notification service) when there are messages to see or data to download. ”

If you have an application running on iOS or OS X, you can use Momentum to generate push notifications in the same way that it generates messages for other channels.

In order to send push notifications, on the server side you need the Apple server to send notifications and on the client side—the application running on the Apple device—you need the capability to do something when a notification is received.

Momentum is capable of sending push notifications. How this is done is shown in the following diagram:

<a name="apns.overview.figure"></a> 


![](images/apple_push.jpg)

Push notifications require an SSL certificate (step one) supplied by Apple to the application provider. Momentum is configured to reference these credentials in order to communicate with Apple. The Apple server then relays the notification to the application running on the Apple device, initiating an exchange of data between the device and the application provider.

Note that in step three the client app communicates a device token to the provider. This device token must be supplied whenever a notification is injected.

There is an APNs feedback service that maintains a record of failed-delivery attempts. APNs feedback service is not supported in this release but will be supported in a future release.

For more information about APNs see [About Local Notifications and Push Notifications](http://developer.apple.com/library/ios/#documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Introduction.html).

This document describes how to configure Momentum so that push notifications can be sent via APNs to recipients with Apple devices. The APNs-related options are documented as are the APNs-related modules. If you are already familiar with Momentum, you can proceed with configuring Momentum for APNs by going directly to [*Using APNs*](/momentum/3/3-push/apns-using) .

