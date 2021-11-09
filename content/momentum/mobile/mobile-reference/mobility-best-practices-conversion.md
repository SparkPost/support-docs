---
lastUpdated: "03/26/2020"
title: "Message Conversion Parameters"
description: "The following parameters may be used to tailor Email to SMS message conversion and the SMS Email interworking format of Mobile Momentum SMS transmissions SMPP Max Sms Message Size default 140 SMPP Sms Segment Size default 140 SMPP Max Sms From Size default 0 SMPP Max Sms Subject Size default..."
---

The following parameters may be used to tailor Email to SMS message conversion and the SMS/Email interworking format of Mobile Momentum SMS transmissions.

1.  `SMPP_Max_Sms_Message_Size` – default 140

2.  `SMPP_Sms_Segment_Size` – default 140

3.  `SMPP_Max_Sms_From_Size` – default 0

4.  `SMPP_Max_Sms_Subject_Size` – default 10

`SMPP_Max_Sms_Message_Size` restricts the total message length while `SMPP_Sms_Segment_Size` specifies the size of SMS segments. If `SMPP_Max_Sms_Message_Size` is larger than `SMPP_Sms_Segment_Size`, then any messages larger than SMPP_Sms_Segment_Size will be sent in multiple segments as described in the [smpp_max_sms_message_size](/momentum/mobile/mobile-reference/mobility-conf-smpp-max-sms-message-size), "Email to SMS Conversions". `SMPP_Max_Sms_From_Size` and `SMPP_Max_Sms_Subject_Size` are lengths of the email sender address and email subject to include in the SMS message according to the SMS/Email interworking format. `SMPP_Max_Sms_Message_Size` is inclusive of `SMPP_Max_Sms_From_Size` and `SMPP_Max_Sms_Subject_Size`.

```
domain "somewhere.com" {
  ...
  SMPP_Max_Sms_Message_Size = 140
  SMPP_Sms_Segment_Size = 140
  SMPP_Max_Sms_From_Size = 12
  SMPP_Max_Sms_Subject_Size = 10
  ...
}
```

Using the above configuration, the email message `Greetings from Orlando!` from `mailto:mickey@disneyworld.com` with the subject `stay in touch` would result in the following truncated SMS text:

`mickey@disne (stay in to) Greetings from Orlando!`

To turn off email/SMS interworking formatting, set: `SMPP_Max_Sms_Subject_Size = 10` and set `SMPP_Max_Sms_From_Size` from the default to `0`.