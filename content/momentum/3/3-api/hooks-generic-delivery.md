---
lastUpdated: "03/26/2020"
title: "Hooks in the generic_delivery and httpclnt Scope"
description: "These hook points are supported as of Momentum version 3 5 5 These hook points are used with mobile push notifications and with MMS The request and response hook points can replace the Google Cloud Messaging GCM hook points of the same name For more information about these hook points..."
---


| Name                                                                                                    | Description                                            |
|---------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [msg_dispose](/momentum/3/3-api/hooks-generic-delivery-msg-dispose) | Called immediately prior to disposing of an ec_message |
| [request_eval](/momentum/3/3-api/hooks-http-request-eval)           | Called prior to sending a generic HTTP request         |
| [response_eval](/momentum/3/3-api/hooks-http-response-eval)         | The response phase in generic HTTP delivery            |

These hook points are supported as of Momentum version 3.5.5.

These hook points are used with mobile push notifications and with MMS. The request and response hook points can replace the Google Cloud Messaging (GCM) hook points of the same name. For more information about these hook points see [*Hooks in the gcm Scope*](/momentum/3/3-api/hooks-gcm) and [Momentum for Mobile Push Notifications](/momentum/3/3-push).