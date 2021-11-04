---
lastUpdated: "03/26/2020"
title: "ec_nearbyint"
description: "ec nearbyint round to the nearest integer based on rounding direction ec nearbyint number ec nearbyint rounds the given number to the nearest integer based on rounding direction Example 16 84 ec nearbyint example..."
---

<a name="sieve.ref.ec_nearbyint"></a> 
## Name

ec_nearbyint — round to the nearest integer based on rounding direction

## Synopsis

`ec_nearbyint` { *`number`* }

<a name="idp30337968"></a> 
## Description

`ec_nearbyint` rounds the given number to the nearest integer based on rounding direction.

<a name="example.ec_nearbyint"></a> 


```
$a = 65.43;
$b = -41.65;
$c = 43;
$nearbyinta = ec_nearbyint $a;
$nearbyintb = ec_nearbyint $b;
$nearbyintc = ec_nearbyint $c;
#nearbyinta is 65.000000
#nearbyintb is -42.000000
#nearbyintc is 43.000000
```