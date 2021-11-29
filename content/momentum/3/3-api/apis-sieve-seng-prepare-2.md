---
lastUpdated: "03/26/2020"
title: "sieve_seng_prepare2"
description: "sieve seng prepare 2 Prepare to execute a Sieve script SENG sieve seng prepare 2 sieve phase bag SIEVE sieve const char phase ec bag bag Prepare to execute a Sieve script Use sieve free seng to release memory associated with a SENG sieve The script phase The phase in..."
---

<a name="apis.sieve_seng_prepare2"></a> 
## Name

sieve_seng_prepare2 — Prepare to execute a Sieve script

## Synopsis

`#include "sieve/ecsieve.h"`

| `SENG * **sieve_seng_prepare2** (` | <var class="pdparam">sieve</var>, |   |
|   | <var class="pdparam">phase</var>, |   |
|   | <var class="pdparam">bag</var>`)`; |   |

`SIEVE * <var class="pdparam">sieve</var>`;
`const char * <var class="pdparam">phase</var>`;
`ec_bag * <var class="pdparam">bag</var>`;<a name="idp60717792"></a> 
## Description

Prepare to execute a Sieve script.

### Note

Use [sieve_free_seng](/momentum/3/3-api/apis-sieve-free-seng) to release memory associated with a `SENG`.

**<a name="idp60721104"></a> Parameters**

<dl class="variablelist">

<dt>sieve</dt>

<dd>

The script.

</dd>

<dt>phase</dt>

<dd>

The phase in which the script should execute. This must be a valid C identifier.

</dd>

<dt>bag</dt>

<dd>

Use [sieve_get_bag](/momentum/3/3-api/apis-sieve-get-bag) to retrieve ec_bag items. For a description of this data type see [ec_bag](/momentum/3/3-api/structs-ec-bag).

</dd>

</dl>

**<a name="idp60729040"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60730144"></a> 
## See Also

[sieve_free_seng](/momentum/3/3-api/apis-sieve-free-seng) and [Section 68.75, “SIEVE (sieve_state)”](structs.sieve "68.75. SIEVE (sieve_state)")