---
lastUpdated: "03/26/2020"
title: "generate_mail_raw"
description: "generate mail raw generate and send out a message generate mail raw from addr to addr addr list text This function generates and sends out a message It sets the envelope from and to using the addresses given and uses the string contained in the third parameter as the message..."
---

<a name="sieve.ref.generate_mail_raw"></a> 
## Name

generate_mail_raw — generate and send out a message

## Synopsis

`generate_mail_raw` { *`from_addr`* } { *`to_addr | addr_list`*              } { *`text`* }

<a name="idp30854608"></a> 
## Description

This function generates and sends out a message. It sets the envelope `from` and `to` using the addresses given and uses the string contained in the third parameter as the message, including message headers and body. It can send a message to multiple recipients if the second parameter is a string list containing multiple addresses.

<a name="example.generate_mail_raw"></a> 


```
$to = "sender@omniti.com";
$from = "rcpt@omniti.com";
generate_mail_raw $from $to text:
From: ${from}
To: ${to}
Subject: a testing email

testing
.
;
```