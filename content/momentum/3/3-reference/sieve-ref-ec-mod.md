---
lastUpdated: "03/26/2020"
title: "ec_mod"
description: "ec mod calculate the modulus of two numbers ec mod number 1 number 2 ec mod calculates the modulus of two numbers and returns the result Example 16 82 ec mod example..."
---

<a name="sieve.ref.ec_mod"></a> 
## Name

ec_mod — calculate the modulus of two numbers

## Synopsis

`ec_mod` { *`number1`* } { *`number2`* }

<a name="idp30305664"></a> 
## Description

`ec_mod` calculates the modulus of two numbers and returns the result.

<a name="example.ec_mod"></a> 


```
$a = 87;
$b = 43;
$mod = ec_mod $a $b;
ec_log "${a} mod by ${b} is ${mod}";
#mod is 1
```