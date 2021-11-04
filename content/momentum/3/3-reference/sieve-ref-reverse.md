---
lastUpdated: "03/26/2020"
title: "reverse"
description: "reverse reverse a string or a stringlist reverse arg If the first argument to reverse is a string the string will be reversed so that abc becomes cba If it is a stringlist then the order of the elements in the string list will be reversed Example 16 123 reverse..."
---

<a name="sieve.ref.reverse"></a> 
## Name

reverse — reverse a string or a stringlist

## Synopsis

`reverse` { *`arg`* }

<a name="idp31155792"></a> 
## Description

If the first argument to `reverse` is a string, the string will be reversed, so that `abc` becomes `cba`. If it is a stringlist, then the order of the elements in the string list will be reversed.

<a name="example.reverse"></a> 


```
$string = reverse "hello";
ec_log "hello backwards is ${string}";
```