---
lastUpdated: "03/26/2020"
title: "hash_create"
description: "hash create create a hash hash create This function returns a new empty hash table You may use hash set to set elements in the hash and use array style syntax to retrieve the value of an element Example 16 107 hash create example hash set hash dump and hash..."
---

<a name="sieve.ref.hash_create"></a> 
## Name

hash_create — create a hash

## Synopsis

`hash_create`

<a name="idp30870576"></a> 
## Description

This function returns a new, empty, hash table. You may use `hash_set` to set elements in the hash, and use array style syntax to retrieve the value of an element:

<a name="example.hash_create"></a> 


```
$hash = hash_create;
hash_set $hash "mykey" "myvalue";
$value = $hash["mykey"];

ec_log "The value is ${value}";
```

<a name="idp30875728"></a> 
## See Also

[hash_set](/momentum/3/3-reference/sieve-ref-hash-set), [hash_dump](/momentum/3/3-reference/sieve-ref-hash-dump) and [hash_get](/momentum/3/3-reference/sieve-ref-hash-get).