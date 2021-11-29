---
lastUpdated: "03/26/2020"
title: "hash_set"
description: "hash set set an element in a hash hash set hash key value This function sets a value in a hash table for a particular key Hash keys must be strings but can be expressions that resolve to strings whereas hash values can be any valid Sieve value string number..."
---

<a name="sieve.ref.hash_set"></a> 
## Name

hash_set — set an element in a hash

## Synopsis

`hash_set` { *`hash`* } { *`key`* } { *`value`* }

<a name="idp30950080"></a> 
## Description

This function sets a value in a hash table for a particular key. Hash keys must be strings (but can be expressions that resolve to strings), whereas hash values can be any valid Sieve value (string, number, stringlist or hashes).

**Configuration Change. ** This feature is available starting from Momentum 3.0.16.

Since 3.0.17, passing an incorrect value to this function returns an error message. Previously, no error was returned.

<a name="example.set"></a> 


```
$hash = hash_create;
hash_set $hash "mykey" "myvalue";
$value = $hash["mykey"];

ec_log "The value is ${value}";
```

<a name="idp30958576"></a> 
## See Also

[hash_create](/momentum/3/3-reference/sieve-ref-hash-create), [hash_dump](/momentum/3/3-reference/sieve-ref-hash-dump) and [hash_get](/momentum/3/3-reference/sieve-ref-hash-get).