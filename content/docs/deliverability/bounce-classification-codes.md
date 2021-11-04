---
lastUpdated: "02/08/2020"
title: "Bounce Classification Codes"
description: "Bounce Classification Codes Following is a list of bounce classification codes and their meanings Classification Name Description Category 1 Undetermined The response text could not be identified Undetermined 10 Invalid Recipient The recipient is invalid Hard 20 Soft Bounce The message soft bounced Soft 21 DNS Failure The message bounced..."
---

Following is a list of bounce classification codes and their meanings:

| Classification | Name                    | Description                                                                 | Category     |
|:---------------|:------------------------|:----------------------------------------------------------------------------|:-------------|
| 1              | Undetermined            | The response text could not be identified.                                  | Undetermined |
| 10             | Invalid Recipient       | The recipient is invalid.                                                   | Hard         |
| 20             | Soft Bounce             | The message soft bounced.                                                   | Soft         |
| 21             | DNS Failure             | The message bounced due to a DNS failure.                                   | Soft         |
| 22             | Mailbox Full            | The message bounced due to the remote mailbox being over quota.             | Soft         |
| 23             | Too Large               | The message bounced because it was too large for the recipient.             | Soft         |
| 24             | Timeout                 | The message timed out.                                                      | Soft         |
| 25             | Admin Failure           | The message was failed by SparkPost's configured policies.                  | Admin        |
| 30             | Generic Bounce: No RCPT | No recipient could be determined for the message.                           | Hard         |
| 40             | Generic Bounce          | The message failed for unspecified reasons.                                 | Soft         |
| 50             | Mail Block              | The message was blocked by the receiver.                                    | Block        |
| 51             | Spam Block              | The message was blocked by the receiver as coming from a known spam source. | Block        |
| 52             | Spam Content            | The message was blocked by the receiver as spam.                            | Block        |
| 53             | Prohibited Attachment   | The message was blocked by the receiver because it contained an attachment. | Block        |
| 54             | Relaying Denied         | The message was blocked by the receiver because relaying is not allowed.    | Block        |
| 60             | Auto-Reply              | The message is an auto-reply/vacation mail.                                 | Soft         |
| 70             | Transient Failure       | Message transmission has been temporarily delayed.                          | Soft         |
| 80             | Subscribe               | The message is a subscribe request.                                         | Admin        |
| 90             | Unsubscribe             | The message is an unsubscribe request.                                      | Hard         |
| 100            | Challenge-Response      | The message is a challenge-response probe.                                  | Soft         |

Note that `soft`, `block` and `undetermined` are usually temporary events. If you'd like to filter on suppression-level events, only check for `hard` or `admin` bounce-type events.
