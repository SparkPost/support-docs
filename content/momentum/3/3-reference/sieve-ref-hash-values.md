---
lastUpdated: "03/26/2020"
title: "hash_values"
description: "hash values return all the string values of a hash as a stringlist hash values hash This function works on a hash created by hash create If the given hash stores strings as its values these values will be returned in a stringlist elements of which are in random order..."
---

<a name="sieve.ref.hash_values"></a> 
## Name

hash_values — return all the string values of a hash as a stringlist

## Synopsis

`hash_values` { *`hash`* }

<a name="idp30972416"></a> 
## Description

This function works on a hash created by [hash_create](/momentum/3/3-reference/sieve-ref-hash-create). If the given hash stores strings as its values, these values will be returned in a stringlist, elements of which are in random order. For an empty hash, the returned stringlist contains nothing.

<a name="example.hash_values"></a> 


```
$hash = hash_create;
hash_set $hash "mykey1" "myval1";
hash_set $hash "mykey2" "myval2";
hash_set $hash "mykey3" "myval3";
$vals = hash_values $hash;
#vals is now a stringlist containing "myval1", "myval2" and "myval3"
```

<a name="idp30977712"></a> 
## See Also

[hash_create](/momentum/3/3-reference/sieve-ref-hash-create), [hash_set](/momentum/3/3-reference/sieve-ref-hash-set)