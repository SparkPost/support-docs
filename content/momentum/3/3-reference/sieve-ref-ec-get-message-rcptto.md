---
lastUpdated: "03/26/2020"
title: "ec_get_message_rcptto"
description: "ec get message rcptto Return the rcptto of the current message ec get message rcptto ec get message rcptto returns the rcptto of the current message It has the form of RCPT TO bar bar com In the following script the rcptto is checked against a specific value and the..."
---

<a name="sieve.ref.ec_get_message_rcptto"></a> 
## Name

ec_get_message_rcptto — Return the rcptto of the current message.

## Synopsis

`ec_get_message_rcptto`

<a name="idp29701216"></a> 
## Description

`ec_get_message_rcptto` returns the rcptto of the current message. It has the form of RCPT TO:<bar@bar.com>.

In the following script, the rcptto is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_rcptto"></a> 


```
$rcpt = ec_get_message_rcptto;
if not ec_test :contains "${rcpt}" "RCPT TO:<bar@bar.com>" {
  ec_action 550 "ec_get_message_rcptto failed (read ${rcpt})";
}
```