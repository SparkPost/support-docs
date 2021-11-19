---
lastUpdated: "03/26/2020"
title: "sieve_set_response"
description: "sieve set response Set an SMTP response void sieve set response seng smtp code reason reasonlen SENG seng int smtp code const char reason int reasonlen Set an SMTP response seng The Sieve engine state smtp code The SMTP response code reason The reason associated with the code reasonlen The..."
---

<a name="apis.sieve_set_response"></a> 
## Name

sieve_set_response — Set an SMTP response

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_set_response** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">smtp_code</var>, |   |
|   | <var class="pdparam">reason</var>, |   |
|   | <var class="pdparam">reasonlen</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`int <var class="pdparam">smtp_code</var>`;
`const char * <var class="pdparam">reason</var>`;
`int <var class="pdparam">reasonlen</var>`;<a name="idp60864720"></a> 
## Description

Set an SMTP response.

**<a name="idp60865920"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

<dt>smtp_code</dt>

<dd>

The SMTP response code.

</dd>

<dt>reason</dt>

<dd>

The reason associated with the code.

</dd>

<dt>reasonlen</dt>

<dd>

The length of the `reason` parameter.

</dd>

</dl>

**<a name="idp60874624"></a> Return Values**

This function returns void.

**<a name="idp60875536"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60876960"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)")