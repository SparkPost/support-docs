---
lastUpdated: "03/26/2020"
title: "ec_floor"
description: "ec floor round down to the nearest integer ec floor number ec floor rounds the given number down to the nearest integer Example 16 40 ec floor example..."
---

<a name="sieve.ref.ec_floor"></a> 
## Name

ec_floor — round down to the nearest integer

## Synopsis

`ec_floor` { *`number`* }

<a name="idp29529744"></a> 
## Description

`ec_floor` rounds the given number down to the nearest integer.

<a name="example.ec_floor"></a> 


```
$a = 65.43;
$b = -41.65;
$c = 43;
$floora = ec_floor $a;
$floorb = ec_floor $b;
$floorc = ec_floor $c;
#floora is 65.000000
#floorb is -42.000000
#floorc is 43.000000
```