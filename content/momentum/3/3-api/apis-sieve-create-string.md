---
lastUpdated: "03/26/2020"
title: "sieve_create_string"
description: "sieve create string Create a Sieve string SIEVEARGS sieve create string str len const char str int len Create a Sieve string str The string you wish to create len The length of the string This function returns a SIEVEARGS For information about this data type see sieve ast It..."
---

<a name="apis.sieve_create_string"></a> 
## Name

sieve_create_string — Create a Sieve string

## Synopsis

`#include "sieve/ecsieve.h"`

| `SIEVEARGS * **sieve_create_string** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`const char * <var class="pdparam">str</var>`;
`int <var class="pdparam">len</var>`;<a name="idp59869920"></a> 
## Description

Create a Sieve string.

**<a name="idp59871120"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

The string you wish to create.

</dd>

<dt>len</dt>

<dd>

The length of the string.

</dd>

</dl>

**<a name="idp59875664"></a> Return Values**

This function returns a `SIEVEARGS`. For information about this data type see [sieve_ast](/momentum/3/3-api/structs-sieve-ast).

**<a name="idp59877776"></a> Threading**

It is legal to call this function in any thread.