---
lastUpdated: "06/25/2020"
title: "SparkPost Events"
description: "Descriptions for each type of event that SparkPost logs."
---

## Event Definitions

SparkPost logs several events that can be used to track the lifecycle of your emails.
Individual events are available via [Webhooks](https://developers.sparkpost.com/api/webhooks)
or the [Events API](https://developers.sparkpost.com/api/events/).

You can also view your recent events from the [app](https://app.sparkpost.com/reports/message-events)([EU](https://app.eu.sparkpost.com/reports/message-events)).

The possible events are:

| Event Type           | Descriptions |
|----------------------|--------------|
| injection            | Email successfully generated or relayed to SparkPost. |
| delivery             | Recipient mailbox provider acknowledged receipt of email. |
| policy_rejection     | SparkPost rejected the email due to a policy reason. |
| delay                | Recipient mailbox provider temporarily rejected the email. |
| bounce               | Recipient mailbox provider permanently rejected the email. |
| out_of_band          | Recipient mailbox provider rejected the email after initially accepting it. |
| spam_complaint       | Recipient marked the email as spam. |
| initial_open         | Recipient opened the email. Recorded by a tracking pixel at the top of the email. |
| open                 | Recipient opened the email. Recorded by a tracking pixel at the bottom of the email. |
| click                | Recipient clicked a tracked link in the email. |
| generation_failure   | Email generation failed due to a technical reason. |
| generation_rejection | Email generation failed due to a policy reason. |
| list_unsubscribe     | Recipient unsubscribed using a mailbox provider's list unsubscribe feature. |
| link_unsubscribe     | User clicked a [tagged unsubscribe link](https://www.sparkpost.com/docs/user-guide/setting-up-unsubscribe-links/). |
| relay_injection      | SparkPost received an inbound email. |
| relay_rejection      | SparkPost rejected an inbound email. |
| relay_delivery       | Delivered inbound email to your endpoint. |
| relay_tempfail       | Your endpoint temporarily failed to accept inbound email. |
| relay_permfail       | Reached the maximum retry delivery attempts for an inbound email.  |
