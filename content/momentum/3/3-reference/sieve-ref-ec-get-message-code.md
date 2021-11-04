---
lastUpdated: "03/26/2020"
title: "ec_get_message_code"
description: "ec get message code Returns the current SMTP status code for a message ec get message code ec get message code returns the current SMTP code and description associated with a message The code reflects the status of the message from the point of view of the mail system It..."
---

<a name="sieve.ref.ec_get_message_code"></a> 
## Name

ec_get_message_code — Returns the current SMTP status code for a message

## Synopsis

`ec_get_message_code`

<a name="idp29608832"></a> 
## Description

`ec_get_message_code` returns the current SMTP code and description associated with a message. The code reflects the status of the message from the point of view of the mail system. It has the form of an SMTP response; a three-digit response code followed by a (possibly multiline) textual description, terminated with canonical line endings (CRLF).

If Momentum were to construct an out-of-band bounce message, this code is used as the reason.

In the following script, the codes are checked on each message and logged.

<a name="example.ec_get_message_code"></a> 


```
$log = ec_get_message_code;
ec_log $log;
```