---
lastUpdated: "03/26/2020"
title: "ec_mem_usage"
description: "ec mem usage Return the amount of memory used by Momentum ec mem usage Action which returns the total amount of memory being used by Momentum in M Bs Example 16 80 ec mem usage example..."
---

<a name="sieve.ref.ec_mem_usage"></a> 
## Name

ec_mem_usage — Return the amount of memory used by Momentum

## Synopsis

`ec_mem_usage`

<a name="idp30257584"></a> 
## Description

Action which returns the total amount of memory being used by Momentum in MBs.

<a name="example.ec_mem_usage"></a> 


```
$megsused = ec_mem_usage;
if $megsused "ge" :comparator "i;ascii-numeric" "4096" {
  ec_disconnect "451" "Resources not available";
}
```