---
lastUpdated: "03/26/2020"
title: "sieve_set_operation_complete"
description: "sieve set operation complete Set the action of the Sieve engine upon completion void sieve set operation complete seng mode SENG seng int mode Set the action of the Sieve engine upon completion seng The Sieve engine state mode Set this to either SIV ERROR MODE CONTINUE or SIV ERROR..."
---

<a name="apis.sieve_set_operation_complete"></a> 
## Name

sieve_set_operation_complete — Set the action of the Sieve engine upon completion

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_set_operation_complete** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">mode</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`int <var class="pdparam">mode</var>`;<a name="idp60843440"></a> 
## Description

Set the action of the Sieve engine upon completion.

**<a name="idp60844672"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

<dt>mode</dt>

<dd>

Set this to either `SIV_ERROR_MODE_CONTINUE` or `SIV_ERROR_MODE_FAIL`.

</dd>

</dl>

**<a name="idp60850144"></a> Return Values**

This function returns void.

**<a name="idp60851056"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60852480"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)")