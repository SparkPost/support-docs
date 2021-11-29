---
lastUpdated: "03/26/2020"
title: "sieve_set_error_mode"
description: "sieve set error mode Set the error mode of the Sieve engine void sieve set error mode seng mode SENG seng int mode Set the error mode of the Sieve engine seng The Sieve engine state mode Set this to either SIV ERROR MODE FAIL or SIV ERROR MODE CONTINUE..."
---

<a name="apis.sieve_set_error_mode"></a> 
## Name

sieve_set_error_mode — Set the error mode of the Sieve engine

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_set_error_mode** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">mode</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`int <var class="pdparam">mode</var>`;<a name="idp60778784"></a> 
## Description

Set the error mode of the Sieve engine.

**<a name="idp60780000"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

<dt>mode</dt>

<dd>

Set this to either `SIV_ERROR_MODE_FAIL` or `SIV_ERROR_MODE_CONTINUE`.

</dd>

</dl>

**<a name="idp60785456"></a> Return Values**

This function returns void.

**<a name="idp60786368"></a> Threading**

It is legal to call this function in the thread.

<a name="idp60788064"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)")