---
lastUpdated: "03/26/2020"
title: "Message Conversions, Transformations, and Mappings"
description: "Message conversions refer to the operations needed in order to generate SMS text messages from email and vice versa They include operations on the message content and also identifying an appropriate mapping of the destination address Mobile Momentum also provides four hook points during conversion where custom scripts may implement..."
---

Message conversions refer to the operations needed in order to generate SMS text messages from email and vice versa. They include operations on the message content and also identifying an appropriate mapping of the destination address. Mobile Momentum also provides four hook points during conversion where custom scripts may implement additional conversions and/or customer business logic. The SMPP conversion hook point facilities are described in [“SMS Conversion Hook Points”](/momentum/mobile/mobile-reference/mobility-runtime-hooks).

### <a name="overview-SMPPInterworkingFormat"></a> Email/SMS Interworking Format

Mobile Momentum attempts to use the Email/SMS Interworking Format when converting between email and SMS messages. The Email/SMS Interworking Format refers to textual conventions within the SMS message body facilitating email-SMS conversion. Here is an example of an MO SMS message in the Email/SMS Interworking Format:

```
toemail@example.com(subject text) This is sms message text to be
sent as email to toemail@example.com.
```

Below is an example of an MT SMS message:

```
fromemail@example.com(subject text) This is sms message text
generated from email sent by fromemail@example.com.
```

Unfortunately, this format is not widely supported by mobile handsets thus requiring the handset user to manually generate the interworking format. However, Mobile Momentum supports additional mechanisms to determine destination email addresses for MO SMS text messages. Discussions of these mechanisms appear below in the conversion sections and in [“Message Context Variables”](/momentum/mobile/mobile-reference/mobility-runtime). The [“SMPP Message Conversion Hook Examples”](/momentum/mobile/mobile-reference/mobility-runtime-hooks#mobility.runtime.hook.examples) also provides some use case example scripts demonstrating retrieval and use of addresses from alternative sources.

### <a name="overview-EmailtoSMSConversions"></a> Email to SMS Conversions

Mobile Momentum begins preparation of an SMS message from an email by identifying the message text to be converted. This is the entire message body in the case of non-MIME email. In the case of MIME email, this is the first MIME section with a plain/text content type. The email and target SMS character encodings are identified. The SMS message text is constructed by placing the from-email address, subject, and message body according to the interworking format. The sizes of these SMS message components are limited by respective configuration parameters. The resulting SMS message body is then transcoded to the target character encoding.

Next, the destination phone number must be identified. In the basic use case, the phone number is the user part of the destination email address and is simply extracted from the email address. More advanced use cases may identify and set the destination phone number using customer data sources and/or customer business logic implemented within Mobile Momentum hook points. The destination phone number and the associated source email address and source phone number are saved in the reverse address mapping database. This allows for a mechanism to identify a destination email address when mobile handset users reply to SMS messages.

Finally, the message text, source and destination phone numbers, and several other configurable values are placed into an SMPP `submit_sm` request and sent to the SMSC. If the resulting SMS message text is longer than 140 characters, the message may be sent as segments in multiple SMPP `submit_sm` requests if allowed by the configuration. Otherwise the message is truncated to 140 characters. Segmentation uses the Segmentation and Reassembly (SAR) optional SMPP fields to indicate the current segment number, the total number of segments, and the SAR reference number in each `submit_sm` request. It is up to the handset to reassemble the message segments into a single message. Some handsets lack this functionality and present segments as individual messages. In order to avoid splitting words or web links across messages in this case, the segmentation algorithm breaks up messages along white space boundaries if possible.

### <a name="overview-SMStoEmailConversions"></a> SMS to Email Conversions

Upon receiving a `deliver_sm` request, Mobile Momentum first reassembles segmented messages, if necessary, and extracts the message text. The source email address is constructed using the source phone number and the domain name of the SMPP domain where it received the `deliver_sm.`

The next step is identification of the destination email address. Mobile Momentum first attempts to parse the destination email address (as well as the email subject) from the message text according to the interworking format. Failing this, Mobile Momentum attempts to look up the destination email address in the reverse address mapping database, using the source and destination telephone numbers as selection criteria. If this also fails, Mobile Momentum looks for the default email address specified in the `SMPP_Default_Email_Address` configuration parameter. If a destination email address cannot be identified, Mobile Momentum drops the message and logs the failure. It is also possible to set the destination email address in one of the Mobile Momentum hook points using customer-specific business logic.

When Mobile Momentum has the message text and source and destination email addresses, it begins constructing a MIME email message. If the SMS message text is encoded in the GSM 03.38 character set, Mobile Momentum first transcodes the message text into an "email friendly" character encoding (currently iso-8859-1/Latin-1, although this is targeted to change to a configurable character encoding). Mobile Momentum base64 encodes any 8 bit character encoding (i.e., any non US-ASCII encoding). Finally, Mobile Momentum generates the email message and enqueues it for delivery.