---
lastUpdated: "03/26/2020"
title: "sieve_get_validation_context"
description: "sieve get validation context Get the validation context validation context sieve get validation context seng SENG seng Get an validation context from the Sieve engine seng The Sieve engine This function returns a validation context It is legal to call this function in any thread Section 68 73 SENG sieve..."
---

<a name="apis.sieve_get_validate_context"></a> 
## Name

sieve_get_validation_context — Get the validation_context

## Synopsis

`#include "sieve/ecsieve.h"`

| `validation_context * **sieve_get_validation_context** (` | <var class="pdparam">seng</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;<a name="idp60213632"></a> 
## Description

Get an validation_context from the Sieve engine.

**<a name="idp60214864"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine.

</dd>

</dl>

**<a name="idp60217600"></a> Return Values**

This function returns a validation_context.

**<a name="idp60218528"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60219952"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)") and [“validate_context”](/momentum/3/3-api/structs-validate-context)