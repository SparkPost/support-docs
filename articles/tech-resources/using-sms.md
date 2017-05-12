---
title: "Using SMS in SparkPost Enterprise"
description: "Note This Knowledge Base Article Is For Spark Post Enterprise Only Using Outbound SMS in Spark Post Enterprise Spark Post Enterprise can be configured to send text messages SMS to mobile devices The following article details the necessary items needed to complete the configuration as well as the execution of..."
---

**Note:** This Knowledge Base Article Is For SparkPost Enterprise Only

SparkPost Enterprise can be configured to send text messages (SMS) to mobile devices. The following article details the necessary items needed to complete the configuration as well as the execution of transmission API calls to send the messages. This article is intended for technical audiences.

## Table of Contents

* [1. What do I need to provide SparkPost to configure my environment to * send SMS messages?](#what-do-i-need-to-provide-sparkpost-to-configure-my-environment-to-send-sms-messages)
* [2. Originating Address (OA)/ESME Address](#originating-addressesme-address)
* [3. Segmented Messages](#segmented-messages)
* [4. SMS Alphabet usage on SparkPost Enterprise](#sms-alphabet-usage-on-sparkpost-enterprise)
* [5. SMS Delivery Reports](#sms-delivery-reports)
* [6. SMS Replies](#sms-replies)
* [7. Authorization and Security](#authorization-and-security)
* [8. SMS Webhook/Message Event Samples](#webhookmessage-events-samples)
* [9. API Example](#api-example)

### What do I need to provide SparkPost to configure my environment to send SMS messages?

The following items should be provided to your technical account manager (TAM) in order to begin configuring your environment:

* SMPP username/password credentials (we strongly suggest providing these over the phone)
* Server IP and port of SMPP binding
* SMPP default email address (will be used in case of relay webhook failure; customer must provide or SparkPost can set up an internal email for monitoring if you do not have one)
* HTTP Endpoint for Relay Webhook
* SMSC IP Address(es)
* SMSC port
* SMS originating address (+TON/NPI)
* Connection requirements, if any (e.g. TLV)
* Binding type - receiver, transmitter, or transceiver
* Whether or not you intend to use segmented messages
* Which alphabet you want your messages to use
* Whether you wish to receive delivery reports
* Whether you wish to receive replies
* Your aggregator service name

If your aggregator is not an aggregator we are already working with, we will need to complete an initial setup with that provider. In order to accomplish this, the TAM will ask for a technical contact at the aggregator and supporting documentation.

### Originating Address/ESME Address

The originating address (OA), also known as the "ESME Address", is whom the recipient will see as the sender of the SMS message upon receipt. This term might change depending on the provider; you may see "source_addr" and "Sender ID" used to reference the OA. The three types of originating addresses you might use are:

* **Alphanumeric Shortcodes** - You can brand your messages with an alphanumeric address (e.g. "*Target*" or "*21Forever*"), but your users will *not* be able to reply to these messages. Alphanumeric shortcodes are usually limited to 11 characters in length, and may require special permission from your aggregator to use. These shortcodes may be subject to heavier restriction on the values you can use than the other types. Note that these are typically regionally locked.
* **Numeric Shortcodes** - Numeric shortcodes, such as "34567" may be used as your OA. These are often network-specific, but cross network shortcodes that can accept replies are available, though they may carry a fee to use. Like alphanumeric shortcodes, these are often region locked as well. More info on shortcodes and shortcode service providers can be found [here](http://www.short-codes.com/).
* **Long Numbers** - Long number shortcodes are numeric codes that follow the E.164 telecommunication numbering plan guidelines. For examples, a long number shortcode present in the UK would begin with *44* and one in the US would begin with *1*. If you need universal routing, an E.164 number is the best option.

There are two technical settings which relate to the OA, called the *TON* (type of number) and *NPI* (numbering plan indicator). Your aggregator will be able to tell you which to use depending on which type of shortcode you are using.

### Segmented Messages

An SMS message segment is usually between 140 and 160 characters, depending on the network and the alphabet used. You may wish to send messages longer than that, and mobile devices allow for a way to accomplish this through *segmentation.* Using this method, long messages are split into smaller messages by the sending device and recombined at the receiving end. Each message is then billed separately (this includes from the aggregate provider to you, and to the receiver's SMS allotment in their mobile plan in the USA). This process is nearly transparent to the user, appearing as a single long text message. SparkPost Enterprise will automatically send segmented messages provided it is configured according to your aggregator's specifications.

### SMS Alphabet Usage on SparkPost Enterprise

By default, SparkPost will create SMS messages in the [GSM 03.38 alphabet](https://en.wikipedia.org/wiki/GSM_03.38), which is a modified version of ASCII that fits a single character into 7 bits. The advantage of 7-bit encoding is being able to fit more than 140 characters per message segment than other alphabet options. This is how SMS messages can achieve up to 160 characters in just 140 octets. While *GSM 03.38*       does contain common special characters such as € and £, it may not include all the characters you need. If you need other alphabets available to you, please contact your technical account manager, as SparkPost needs to configure this option for you.

### SMS Delivery Reports

Delivery reports are automated messages that inform you if the mobile device received your message. Your aggregator will recommend the best option for you to use; please inform your TAM whether or not you intend to use this feature, and if so how, when beginning an SMS integration with us.

### SMS Replies

It is considered best practices to accept SMS replies to your originating address. Replies are often made in the form of keywords that are meant to invoke specific actions, the two most common being "STOP" and "HELP". SparkPost can be configured to accept SMS replies through the use of our [Relay Webhooks](https://developers.sparkpost.com/api/relay-webhooks.html), which takes inbound messages and converts them to a JSON format, which is then pushed to a webhook endpoint of your choosing. *It will ultimately be your responsibility to respond to these requests once you receive them through the relay webhooks*, as SparkPost Enterprise cannot be configured to auto-reply to SMS replies or perform other automated follow-up actions in response.

While the setup of relay webhooks for *email* replies is fully self-service, setup of a relay webhook to accept SMS replies necessitates that the setup must be completed by SparkPost on your behalf. As part of any standard SMS integration, we will complete this task once your originating address has been configured on our system.

Here are two webhook examples for STOP and HELP replies to the shortcode `12345`:

**STOP:**

```json
{
  "msys": {
    "relay_message": {
      "protocol": "smpp",
      "to": "12345",
      "date": "Wed, 14 Sep 2016 15:41:13 -0400",
      "from": "8005551234",
      "text": "STOP",
      "customer_id": "1",
      "webhook_id": "12363818881515528"
    }
  }
}
```

**HELP:**

```json
{
  "msys": {
    "relay_message": {
      "protocol": "smpp",
      "to": "12345",
      "date": "Wed, 14 Sep 2016 15:41:13 -0400",
      "from": "8005551234",
      "text": "HELP",
      "customer_id": "1",
      "webhook_id": "12363818881515528"
    }
  }
}
```

### Authorization and Security

Because SparkPost Enterprise's public IP addresses are subject to change, Sparkpost recommends choosing a vendor that relies on TLS security, and uses SMPP username and password based authentication as opposed to IP whitelisting. SparkPost does not recommend an aggregator using a VPN-based security due to complications this introduces with cloud infrastructure. 

### Webhook/Message Events Samples

It is important to note that retries are not done from SparkPost to the aggregator unless we are unable to reach the aggregator for some reason. If we are able to successfully deliver a message to the aggregator service, the "delivery" event marking such indicates that the aggregator has accepted sole responsibility for the SMS message at that point. Any retries which occur afterwards will be solely between the aggregator and the target number's carrier service.

If you have chosen to ingest delivery reports from your aggregator service, you will receive final disposition of SMS messages; otherwise, SparkPost will not contain any additional information about message disposition other than if we were successful in delivering the message to the aggregator service for final end-user delivery.

You can find information about the fields related to SMS messaging and their definitions by querying the Message Events API documentation endpoint. Full documentation on this procedure can be found in our API documentation [here.](https://developer.sparkpost.com/api/message-events.html#message-events-events-documentation-get)

The following is an example of a message event of an outbound SMS message:

```json
  "binding": "52.27.255.213",
  "binding_group": "outbound",
  "campaign_id": "SMS demo",
  "customer_id": "1",
  "delv_method": "smpp",
  "event_id": "66446049471016381",
  "friendly_from": "[sedemo@demo-t.sparkpostelite.<wbr>com](mailto:sedemo@demo-t.sparkpostelite.com)",
  "ip_address": "52.8.114.128",
  "ip_pool": "outbound",
  "message_id": "00037f4422581e0ccad9",
  "msg_size": "3",
  "num_retries": "0",
  "queue_time": "168",
  "recv_method": "rest",
  "routing_domain": "[us.sms.int](http://us.sms.int/)",
  "sending_ip": "52.27.255.213",
  "sms_coding": "ASCII",
  "sms_dst": "15551234",
  "sms_dst_npi": "E164",
  "sms_dst_ton": "International",
  "sms_remoteids": {
    "0": "a92d84ab"
  },
  "sms_segments": "1",
  "sms_src": "28444",
  "sms_src_npi": "E164",
  "sms_src_ton": "Unknown",
  "subject": "This will be ignored",
  "tdate": "2016-11-08T21:32:47.000Z",
  "template_id": "template_66446049463557000",
  "template_version": "0",
  "transmission_id": "66446049463557000",
  "type": "delivery",
  "timestamp": "2016-11-08T21:32:47.000+00:00"
```

### API Example

SparkPost Enterprise uses the [transmissions API](https://developers.sparkpost.com/api/transmissions) to send SMS messages, with several nuances:

* The intended repicient's mobile phone number is provided in the `email` key-value pair. The portion to the **left** of the @ sign is the recipient's mobile number, and the portion to the **right** of the @ sign is the aggregator account provided by your TAM. Note that if you have only one aggregator, this value will always be the same, but if you have more than one aggregator, you will need to ensure this value is set correctly.
* The content of the message is provided in the `text` key-value pair. The text should be formatted as printable characters following standard JSON encoding rules. **Please note** that characters such as *newline* (\n) are counted against the character limit.
* The subject content is disregarded for SMS messages to simplify getting the entire payload from the text field, but is a required key value pair for the transmission call to be accepted.
* Stored templates may be used for SMS. Please note, only the text version of the stored template will be used; HTML-only or the HTML portion of a multipart template will be ignored.
* The JSON payload **must** be encoded using UTF-8. Character translation into 7-bit happens in an internal layer in SparkPost Enterprise.
* It is **HIGHLY RECOMMENDED** that you turn click tracking off for any SMS messages, whether triggered by the API or SMTP. If click tracking is left on, links will be transformed and will cause your SMS message character size to bloat well beyond 140 characters. The API example below shows click tracking turned off, but more information about this option can be found in our [transmissions API documentation](https://developers.sparkpost.com/api/transmissions#header-options-attributes).

Here is an example API call sending two SMS messages to two different mobile devices:

```json
{
  "options": {
    "open_tracking": true,
    "click_tracking": false
  },
  "campaign_id": "SMS notifications",
  "return_path": "bounces-marketing@demo-t.sparkpostelite.com",
  "metadata": {
    "mailtype": "SMS",
    "binding": "outbound"
  },
  "substitution_data": {},
  "recipients": [
    {
      "address": {
        "email": "19999999999@us.sms.int",
        "name": "John Doe SMS"
      },
      "substitution_data": {}
    },
    {
      "address": {
        "email": "19999998888@us.sms.int",
        "name": "Jane Doe SMS"
      },
      "substitution_data": {}
    }
  ],
  "content": {
    "from": {
      "name": "SMS Notifications",
      "email": "notices@demo-t.sparkpostelite.com"
    },
    "subject": "This will be discarded",
    "text": "Hi {{address.name}} \nThis SMS notifications is a demo. \nClick here for our site ==> http://www.mesagesystems.com",
    "html": "<p>This will be discarded</p>"
  }
}
```
