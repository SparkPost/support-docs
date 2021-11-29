---
lastUpdated: "02/08/2020"
title: "Using CC and BCC with the REST API"
description: "Before getting started please read What are the differences between CC BCC and archive recipients Note to use CC BCC and Archiving with SMTP check out our SMTP API reference documentation Note Please be advised that CC and BCC messages count towards your usage What is CC CC is a..."
---

Before getting started please read [What are the differences between CC, BCC, and archive recipients?](https://www.sparkpost.com/docs/faq/cc-bcc-archive-recipients/)

Note: to use CC, BCC, and Archiving with SMTP, check out our [SMTP API reference documentation](https://developers.sparkpost.com/api/#/reference/smtp-api).
Note: Please be advised that CC and BCC  messages count towards your usage.

### What is CC?

CC is a way to send a message to secondary recipients (those who were *CC'd*) while allowing them to see the primary (*To*) recipient and the other CC'd recipients.  This effect is achieved by controlling who appears in the *To* and *CC* headers of a message.  To learn how to do this with the SparkPost API, read on.

### What is BCC?

BCC is a way to send a message to secondary recipients who are ***not visible*** to the other recipients. This is also achieved by controlling the *To* and *CC* headers. To learn how to send messages to BCC recipients, read on.

### What is Archiving?

It is possible to specify a list of one or more recipients who will receive a copy* of the message that was sent to the recipient specified in the “To” header.  In particular, any encoded links intended for the `RCPT TO` recipient will appear “as is” in messages destined for the archive recipients.  This feature is useful for use cases that require the copy of sent messages to be forwarded to a mail store for archiving or auditing purposes.

**Note:** Archiving is only supported with the SMTP API.  You cannot do archiving with the REST API.

### SparkPost API Support

A message's *To* header controls what email clients show in their *To* fields and the *CC* header allows similar control over the email client's *CC* field.

By default, the SparkPost Transmission endpoint puts the recipient's email address in the *To* header. However, it also offers you control over the *To* header through the per-recipient header_to field.  You can also include your own headers with a message using the content.headers field. These capabilities together let you create the CC and BBC effect for each of your recipients.

*Note: each recipient you want to send your message to **must** have an entry in your recipient list at transmission time.  Setting the CC and BCC header does not affect the recipients SparkPost will deliver to, just the way the message appears in each recipient's email client.*


### CC Example

To create the CC effect for a recipient, you would set header_to to the primary recipient and include your CC recipient in a CC header.  Here's an example [transmission request](https://developers.sparkpost.com/api/#/reference/transmissions/create):
```
{
  "recipients": [
    {
      "address": {
        "email": "to@thisperson.com"
      }
    },
    {
      "address": {
        "email": "cc@thatperson.com",
        "header_to": "to@thisperson.com"
      }
    }
  ],
  "content": {
    "from": "you@fromyou.com",
    "headers": {
      "CC": "cc@thatperson.com"
    },
    "subject": "To and CC",
    "text": "This mail was sent to to@thisperson.com while CCing cc@thatperson.com."
  }
}
```

### BCC Example

To create the BCC effect for a recipient, you would put the primary recipient into header_to for each CC or BCC recipient.  Here's an example transmission request with a primary recipient and a BCC recipient:
```
"recipients": [
    {
      "address": {
        "email": "to@thisperson.com"
      }
    },
    {
      "address": {
        "email": "bcc@thatperson.com",
        "header_to": "to@thisperson.com"
      }
    }
  ],
  "content": {
    "from": "you@fromyou.com"
    "subject": "To and BCC",
    "text": "This mail was sent To to@thisperson.com while BCCing an unnamed recipient. Sneaky."
  }
}
```

### CC and BCC Example

Finally, here's an example with both CC and BCC recipients.  You set header_to to the primary recipient on all CC and BCC recipients and you put only the CC recipients into a CC header.  Remember to leave BCC recipients out of your CC header.  Here's a full sample transmission request:
```
{
  "recipients": [
    {
      "address": {
        "email": "to@thisperson.com"
      }
    },
    {
      "address": {
        "email": "cc@thatperson.com",
        "header_to": "to@thisperson.com"
      }
    },
    {
      "address": {
        "email": "bcc@thatperson.com",
        "header_to": "to@thisperson.com"
      }
    }
  ],
  "content": {
    "from": "you@fromyou.com",
    "headers": {
      "CC": "cc@thatperson.com"
    },
    "subject": "To, CC and BCC",
    "text": "This mail was sent To to@thisperson.com while CCing cc@thatperson.com and BCCing an unnamed recipient. You know who you are."
  }
}
```
