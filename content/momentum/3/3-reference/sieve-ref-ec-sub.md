---
lastUpdated: "03/26/2020"
title: "ec_sub"
description: "ec sub perform subtraction of two numbers ec sub number 1 number 2 ec sub takes two numbers subtracts the second number from the first number and returns the result Example 16 96 ec sub example..."
---

<a name="sieve.ref.ec_sub"></a> 
## Name

ec_sub — perform subtraction of two numbers

## Synopsis

`ec_sub` { *`number1`* } { *`number2`* }

<a name="idp30593664"></a> 
## Description

`ec_sub` takes two numbers, subtracts the second number from the first number and returns the result.

<a name="example.ec_sub"></a> 


```
$a = 43;
$b = "55.54";
$sub = ec_sub $a $b;
ec_log " ${a} - ${b} is ${sub}";
#sub is -12.540000
```