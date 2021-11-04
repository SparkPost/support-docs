---
lastUpdated: "03/26/2020"
title: "sieve_create_string_list"
description: "sieve create string list Create a Sieve string list SIEVEARGS sieve create string list seng SENG seng Create a Sieve string list that you can then add strings to seng For a definition of this data type see structs seng This function returns a SIEVEARGS For information about this data..."
---

<a name="apis.sieve_create_string_list"></a> 
## Name

sieve_create_string_list — Create a Sieve string list

## Synopsis

`#include "sieve/ecsieve.h"`

| `SIEVEARGS * **sieve_create_string_list** (` | <var class="pdparam">seng</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;<a name="idp59887168"></a> 
## Description

Create a Sieve string list that you can then add strings to.

**<a name="idp59888416"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

For a definition of this data type see [structs.seng](/momentum/3/3-api/structs-seng).

</dd>

</dl>

**<a name="idp59891888"></a> Return Values**

This function returns a `SIEVEARGS`. For information about this data type see [sieve_ast](/momentum/3/3-api/structs-sieve-ast).

**<a name="idp59894000"></a> Threading**

It is legal to call this function in any thread.