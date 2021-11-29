---
lastUpdated: "03/26/2020"
title: "rfc2821_address_parse"
description: "rfc 2821 address parse Parse an rfc 2821 address int rfc 2821 address parse addr addrlen ctx const char addr int addrlen rfc 2821 ctx ctx Parse an rfc 2821 address addr The address to be parsed addrlen The length of the address ctx See rfc 2821 ctx On success..."
---

<a name="apis.rfc2821_address_parse"></a> 
## Name

rfc2821_address_parse — Parse an rfc2821 address

## Synopsis

`#include "misc/rfc2821addr.h"`

| `int **rfc2821_address_parse** (` | <var class="pdparam">addr</var>, |   |
|   | <var class="pdparam">addrlen</var>, |   |
|   | <var class="pdparam">ctx</var>`)`; |   |

`const char * <var class="pdparam">addr</var>`;
`int <var class="pdparam">addrlen</var>`;
`rfc2821_ctx * <var class="pdparam">ctx</var>`;<a name="idp58514160"></a> 
## Description

Parse an rfc2821 address.

**<a name="idp58515360"></a> Parameters**

<dl class="variablelist">

<dt>addr</dt>

<dd>

The address to be parsed.

</dd>

<dt>addrlen</dt>

<dd>

The length of the address.

</dd>

<dt>ctx</dt>

<dd>

See [rfc2821_ctx](/momentum/3/3-api/structs-rfc-2821-ctx).

</dd>

</dl>

**<a name="idp58522448"></a> Return Values**

On success this function returns `0` and populates the rfc2821_ctx passed in. On failure this function returns `-1`.

**<a name="idp58524336"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58525760"></a> 
## See Also

[rfc2821_address_destroy](/momentum/3/3-api/apis-rfc-2821-address-destroy)