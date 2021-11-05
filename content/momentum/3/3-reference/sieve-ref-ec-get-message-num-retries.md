---
lastUpdated: "03/26/2020"
title: "ec_get_message_num_retries"
description: "ec get message num retries Return the num retries of the current message ec get message num retries ec get message num retries returns the number of retries the current message has had It returns this as an integer In the following script the num retries is checked and if..."
---

<a name="sieve.ref.ec_get_message_num_retries"></a> 
## Name

ec_get_message_num_retries — Return the num_retries of the current message.

## Synopsis

`ec_get_message_num_retries`

<a name="idp29670496"></a> 
## Description

`ec_get_message_num_retries` returns the number of retries the current message has had. It returns this as an integer..

In the following script, the num_retries is checked and if a retry has occur, the message is permanently failed.

<a name="example.ec_get_message_num_retries"></a> 


```
$n = ec_get_message_num_retries;
if not ec_test :is "${n}" "0" {
  ec_action 550 "ec_get_message_num_retries failed.  Expected 0, got ${n}";
}
```