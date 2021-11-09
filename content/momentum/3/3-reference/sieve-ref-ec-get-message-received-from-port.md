---
lastUpdated: "03/26/2020"
title: "ec_get_message_received_from_port"
description: "ec get message received from port Return the port that the message was received from ec get message received from port ec get message received from port returns the port from which the message was received It takes the form of an integer In the following script the received from..."
---

<a name="sieve.ref.ec_get_message_received_from_port"></a> 
## Name

ec_get_message_received_from_port — Return the port that the message was received from.

## Synopsis

`ec_get_message_received_from_port`

<a name="idp29732672"></a> 
## Description

`ec_get_message_received_from_port` returns the port from which the message was received. It takes the form of an integer.

In the following script, the received_from_port is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_received_from_port"></a> 


```
$p = ec_get_message_received_from_port;
if not ec_test :is "${p}" "$port" {
 ec_action 550 "ec_get_message_received_from_port failed.  Expected $port, got ${p}";
}
```