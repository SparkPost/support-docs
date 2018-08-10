---
title: "SparkPost Events"
description: "SparkPost Event Definitions. The following table contains the definition of each type of event that exists for activity through SparkPost. NOTE Inbound relay events are only available in SparkPost Enterprise."
---

## SparkPost Event Definitions

The following table contains the definition of each type of event that exists for activity through SparkPost.

_NOTE_: Inbound relay events are only available in SparkPost Enterprise.

Individual events are provided via the webhook data stream and can be retrieved on an on-demand basis using the Message Events API.

| Event Name           | Belongs to the following Event Group | Other Names for this Event         | Event Generated When:                                                                                                                          |
| :------------------- | :----------------------------------- | :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| injection            | Injection                            | Reception                          | Message is received by or injected into SparkPost.                                                                                             |
| delivery             | Delivery                             | 250 OK                             | The remote mail server (of the recipient) acknowledges receipt of message.                                                                     |
| policy_rejection     | Bounce                               | In Band Bounce: Admin type failure | Due to policy, SparkPost rejects message or fails to generate message. (This is most often due to suppression list activity.)                  |
| delay                | Delay                                | Tempfail/Transfail, 4xx error code | The remote mail server (of the recipient) temporarily rejects a message (asks for delivery to be tried again later).                           |
| bounce               | Bounce                               | Permfail, 5xx error code           | The remote mail server (of the recipient) **permanently** rejects message (delivery should not be attempted later)                             |
| out_of_band          | Bounce                               | Asynchronous Bounce                | Remote mail server (of the recipient) initially reported acceptance of a message, but now reports that the message cannot be delivered.        |
| spam_complaint       |                                      | Complaints/FBL                     | The message was classified as spam by the recipient.                                                                                           |
| open                 | Engagement                           | Views/Renders                      | Recipient opens a message in a mail client, thus rendering a tracking pixel.                                                                   |
| click                | Engagement                           | Actions, Clickthrough              | Recipient clicks a tracked link in a message, thus prompting a redirect through the SparkPost click-tracking server to the link's destination. |
| generation_failure   | Bounce                               |                                    | Message generation fails for a given recipient.                                                                                                |
| generation_rejection | Bounce                               |                                    | SparkPost rejects message generation due to policy.                                                                                            |
| list_unsubscribe     | Unsubscribe                          |                                    | Recipient unsubscribes by using the ISP list unsubscribe feature.                                                                              |
| link_unsubscribe     | Unsubscribe                          |                                    | User clicks a specifically tagged unsubscribe link.                                                                                            |
| relay_delivery       | Inbound Relay                        |                                    | Remote HTTP endpoint acknowledgesreceipt of a relayed message.                                                                                 |
| relay_injection      | Inbound Relay                        |                                    | Relayed message is received by or injected into SparkPost.                                                                                     |
| relay_rejection      | Inbound Relay                        |                                    | SparkPost rejects a relayed message or fails to generate a relayed message.                                                                    |
| relay_tempfail       | Inbound Relay                        |                                    | Remote HTTP endpoint fails to accept a relayed message.                                                                                        |
| relay_permfail       | Inbound Relay                        |                                    | Relayed message has reached the maximum retry threshold without delivery to the HTTP endpoint and will be removed from the system.             |
