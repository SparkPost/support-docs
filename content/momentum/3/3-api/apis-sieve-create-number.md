---
lastUpdated: "03/26/2020"
title: "sieve_create_number"
description: "sieve create number Create a Sieve number SIEVEARGS sieve create number number u int 32 t number Create a Sieve number number The number you wish to create This function returns a SIEVEARGS For information about this data type see sieve ast It is legal to call this function in..."
---

<a name="apis.sieve_create_number"></a> 
## Name

sieve_create_number — Create a Sieve number

## Synopsis

`#include "sieve/ecsieve.h"`

| `SIEVEARGS * **sieve_create_number** (` | <var class="pdparam">number</var>`)`; |   |

`u_int32_t <var class="pdparam">number</var>`;<a name="idp59853808"></a> 
## Description

Create a Sieve number.

**<a name="idp59855008"></a> Parameters**

<dl class="variablelist">

<dt>number</dt>

<dd>

The number you wish to create.

</dd>

</dl>

**<a name="idp59857744"></a> Return Values**

This function returns a `SIEVEARGS`. For information about this data type see [sieve_ast](/momentum/3/3-api/structs-sieve-ast).

**<a name="idp59859856"></a> Threading**

It is legal to call this function in any thread.