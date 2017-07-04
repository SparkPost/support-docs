---
title: "Deliverability Report Card Overview"
description: "A short overview of the weekly deliverability report card email"
---

This article describes the weekly deliverability report card email that SparkPost sends to it's users. The report provides an at-a-glance weekly review of each SparkPost account with health metrics, usage details and tips on being a better sender. You can also review your account details in the [summary report](https://app.sparkpost.com/reports/summary) and [read about the various metrics here](https://www.sparkpost.com/docs/reporting/metrics-definitions/).

### Reporting Period

The report gives details of the previous 7 days sending on your account along with similar details from the 7 days before that for comparison.

## Account Health Metrics 

The health metrics are important because SparkPost uses them to assess sending reputation. In extreme cases, SparkPost may warn you or even suspend your account based on these metrics. The report card will colour any unusually high health metrics to highlight any issues.

### Hard Bounce Rate

Your _hard bounce rate_ is the percentage of your messages that resulted in delivery failures known as "hard bounces". You can read details about how SparkPost classifies the various types of delivery failure in [this article](https://www.sparkpost.com/docs/deliverability/bounce-classification-codes/).

### Health Metric Rankings

The report may show a _rank_ value for each health metric. This section gives your account's position or "rank" for that metric compared to all other SparkPost accounts. For instance, if your hard bounce rate rank says "Top 10th percentile", then your hard bounce rate is in the top 10% of senders using SparkPost. That's is a nice place to be.

### Spam Complaint Rate

You _spam complaint rate_ is the percentage of your messages that result in spam complaints from the recipients.

## Other Report Metrics

 - Emails Sent - volume of messages injected into SparkPost or rejected by it
   - See also `count_targeted`
 - Accepted - the percentage of emails accepted by a remote domain excluding out-of-band bounces
   - See also `count_accepted`
 - Opens - the percentage of messages that were opened or had a link clicked
 - Clicks - the percentage of messages that had at least 1 link clicks

You can find [definitions of all of SparkPost's metrics here](https://developers.sparkpost.com/api/metrics.html#header-metrics-api-deliverability-glossary).

## Improving Your Account Health And Reputation

The [SparkPost Deliverability documentation](https://www.sparkpost.com/docs/deliverability/) includes details on [optimizing deliverability](https://www.sparkpost.com/docs/deliverability/optimizing-deliverability-and-inbox-placement/), [managing dedicated IPs](https://www.sparkpost.com/docs/deliverability/dedicated-ip-pools/), [IP warm-up](https://www.sparkpost.com/docs/deliverability/ip-warm-up-overview/) and many other tasks related to improving your reputation.

