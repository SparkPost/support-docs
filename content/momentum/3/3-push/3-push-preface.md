---
lastUpdated: "03/26/2020"
title: "Preface"
description: "Using HTTP or HTTPS as the transport protocol Momentum can generate push notifications to mobile devices in the same way that it generates messages for other channels A Mobile Push license is required to enable all supported Momentum Mobile Push protocols Creating push notifications extends Momentum and leverages existing technologies..."
---

Using HTTP (or HTTPS) as the transport protocol, Momentum can generate push notifications to mobile devices in the same way that it generates messages for other channels.

### Note

A "Mobile Push" license is required to enable all supported Momentum Mobile Push protocols.

Creating push notifications extends Momentum and leverages existing technologies:

*   `Injection` – Push notifications use existing injection protocols.

*   `Delivery` – Delivery modules implement the specifics for each type of push notification. The new modules are configured in the same way as existing modules.

*   `Logging` – Optional loggers are available for all types of push notifications.

*   `Extensibility` – Existing hook points and new module-specific hook points are accessible from both Lua and C allowing for customized solutions, integrating push notification with Momentum's existing multi-channel capabilities.

Momentum version 3.5.4 introduces support for Apple push notifications and version 3.5.5 introduces support for Google push notifications. If you are only interested in Apple notifications go directly to [Overview of Apple Push Notifications](/momentum/3/3-push/push-apple#apns.overview.start); for Google notifications go to [Overview of Google Push Notifications](/momentum/3/3-push/push-google#gcm.overview.start).