---
lastUpdated: "03/26/2020"
title: "ec_get_message_received_via"
description: "ec get message received via Return the IP address that the message was received via ec get message received via ec get message received via returns the IP address of the interface that the message was received on It returns the address in dot decimal notation 192 126 1 20..."
---

<a name="sieve.ref.ec_get_message_received_via"></a> 
## Name

ec_get_message_received_via — Return the IP address that the message was received via

## Synopsis

`ec_get_message_received_via`

<a name="idp29748160"></a> 
## Description

`ec_get_message_received_via` returns the IP address of the interface that the message was received on. It returns the address in dot-decimal notation, 192.126.1.20 for example.

In the following script, the IP address returned by ec_get_message_received_via is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_received_via"></a> 


```
$ip = ec_get_message_received_via;
if not ec_test :is "${ip}" "127.0.0.1" {
  ec_action 550 "ec_get_message_received_via failed.  Expected 127.0.0.1, got ${ip}";
}
```