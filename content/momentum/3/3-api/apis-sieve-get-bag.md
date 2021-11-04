---
lastUpdated: "03/26/2020"
title: "sieve_get_bag"
description: "sieve get bag Get the bag associated with the Sieve engine ec bag sieve get bag seng SENG seng Get the bag associated with the Sieve engine seng Sieve engine state This function returns a pointer to an ec bag It is legal to call this function in any thread..."
---

<a name="apis.sieve_get_bag"></a> 
## Name

sieve_get_bag — Get the bag associated with the Sieve engine

## Synopsis

`#include "sieve/ecsieve.h"`

| `ec_bag * **sieve_get_bag** (` | <var class="pdparam">seng</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;<a name="idp60096800"></a> 
## Description

Get the bag associated with the Sieve engine.

**<a name="idp60098032"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

Sieve engine state.

</dd>

</dl>

**<a name="idp60100768"></a> Return Value**

This function returns a pointer to an [ec_bag](/momentum/3/3-api/structs-ec-bag).

**<a name="idp60102416"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60103520"></a> 
## See Also

[sieve_seng_prepare2](/momentum/3/3-api/apis-sieve-seng-prepare-2)