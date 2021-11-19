---
lastUpdated: "03/26/2020"
title: "sieve_get_ec_message"
description: "sieve get ec message Get the message associated with the Sieve engine ec message sieve get ec message seng headers only SENG seng int headers only This function returns the message associated with the Sieve engine state seng The Sieve engine state headers only This parameter is no longer used..."
---

<a name="apis.sieve_get_ec_message"></a> 
## Name

sieve_get_ec_message — Get the message associated with the Sieve engine

## Synopsis

`#include "sieve/ecsieve.h"`

| `ec_message * **sieve_get_ec_message** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">headers_only</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`int <var class="pdparam">headers_only</var>`;<a name="idp60114448"></a> 
## Description

This function returns the message associated with the Sieve engine state.

**<a name="idp60115712"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

<dt>headers_only</dt>

<dd>

This parameter is no longer used.

</dd>

</dl>

**<a name="idp60120304"></a> Return Value**

On success this function returns the ec_message; on failure, `NULL` is returned.

**<a name="idp60121712"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60122816"></a> 
## See Also

[Section 68.75, “SIEVE (sieve_state)”](structs.sieve "68.75. SIEVE (sieve_state)") and [“ec_message”](/momentum/3/3-api/structs-ec-message)