---
lastUpdated: "03/26/2020"
title: "join"
description: "join join stringlist elements into a single string join delimiter stringlist This function uses its first argument as a delimiter to join all the elements in the stringlist and returns the result as a string For example to join MX records with a we could Example 16 114 join example..."
---

<a name="sieve.ref.join"></a> 
## Name

join — join stringlist elements into a single string

## Synopsis

`join` { *`delimiter`* } { *`stringlist`* }

<a name="idp31011056"></a> 
## Description

This function uses its first argument as a delimiter to join all the elements in the stringlist and returns the result as a string.

For example, to join MX records with a ",", we could:

<a name="example.join"></a> 


```
$mxs = ec_dns_lookup "messagesystems.com" "mx";
$res = join "," $mxs;

ec_log "Message Systems MX records ${res}";
```