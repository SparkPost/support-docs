---
lastUpdated: "03/26/2020"
title: "ec_get_message_creation_time"
description: "ec get message creation time Return the creation time of the current message ec get message creation time ec get message creation time returns the creation time of the current message It returns with seconds precision as an integer In the following script the creation time is checked against a..."
---

<a name="sieve.ref.ec_get_message_creation_time"></a> 
## Name

ec_get_message_creation_time — Return the creation_time of the current message.

## Synopsis

`ec_get_message_creation_time`

<a name="idp29624960"></a> 
## Description

`ec_get_message_creation_time` returns the creation time of the current message. It returns with seconds precision as an integer.

In the following script, the creation_time is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_creation_time"></a> 


```
$now = "%{t}";
$nearfuture = ec_add $now "15";
$t = ec_get_message_creation_time;
if ec_test :value "lt" :comparator "i;ascii-numeric" $t $now {
  ec_action 550 "ec_get_message_creation_time failed.  ${t} is less than ${now}";
}
if ec_test :value "gt" :comparator "i;ascii-numeric" $t $nearfuture {
  ec_action 550 "ec_get_message_creation_time failed.  ${t} is greater than than ${nearfuture}";
}
```