---
lastUpdated: "02/08/2020"
title: "Optimizing Deliverability and Inbox Placement"
description: "In order to get the best deliverability and inbox placement rates you need to establish yourself as a legitimate sender by developing a good reputation with mailbox providers like Gmail and Hotmail Here’s how Permission only email to the people who have subscribed to receive your mail Transparency make sure..."
---

In order to get the best deliverability and inbox placement rates, you need to establish yourself as a legitimate sender by developing a good reputation with mailbox providers (like Gmail and Hotmail). Here’s how:

1. Permission - only email to the people who have subscribed to receive your mail
2. Transparency - make sure your content is relevant to the recipient. Display meaningful information in the Subject, From, and Reply-to headers
3. Remove hard bounces (invalid recipient addresses) immediately from all future mailings
4. Stop sending to recipients who don't want your mail, specifically: 
	* Remove spam complaints and unsubscribe requests
    * Remove inactive users (no opens/clicks in 30 days)
    * See below for more instructions on **List Hygiene​**
5. Suppress recipients who you know (for any reason) should not be mailed to
	* If you are coming to SparkPost from Mandrill (or other provider) be sure to migrate your existing suppression lists (recipients who should not be mailed to) to SparkPost.com via the [Suppression List API](https://developers.sparkpost.com/api/suppression-list.html#suppression-list-bulk-insert-update).
6.  Ensure that DKIM is set up and verified for your sending domains
7.  Avoid the following BAD practices:
    * Sending messages without testing and proofreading
    * Hide the sender or use a misleading subject line
    * Hide the unsubscribe link or ignore unsubscribe requests
    * Buy email lists - especially those from untrustworthy sources
    * Sell your list to a third party without permission
8.  Set up [custom bounce domain(s)](https://www.sparkpost.com/docs/tech-resources/custom-bounce-domain/)
9.  Set up [custom tracking domain(s)](https://www.sparkpost.com/docs/tech-resources/enabling-multiple-custom-tracking-domains/)

For more detailed information on this topic, please review [MAAWG Sender Best Common Practices](https://www.m3aawg.org/documents/en/m3aawg-sender-best-common-practices-version-30).

 ### List Hygiene: A Note On Event Types

You can find the following data using the Message Events API or raw event data streamed via webhooks.

**Invalid Addresses**
* "Bounce" events indicate an invalid recipient, remove those with "bounce_class" = 10, 30, or 90 
* "Out of Band" events that indicate an invalid recipient, remove those with "bounce_class" = 10, 30, or 90

**Spam Complaints**

* "Spam Complaint" events

**Unsubscribers**

* "List Unsubscribe" events
* "Link Unsubscribe" events 

**Note**: If you aren't using our Link Unsubscribe feature, then you only need to register for "List Unsubscribe"
