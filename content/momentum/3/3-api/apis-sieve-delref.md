---
lastUpdated: "03/26/2020"
title: "sieve_delref"
description: "sieve delref Delete a reference to a compiled Sieve script void sieve delref script SIEVE script Delete a reference to a compiled Sieve script The script will be freed when its refcount falls to zero script The script to delete For more information about this data type see sieve This..."
---

<a name="apis.sieve_delref"></a> 
## Name

sieve_delref — Delete a reference to a compiled Sieve script

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_delref** (` | <var class="pdparam">script</var>`)`; |   |

`SIEVE * <var class="pdparam">script</var>`;<a name="idp59903264"></a> 
## Description

Delete a reference to a compiled Sieve script.

The script will be freed when its refcount falls to zero.

**<a name="idp59904992"></a> Parameters**

<dl class="variablelist">

<dt>script</dt>

<dd>

The script to delete. For more information about this data type see [sieve](/momentum/3/3-api/structs-sieve).

</dd>

</dl>

**<a name="idp59908496"></a> Return Value**

This function returns void.

**<a name="idp59909408"></a> Threading**

It is legal to call this function in any thread.