---
lastUpdated: "03/26/2020"
title: "ec_inc_counter"
description: "ec inc counter increment a Sieve counter ec inc counter counter ec inc counter allows you to increment an arbitrary Sieve counter The convention for naming counters is a short category name followed by a colon followed by a more descriptive name for the counter The counter values can be..."
---

<a name="sieve.ref.ec_inc_counter"></a> 
## Name

ec_inc_counter — increment a Sieve counter

## Synopsis

`ec_inc_counter` { *`counter`* }

<a name="idp29908016"></a> 
## Description

`ec_inc_counter` allows you to increment an arbitrary Sieve counter. The convention for naming counters is a short category name, followed by a colon, followed by a more descriptive name for the counter. The counter values can be obtained on the console using the **sieve:*`sieve1`* stats**       command.

Most of the built-in Sieve actions will either implicitly increment a counter, or allow you to specify your own for that action; `ec_inc_counter` allows to you count the number of times that a particular part of your script is run, and can be useful for later statistical analysis.

<a name="example.ec_inc_counter"></a> 


```
if envelope :domain :is "from" "good-guy.com" {
  ec_inc_counter "stats:mail from the good guys";
}
```

See also [ec_gauge_cache](/momentum/3/3-reference/sieve-ref-ec-gauge-cache) for a more general-purpose counter mechanism supporting increment, decrement and get operations in Sieve.