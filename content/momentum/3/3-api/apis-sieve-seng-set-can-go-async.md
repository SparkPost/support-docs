---
lastUpdated: "03/26/2020"
title: "sieve_seng_set_can_go_async"
description: "sieve seng set can go async Define whether or not the Sieve engine can run asynchronously sieve seng set can go async seng flag SENG seng int flag Define whether or not the Sieve engine can run asynchronously Sets the can go async field of the Sieve engine either on..."
---

<a name="apis.sieve_seng_set_can_go_async"></a> 
## Name

sieve_seng_set_can_go_async — Define whether or not the Sieve engine can run asynchronously

## Synopsis

`#include "sieve/ecseive.h"`

| `**sieve_seng_set_can_go_async** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">flag</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`int <var class="pdparam">flag</var>`;<a name="idp60757248"></a> 
## Description

Define whether or not the Sieve engine can run asynchronously. Sets the `can_go_async` field of the Sieve engine either on or off.

**<a name="idp60758976"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

<dt>flag</dt>

<dd>

Set this to `1` or `0`.

</dd>

</dl>

**<a name="idp60764432"></a> Return Values**

This function returns void.

**<a name="idp60765344"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60766768"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)"), [sieve_suspend](/momentum/3/3-api/apis-sieve-suspend) and [sieve_seng_get_can_go_async](/momentum/3/3-api/apis-sieve-seng-get-can-go-async)