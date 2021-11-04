---
lastUpdated: "03/26/2020"
title: "Hooks in the gcm Scope"
description: "The Google Cloud Messaging GCM service is supported as of Momentum version 3 5 5 Hook points in support of this service are described here These hook points are also supported from Lua Using them is described at GCM and Lua Instead of using the GCM specific hook points you..."
---


| Name                                                                                           | Description                                   |
|------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [response_eval](/momentum/3/3-api/hooks-gcm-response-eval) | Process feedback from Google Cloud Messaging  |
| [request_eval](/momentum/3/3-api/hooks-gcm-request-eval)   | Called prior to sending to a GCM notification |

The Google Cloud Messaging (GCM) service is supported as of Momentum version 3.5.5\. Hook points in support of this service are described here. These hook points are also supported from Lua; Using them is described at [and Lua](/momentum/3/3-push/push-gcm-lua).

Instead of using the GCM-specific hook points, you can use the hook points described at [*Hooks in the generic_delivery and httpclnt Scope*](/momentum/3/3-api/hooks-generic-delivery) .

For more information about GCM see [Momentum for Mobile Push Notifications](/momentum/3/3-push).