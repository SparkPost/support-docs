---
title: "Webhook Event Reference"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/1976204-webhook-event-reference"
description: "This is a reference guide for developers who are consuming Spark Post Webhook Events and need to understand the structure of the events being sent If you would like Spark Post to begin transmitting events to a server for your web or mobile application to begin receiving near real time..."
---

This is a reference guide for developers who are consuming SparkPost Webhook Events and need to understand the structure of the events being sent. If you would like SparkPost to begin transmitting events to a server for your web or mobile application to begin receiving near real-time detailed information about your SparkPost Email Transmissions, learn about [Defining Webhooks](https://support.sparkpost.com/customer/portal/articles/1929974-defining-webhooks). 

There are several types of events that SparkPost is able to send which provide you data concerning your email's life cycle. They are organized by Event Types which contain various Events with each Event being composed of Event Properties. You can use the [SparkPost API Webhook Resource](https://developers.sparkpost.com/api/#/reference/webhooks) to discover sample payloads of selected events, and the sample values and event descriptions. To list descriptions of the events, event types, and event fields that could be included in a Webhooks post to your target URL, run the following call in a REST API client like Postman:
 https://api.sparkpost.com/api/v1/webhooks/events/documentation

## Event Types

Events which are sent from SparkPost webhooks are organized into different event types. Below is a table that provides you with a list of these event types and map containing each event which fall into their respective event types.

|Event Type|Event|Description|Sample Value|
| --- | --- | --- | --- |
| message_event|  | Message events describe the life cycle of a message including injection, delivery, and disposition.| Message Events |
|  |bounce|Remote MTA has permanently rejected a message.|Bounce|
|  |delivery|Remote MTA acknowledged receipt of a message.|Delivery|
|  |injection|Message is received by or injected into SparkPost.|Injection|
|  |sms_status|SMPP/SMS message produced a status log output|SMS Status|
|  |spam_complaint|Message was classified as spam by the recipient.|Spam Complaint|
|  |out_of_band|Remote MTA initially reported acceptance of a message, but it has since asynchronously reported that the message was not delivered.|Out of Band|
|  |policy_rejection|Due to policy, SparkPost rejected a message or failed to generate a message.|Policy Rejection|
|  |delay|Remote MTA has temporarily rejected a message.|Delay|
|track_event|  |Engagement events describe the behavior of a recipient with respect to the message sent.|Engagement Events|
|  |click|Recipient clicked a tracked link in a message, thus prompting a redirect through the SparkPost click-tracking server to the link's destination.|Click|
|  |open|Recipient opened a message in a mail client, thus rendering a tracking pixel.|Open|
|gen_event|  |Generation events provide insight into message generation failures or rejections.|Generation Events|
|  |generation_failure|Message generation failed for an intended recipient.|Generation Failure|
|  |generation_rejection|SparkPost rejected message generation due to policy.|Generation Rejection|
|unsubscribe_event|  |Unsubscribe events provide insight into the action the user performed to become unsubscribed.|Unsubscribe Events|
|  |list_unsubscribe|User clicked the 'unsubscribe' button on an email client.|List Unsubscribe|
|  |link_unsubscribe|User clicked a hyperlink in a received email.|Link Unsubscribe|
|relay_event|  |Relay events describe the life cycle of an inbound message including injection, delivery, and disposition.|Relay Events|
|  |relay_injection|Relayed message is received by or injected into SparkPost.|Relay Injection|
|  |relay_rejection|SparkPost rejected a relayed message or failed to generate a relayed message.|Relay Rejection|
|  |relay_delivery|Remote HTTP Endpoint acknowledged receipt of a relayed message.|Relay Delivery|
|  |relay_tempfail|Remote HTTP Endpoint has failed to accept a relayed message.|Relay Temporary Failure|
|  |relay_permfail|Relayed message has reached the maximum retry threshold and will be removed from the system.|Relay Permanent Failure|

<script id="event-type-template" type="text/x-handlebars-template"><table id="event-types"> <thead> <tr> <td>Event Type</td> <td>JSON Key</td> <td>Description</td> <td>Events</td> </tr> </thead> <tbody> {{#each this}} <tr> <td>{{ name }}</td> <td>{{ key }}</td> <td>{{ description }}</td> <td>{{ events }}</td> </tr> {{/each}} </tbody> </table></script>

## Events

Each event which SparkPost sends you about your email transmissions has some valuable recipient-level information about every email SparkPost sends on your domain's behalf. EVERY event created by SparkPost has a "type" property which refers to the Event Type JSON Key.

<script id="events-template" type="text/x-handlebars-template"><table id="events"> <thead> <tr> <td>Event</td> <td>JSON Key</td> <td>Description</td> <td>Event Properties(full description below)</td> </tr> </thead> <tbody> {{#each this}} <tr> <td>{{ name }}</td> <td>{{ key }}</td> <td>{{ description }}</td> <td>{{ props }}</td> </tr> {{/each}} </tbody> </table></script>

## Event Properties

Each event has different properties which are described below for your reference. You can also use the SparkPost API Webhook resource's "[List sample values and event descriptions](https://developers.sparkpost.com/api/#/reference/webhooks/events-documentation)" to see a complete set of event properties mapped to each event type. 

|JSON Key|Description|Sample Value|
| --- | --- | --- |
|bounce_class|Classification code for a given message (see [Bounce Classification Codes](https://support.sparkpost.com/customer/portal/articles/1929896))|1|
|campaign_id|Campaign of which this message was a part|Example Campaign Name|
|customer_id|SparkPost-customer identifier through which this message was sent|1|
|delv_method|Protocol by which SparkPost delivered this message|esmtp|
|device_token|Token of the device / application targeted by this PUSH notification message. Applies only when `delv_method` is gcm or apn.|45c19189783f867973f6e6a5cca60061ffe4fa77c547150563a1192fa9847f8a|
|dr_latency|Delivery report latency; interval between message submission and receipt|0.02|
|error_code|Error code by which the remote server described a failed delivery attempt|554|
|event_id|Unique event identifier|92356927693813856|
|fbtype|Type of spam report entered against this message (see [RFC 5965 § 7.3](http://tools.ietf.org/html/rfc5965#section-7.3))|  abuse |
|  friendly_from |  Friendly sender or "From" header in the original email |  sender@example.com |
|  geo_ip |  Geographic location based on the IP address, including latitude, longitude, city, country, and region |  {"country":"US","region":"MD","city":"Columbia","latitude":39.1749,"longitude":-76.8375} |
|  ip_address | IP address of the host to which SparkPost delivered this message; in engagement events, the IP address of the host where the HTTP request originated |  127.0.0.1 |
|  ip_pool |  IP pool through which this message was sent | Example-Ip-Pool |
|  mailfrom |  Envelope mailfrom of the original email | recipient@example.com |
|  message_id |  SparkPost-cluster-wide unique identifier for this message |  000443ee14578172be22 |
|  msg_from |  Sender address used on this message's SMTP envelope |  sender@example.com |
|  msg_size | Message's size in bytes |  1337 |
|  num_retries | Number of failed attempts before this message was successfully delivered; when the first attempt succeeds, zero |  2 |
|  queue_time |  Delay, expressed in milliseconds, between this message's injection into SparkPost and its delivery to the receiving domain; that is, the length of time this message spent in the outgoing queue |  12 |
|  raw_rcpt_to | Actual recipient address used on this message's SMTP envelope |  Recipient@example.com |
|  raw_reason |  Unmodified, exact response returned by the remote server due to a failed delivery attempt | MAIL REFUSED - IP (17.99.99.99) is in black list |
| rcpt_meta |  Metadata describing the message recipient |  {"customKey":"customValue"} |
|  rcpt_subs |  Substitutions applied to the template to construct this message |  {"country":"US","gender":"Female"} |
|  rcpt_tags |  Tags applied to the message which generated this event |  ["male","US"] |
|  rcpt_to |  Lowercase version of recipient address used on this message's SMTP envelope |  recipient@example.com |
|  rcpt_type | Indicates that a recipient address appeared in the Cc or Bcc header or the archive JSON array |  cc |
|  reason |  Canonicalized text of the response returned by the remote server due to a failed delivery attempt |  MAIL REFUSED - IP (a.b.c.d) is in black list |
|  remote_addr |  IP address of the host from which SparkPost received this message | 127.0.0.1 |
| report_by |  Address of the entity reporting this message as spam |  [server.email.com](http://server.email.com) |
|  report_to |  Address to which this spam report is to be delivered |  [abuse.example.com](http://abuse.example.com) |
|  routing_domain |  Domain receiving this message |  [example.com](http://example.com) |
|  sending_ip |  IP address through which this message was sent |  127.0.0.1 |
|  sms_coding |  Data encoding used in the SMS message |  ASCII |
| sms_dst |  SMS destination address |  7876712656 |
|  sms_dst_npi |  Destination numbering plan identification |  E164 |
| sms_dst_ton | Type of number for the destination address |  International |
| sms_remoteids |  The message ID(s) in the response, assigned by the remote server/SMSC |  ["0000","0001","0002","0003","0004"] |
|  sms_segments | Segment number of the log line for large messages sent through multiple SMSes |  5 |
| sms_src |  SMS source address | 1234 |
|  sms_src_npi | Source numbering plan identification | E164 |
| sms_src_ton | Type of number for the source address |  Unknown |
|  sms_text |  sms_text | lol |
|  stat_state |  Status value in an SMS status event |  Delivered |
|  stat_type |  Status type in an SMS status event |  SMSC Delivery |
|  subaccount_id |  Unique subaccount identifier. |  101 |
| subject | Subject line from the email header |  Summer deals are here! |
|  target_link_name |  Name of the link for which a click event was generated |  Example Link Name |
| target_link_url |  URL of the link for which a click event was generated |  [http://example.com](http://example.com) |
|  template_id |  Slug of the template used to construct this message |  templ-1234 |
|  template_version | Version of the template used to construct this message |  1 |
|  timestamp |  Event date and time, in Unix timestamp format (integer seconds since 00:00:00 GMT 1970-01-01) |  1454442600 |
|  transmission_id |  Transmission which originated this message |  65832150921904138 |
|  type | Type of event this record describes |  bounce |
|  user_agent |  Value of the browser's User-Agent header |  Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36 |
|  user_str |  If configured, additional message log information, in user-defined format |  Additional Example Information |
