---
lastUpdated: "03/26/2020"
title: "sieve_seng_get_can_go_async"
description: "sieve seng get can go async Determine whether or not the Sieve engine can run asynchronously int sieve seng get can go async seng SENG seng Determine whether or not the Sieve engine can run asynchronously by getting the can go async field of the Sieve engine seng The Sieve..."
---

<a name="apis.sieve_seng_get_can_go_async"></a> 
## Name

sieve_seng_get_can_go_async — Determine whether or not the Sieve engine can run asynchronously

## Synopsis

`#include "sieve/ecseive.h"`

| `int **sieve_seng_get_can_go_async** (` | <var class="pdparam">seng</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;<a name="idp60682976"></a> 
## Description

Determine whether or not the Sieve engine can run asynchronously by getting the `can_go_async` field of the Sieve engine.

**<a name="idp60684704"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

</dl>

**<a name="idp60687440"></a> Return Values**

This function returns `1` if the engine can run asynchronously and `0` if it cannot.

**<a name="idp60689280"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60690704"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)"), [sieve_suspend](/momentum/3/3-api/apis-sieve-suspend) and [sieve_seng_set_can_go_async](/momentum/3/3-api/apis-sieve-seng-set-can-go-async)