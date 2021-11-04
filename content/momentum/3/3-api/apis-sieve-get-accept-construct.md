---
lastUpdated: "03/26/2020"
title: "sieve_get_accept_construct"
description: "sieve get accept construct Get an accept construct from the Sieve engine accept construct sieve get accept construct seng SENG seng Get an accept construct from the Sieve engine seng The Sieve engine This function returns an accept construct It is legal to call this function in the Scheduler thread..."
---

<a name="apis.sieve_get_accept_construct"></a> 
## Name

sieve_get_accept_construct — Get an accept_construct from the Sieve engine

## Synopsis

`#include "sieve/ecsieve.h"`

| `accept_construct * **sieve_get_accept_construct** (` | <var class="pdparam">seng</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;<a name="idp59973392"></a> 
## Description

Get an accept_construct from the Sieve engine.

**<a name="idp59974624"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine.

</dd>

</dl>

**<a name="idp59977360"></a> Return Values**

This function returns an accept_construct.

**<a name="idp59978288"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp59980144"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)") and [“accept_construct”](/momentum/3/3-api/structs-accept-construct)