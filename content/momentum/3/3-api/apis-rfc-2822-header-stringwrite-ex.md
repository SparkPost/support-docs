---
lastUpdated: "03/26/2020"
title: "rfc2822_header_stringwrite_ex"
description: "rfc 2822 header stringwrite ex Renders the rfc 2822 header to a string with formatting options string rfc 2822 header stringwrite ex s field flags string s rfc 2822 field field int flags Renders the rfc 2822 header to a string with formatting options s The string to write to..."
---

<a name="apis.rfc2822_header_stringwrite_ex"></a> 
## Name

rfc2822_header_stringwrite_ex — Renders the rfc2822 header to a string, with formatting options

## Synopsis

`#include "rfc2822_parser.h"`

| `string * **rfc2822_header_stringwrite_ex** (` | <var class="pdparam">s</var>, |   |
|   | <var class="pdparam">field</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`string * <var class="pdparam">s</var>`;
`rfc2822_field * <var class="pdparam">field</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp58699888"></a> 
## Description

Renders the rfc2822 header to a string, with formatting options.

**<a name="idp58701136"></a> Parameters**

<dl class="variablelist">

<dt>s</dt>

<dd>

The string to write to.

</dd>

<dt>field</dt>

<dd>

The header to render.

</dd>

<dt>flags</dt>

<dd>

Zero or more RFC2822_HDR_RENDER_* flags These flags are:

*   `RFC2822_HDR_RENDER_NAME` – Render the field name and wsp_pad between name and first line

*   `RFC2822_HDR_RENDER_FOLD` – Render CRLF and wsp_pad between lines (else render a single space)

*   `RFC2822_HDR_RENDER_CRLF` – End with a CRLF

</dd>

</dl>

**<a name="idp58712272"></a> Return Values**

On success this function returns the string passed in; on error, NULL.

**<a name="idp58713248"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58714352"></a> 
## See Also

[“rfc2822_field”](/momentum/3/3-api/structs-rfc-2822-field)