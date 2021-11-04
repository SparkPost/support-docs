---
lastUpdated: "03/26/2020"
title: "ec_get_message_received_from"
description: "ec get message received from Return the IP address that the message was received from ec get message received from ec get message received from returns the IP address that the message was sent from It returns the address in dot decimal notation 192 126 1 20 for example In..."
---

<a name="sieve.ref.ec_get_message_received_from"></a> 
## Name

ec_get_message_received_from — Return the IP address that the message was received from

## Synopsis

`ec_get_message_received_from`

<a name="idp29717056"></a> 
## Description

`ec_get_message_received_from` returns the IP address that the message was sent from. It returns the address in dot-decimal notation, 192.126.1.20 for example.

In the following script, the received_from is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_received_from"></a> 


```
$ip = ec_get_message_received_from;
if not ec_test :is "${ip}" "127.0.0.1" {
  ec_action 550 "ec_get_message_received_from failed.  Expected 127.0.0.1, got ${ip}";
}
```