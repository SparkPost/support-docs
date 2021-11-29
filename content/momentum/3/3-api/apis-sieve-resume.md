---
lastUpdated: "03/26/2020"
title: "sieve_resume"
description: "sieve resume Resume the current Sieve action void sieve resume seng SENG seng Resume a Sieve action that was suspended using sieve suspend seng The Sieve engine state This function returns void It is legal to call this function in any thread Section 68 73 SENG sieve engine sieve suspend..."
---

<a name="apis.sieve_resume"></a> 
## Name

sieve_resume — Resume the current Sieve action

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_resume** (` | <var class="pdparam">seng</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;<a name="idp60554096"></a> 
## Description

Resume a Sieve action that was suspended using [sieve_suspend](/momentum/3/3-api/apis-sieve-suspend).

**<a name="idp60556048"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

</dl>

**<a name="idp60558784"></a> Return Values**

This function returns void.

**<a name="idp60559696"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60561120"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)"), [sieve_suspend](/momentum/3/3-api/apis-sieve-suspend), [sieve_seng_get_can_go_async](/momentum/3/3-api/apis-sieve-seng-get-can-go-async) and [sieve_seng_set_can_go_async](/momentum/3/3-api/apis-sieve-seng-set-can-go-async)