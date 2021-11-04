---
lastUpdated: "03/26/2020"
title: "hash_dump"
description: "hash dump dump the contents of the hash to the paniclog hash dump hash hash dump dumps the contents of the hash to the paniclog This function can occasionally be useful when debugging but should be avoided in production especially on heavy throughput systems Example 16 108 hash dump example..."
---

<a name="sieve.ref.hash_dump"></a> 
## Name

hash_dump — dump the contents of the hash to the paniclog

## Synopsis

`hash_dump` { *`hash`* }

<a name="idp30889440"></a> 
## Description

`hash_dump` dumps the contents of the hash to the paniclog. This function can occasionally be useful when debugging but should be avoided in production especially on heavy throughput systems.

<a name="example.hash_dump"></a> 


```
$aliases = ds_fetch_flat "mydb" "select expansion from alias where user = ?" [$address];
hash_dump $aliases;
```