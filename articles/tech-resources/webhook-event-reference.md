---
title: "Webhook Event Reference"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/1976204-webhook-event-reference"
description: "This is a reference guide for developers who are consuming Spark Post Webhook Events and need to understand the structure of the events being sent If you would like Spark Post to begin transmitting events to a server for your web or mobile application to begin receiving near real time..."
---

This is a reference guide for developers who are consuming SparkPost Webhook Events and need to understand the structure of the events being sent. If you would like SparkPost to begin transmitting events to a server for your web or mobile application to begin receiving near real-time detailed information about your SparkPost Email Transmissions, learn about [Defining Webhooks](https://support.sparkpost.com/customer/portal/articles/1929974-defining-webhooks).

There are several types of events that SparkPost is able to send which provide you data concerning your email's life cycle. They are organized by Event Types which contain various Events with each Event being composed of Event Properties. You can use the [SparkPost API Webhook Resource](https://developers.sparkpost.com/api/#/reference/webhooks) to discover sample payloads of selected events, and the sample values and event descriptions. To list descriptions of the events, event types, and event fields that could be included in a Webhooks post to your target URL, run the following call in a REST API client like Postman:
 https://api.sparkpost.com/api/v1/webhooks/events/documentation

### Event Types

Events which are sent from SparkPost webhooks are organized into different event types. Below is a table that provides you with a list of these event types and map containing each event which fall into their respective event types.

| 

Event Type

 | 

Event

 | 

Description

 | 

Sample Value

 |
| --- | --- | --- | --- |
| 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> message_
event

 |  | Message events describe the life cycle of a message including injection, delivery, and disposition.

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style>

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Message Events

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> bounce

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Remote MTA has permanently rejected a message.

 | 

Bounce

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> delivery

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Remote MTA acknowledged receipt of a message.

 | 

Delivery

 |
|  | 

injection

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Message is received by or injected into SparkPost.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Injection

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> sms_status

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> SMPP/SMS message produced a status log output

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> SMS Status

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> spam_
complaint

 | 

Message was classified as spam by the recipient.

 | 

Spam Complaint

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> out_of_band

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Remote MTA initially reported acceptance of a message, but it has since asynchronously reported that the message was not delivered.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Out of Band

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> policy_
rejection

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Due to policy, SparkPost rejected a message or failed to generate a message.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Policy Rejection

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> delay

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Remote MTA has temporarily rejected a message.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Delay

 |
| 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> track_event

 |  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Engagement events describe the behavior of a recipient with respect to the message sent.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Engagement Events

 |
|  | 

click

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Recipient clicked a tracked link in a message, thus prompting a redirect through the SparkPost click-tracking server to the link's destination.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Click

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> open

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Recipient opened a message in a mail client, thus rendering a tracking pixel.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Open

 |
| 

gen_event

 |  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Generation events provide insight into message generation failures or rejections.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Generation Events

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> generation_
failure

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Message generation failed for an intended recipient.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Generation Failure

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> generation_
rejection

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> SparkPost rejected message generation due to policy.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Generation Rejection

 |
| 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> unsubscribe_
event

 |  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Unsubscribe events provide insight into the action the user performed to become unsubscribed.

 | 

Unsubscribe Events

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> list_
unsubscribe

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> User clicked the 'unsubscribe' button on an email client.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> List Unsubscribe

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> link_
unsubscribe

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> User clicked a hyperlink in a received email.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Link Unsubscribe

 |
| 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> relay_event

 |  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Relay events describe the life cycle of an inbound message including injection, delivery, and disposition.

 | 

Relay Events

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> relay_
injection

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Relayed message is received by or injected into SparkPost.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Relay Injection

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> relay_
rejection

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> SparkPost rejected a relayed message or failed to generate a relayed message.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Relay Rejection

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> relay_
delivery

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Remote HTTP Endpoint acknowledged receipt of a relayed message.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Relay Delivery

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> relay_
tempfail

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Remote HTTP Endpoint has failed to accept a relayed message.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Relay Temporary Failure

 |
|  | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> relay_
permfail

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Relayed message has reached the maximum retry threshold and will be removed from the system.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Relay Permanent Failure

 |

<script id="event-type-template" type="text/x-handlebars-template"><table id="event-types"> <thead> <tr> <td>Event Type</td> <td>JSON Key</td> <td>Description</td> <td>Events</td> </tr> </thead> <tbody> {{#each this}} <tr> <td>{{ name }}</td> <td>{{ key }}</td> <td>{{ description }}</td> <td>{{ events }}</td> </tr> {{/each}} </tbody> </table></script>

### Events

Each event which SparkPost sends you about your email transmissions has some valuable recipient-level information about every email SparkPost sends on your domain's behalf. EVERY event created by SparkPost has a "type" property which refers to the Event Type JSON Key.

<script id="events-template" type="text/x-handlebars-template"><table id="events"> <thead> <tr> <td>Event</td> <td>JSON Key</td> <td>Description</td> <td>Event Properties(full description below)</td> </tr> </thead> <tbody> {{#each this}} <tr> <td>{{ name }}</td> <td>{{ key }}</td> <td>{{ description }}</td> <td>{{ props }}</td> </tr> {{/each}} </tbody> </table></script>

### Event Properties

Each event has different properties which are described below for your reference. You can also use the SparkPost API Webhook resource's "[List sample values and event descriptions](https://developers.sparkpost.com/api/#/reference/webhooks/events-documentation)" to see a complete set of event properties mapped to each event type. 

| 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> JSON Key

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Description

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Sample Value

 |
| --- | --- | --- |
| 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> bounce_class

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Classification code for a given message (see [Bounce Classification Codes](https://support.sparkpost.com/customer/portal/articles/1929896))

 | 

1

 |
| 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> campaign_id

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Campaign of which this message was a part

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Example Campaign Name

 |
| 

customer_id

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> SparkPost-customer identifier through which this message was sent

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 1

 |
| 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> delv_method

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Protocol by which SparkPost delivered this message

 | 

esmtp

 |
| 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> device_token

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Token of the device / application targeted by this PUSH notification message. Applies only when delv_method is gcm or apn.

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 45c19189783f867973f6e6a5cca60061ffe4fa77c547150563a1192fa9847f8a

 |
| 

dr_latency

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Delivery report latency; interval between message submission and receipt

 | 

0.02

 |
| 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> error_code

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Error code by which the remote server described a failed delivery attempt

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 554

 |
| 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> event_id

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Unique event identifier

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 92356927693813856

 |
| 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> fbtype

 | 

<style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Type of spam report entered against this message (see [RFC 5965 § 7.3](http://tools.ietf.org/html/rfc5965#section-7.3))

 | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> abuse |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> friendly_from | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Friendly sender or "From" header in the original email | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> sender@example.com |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> geo_ip | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Geographic location based on the IP address, including latitude, longitude, city, country, and region | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> {"country":"US","region":"MD","city":"Columbia","latitude":39.1749,"longitude":-76.8375} |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> ip_address | IP address of the host to which SparkPost delivered this message; in engagement events, the IP address of the host where the HTTP request originated | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 127.0.0.1 |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> ip_pool | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> IP pool through which this message was sent | Example-Ip-Pool |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> mailfrom | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Envelope mailfrom of the original email | recipient@example.com |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> message_id | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> SparkPost-cluster-wide unique identifier for this message | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 000443ee14578172be22 |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> msg_from | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Sender address used on this message's SMTP envelope | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> sender@example.com |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> msg_size | Message's size in bytes | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 1337 |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> num_retries | Number of failed attempts before this message was successfully delivered; when the first attempt succeeds, zero | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 2 |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> queue_time | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Delay, expressed in milliseconds, between this message's injection into SparkPost and its delivery to the receiving domain; that is, the length of time this message spent in the outgoing queue | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 12 |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> raw_rcpt_to | Actual recipient address used on this message's SMTP envelope | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Recipient@example.com |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> raw_reason | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Unmodified, exact response returned by the remote server due to a failed delivery attempt | MAIL REFUSED - IP (17.99.99.99) is in black list |
| rcpt_meta | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Metadata describing the message recipient | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> {"customKey":"customValue"} |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> rcpt_subs | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Substitutions applied to the template to construct this message | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> {"country":"US","gender":"Female"} |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> rcpt_tags | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Tags applied to the message which generated this event | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> ["male","US"] |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> rcpt_to | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Lowercase version of recipient address used on this message's SMTP envelope | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> recipient@example.com |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> rcpt_type | Indicates that a recipient address appeared in the Cc or Bcc header or the archive JSON array | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> cc |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> reason | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Canonicalized text of the response returned by the remote server due to a failed delivery attempt | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> MAIL REFUSED - IP (a.b.c.d) is in black list |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> remote_addr | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> IP address of the host from which SparkPost received this message | 127.0.0.1 |
| report_by | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Address of the entity reporting this message as spam | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> [server.email.com](http://server.email.com) |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> report_to | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Address to which this spam report is to be delivered | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> [abuse.example.com](http://abuse.example.com) |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> routing_domain | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Domain receiving this message | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> [example.com](http://example.com) |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> sending_ip | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> IP address through which this message was sent | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 127.0.0.1 |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> sms_coding | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Data encoding used in the SMS message | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> ASCII |
| sms_dst | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> SMS destination address | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 7876712656 |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> sms_dst_npi | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Destination numbering plan identification | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> E164 |
| sms_dst_ton | Type of number for the destination address | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> International |
| sms_remoteids | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> The message ID(s) in the response, assigned by the remote server/SMSC | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> ["0000","0001","0002","0003","0004"] |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> sms_segments | Segment number of the log line for large messages sent through multiple SMSes | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 5 |
| sms_src | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> SMS source address | 1234 |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> sms_src_npi | Source numbering plan identification | E164 |
| sms_src_ton | Type of number for the source address | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Unknown |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> sms_text | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> sms_text | lol |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> stat_state | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Status value in an SMS status event | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Delivered |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> stat_type | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Status type in an SMS status event | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> SMSC Delivery |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> subaccount_id | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Unique subaccount identifier. | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 101 |
| subject | Subject line from the email header | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Summer deals are here! |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> target_link_name | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Name of the link for which a click event was generated | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Example Link Name |
| target_link_url | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> URL of the link for which a click event was generated | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> [http://example.com](http://example.com) |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> template_id | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Slug of the template used to construct this message | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> templ-1234 |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> template_version | Version of the template used to construct this message | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 1 |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> timestamp | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Event date and time, in Unix timestamp format (integer seconds since 00:00:00 GMT 1970-01-01) | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 1454442600 |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> transmission_id | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Transmission which originated this message | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> 65832150921904138 |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> type | Type of event this record describes | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> bounce |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> user_agent | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Value of the browser's User-Agent header | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36 |
| <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> user_str | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> If configured, additional message log information, in user-defined format | <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> Additional Example Information |

<style type="text/css">table { table-layout: fixed; width: 100%; } table, th, td { border: 1px solid #666; border-collapse: collapse; } th, td { padding: 3px; vertical-align: top; word-wrap: break-word; } thead td { font-weight: bold; }</style> <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style> <style type="text/css"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style>