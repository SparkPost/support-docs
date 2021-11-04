---
lastUpdated: "03/26/2020"
title: "sieve_suspend"
description: "sieve suspend Suspend the current Sieve action void sieve suspend seng SENG seng Suspend the current Sieve action Use this function only if can go async is true Use sieve resume to resume the Sieve action seng The Sieve engine state This function returns void It is legal to call..."
---

<a name="apis.sieve_suspend"></a> 
## Name

sieve_suspend — Suspend the current Sieve action

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_suspend** (` | <var class="pdparam">seng</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;<a name="idp60928896"></a> 
## Description

Suspend the current Sieve action. Use this function only if `can_go_async` is true. Use [sieve_resume](/momentum/3/3-api/apis-sieve-resume) to resume the Sieve action.

**<a name="idp60931328"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

</dl>

**<a name="idp60934064"></a> Return Values**

This function returns void.

**<a name="idp60934976"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp60936832"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)"), [sieve_resume](/momentum/3/3-api/apis-sieve-resume), [sieve_seng_get_can_go_async](/momentum/3/3-api/apis-sieve-seng-get-can-go-async) and [sieve_seng_set_can_go_async](/momentum/3/3-api/apis-sieve-seng-set-can-go-async)