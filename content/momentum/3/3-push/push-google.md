---
lastUpdated: "03/26/2020"
title: "Configuring Momentum for Google Cloud Messages (GCM)"
description: "Overview of Google Push Notifications If you have an application running on an Android device you can use Momentum to generate push notifications in the same way that it generates messages for other channels Google push notifications originate with Google Cloud Messaging GCM and are received by applications running on..."
---

## <a name="gcm.overview"></a> Overview of Google Push Notifications

<a name="gcm.overview.start"></a> If you have an application running on an Android device, you can use Momentum to generate push notifications in the same way that it generates messages for other channels.

Google push notifications originate with Google Cloud Messaging (GCM) and are received by applications running on Android devices. Application providers must register with Google in order to send push notifications to their applications and users of applications running on Android devices must agree to accept these notifications. The application must also be programmed to do something whenever it receives a notification.

Momentum can act on behalf of an application provider and send Google push notifications. The following diagram gives an overview of the entire process involved in sending Google Push notifications:

<a name="gcm.overview.figure"></a> 


![](images/google_push.jpg)

Note that in step three the client app communicates a registration ID to the provider. This registration ID must be supplied whenever a notification is injected.

This document describes how to configure Momentum so that push notifications can be sent via Google to recipients running applications on an Android device. The GCM-related options are documented as are the GCM-related modules. If you are already familiar with Momentum, you can proceed with configuring Momentum for GCM by going directly to [*Using GCM*](/momentum/3/3-push/push-gcm-using) .

