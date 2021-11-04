---
lastUpdated: "02/08/2020"
title: "Changes to SparkPost’s “Enrichment” period for open and click events"
description: " Information on changes to enrichment period for all SparkPost users"
---

SparkPost processes over half a trillion email events a month, billions per day, which power SparkPost Signals<sup>TM</sup>  Analytics reports, Event Webhooks, and the Events API. SparkPost’s Enrichment is a process that adds metadata fields to engagement events (opens and clicks as well as unsubscribes and spam complaints) by looking up this metadata from the original delivery event, which is stored in a large database. SparkPost introduced this enrichment process several years ago so that we could reduce the length of tracking links, and up to now, we enriched engagement events for messages that were delivered up to one (1) year prior. Effective, January 21, 2020, SparkPost is reducing this enrichment period to 60 days in order to improve the performance and reliability of our data processing services.

This change will have no impact on the processing or recording of engagement events - even those events that occur many months after the original message was sent. However, when these types of events are recorded on messages that were sent more than 60 days ago, some data elements - the “enriched” data fields - will not be present, specifically: 

  - campaign_id
  - subject
  - ip_pool & sending_ip
  - rcpt_meta & rcpt_tags
  - routing_domain
  - sending_domain
  - template_id and template_verison
  - transmission_id (doc update 2/10/2020)

This change has no impact on the collection and reporting on any other field within these events including IP address, GeoIP, target link url & target link name or user agent since these fields are captured at the time the open and click event occurs. Also message id and recipient email address will still be included which can be used for any additional attribution purposes.
 
## Customer Impact

For most customers, this change will have little to no impact because our data shows that on average, 98% of opens and clicks (and other engagement events) happen within 60 days of an email being sent. The actual percentage of open and click events that happen more than 60 days after sending will vary from customer to customer depending on how recipients engage with older emails.

For engagement events on messages older than 60 days, customers may notice a difference in the SparkPost Summary Report only when filtering on Campaign, Template, IP Pool or Sending IP.  For example, when using the Summary Report to assess Open Rate or Click Count for a given IP pool, the metrics will show slightly lower numbers since only opens and clicks from messages sent more than 60 days ago will be included. Reporting on engagement by account or subaccount will not be affected - the change is only seen when filtering. The Health Score and Engagement Recently reports are also not affected by this change.
 
## A Note on Raw Event Data

For engagement events that are triggered from emails sent more than 60 days ago, the events will continue to be processed and be available to customers through Event Webhooks and the Events API.  We will provide the same number of events, but the “enriched” data fields will not be present for those events. 

Customers consuming Event Webhooks and the Events API should already have processes in place to handle a small percentage of older events that are logged without these “enriched” data fields so it is unlikely any code changes are needed, however, this is a good time to check. As always, please follow our [documented recommendations](https://www.sparkpost.com/docs/tech-resources/webhook-data-streams/) for processing webhooks which include avoiding any synchronous processing of the batches since this is the single most important step to ensure you do not miss any data.   

For Enterprise and Premium customers, your TAM or CSM can share more details with you on the expected percentage of engagement events that may fall out of the 60-day window.
