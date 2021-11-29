---
lastUpdated: "02/08/2020"
title: "Enterprise Metrics Definitions"
description: "Metrics definitions for Enterprise accounts"
---

This page defines Metrics for Enterprise accounts. For other accounts see [Metric Definitions](https://www.sparkpost.com/docs/reporting/metrics-definitions/).

# API Metrics Enterprise Definitions

The [Metrics API endpoint](https://developers.sparkpost.com/api/metrics.html)
surfaces your account's aggregated and time-series data. 
The metrics available are:

| Metric                              | API Source                             | Definition  |
|-------------------------------------|----------------------------------------|-------------|
| Targeted                            | `count_targeted`                       | Number of emails requested or relayed to SparkPost. Includes Injected and Rejected. |
| Injected                            | `count_injected`                       | Number of emails successfully generated or relayed through SparkPost. |
| Sent                                | `count_sent`                           | Number of emails that were attempted to be delivered. Includes Deliveries and Bounces. |
| Delivered                           | `count_delivered`                      | Number of emails that were received by a recipient's mailbox provider. |
| Accepted                            | `count_accepted`                       | Number of emails delivered that didn't subsequently bounce (Out-of-Band). |
| Delivered 1st Attempt               | `count_delivered_first`                | Number of emails delivered on the first attempt. |
| Delivered 2+ Attempts               | `count_delivered_subsequent`           | Number of emails delivered that required more than one attempt. |
| 1st Attempt Time                    | `total_delivery_time_first`            | Total time taken to deliver on first attempt, in milliseconds. |
| 2nd+ Attempt Time                   | `total_delivery_time_subsequent`       | Total time taken to deliver on subsequent attempts, in milliseconds. |
| Delivered Message Volume            | `total_msg_volume`                     | Total size of delivered emails including attachments, in bytes. |
| Delayed                             | `count_delayed`                        | Number emails that were temporarily rejected by a recipient's mailbox provider. |
| Delayed 1st Attempt                 | `count_delayed_first`                  | Number of emails that were delayed on 1st delivery attempt. |
| Rejected                            | `count_rejected`                       | Number of emails that were rejected by SparkPost. Includes Policy Rejections, Generation Rejections, Generation Faliures. |
| Policy Rejections                   | `count_policy_rejection`               | Number of emails that were rejected by SparkPost due to policy reasons. |
| Generation Failures                 | `count_generation_failed`              | Number of emails that failed generation due to technical reasons. |
| Generation Rejections               | `count_generation_rejection`           | Number of emails that failed generation due to policy reasons. |
| Admin Bounces                       | `count_admin_bounce`                   | Number of emails that were bounced by SparkPost. Not counted in Bounces. |
| Bounces                             | `count_bounce`                         | Number of bounced emails, not including Admin Bounces. Includes all In-Band and Out-of-Band Bounces. |
| In-band Bounces                     | `count_inband_bounce`                  | Number of emails that bounced on delivery attempt. |
| Out-of-Band Bounces                 | `count_outofband_bounce`               | Number of emails that bounced subsequent to a successful delivery. |
| Soft Bounces                        | `count_soft_bounce`                    | Number of emails that bounced due to temporary delivery issues. |
| Hard Bounces                        | `count_hard_bounce`                    | Number of emails that bounced due to permanent delivery issues. |
| Block Bounces                       | `count_block_bounce`                   | Number of emails that bounced due to a mailbox provider's filtering rules |
| Undetermined Bounces                | `count_undetermined_bounce`            | Number of emails that bounced due to undetermined reasons. |
| Clicks                              | `count_clicked`                        | Number of times that links were clicked across all emails. |
| Raw Clicks                          | `count_raw_clicked`                    | Number of unique link clicks from recipients. |
| Unique Clicks                       | `count_unique_clicked`                 | Number of emails that had at least one link clicked. May take longer to update. |
| Unique Clicks Approximate           | `count_unique_clicked_approx`          | Number of emails that had at least one link clicked. Approximated with a 5% error threshold. |
| Unique Confirmed Opens              | `count_unique_confirmed_opened`        | Number of emails that were displayed or had at a link clicked. May take longer to update. |
| Unique Confirmed Opens Approximate  | `count_unique_confirmed_opened_approx` | Number of emails that were displayed or had at a link clicked. Approximated with a 5% error threshold. |
| Rendered                            | `count_rendered`                       | Number of times emails were displayed. Applies only to HTML emails. |
| Unique Renders                      | `count_unique_rendered`                | Number of emails that were displayed at least once. Applies only to HTML emails. May take longer to update. |
| Unique Renders Approximate          | `count_unique_rendered_approx`         | Number of emails that were displayed at least once. Applies only to HTML emails. Approximated with a 5% error threshold. |
| Initial Renders                     | `count_initial_rendered`               | Number of times emails were displayed, as recorded by top open pixels. Applies only to HTML emails. |
| Unique Initial Rendered             | `count_unique_initial_rendered`        | Number of emails that were displayed at least once, as recorded by top open pixels. Applies only to HTML emails. May take longer to update. |
| Unique Initial Rendered Approximate | `count_unique_initial_rendered_approx` | Number of emails that were displayed at least once, as recorded by top open pixels. Applies only to HTML emails. Approximated with a 5% error threshold. |
| Spam Complaints                     | `count_spam_complaint`                 | Number of spam complaints received from mailbox providers. |
| Unsubscribes                        | `count_unsubscribe`                    | Number of times a recipient clicked a tagged unsubscribe link or used the list unsubscribe header. |

## Report Metrics Definitions

The [Signals Analytics section of your account](https://app.sparkpost.com/reports)([EU](https://app.eu.sparkpost.com/reports)) uses [Metrics API](#header-api-metrics-enterprise-definitions)
data to build graphs and reports to help understand your email activity.
Most of the numbers found in these reports are taken straight from the API.
Some of numbers in the reports are simple calculations involving 2 of the API metrics.
Here are the definitions for each of these calculated metrics, including the formulas used to calculate them:


| Metric                    | Formula                                        | Definition |
|---------------------------|------------------------------------------------|------------|
| Accepted Rate             | Percentage (Accepted / Sent)                   | Percentage of Sent emails that were Accepted. |
| Avg Latency 1st Attempt   | Average (1st Attempt Time)                     | Average delivery time in milliseconds (latency) for emails delivered on the first attempt. |
| Avg Latency 2nd+ Attempt  | Average (2nd+ Attempt Time)                    | Average delivery time in milliseconds (latency) for emails delivered that required more than one attempt. |
| Avg Delivery Message Size | Average (Delivered Message Size)               | Average size of delivered emails, including attachments, in bytes. |
| Delayed Rate              | Percentage (Delayed First Attempt / Accepted)  | Percentage of Accepted emails that were delayed on the first delivery attempt. |
| Rejection Rate            | Percentage (Rejected / Targeted)               | Percentage of Targeted emails that were rejected. |
| Admin Bounce Rate         | Percentage (Admin Bounces / Targeted)          | Percentage of Targeted emails that Admin Bounced. |
| Soft Bounce Rate          | Percentage (Soft Bounces / Sent)               | Percentage of Sent emails that Soft Bounced. |
| Hard Bounce Rate          | Percentage (Hard Bounces / Sent)               | Percentage of Sent emails that Hard Bounced. |
| Block Bounce Rate         | Percentage (Block Bounces / Sent)              | Percentage of Sent emails that Block Bounced. |
| Undetermined Bounce Rate  | Percentage (Undetermined Bounces / Sent)       | Percentage of Sent emails that Undertermined Bounced. |
| Click-through Rate        | Percentage (Unique Clicks / Accepted)          | Approximate percentage of Accepted emails that had at least one link selected. |
| Open Rate                 | Percentage (Unique Confirmed Opens / Accepted) | Approximate Percentage of Accepted emails that were either rendered or had at least one link selected. |
| Spam Complaint Rate       | Percentage (Spam Complaints / Accepted)        | Percentage of Spam Complaints. |
| Unsubscribe Rate          | Percentage (Unsubscribes / Accepted)           | Percentage of Accepted emails that resulted in unsubscribes. |
