---
lastUpdated: "03/26/2020"
title: "hash_keys"
description: "hash keys return all the keys of a hash as a stringlist hash keys hash This function works on a hash created by hash create and returns a stringlist containing all the keys of the hash If the given hash is not empty the elements in the returned stringlist are..."
---

<a name="sieve.ref.hash_keys"></a> 
## Name

hash_keys — return all the keys of a hash as a stringlist

## Synopsis

`hash_keys` { *`hash`* }

<a name="idp30929328"></a> 
## Description

This function works on a hash created by [hash_create](/momentum/3/3-reference/sieve-ref-hash-create) and returns a stringlist containing all the keys of the hash. If the given hash is not empty, the elements in the returned stringlist are in random order. For an empty hash, the returned stringlist contains nothing.

<a name="example.hash_keys"></a> 


```
$hash = hash_create;
hash_set $hash "mykey1" "myval1";
hash_set $hash "mykey2" "myval2";
hash_set $hash "mykey3" "myval3";
$keys = hash_keys $hash;
#keys is now a stringlist containing "mykey1", "mykey2" and "mykey3"
```

<a name="idp30934592"></a> 
## See Also

[hash_create](/momentum/3/3-reference/sieve-ref-hash-create), [hash_set](/momentum/3/3-reference/sieve-ref-hash-set)