---
lastUpdated: "03/26/2020"
title: "hash_get"
description: "hash get get the value associated with the specified key hash get hash key Get the value of the specified key from a hash Hash keys must be strings or expressions that resolve to strings Sieve scripts using hash get can be used in any phase Configuration Change This feature..."
---

<a name="sieve.ref.hash_get"></a> 
## Name

hash_get — get the value associated with the specified key

## Synopsis

`hash_get` { *`$hash`* } { *`$key`* }

<a name="idp30906272"></a> 
## Description

Get the value of the specified key from a hash. Hash keys must be strings or expressions that resolve to strings.

Sieve scripts using `hash_get` can be used in any phase.

**Configuration Change. ** This feature is available starting from Momentum 3.0.16.

Since 3.0.17, passing an incorrect value to this function returns an error message. Previously, no error was returned.

<a name="example.hash_get"></a> 


```
$hash = hash_create;
  hash_set $hash "mykey" "myvalue";
  $value = hash_get $hash "mykey";
```

<a name="idp30915536"></a> 
## See Also

[hash_create](/momentum/3/3-reference/sieve-ref-hash-create), [hash_dump](/momentum/3/3-reference/sieve-ref-hash-dump) and [hash_get](/momentum/3/3-reference/sieve-ref-hash-get)