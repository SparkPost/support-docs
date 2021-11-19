---
lastUpdated: "03/26/2020"
title: "ec_add"
description: "ec add perform addition of two numbers ec add number 1 number 2 ec add takes two numbers and returns their sum Example 16 25 ec add example..."
---

<a name="sieve.ref.ec_add"></a> 
## Name

ec_add — perform addition of two numbers

## Synopsis

`ec_add` { *`number1`* } { *`number2`* }

<a name="idp29156912"></a> 
## Description

`ec_add` takes two numbers and returns their sum.

<a name="example.ec_add"></a> 


```
$a = "55.54";
$b = 0;
$sum = ec_add $a $b;
ec_log "${a} + ${b} is ${sum}";
#sum is 55.540000
```