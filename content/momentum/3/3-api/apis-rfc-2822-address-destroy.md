---
lastUpdated: "03/26/2020"
title: "rfc2822_address_destroy"
description: "rfc 2822 address destroy Destroy an rfc 2822 address void rfc 2822 address destroy ctx struct rfc 2822 address context ctx Destroy an rfc 2822 address populated by rfc 2822 address parse ctx The context For more information see rfc 2822 context This function returns void It is legal to..."
---

<a name="apis.rfc2822_address_destroy"></a> 
## Name

rfc2822_address_destroy — Destroy an rfc2822 address

## Synopsis

`#include "address.h"`

| `(void) **rfc2822_address_destroy** (` | <var class="pdparam">ctx</var>`)`; |   |

`struct rfc2822_address_context * <var class="pdparam">ctx</var>`;<a name="idp58535920"></a> 
## Description

Destroy an rfc2822 address populated by [rfc2822_address_parse](/momentum/3/3-api/apis-rfc-2822-address-parse). .

**<a name="idp58538320"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

The context. For more information see [rfc2822_context](/momentum/3/3-api/structs-rfc-2822-context).

</dd>

</dl>

**<a name="idp58541776"></a> Return Values**

This function returns void.

**<a name="idp58542688"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58544112"></a> 
## See Also

[“rfc2822_address_context”](/momentum/3/3-api/structs-rfc-2822-address-context)