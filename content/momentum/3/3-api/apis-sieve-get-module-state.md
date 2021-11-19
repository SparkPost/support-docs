---
lastUpdated: "03/26/2020"
title: "sieve_get_module_state"
description: "sieve get module state Get the current module state void sieve get module state seng SENG seng Get the current module state seng The Sieve engine state This function returns a pointer to the module data field of the SENG It is legal to call this function in any thread..."
---

<a name="apis.sieve_get_module_state"></a> 
## Name

sieve_get_module_state — Get the current module state

## Synopsis

`#include "sieve/ecsieve.h"`

| `void * **sieve_get_module_state** (` | <var class="pdparam">seng</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;<a name="idp60159408"></a> 
## Description

Get the current module state.

**<a name="idp60160624"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

</dl>

**<a name="idp60163360"></a> Return Value**

This function returns a pointer to the `module_data` field of the SENG.

**<a name="idp60164752"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60165856"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)") and [sieve_set_module_state](/momentum/3/3-api/apis-sieve-set-module-state)