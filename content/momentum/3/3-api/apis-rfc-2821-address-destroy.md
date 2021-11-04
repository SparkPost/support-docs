---
lastUpdated: "03/26/2020"
title: "rfc2821_address_destroy"
description: "rfc 2821 address destroy Destroy an rfc 2821 address void rfc 2821 address destroy ctx rfc 2821 ctx ctx Destroy an rfc 2821 address populated by rfc 2821 address parse ctx See structs rfc 2821 ctx This function returns void It is legal to call this function in any thread..."
---

<a name="apis.rfc2821_address_destroy"></a> 
## Name

rfc2821_address_destroy — Destroy an rfc2821 address

## Synopsis

`#include "misc/rfc2821addr.h"`

| `void **rfc2821_address_destroy** (` | <var class="pdparam">ctx</var>`)`; |   |

`rfc2821_ctx * <var class="pdparam">ctx</var>`;<a name="idp58494816"></a> 
## Description

Destroy an rfc2821 address populated by [rfc2821_address_parse](/momentum/3/3-api/apis-rfc-2821-address-parse).

**<a name="idp58496768"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

See [structs.rfc2821_ctx](/momentum/3/3-api/structs-rfc-2821-ctx).

</dd>

</dl>

**<a name="idp58500192"></a> Return Values**

This function returns void.

**<a name="idp58501104"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58502528"></a> 
## See Also

[rfc2821_address_parse](/momentum/3/3-api/apis-rfc-2821-address-parse)