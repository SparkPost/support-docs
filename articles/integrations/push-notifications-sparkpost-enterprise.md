---
title: "Using Push Notifications in SparkPost Enterprise"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2477781-using-push-notifications-in-sparkpost-enterprise"
description: "Note This Knowledge Base Article Is For Spark Post Enterprise Only Using Push Notifications in Spark Post Enterprise Spark Post Enterprise customers have the option of sending push notifications through the transmissions API by including optional channel strings nested beneath the recipients array This article will explain in brief overview..."
---

**Note:** This Knowledge Base Article Is For SparkPost Enterprise Only 

### Using Push Notifications in SparkPost Enterprise 

SparkPost Enterprise customers have the option of sending push notifications through the transmissions API by including optional "channel" strings nested beneath the recipients array. This article will explain in brief overview the attributes that must be added to a transmission call, illustrated by a few examples of sample code.

## Push Documentation for APNS/GCM

Prior to sending any push notification traffic, you should be familiar with payload definitions/rules for both push notification platforms. There are many optional fields available for use through both push platforms that can improve the quality of your push notifications overall. Here are links to their documentation for your reference:

* [APNs](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/TheNotificationPayload.html) (Apple Push Notification service)
* [GCM](https://developers.google.com/cloud-messaging/http-server-ref#notification-payload-support) (Google Cloud Messaging service)

## Transmissions API and Push Notification Usage

The minimum requirements for email are untouched prior to push notifications being introduced, and no changes will be required to your injecting application(s). All fields dealing with push notifications are optional and are ignored if the "push" field in the inline template's "content" object is undefined.

In order to make use of push notifications through the transmission API, you must use either the "apns" or "gcm" JSON object nested in the "content" object in your payload. If the content.push object is defined, fields related to email are instead made optional. This includes all the fields under the inline content attributes in our API documentation listed [here](https://developers.sparkpost.com/api/transmissions#header-inline-content-attributes). **Push notifications must use a valid ip_pool/binding group configured in your environment, otherwise, push notifications will be blackholed and not be sent.**

A recipient's address attribute can now be a JSON array to allow for easier multi-channel support. Each entry in the array should be a string or JSON object. These entries will conform to the format specified in [address attributes](https://developers.sparkpost.com/api/recipient-lists#header-address-attributes). Currently, only the first entry of the array will be used, and the remaining entries will be ignored. Channels other than email can only be specified within this array.

**Note:** All payloads are delivered *as is*    with one exception - the "to" field in a gcm payload will be replaced with info provided in the recipient list.

**Note: Any platform-specific features need to be added in their own part of the push object.**

The [simple example below](#simple-push-notification-example) shows "color" was given in the GCM push object. Once this push information was received by the end user's mobile device, any phone notification light with the appropriate permissions set would flash SparkPost orange. Our use of "badge" in the [simple example](#simple-push-notification-example) APN block will make the app icon on the home screen of the iOS device show one notification.

**Note:** Substitution data is **not** supported for push content. When all recipients are email channels, do **not** include the push object, as this will break email substitution. 

**Note:** Stored templates are not supported for push notifications.

## What Do I Need to Provide my TAM to Use Push Notifications in Enterprise?

For APNs, you must provide a TLS certificate for each unique app_id you wish to send push notifications to.

For GCM, you must provide an authentication token ID for each unique app_id you wish to send push notifications to.

Provide these to your TAM, who can then complete the setup process for you.

## Best Practices for Push Notification Reporting

Since all push notifications are sent out of the same binding group/IP pool, we recommend one of the following methods to segment your push notification reporting by campaign and device.

1. Use a campaign ID that is unique for each application ID and device. For example, if you had an application that supported both APNs and GCM, you could name your campaigns "marketing_apns" and "marketing_gcm". These values will be carried through on all message events.

1. Use subaccounts. You will need to send transmissions from the master account and [send on behalf of the subaccount](https://support.sparkpost.com/customer/portal/articles/2360320#Master Account: Operating on Behalf of a Subaccount). The subaccount_id field will be included in all message event data, allowing you to segment your reporting based upon this field.

## Example Transmissions API Code for Push Notifications

### Simple Push Notification Example:

```json
{
  "recipients": [
    {
      "multichannel_addresses": [
        {
          "channel": "apns",
          "token": "<DEVICE_TOKEN>",
          "app_id": "<Application_identifier>"
        }
      ]
    },
    {
      "multichannel_addresses": [
        {
          "channel": "gcm",
          "token": "<DEVICE_TOKEN>",
          "app_id": "<Application_identifier>"
        }
      ]
    }
  ],
  "content": {
    "push": {
      "apns": {
        "aps": {
          "alert": {
            "title": "You have iOS deals",
            "body": "Alert! New sale!",
            "badge": 1
          }
        }
      },
      "gcm": {
        "notification": {
          "title": "You have Android deals",
          "body": "Open your Android app to check out these awesome new deals",
          "color": "#fa6423",
          "icon": "myicon"
        }
      }
    }
  }
}
```

The iOS (aps) device will receive a push notification with payload:

```json
{
  "aps": {
    "alert": {
      "title": "You have iOS deals",
      "body": "Alert! New sale!"
    },
    "badge": 1
  }
}
```

The Android (gcm) device will receive a push notification with payload:

```json
{
  "notification": {
    "title": "You have Android deals",
    "body": "Open your Android app to check out these awesome new deals",
    "color": "#fa6423",
    "icon": "myicon"
  }
}
```

### Complex Push Notification Example

```json
{
  "recipients": [
    {
      "multichannel_addresses": [
        {
          "channel": "apns",
          "token": "<DEVICE_TOKEN>",
          "app_id": "<Application_identifier>"
        }
      ]
    },
    {
      "multichannel_addresses": [
        {
          "channel": "gcm",
          "token": "<DEVICE_TOKEN>",
          "app_id": "<Application_identifier>",
          "email": "wilma@flintstone.com"
        },
        {
          "email": "wilmasOtherEmail@flinstone.com",
          "name": "Wilma"
        }
      ]
    },
    {
      "multichannel_addresses": [
        {
          "token": "<DEVICE_TOKEN>",
          "app_id": "<Application_identifier>",
          "email": "fred@flintstone.com"
        }
      ]
    },
    {
      "multichannel_addresses": [
        {
          "email": "wilma@flintstone.com",
          "channel": "apns"
        }
      ]
    }
  ],
  "content": {
    "push": {
      "apns": {
        "aps": {
          "alert": {
            "title": "You have iOS deals"
          },
          "badge": 1
        }
      },
      "gcm": {
        "notification": {
          "title": "You have Android deals",
          "body": "Open your Android app to check out these awesome new deals",
          "color": "#fa6423",
          "icon": "myicon"
        }
      }
    },
    "html": "This is a plain email notifying you about deals",
    "from": "company@example.com"
  }
}
```

In the example above, here is what would be received by each recipient:

Recipient 1: A push notification to their APNs device.

Recipient 2: A push notification to their GCM device. Because "channel" was defined as "gcm", the "email" field is ignored and no email is sent. The second entry is ignored as well. See the [recipient lists documentation](https://developers.sparkpost.com/api/recipient-lists) for more info on "address" as a JSON array.

Recipient 3: An email is sent to "fred@flinstone.com". No push notification is sent to his GCM device because "channel" was not specified, and thus defaults to email.

Recipient 4: Nothing. This is an error case. "Channel" is set to "apns" but the required fields "token" and "app_id" are not defined as per APNs specs.

## Sample Message Event/Webhook Entries for Push Notifcations 

Push notifications generate message events that can be pulled via the Message Events API or pushed via our webhooks. Almost all push events will be one of four types - **reception (injection), delivery, inband, and tempfail.** The "inband" event type is considered a permanent failure and will not be retried, whereas tempfail messages *will* be retried.

***Note:** In the context of push notifications, a "tempfail" event likely means SparkPost failed to send the push notification out. All responses from APNS are treated as a inband (permanent) failure, but the failure codes of "GCM_UNAVAILABLE (1)" or "GCM_INTERNAL_SERVER_ERROR (9)" from GCM is treated as a tempfail event.

### Sample events

#### Reception

```json
{
  "msys": {
    "message_event": {
      "transmission_id": "48224394129393814",
      "binding": "alert191226",
      "rcpt_to": "app.user@pushprod.yourapp.kom",
      "binding_group": "alert",
      "template_version": "0",
      "conn_name": "00/00-00000-00000000",
      "timestamp": "1454025644",
      "routing_domain": "pushprod.yourapp.kom",
      "node_name": "plat1.cust.us-west-2.aws.mc.messagesystems.com",
      "template_id": "template_48224394129393814",
      "campaign_id": "ApplicationViewedNotification-iOS",
      "message_id": "0002acabaa56ff1d0437",
      "rcpt_meta": {
        "deviceToken": "c4d5cafdf48df5f333e3e1e5a79435dd6dc6a023bf1a16ce2a939820b5ff0565"
      },
      "pathway": "default",
      "rcpt_tags": [],
      "pathway_group": "default",
      "msg_batchname": "30/73-07679-CABAAA65",
      "customer_id": "1",
      "msg_spoolname": "40/73-07679-CABAAA65",
      "recv_method": "rest",
      "event_id": "48224394133268270",
      "msg_from": "avn_return_ios@push.youdomain.com",
      "msg_size": "2395",
      "type": "reception",
      "conn_stage": "22"
    }
  }
}
```

#### Delivery

```json
{
  "msys": {
    "message_event": {
      "pathway": "default",
      "event_id": "48224394133268327",
      "message_id": "0002acabaa56ff1d0437",
      "template_version": "0",
      "binding_group": "alert",
      "type": "delivery",
      "delv_method": "apn",
      "binding": "alert191226",
      "device_token": "ef85652535f7d1bc3864dd83663291540e99bcf64902116d8f8",
      "routing_domain": "apnpushprod.yourpushdomain.enterprise",
      "recv_method": "rest",
      "timestamp": "1454025655",
      "msg_spoolname": "40/73-07679-CABAAA65",
      "transmission_id": "48224394129393814",
      "num_retries": "0",
      "conn_name": "00/00-00000-00000000",
      "msg_batchname": "30/73-07679-CABAAA65",
      "customer_id": "1",
      "template_id": "template_48224394129393814",
      "queue_time": "10418",
      "rcpt_tags": [],
      "campaign_id": "ApplicationViewedNotification-iOS",
      "node_name": "plat1.cust.us-west-2.aws.mc.messagesystems.com"
    }
  }
}
```

#### Tempfail

```json
{
  "msys": {
    "message_event": {
      "conn_name": "00/00-00000-00000000",
      "timestamp": "1458648939",
      "type": "tempfail",
      "campaign_id": "gcm",
      "msg_size": "3568",
      "binding": "alert2233",
      "transmission_id": "156350710419701562",
      "rcpt_tags": [],
      "friendly_from": "bounces-563583478277382665@customer.com",
      "message_id": "0008d733f1564362cef6",
      "num_retries": "0",
      "rcpt_meta": {
        "gcm_cust_link": "/flinstones/wilma",
        "binding": "alert",
        "gcm_cust_badge": "116223432423432",
        "gcm_message_key_name": "payload",
        "gcm_cust_push_id": "RasdfweriRE832",
        "deviceToken": "asdlfkjasfSDF823kd238DSad3833kjd82"
      },
      "template_version": "0",
      "reason": "451 4.4.1 [internal] No valid hosts (unable to make any connections)",
      "conn_stage": "22",
      "queue_time": "915727",
      "routing_domain": "customer.routing.domain",
      "template_id": "template_156350710419701562",
      "error_code": "451",
      "node_name": "customer.system.us-west-2.aws.mc.messagesystems.com",
      "customer_id": "1",
      "msg_from": "bounces-563583478277382665@customer.com",
      "binding_group": "alert",
      "raw_reason": "451 4.4.1 [internal] No valid hosts (unable to make any connections)",
      "event_id": "156350710437603988",
      "recv_method": "rest",
      "msg_batchname": "DC/6F-25155-7D331F65",
      "bounce_class": "24",
      "msg_spoolname": "EC/6F-25155-7D331F65",
      "rcpt_to": "NA@someaddress.com"
    }
  }
}
```

#### Inband

```json
{
  "msys": {
    "message_event": {
      "reason": "550 Not registered",
      "recv_method": "rest",
      "raw_reason": "550 Not registered",
      "delv_method": "gcm",
      "routing_domain": "gcmpushprod.yourdomain.enterprise",
      "conn_name": "00/00-00000-00000000",
      "customer_id": "1",
      "msg_batchname": "10/40-07679-6378BA65",
      "template_id": "template_48224394130121200",
      "queue_time": "51",
      "template_version": "0",
      "msg_spoolname": "20/40-07679-6378BA65",
      "error_code": "550",
      "device_token": "fN5rGEzjr1M:mtzScylykbB4gt6UsFrl-GbKpegHYsGCefEs7ZOqLf",
      "pathway": "default",
      "node_name": "plat1.cust.us-west-2.aws.mc.messagesystems.com",
      "timestamp": "1454081846",
      "event_id": "48224394135610295",
      "type": "permfail",
      "binding": "alert191226",
      "transmission_id": "48224394130121200"
    }
  }
}
```