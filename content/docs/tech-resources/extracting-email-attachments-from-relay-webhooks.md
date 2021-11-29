---
lastUpdated: "02/08/2020"
title: "Extracting Email Attachments From Relay Webhooks"
description: "psparkpost a href https developers sparkpost com api relay webhooks html relay webhooks are a way to receive email to your own HTTP endpoints For each email sent to your inbound domain Spark Post will call your endpoint with a JSON request containing the message with headers already parsed out..."
---

[Relay webhooks](https://developers.sparkpost.com/api/relay-webhooks.html) are a way to receive email to your own HTTP endpoints. For each email sent to your [inbound domain](https://developers.sparkpost.com/api/inbound-domains.html), SparkPost will call your endpoint with a [JSON request](https://developers.sparkpost.com/api/relay-webhooks.html#header-example-payloads) containing the message with headers already parsed out into an array.

Many of our users also need to extract file attachments from the email.  Here are some outline steps and sample code showing how to receive emails via relay webhooks and extract any attached files.

 ## Prerequisites

 Before receiving email via relay webhook, the following setup steps are required:

1. Register your domain name in the DNS
1. Configure your domain as an inbound domain on your SparkPost account ([details here](https://developers.sparkpost.com/api/inbound-domains.html))
1. Prepare a publicly-accessible HTTP endpoint capable of receiving POST requests with JSON-formatted bodies. Sample code for this step is provided below.

## Retrieving Attachments Through Your Relay Webhook

1. Receive POST request from SparkPost relay webhook service
1. Parse email body using MIME library for your chosen language / framework
1. Extract attachments from MIME email structure

## PHP Relay Webhook Attachments Sample Code

```php
<?php
/* Dependencies:
 * - php-mime-mail-parser (https://github.com/php-mime-mail-parser/php-mime-mail-parser)
 * - The mailparse extension  (http://php.net/manual/en/book.mailparse.php)
 */
require 'vendor/autoload.php';

$messages = json_decode(file_get_contents('php://input'));

foreach ($messages as $msg) {
  $emailBody = $msg->msys->relay_message->content->email_rfc822;
  if ($msg->msys->relay_message->content->email_rfc822_is_base64) {
    $emailBody = base64_decode($emailBody);
  }

  // Parse the message, save and list attachments
  $parser = new PhpMimeMailParser\Parser();
  $parser->setText($emailBody);

  $parser->saveAttachments('/somewhere/safe/');

  $attachments = $parser->getAttachments();
  foreach ($attachments as $file) {
    echo('Filename: ' . $file->getFilename() . '
');
  }
}
?>
```

## Python Relay Webhook Attachments Sample Code

```python
"""Receive an extract email attachments using SparkPost relay webhooks.

Prerequisites:
 - An inbound domain: https://developers.sparkpost.com/api/inbound-domains.html
 - A relay webhook: https://developers.sparkpost.com/api/relay-webhooks.html

Dependencies:
 - flask
"""

from flask import Flask, request
from base64 import b64decode
from email import message_from_string

app = Flask(__name__)

@app.route('/', methods=['POST'])
def receive_messages():
    messages = request.get_json(silent=True)
    for msg in messages:
        content = msg['msys']['relay_message']['content']
        body = content['email_rfc822']
        if content['email_rfc822_is_base64']:
            body = b64decode(body)

        email = message_from_string(body)

        first_text = False
        first_html = False
        for part in email.walk():
            if part.get_content_maintype() == 'multipart':
                continue
            if not first_text and part.get_content_type() == 'text/plain':
                first_text = True
                continue
            if not first_html and part.get_content_type() == 'text/html':
                first_html = True
                continue
            with open(part.get_filename(), 'wb') as fp:
                fp.write(part.get_payload(decode=True))
            print('Filename: %s' % part.get_filename())
    return 'Received %d message(s)' % len(messages)
```

## Node.js Relay Webhook Attachments Sample Code

```javascript
'use strict';

/* Receive and extract email attachments using SparkPost relay webhooks.
 *
 * Prerequisites:
 *  - An inbound domain: https://developers.sparkpost.com/api/inbound-domains.html
 *  - A relay webhook: https://developers.sparkpost.com/api/relay-webhooks.html
 */

/*
  "dependencies": {
    "body-parser": "^1.15.2",
    "express": "^4.14.0",
    "mailparser": "^0.6.1"
  }
 */
let express = require('express')
  , bodyParser = require('body-parser')
  , fs = require('fs')
  , MailParser = require('mailparser').MailParser
  , port = process.env.PORT || 3000
  , app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
  req.body.forEach(msg => {
    let content = msg.msys.relay_message.content
      , body = content.email_rfc822
      , parser = new MailParser({
        streamAttachments: true
      });

    if (content.email_rfc822_is_base64) {
      body = Buffer.from(body, 'base64');
    }

    parser.on('attachment', (attachment, mail) => {
      console.log(`Writing ${attachment.fileName}...`);
      attachment.stream.pipe(fs.createWriteStream(attachment.generatedFileName));
    });

    parser.on('end', mail => {
      res.status(200).end();
    });

    parser.write(body);
    parser.end();
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});</h3prerequisites<></psparkpost<a>
```
