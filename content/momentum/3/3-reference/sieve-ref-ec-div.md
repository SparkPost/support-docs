---
lastUpdated: "03/26/2020"
title: "ec_div"
description: "ec div perform division of two numbers ec div number 1 number 2 ec div takes two numbers and divides the first number by the second and returns the result Example 16 33 ec div example..."
---

<a name="sieve.ref.ec_div"></a> 
## Name

ec_div — perform division of two numbers

## Synopsis

`ec_div` { *`number1`* } { *`number2`* }

<a name="idp29323904"></a> 
## Description

`ec_div` takes two numbers and divides the first number by the second and returns the result.

<a name="example.ec_div"></a> 


```
$a = -86;
$b = 43;
$div = ec_div $a $b;
ec_log "${a} / ${b} is ${div}";
#div is -2.000000
```