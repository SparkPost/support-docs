---
lastUpdated: "03/26/2020"
title: "ec_get_message_size"
description: "ec get message size Return the size of the current message ec get message size ec get message size returns the size of the current message in bytes It returns this as a string In the following script the size is checked and if it is greater than 1 megabyte..."
---

<a name="sieve.ref.ec_get_message_size"></a> 
## Name

ec_get_message_size — Return the size of the current message.

## Synopsis

`ec_get_message_size`

<a name="idp29779168"></a> 
## Description

`ec_get_message_size` returns the size of the current message in bytes. It returns this as a string.

In the following script, the size is checked and if it is greater than 1 megabyte the message is permanently failed.

<a name="example.ec_get_message_size"></a> 


```
$n = ec_get_message_size;
if ec_test :value "ge" :comparator "i;ascii-numeric" $n 1048576 {
  ec_action 550 "message too large.";
}
```