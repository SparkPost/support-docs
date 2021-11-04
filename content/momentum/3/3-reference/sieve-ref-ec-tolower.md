---
lastUpdated: "03/26/2020"
title: "ec_tolower"
description: "ec tolower change all characters to lower case ec tolower string Change all characters in the argument to lower case Numerals remain unchanged Example 16 99 ec tolower example..."
---

<a name="sieve.ref.ec_tolower"></a> 
## Name

ec_tolower — change all characters to lower case

## Synopsis

`ec_tolower` { *`string`* }

<a name="idp30698016"></a> 
## Description

Change all characters in the argument to lower case. Numerals remain unchanged.

<a name="example.ec_tolower"></a> 


```
$a = "%{vctx_mess:mailfrom_localpart}";
  $b = ec_tolower $a;
  ec_log "${a} lower to ${b}";
```