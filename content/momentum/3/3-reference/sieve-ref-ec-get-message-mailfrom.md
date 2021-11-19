---
lastUpdated: "03/26/2020"
title: "ec_get_message_mailfrom"
description: "ec get message mailfrom Return the mailfrom of the current message ec get message mailfrom ec get message mailfrom returns the mail from of the current message It has the form of MAIL FROM bar bar com In the following script the mailfrom is checked against a specific value and..."
---

<a name="sieve.ref.ec_get_message_mailfrom"></a> 
## Name

ec_get_message_mailfrom — Return the mailfrom of the current message.

## Synopsis

`ec_get_message_mailfrom`

<a name="idp29654944"></a> 
## Description

`ec_get_message_mailfrom` returns the mail from of the current message. It has the form of MAIL FROM:<bar@bar.com>.

In the following script, the mailfrom is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_mailfrom"></a> 


```
$mfrom = ec_get_message_mailfrom;
if not ec_test :contains "${mfrom}" "MAIL FROM:<bar@bar.com>" {
  ec_action 550 "ec_get_message_mailfrom failed (read ${mfrom})";
}
```