---
lastUpdated: "03/26/2020"
title: "ec_get_message_protocol"
description: "ec get message protocol Return the protocol of the current message ec get message protocol ec get message protocol returns the protocol that the message was received via It takes the form of ESMTP ECSTREAM LMTP INTERNAL POP 3 IMAP or CLUSTER In the following script the protocol is checked..."
---

<a name="sieve.ref.ec_get_message_protocol"></a> 
## Name

ec_get_message_protocol — Return the protocol of the current message.

## Synopsis

`ec_get_message_protocol`

<a name="idp29685728"></a> 
## Description

`ec_get_message_protocol` returns the protocol that the message was received via. It takes the form of ESMTP, ECSTREAM, LMTP, INTERNAL, POP3, IMAP, or CLUSTER.

In the following script, the protocol is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_protocol"></a> 


```
$p = ec_get_message_protocol;
if not ec_test :is "${p}" "ESMTP" {
 ec_action 550 "ec_get_message_protocol.  Expected ESMTP, got ${p}";
}
```