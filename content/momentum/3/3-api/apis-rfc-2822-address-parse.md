---
lastUpdated: "03/26/2020"
title: "rfc2822_address_parse"
description: "rfc 2822 address parse Parse an rfc 2822 address int rfc 2822 address parse ctx hdr hdrlen rfc 2822 address context ctx const char hdr int hdrlen Parse an rfc 2822 address ctx See rfc 2822 address context hdr The header addrlen The length of the address On success this..."
---

<a name="apis.rfc2822_address_parse"></a> 
## Name

rfc2822_address_parse — Parse an rfc2822 address

## Synopsis

`#include "sieve/address.h"`

| `int **rfc2822_address_parse** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">hdr</var>, |   |
|   | <var class="pdparam">hdrlen</var>`)`; |   |

`rfc2822_address_context * <var class="pdparam">ctx</var>`;
`const char * <var class="pdparam">hdr</var>`;
`int <var class="pdparam">hdrlen</var>`;<a name="idp58555760"></a> 
## Description

Parse an rfc2822 address.

**<a name="idp58556960"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

See [rfc2822_address_context](/momentum/3/3-api/structs-rfc-2822-address-context).

</dd>

<dt>hdr</dt>

<dd>

The header.

</dd>

<dt>addrlen</dt>

<dd>

The length of the address.

</dd>

</dl>

**<a name="idp58564048"></a> Return Values**

On success this function returns the number of addresses. On failure this function returns `0`.

**<a name="idp58565488"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58566912"></a> 
## See Also

[rfc2822_address_destroy](/momentum/3/3-api/apis-rfc-2822-address-destroy)