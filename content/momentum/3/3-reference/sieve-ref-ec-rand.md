---
lastUpdated: "03/26/2020"
title: "ec_rand"
description: "ec rand generate a random number no larger than max 1 or a random string from a list ec rand max list ec rand returns a random number no larger than max 1 It returns a random string from a stringlist Example 16 86 ec rand example If you wished..."
---

<a name="sieve.ref.ec_rand"></a> 
## Name

ec_rand — generate a random number no larger than max -1 or a random string from a list.

## Synopsis

`ec_rand` { *`max/list`* }

<a name="idp30370896"></a> 
## Description

`ec_rand` returns a random number no larger than max - 1\. It returns a random string from a stringlist.

<a name="example.ec_rand"></a> 


If you wished to allow 90% of messages and fail 10% of the messages without differentiating between the messages themselves, we could use ec_rand to do so as below:

```
$num = ec_rand 10;
if ec_test :is $num "0" {
  ec_action 421 "Service not available.";
}
```

If you wished to log a random reason for your mail to be failed in the paniclog.

```
$reason = ["Service not available.", "Bad mailfrom.", "Malformed EHLO."];
$r = ec_rand $reason;
ec_log "${r}";
```