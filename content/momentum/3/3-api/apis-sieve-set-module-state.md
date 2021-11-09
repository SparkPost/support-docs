---
lastUpdated: "03/26/2020"
title: "sieve_set_module_state"
description: "sieve set module state Set the current module state void sieve set module state seng data SENG seng void data Set the current module state seng The Sieve engine state data The data for the module data field of the Sieve engine This function returns void It is legal to..."
---

<a name="apis.sieve_set_module_state"></a> 
## Name

sieve_set_module_state — Set the current module state

## Synopsis

`#include "sieve/ecsieve.h"`

| `void * **sieve_set_module_state** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">data</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`void * <var class="pdparam">data</var>`;<a name="idp60823616"></a> 
## Description

Set the current module state.

**<a name="idp60824832"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

<dt>data</dt>

<dd>

The data for the `module_data` field of the Sieve engine.

</dd>

</dl>

**<a name="idp60829872"></a> Return Value**

This function returns void.

**<a name="idp60830784"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60831888"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)") and [sieve_get_module_state](/momentum/3/3-api/apis-sieve-get-module-state)