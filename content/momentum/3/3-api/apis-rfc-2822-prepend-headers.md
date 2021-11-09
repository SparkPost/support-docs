---
lastUpdated: "03/26/2020"
title: "rfc2822_prepend_header"
description: "rfc 2822 prepend header Prepend headers void rfc 2822 prepend header ctx hdr rfc 2822 context ctx rfc 2822 field hdr Prepend headers ctx The rfc 2822 context hdr The rfc 2822 field to be prepended This function returns void It is legal to call this function in any thread..."
---

<a name="apis.rfc2822_prepend_headers"></a> 
## Name

rfc2822_prepend_header — Prepend headers

## Synopsis

`#include "rfc2822_parser.h"`

| `void **rfc2822_prepend_header** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">hdr</var>`)`; |   |

`rfc2822_context * <var class="pdparam">ctx</var>`;
`rfc2822_field * <var class="pdparam">hdr</var>`;<a name="idp58786928"></a> 
## Description

Prepend headers.

**<a name="idp58788128"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

The [rfc2822_context](/momentum/3/3-api/structs-rfc-2822-context).

</dd>

<dt>hdr</dt>

<dd>

The [rfc2822_field](/momentum/3/3-api/structs-rfc-2822-field) to be prepended.

</dd>

</dl>

**<a name="idp58794112"></a> Return Values**

This function returns void.

**<a name="idp58795024"></a> Threading**

It is legal to call this function in any thread.