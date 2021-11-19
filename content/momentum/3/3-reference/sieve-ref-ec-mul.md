---
lastUpdated: "03/26/2020"
title: "ec_mul"
description: "ec mul perform multiplication of two numbers ec mul number 1 number 2 ec mul takes two numbers and returns the result of multiplication Example 16 83 ec mul example..."
---

<a name="sieve.ref.ec_mul"></a> 
## Name

ec_mul — perform multiplication of two numbers

## Synopsis

`ec_mul` { *`number1`* } { *`number2`* }

<a name="idp30322320"></a> 
## Description

`ec_mul` takes two numbers and returns the result of multiplication.

<a name="example.ec_mul"></a> 


```
$a = 55;
$b = 43;
$mul = ec_mul $a $b;
ec_log "${a} * ${b} is ${mul}";
#mul is 2365.000000
```