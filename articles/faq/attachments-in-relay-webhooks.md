---
title: "Attachments In Relay Webhooks"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2472984-attachments-in-relay-webhooks"
description: "Relay webhooks described here offer a way to instruct Spark Post to receive mail on your behalf and forward it to you over HTTP for your own consumption The relay webhook service presents received messages to your own HTTP endpoint inside a JSON payload The whole message body is included..."
---

Relay webhooks, [described here](https://developers.sparkpost.com/api/relay-webhooks), offer a way to instruct SparkPost to receive mail on your behalf and forward it to you over HTTP for your own consumption.

The relay webhook service presents received messages to your own HTTP endpoint inside a JSON payload.  The whole message body is included in the JSON payload inside the content.email_rfc822 field.

To access attachments in a message received via relay webhook, you must parse the content.email_rfc822 field using a MIME parsing library for the language of your choice.

Note that, if content.email_rfc822_is_base64 is true in your payload, you will have to base64 decode content.email_rfc822 before parsing.

Common MIME libraries include:

*   [Python 2 email package](https://docs.python.org/2/library/email.html)
*   [Python 3 email package](https://docs.python.org/3/library/email.html)
*   [PHP Mailparse extension](http://php.net/manual/en/book.mailparse.php)
*   [Node.js mailparser package](https://www.npmjs.com/package/mailparser)
*   [JavaMail API](https://java.net/projects/javamail/pages/Home) and [Apache Commons Email](http://commons.apache.org/proper/commons-email/)