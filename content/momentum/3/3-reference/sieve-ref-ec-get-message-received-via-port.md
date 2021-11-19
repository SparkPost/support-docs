---
lastUpdated: "03/26/2020"
title: "ec_get_message_received_via_port"
description: "ec get message received via port Return the local port that the message was received on ec get message received via port ec get message received via port returns the local port on which the message was received It takes the form of an integer In the following script the..."
---

<a name="sieve.ref.ec_get_message_received_via_port"></a> 
## Name

ec_get_message_received_via_port — Return the local port that the message was received on.

## Synopsis

`ec_get_message_received_via_port`

<a name="idp29763792"></a> 
## Description

`ec_get_message_received_via_port` returns the local port on which the message was received. It takes the form of an integer.

In the following script, the received_via_port is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_received_via_port"></a> 


```
$p = ec_get_message_received_via_port;
if not ec_test :is "${p}" "$local_port" {
 ec_action 550 "ec_get_message_received_via_port failed.  Expected $local_port, got ${p}";
}
```