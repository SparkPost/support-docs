---
title: "SparkPost Enterprise Change Log"
description: "Note This Change Log is for SparkPost Enterprise Only. This is a running log of new features and capabilities that have been rolled out on the SparkPost Enterprise service. The API reference can be found here https://developers.sparkpost.com/api/"
notification: "This Change Log is for SparkPost Enterprise Only"
---

A running log of new features and capabilities that have been rolled out on the SparkPost Enterprise service. The API reference can be found [here](https://developers.sparkpost.com/api).


### April 2018

* **NEW:** SparkPost.com is now available in the EU. If you need your data hosted in the EU, check out [SparkPost EU](https://app.eu.sparkpost.com)

* **NEW:** SparkPost is GDPR compliant - well ahead of the May deadline. For details, read our [blog post](https://www.sparkpost.com/blog/announcing-sparkpost-eu/?utm_source=twitter&utm_medium=social-media&utm_campaign=all&utm_content=bl-sp-eu-gdpr)

* **NEW:** You can now set a default bounce domain (return-path domain) for each subaccount, in addition to the account-wide option. 
   * The "is_default_bounce_domain" can be set at the account or subaccount level via the Sending Domains API. 
   * The UI component will be available shortly.

### March, 2018
* **Change:** Check out our new UI and tell us what you think?

### February, 2018
* **Change:** Shorter SparkPost Link-Unsubscribe Header URLs and FBLs.
  * SparkPost shortened the links for the list-unsubscribe header and FBLs. This is addition to the shorter tracking links completed in December.

* **Change:** Addressed Stale MX Issues
  * SparkPost addressed the issue of some messages not being delivered due to cached out-of-date MX records.

### December, 2017
* **Change:** Shorter SparkPost engagement tracking URLs
  * SparkPost changed our tracking URLs to be shorter. The precise amount of change depends on how much personalization and meta data a customer is sending with their transmission.

### November, 2017
* **NEW:** Additional Open Pixel at message top
  * SparkPost has added an open pixel to the top of each message when open tracking is selected. This is in addition to the open pixel that is inserted at the bottom of the message
  * Customers should expect a new event in the Message Events API and in webhook events: initial_open
  * Customer should also expect an additional Metric in the Metrics API: initial_rendered
  * Rollout of this feature is expected over the first 2 weeks of November
  
* **Enhancement:** Self-service for HTTPS tracking links
  * SparkPost Customers can now setup secure tracking links/domains on their own using a third party Content Delivery Network (CDN). We will continue to support Enterprise tenants that require we host their certificates rather than use a CDN.
  * This is currently only available via API. We will update the User Interface (UI) in the next couple of weeks
 
* **Change:** We will no longer set CNAME = True for verified Tracking Domains
  * SparkPost changed the way we verify Tracking Domains that does not rely on checking DNS. Therefore, for Tracking Domains only, CNAME will be blank.
  * For verified Tracking Domains, the Verified field will continue to be set to TRUE

* **Change:** Transmissions API GET Request will only return scheduled transmissions
  *  We will only track and return a status for scheduled transmissions when calling the GET method. 
  *  For all other Transmissions, including multi-recipient transmissions, a transmission record will not be returned when you call the GET /api/v1/transmissions endpoint. Instead, the API will return a 404, not found, error. In order to keep track of your transmissions, we recommend using the Metrics API, Message Events API, or Webhooks.

* **Change:** Starting later this month, SparkPost will begin enforcing verified bounce domains (return-path) for Enterprise Tenants.
  *  Your TAM will communicate with you in advance of this change. 
  *  No change will be made until we have verified with you, which domains *should* be used
  *  After enforcement begins, any Transmissions using bounce domains not set up and verified in SparkPost will be rejected. This is the same behavior as Sending (FROM) domains today.


### (Week of) 18 September, 2017 

* **Change:** Message Scheduling
  *  We have changed the behaviour of the scheduled send function. Prior to this change, message *generation* began at the scheduled time, followed by immediate send of the generated messages. With this change, messages for scheduled transmissions will be generated and queued *when the transmission is created*. At the scheduled time, those queued messages will be *sent*.
  * This change will bring actual sending much closer to the scheduled time because of the new pre-generation step.
   * In the UI, message injection will be more distinguishable from message sending and therefore easier to see.
   * Customers who would like to schedule messages more than 12 hours in advance, please see your TAM.

### (Week of) 04 September, 2017 

* **Enhancement:** Stored Templates by Subaccount
  *  Customers can now limit the use of a stored template to just the Master account or share it with all subaccounts.
  *  Master accounts can also copy stored templates to specific subaccount(s) to create fully editable copies. Subaccounts can create stored templates for their own use as well.
  *  This enhancement will start rolling out this week and continue through the first week of October.
  *  This [support article](https://www.sparkpost.com/docs/getting-started/creating-template/) has been updated to include information on sharing stored templates with subaccounts.
  *  This [support article](https://www.sparkpost.com/docs/user-guide/subaccounts/) has been updated to include information on stored templates and subaccounts.
  * SparkPost [Blog Post](https://www.sparkpost.com/blog/stored-templates-subaccount/) announcing the new feature.

### (Week of) 24 July, 2017 

* **Enhancement:** Self Service for Bounce (Return-Path) Domains in SparkPost Enterprise
  * Enterprise customers can now create and verify Bounce Domains (aka Return-Path Domains) in addition to Sending (aka FROM) Domains via an API without calling their TAM or submitting a ticket to Support. 
  * Enterprise customers can call the Sending Domains API to create the Domain, CNAME it to customerID.mail.e.sparkpost.com, and call the API again to verify that the DNS entry is correct. This will allow OOB bounces to be processed correctly.
  * Service Providers that have auto_verify turned on will be flagged as "CNAME verified" without doing the DNS check as we assume the customer is doing the correct DNS updates themselves.
  * This [support article](https://www.sparkpost.com/docs/tech-resources/custom-bounce-domain/) describes the process for creating Bounce Domains, including the create and verify endpoints. 
 
* **New:** Pass Custom Headers For Webhook Delivery
  * When creating/editing a webhook via the API, customers can now define up to 5 additional custom headers that will be included when webhooks batches are delivered to their HTTP endpoint. 
  * More information is available in this [support article](https://www.sparkpost.com/docs/user-guide/posting-custom-headers-with-webhooks-delivery/)

* **Change:** Limit pages in the UI with long lists to 1000 items
  * For some customers who have long lists of API keys, sending domains, tracking domains, or subaccounts, the UI pages would take too long too load. As a temporary measure, we have limited those pages to display up to 1000 items. Customers can still create new API keys, sending domains, tracking domains, and subaccounts as normal.


### 06 July, 2017 

* **Enhancement:** Subaccount API key is now optionally (not automatically) created with new Subaccounts
  * When creating a new subaccount, users now have the option to NOT create a subaccount-specific API key for it by setting the `setup_api_key` field in the create request to false.
  * Default behavior for the API has not changed: new subaccounts created via the API will still have an API key created by default
  * For customers (typically service providers) with many subaccounts but who send using the master account API key, this may improve UI performance
  * The Subaccount [API documentation](https://developer.sparkpost.com/api/subaccounts.html#subaccounts-subaccounts-collection-post) has been updated to reflect the new functionality


### 01 June, 2017 

* **Enhancement:** Webhooks by Subaccount
  * Users of Subaccounts can now set up individual endpoints for each subacccount's data
  * The Subaccount [Support article](https://www.sparkpost.com/docs/user-guide/subaccounts/#master-account-operating-on-behalf-of-a-subaccount/) has been updated to reflect the additional functionality
  * NOTE: This is currently available only to Enterprise customers in the US. This change log will be updated when this enhancement becomes available in the EU.


### 28 April, 2017

* **New:** Support for GCM (Android) Deep Linking
  * Similar to support for iOS Universal links, SparkPost now supports Android's deep linking feature that links the mobile push recepient into a specific page of the sender's app (if one is installed), rather than the mobile browser.
  * [Knowledge Base article](https://www.sparkpost.com/docs/tech-resources/android-digital-asset-links/)
* **Enhancement:** Improve suppression list lookups
  * Customers can now view their suppression list changes in a more 'real-time' manner by using the x-msys-subaccount header to perform the lookup against a specific suppression list (master or subaccount). The broader search across all lists (master + subaccount) is still available.

### 27 February, 2017

* **Change:** "Delay" message events generated when messages are temporarily suspended
    * Previously, if a binding/domain is suspended, and we do not attempt to deliver the message until the suspension is lifted, there is no message event created.

    With this change, SparkPost will tempfail the message until the suspension is lifted, generate a "delay" event: "Sending IP temporarily suspended", and then attempt to deliver the message once the suspension is lifted (as before.)

### 27 January, 2017

* **Enhancement:** Advanced Filtering of Message Events in the UI
    * Customers can now filter the message events UI by: Recipients, Timestamp, From Addresses, Events, Template IDs, Subaccounts, Campaigns and Message IDs

### 18 November, 2016

* **Enhancement:** Test Data in the Template Screen
    * Test data will now accept metadata and options, in addition to substitution data
        * This allows Enterprise customers to include the binding value in metadata to specify from which binding the test messages should be sent.
        * This addresses the known bug of test messages not working in the Enterprise environment
    * Updated Knowledge Base Article: [Previewing and Sending Test Emails](https://www.sparkpost.com/docs/getting-started/previewing-and-sending-test-emails/)
    * Updated API Documentation: https://developers.sparkpost.com/api/transmissions.html#header-transmission-attributes
* **Enhancement:** DKIM keys in PKCS#8 format
    * SparkPost now accepts DKIM keys in PKCS#8 format and uses them for signing; this is in addition to DKIM keys in PKCS#1 format
* **Change:** Dropping monitoring data
    * Sparkpost-generated monitoring messages and associated events will be dropped from the Metrics API and UI; Message Events API and UI; and Webhooks.
* **Enhancement:** Spam Complaint Rate
    * The Summary Report will now display the Spam Complaint Rate ( # of spam complaints/# of messages delivered)

### 21 October, 2016

* **New:** Inbound Relay Webhooks for SMS messages
    * Inbound SMS messages, such as STOP requests, will be forwarded to customers' HTTP endpoints as JSON-formatted events
    * Once the inbound esme_address is configured by SparkPost, customers can  use the relay webhooks API to create the HTTP destination.
    * Knowledge Base article: [Using SMS in SparkPost Enterprise](https://www.sparkpost.com/docs/tech-resources/using-sms/)
* **Enhancement:** Stored template generation failure with a single recipient will now generate a generation failure event
* **Enhancement:** Additional DKIM validation in the Sending Domains API
    * We have added additional validation to DKIM to check that the public and private key match.

### 12 August, 2016

* **New:** UI for Managing Suppression List
    * Customers can now use the web UI to manage their suppression list (in addition to the API).
    * Knowledge base article: [Using Suppression Lists](https://www.sparkpost.com/docs/user-guide/using-suppression-lists/)
* **Enhancement:** Master Account can share tracking domains with subaccounts
    * Knowledge base article: [Subaccounts in SparkPost and SparkPost Elite](https://www.sparkpost.com/docs/user-guide/subaccounts/)
* **Enhancement:** content.reply_to in stored templates
    * The reply-to can now be added via the UI for stored templates
* **Enhancement:** View Json Event Detail
    * Customers can now view the json for a specific event in the Message Events web UI (located in the Reports section)

### 07 July, 2016

* **Enhancement:** Push Notifications in Transmissions API
    * Customers can now use the Transmissions API to submit content for both APNs (Apple Push Notifications Service) and GCM (Google's Cloud Messaging service)
    * Knowledge Base Article: [Using Push Notifications in SparkPost Elite](https://www.sparkpost.com/docs/integrations/push-notifications-sparkpost-enterprise/)
* **Enhancement:** Subaccounts
    * Master account can share sending domains with subaccounts

### 30 May, 2016

* **Enhancement:** Tracking Domains for Subaccounts
    * Service providers are now able to create (or give their subaccounts permission to create) tracking domains for their subaccounts.
    * Knowledge Base article on [Subaccounts](https://www.sparkpost.com/docs/user-guide/subaccounts/)
* **Change:** Some previously classified Timeouts will be classified into other bounce categories
    * Some bounces that were previously coded as “bounce_class”:”24” - “Exceeded max time without delivery” may now be classified into other categories in cases where the ISP is using a soft bounce as a spam block
    * The expected impact is that while the overall bounce percentage won’t change, the number of messages classified as bounced due to a timeout will decrease, while the number of messages classified into other - more accurate - bounce categories will increase. 
    * [Full list of SparkPost Bounce Codes](https://www.sparkpost.com/docs/deliverability/bounce-classification-codes/) for reference
* **Change:** Renamed Bindings / Binding Groups to "Sending IPs" and "IP Pools"
    * We have relabeled Binding and Binding Group to Sending IP and IP Pools. This a label change only in Elite, and is being done in preparation for future upgrades in functionality
* **Changes:** Domain Verification
    * SPF validation: we now allow "include:[sparkpostmail.com](http://sparkpostmail.com)" to be located in another record DNS TXT record, other than the main SPF record. We now support up to 3 lookups when checking verification on SPF
    * DKIM validation: Updated sending domains verification rules so that k= and h= are now optional in the DKIM record. Updated API docs:
        [https://developers.sparkpost.com/api/sending-domains.html#sending-domains-verify](https://developers.sparkpost.com/api/sending-domains.html#sending-domains-verify)

### 02 May, 2016

* **Enhancement:** Ability to group/filter reports by sending domains
* **Enhancement:** A master account (service provider) can create a sending domain and flag it to be shared/used by all of its subaccounts
* **Enhancement:** Master account can send on behalf of their subaccount via SMTP
    * Previously, in order for the master account to send on behalf of their subaccount via SMTP, the master account had to use the subaccounts API key and impersonate the subaccount. Now, the master account can do it by modifying the SMTP injection username to include the subaccount ID. See API docs [https://developers.sparkpost.com/api/#/introduction/smtp-relay-endpoints](https://developers.sparkpost.com/api/#/introduction/smtp-relay-endpoints)
* **Enhancement:** Optionally not base 64 encode target URLs in tracking links foriOS Universal Links
    * This enhancement reduces the delay for the user to be redirected to the app since it is no longer necessary to do base 64 decoding.
    * Knowledge Base Article: [iOS Univesal links](https://www.sparkpost.com/docs/tech-resources/ios-universal-links/)

### 18 April, 2016

* **New Feature:** Subaccounts
    * Service providers will be able to manage multiple customers within a single SparkPost account. This includes API keys, sending domains, data,  suppression lists, and more
    * Knowledge Base Article: [Subaccount in SparkPost and SparkPost Elite](https://www.sparkpost.com/docs/user-guide/subaccounts/)

### 17 March, 2016

* **New Feature:** Recipient List is now in the UI
    * Customers can now create, replace or delete their recipient list(s) in the web UI. You can upload a csv file to create a new list or replace an existing list.
    * Knowledge Base Article: [Uploading and Storing a Recipient List as a CSV File](https://www.sparkpost.com/docs/user-guide/uploading-recipient-list/)
* **Change:** Template UI shows verified sending domains only
    * Now that SPE customers are required to have verified sending domains, the "Email From Domain" dropdown in the Template UI shows only verified sending domains.

### 25 February, 2016

* **Enhancement:** iOS Universal Links will now support using different paths for web browser vs. mobile app while maintaining click-tracking functionality
    * Knowledge Base Article: [iOS9 Universal Links](https://support.sparkpostelite.com/customer/portal/articles/2231112-ios9-universal-links-support)

### 4 February, 2016

* **Enhancement:** Reporting-Only User will be able to see (though not edit) individual message templates

### 21 January, 2016

* **New Feature:** Reporting-Only User
    * Users can be assigned a Reporting-Only role which limits their access to viewing reports and the list of templates in the user interface.
* **Change:** Changed the metric used to update the dynamic watched domain list in the Summary Report
    * Previously it was based on injected/receptions, and now it will be based on the Targeted metric (receptions + rejections) for the past 30 days and will be updated daily.

### 06 January, 2016

* **New Feature:** Single Sign On (SSO) using One-Login
    * SparkPost Elite Customers who would like to use SSO using One-Login (onelogin.com) should contract their TAM for configuration instructions.
    * [Knowledge Base Article: Single Sign On (SSO)](http://support.sparkpostelite.com/customer/portal/articles/2278377-single-sign-on-sso-)
* **Enhancement:** Relay Webhooks inbound domain is now a self-service feature
    * An API is available which allows customers to define the address to which inbound messages are sent.

        [https://www.sparkpost.com/api?_ga=1.161733756.1911485710.1413377245#/reference/inbound-domains](https://www.sparkpost.com/api?_ga=1.161733756.1911485710.1413377245#/reference/inbound-domains)

* **Change:** We have changed the the error code for "Unconfigured or unverified sending domain”
    * The SparkPost code changed from from 1100 to 7001 in the Transmissions and Templates APIs.
    * The HTTP code changed from HTTP 403 and now it is HTTP 400.
    * API documentation here [https://www.sparkpost.com/api#/reference/transmissions/create/create-a-transmission](https://www.sparkpost.com/api#/reference/transmissions/create/create-a-transmission)
* **Change:** This change will only effect those customers that use the "Top domains only" option in the Summary report. Previously the watched domain list was a static list of the top ISPs. This has been changed so that it is updated weekly based on the each Elite customer's sending volumes. It is now the top 100 domains based on the injected/receptions for the past month. 

### 17 December, 2015

* **New Report:** Message Events
    * Search for events for a specific recipient email address
    * Narrow the search to a specific date range
    * [Knowledge Base Article: Message Events Reporting in the UI](http://support.sparkpostelite.com/customer/portal/articles/2240051-message-events-reporting-in-the-ui)
* **Enhancement:** Sending Domains API and UI. **NOTE: Existing Elite Customers should check with their TAM on when this will be available in their specific environment**
    * Self service for setting up new sending domains
    * Sending domains verification
    * [Knowledge Base Article: Managing Sending Domains](http://support.sparkpostelite.com/customer/portal/articles/2253608-sending-domains-api-)
* **Change:** Users no longer required to re-enter their password to create API Keys
* **Change:** Increased subject line character limit from 64 to 256 characters
