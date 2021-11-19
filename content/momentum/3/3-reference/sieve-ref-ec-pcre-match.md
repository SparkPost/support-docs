---
lastUpdated: "03/26/2020"
title: "ec_pcre_match"
description: "ec pcre match perform a regular expression match ec pcre match string pattern ec pcre match performs a regular expression match and returns a stringlist containing the matched strings The zeroth element of the stringlist consists of the part of the string that matched the whole given pattern the first..."
---

<a name="sieve.ref.ec_pcre_match"></a> 
## Name

ec_pcre_match — perform a regular expression match

## Synopsis

`ec_pcre_match` { *`string`* } { *`pattern`* }

<a name="idp30354720"></a> 
## Description

`ec_pcre_match` performs a regular expression match and returns a stringlist containing the matched strings. The zeroth element of the stringlist consists of the part of the string that matched the whole given pattern, the first element corresponds to the first captured subpattern, the second element to the second captured subpattern, and so on.

<a name="example.ec_pcre_match"></a> 


```
$email = "foo@bar.com.cn";
($a, $b, $c) = ec_pcre_match $email "(.*)@(.*)\.com";

# $a is "foo@bar.com", $b is "foo" and $c is "bar"
ec_log "the string matched is ${a}, $1 is ${b}, $2 is ${c}.";
```