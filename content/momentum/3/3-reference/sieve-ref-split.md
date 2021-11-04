---
lastUpdated: "03/26/2020"
title: "split"
description: "split ec explode split a string into a stringlist split delimiter string ec explode delimiter string split uses its first argument as a delimiter to explode a given string into a stringlist For example to split an IP address into its component octets we might do something like this Example..."
---

<a name="sieve.ref.split"></a> 
## Name

split, ec_explode — split a string into a stringlist

## Synopsis

`split` { *`delimiter`* } { *`string`* }

`ec_explode` { *`delimiter`* } { *`string`* }

<a name="idp31261744"></a> 
## Description

`split` uses its first argument as a delimiter to explode a given string into a stringlist.

For example, to split an IP address into its component octets, we might do something like this:

<a name="example.split"></a> 


```
($a, $b, $c, $d) = split "." "%{spfv1:i}";

ec_log "the IP address is ${a}.${b}.${c}.${d}";
```