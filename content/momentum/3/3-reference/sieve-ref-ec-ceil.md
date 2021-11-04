---
lastUpdated: "03/26/2020"
title: "ec_ceil"
description: "ec ceil round up to the nearest integer ec ceil number ec ceil rounds the given number up to the nearest integer Example 16 29 ec ceil example..."
---

<a name="sieve.ref.ec_ceil"></a> 
## Name

ec_ceil — round up to the nearest integer

## Synopsis

`ec_ceil` { *`number`* }

<a name="idp29230768"></a> 
## Description

`ec_ceil` rounds the given number up to the nearest integer.

<a name="example.ec_ceiling"></a> 


```
$a = 65.43;
$b = -41.65;
$c = 43;
$ceila = ec_ceil $a;
$ceilb = ec_ceil $b;
$ceilc = ec_ceil $c;
#ceila is 66.000000
#ceilb is -41.000000
#ceilc is 43.000000
```