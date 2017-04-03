---
title: "SparkPost New User Guide"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2670627-sparkpost-new-user-guide"
description: "Welcome to Spark Post The purpose of this article is provide you with a series of setup steps to get you started using our service and continue forward using our recommended best practices This article will detail the configuration steps necessary to start sending messages through Spark Post as well..."
---

Welcome to SparkPost! The purpose of this article is provide you with a series of setup steps to get you started using our service, and continue forward using our recommended best practices. This article will detail the configuration steps necessary to start sending messages through SparkPost, as well as important operational considerations to have in place before you begin sending. Reading this document carefully will ensure that your success on SparkPost is maximized and is as easy to use as possible.

Note: It is highly recommended that you follow the following steps in order to ensure that proper operational practices are in place prior to sending production traffic through SparkPost. This will ensure that all bounce processing, suppression list management, and message event/webhook data management is configured correctly.

1\. [Create a sending domain.](https://support.sparkpost.com/customer/en/portal/articles/1933318-creating-sending-domains)

2\. [Verify your sending domain.](https://support.sparkpost.com/customer/portal/articles/1933360-verify-sending-domains)

3\. [(Optional) Create a custom bounce domain.](https://support.sparkpost.com/customer/portal/articles/2371794-configuring-a-custom-bounce-domain)

4\. [(Optional) Create a custom tracking domain.](https://support.sparkpost.com/customer/en/portal/articles/2139249-enabling-multiple-custom-tracking-domains?b_id=7411)

5\. [Send a test email through the UI.](https://support.sparkpost.com/customer/portal/articles/1929893-previewing-and-sending-test-emails)

6\. [Upload your suppression list](https://support.sparkpost.com/customer/portal/articles/1929891) if you are migrating from another provider. This will help protect your reputation and prevent you from emailing bad addresses out of the gate. While these instructions specifically mention Mandrill, you can use the same CLI tool and commands with any .csv suppression file.

7\. Create your bounce, unsubscribe, and complaint management procedures and integrate them with SparkPost. In order to retrieve bounce, unsubscribe, and complaint message events, you will need to use either our push (webhook) or pull (message events API) options.

*   For information on how to define a new webhook, please see [this article.](https://support.sparkpost.com/customer/en/portal/articles/1929974-defining-webhooks?b_id=7411)
*   For information on how to use our Message Events API, please review [this section](https://developers.sparkpost.com/api/message-events.html) in the API documentation. ​

8\. [Configure your application(s) to inject via SMTP or REST APIs.](https://support.sparkpost.com/customer/portal/articles/1929887-sending-your-first-email)

Note: SparkPost Support does not directly support any third party application or public library available on GitHub. If you are experiencing difficulties in configuring your application to integrate with our service, please visit our [public Slack channel](https://sparkpost-community.slack.com/) for assistance.

 **### Best Practices for SparkPost**                              

After you have completed the steps above, your SparkPost account will be ready to send email, but there are a few best practices you should have in place before you begin sending email. These fall into several categories, explained further below. Use these quick links to jump to a specific section:

[REST API Injection Performance Best Practices](#REST API Injection Performance Best Practices)
[Metadata and Other Attributes](#Metadata and Other Attributes)
[Webhook Best Practices](#Webhook Best Practices)
[List Hygiene Activities](#List Hygiene Activities)
[Global Suppression List + Customer-Specific Suppression List Functionalit](#Global Suppression List + Customer-Specific Suppression List Functionality)y
[FAQ](#FAQ)

### REST API Injection Performance Best Practices

Sizing considerations for multiple recipient transmissions:

*   5,000 - 10,000 recipients per transmission call is the recommended range for maximizing performance and efficiency.
*   There is a 2GB limit on payload size for each transmission, but we recommend keeping a payload size no greater than 1GB.
*   Performance of the transmission API is better when there are more transmissions and fewer recipients per transmission. Five transmissions of 10,000 recipients generally has better throughput than one transmission with 50,000 recipients.
*   We recommend you inject transmissions in parallel with up to 50 open concurrent connections.  

### Metadata and Other Attributes

Total size of metadata per message (recipient level metadata + transmission-level metadata) cannot exceed 1000 bytes/characters (if it exceeds this limit the data will be truncated within open and click events).

Tagging links – group or mark links using the “data-msys-linkname” custom attribute for optimal UI experience and performance.

*   Utilizing this custom attribute in your html template code will ensure that the UI will display click information in a human-readable fashion. If links are not tagged, clicks will be aggregated against the title of “raw URL” in the UI.
*   Example: <a data-msys-linkname="Test_Link" href="http://www.google.com">Test Link</a>

Campaign_id is best suited for attributes that you will use for filtering on the user interface.  The total number of unique campaign_ids should be in the 100s — not in the 10k range.

*   Note: If you routinely re-use the same campaign, it is recommended that you do not name each individual campaign by date, e.g. "Christmas_Campaign_2015-Dec-21". Instead, keep your campaign names generic (e.g. "Christmas_Campaign) and use a combination of metadata and date-time stamps to identify messages belonging to campaigns in either webhook data or Message Events API data.

If you are using SMTP injection, you can set metadata on your messages by including the X-MSYS-API header. More information on how to formulate this header.
​ 

### Webhook Best Practices

[This article](https://support.sparkpost.com/customer/en/portal/articles/2220552-best-practices-for-managing-webhook-data-streams#Webhook) explains best practices for digesting webhook event data and explains our webhook retry logic.

### List Hygiene Activities

All SparkPost Elite should take action on the following web hook events and mark the recipients appropriately:

“Bounce” events that are hard bounces - “bounce_class” = 10, 30, 90

*   ​The three bounce classes above are permanent failures and should not be retried, and should be suppressed from your lists.  All bounce classifications are explained in greater detail here.

“Out of Band” events that are hard bounces - “bounce_class” = 10, 30, 90​

*   ​The three bounce classes above are permanent failures and should not be retried, and should be suppressed from your lists.

“Spam Complaints” events

"Link Unsubscribe" and "List Unsubscribe" events

*   ​If you aren't using our Link Unsubscribe feature, then you only need to register for "List Unsubscribe" events in our webhooks.

"Generation Failure"

*   ​These events are a result of one of four conditions.  Previous Hard Bounce (10, 30, 90), previous Link/List Unsubscribe, previous Spam Complaint, or if therecipient matches a proprietary list of know bad domains (eg. gmai.cm, yaho.com, etc.).  The 'raw_reason' is provided in the json payload. These should not be retried. 

### Global Suppression List + Customer-Specific Suppression List Functionality

A general overview of our suppression list functionality can be found [here](https://support.sparkpost.com/customer/portal/articles/1929891). It is highly recommended that you become familiar with this system to ensure your messages are appropriately suppressed when needed.

### FAQ

Q: How do I check how many messages I've sent or have left? What happens if I go over my limit?

A: [This article](https://support.sparkpost.com/customer/en/portal/articles/2030894-daily-and-monthly-quota-limits?b_id=7411) explains message quotas in great detail. Please note, SparkPost does not throttle incoming connections or outbound throughput if you are approaching your daily limit. Messages will simply not be queued/accepted if you attempt any after you have reached your daily limit. If you exceed your monthly quota you will be billed overages based upon your CPM rate, which is explained in the article linked above.

Q: I've sent some messages through SparkPost which were accepted by the service, but I don't see them in my inbox. How can I quickly find what happened?

A: There could be a number of reasons that a message that was accepted by our service was not delivered to an inbox. If you know the email address in question, you can quickly search for it in the UI by clicking Reports > Message Events, and typing the email address into the search bar of the upper right of the UI. You may also use the Message Events API or webhook data to find the given message.

Q: Someone was added to the suppression list but I need to remove them. How do I do that?

A: You can use the [suppression list API](https://developers.sparkpost.com/api/suppression-list.html#suppression-list-retrieve,-delete-delete) to remove an address from either the transactional or non-transactional suppression list, or you can use the update operation to specify which of the two you want to allow/disallow. There is no option to remove addresses from the suppression list within the UI.

Q: I want to upload a recipient list and then perform segmentation on that list to send to a subset of recipients. How can I do this in SparkPost?

A: This functionality is not available through SparkPost. You will need to perform segmentation on your list prior to uploading it to SparkPost. We have two official partners who offer services which afford this functionality, among other benefits - [Ongage](https://www.ongage.com/) and [Iterable](https://iterable.com/). If you wish to investigate these options further, please email support@sparkpost.com and we can provide you a demo and more information.

Q: Do you have a set of definitions for message events so I can understand what all metrics mean, and what fields are available by message event type?

A: Please see [this article](https://support.sparkpost.com/customer/en/portal/articles/1976204-webhook-event-reference?b_id=7411) for a full listing of our message event definitions.