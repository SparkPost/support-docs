---
lastUpdated: "03/26/2020"
title: "sieve_set_test_return_value"
description: "sieve set test return value Set a test result return value void sieve set test return value seng rv SENG seng int rv Set a test result return value for a test registered via sieve register extension seng The Sieve engine state rv The desired return value It is legal..."
---

<a name="apis.sieve_set_test_return_value"></a> 
## Name

sieve_set_test_return_value — Set a test result return value

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_set_test_return_value** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">rv</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`int <var class="pdparam">rv</var>`;<a name="idp60887920"></a> 
## Description

Set a test result return value for a test registered via [sieve_register_extension](/momentum/3/3-api/apis-sieve-register-extension).

**<a name="idp60889904"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

<dt>rv</dt>

<dd>

The desired return value.

</dd>

</dl>

**<a name="idp60894464"></a> Return Values****<a name="idp60895200"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60896624"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)")