---
lastUpdated: "03/26/2020"
title: "ec_round"
description: "ec round round away from zero ec round number ec round rounds the given number to the nearest integer but away from 0 Example 16 90 ec round example..."
---

<a name="sieve.ref.ec_round"></a> 
## Name

ec_round — round away from zero

## Synopsis

`ec_round` { *`number`* }

<a name="idp30467808"></a> 
## Description

`ec_round` rounds the given number to the nearest integer, but away from 0.

<a name="example.ec_round"></a> 


```
$a = 65.43;
$b = -41.65;
$c = 43;
$rounda = ec_round $a;
$roundb = ec_round $b;
$roundc = ec_round $c;
#rounda is 66.000000
#roundb is -42.000000
#roundc is 43.000000
```