---
lastUpdated: "03/26/2020"
title: "sieve_free_seng"
description: "sieve free seng Free a prepared sieve engine context void sieve free seng seng SENG seng Free a prepared sieve engine context seng For information about this data type see seng It is legal to call this function in any thread sieve seng prepare 2..."
---

<a name="apis.sieve_free_seng"></a> 
## Name

sieve_free_seng — Free a prepared sieve engine context

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_free_seng** (` | <var class="pdparam">seng</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;<a name="idp59957328"></a> 
## Description

Free a prepared sieve engine context.

**<a name="idp59958544"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

For information about this data type see [seng](/momentum/3/3-api/structs-seng).

</dd>

</dl>

**<a name="idp59962016"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59963120"></a> 
## See Also

[sieve_seng_prepare2](/momentum/3/3-api/apis-sieve-seng-prepare-2)