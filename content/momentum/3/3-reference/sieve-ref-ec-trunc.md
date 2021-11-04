---
lastUpdated: "03/26/2020"
title: "ec_trunc"
description: "ec trunc round toward zero ec trunc number ec trunc rounds the given number toward 0 Example 16 100 ec trunc example..."
---

<a name="sieve.ref.ec_trunc"></a> 
## Name

ec_trunc — round toward zero

## Synopsis

`ec_trunc` { *`number`* }

<a name="idp30724272"></a> 
## Description

`ec_trunc` rounds the given number toward 0.

<a name="example.ec_trunc"></a> 


```
$a = 65.43;
$b = -41.65;
$c = 43;
$trunca = ec_trunc $a;
$truncb = ec_trunc $b;
$truncc = ec_trunc $c;
#trunca is 65.000000
#truncb is -41.000000
#truncc is 43.000000
```