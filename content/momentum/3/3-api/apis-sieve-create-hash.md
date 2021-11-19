---
lastUpdated: "03/26/2020"
title: "sieve_create_hash"
description: "sieve create hash Create a Sieve hash SIEVEARGS sieve create hash void void Create a Sieve hash This function returns SIEVEARGS For information about this data type see sieve ast It is legal to call this function in any thread..."
---

<a name="apis.sieve_create_hash"></a> 
## Name

sieve_create_hash — Create a Sieve hash

## Synopsis

`#include "sieve/ecsieve.h"`

| `SIEVEARGS * **sieve_create_hash** (` | <var class="pdparam">void</var>`)`; |   |

`<var class="pdparam">void</var>`;<a name="idp59841168"></a> 
## Description

Create a Sieve hash.

**<a name="idp59842368"></a> Return Values**

This function returns `SIEVEARGS`. For information about this data type see [sieve_ast](/momentum/3/3-api/structs-sieve-ast).

**<a name="idp59844480"></a> Threading**

It is legal to call this function in any thread.