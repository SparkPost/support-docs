---
lastUpdated: "03/26/2020"
title: "rfc2822_header_append_line"
description: "rfc 2822 header append line Append a line to a header void rfc 2822 header append line hdr str rfc 2822 field hdr const char str Append a line to a header hdr The header that you wish to add to str The line you wish to appended This function..."
---

<a name="apis.rfc2822_header_append_line"></a> 
## Name

rfc2822_header_append_line — Append a line to a header

## Synopsis

`#include "rfc2822_parser.h"`

| `void **rfc2822_header_append_line** (` | <var class="pdparam">hdr</var>, |   |
|   | <var class="pdparam">str</var>`)`; |   |

`rfc2822_field * <var class="pdparam">hdr</var>`;
`const char * <var class="pdparam">str</var>`;<a name="idp58662544"></a> 
## Description

Append a line to a header.

**<a name="idp58663744"></a> Parameters**

<dl class="variablelist">

<dt>hdr</dt>

<dd>

The header that you wish to add to.

</dd>

<dt>str</dt>

<dd>

The line you wish to appended.

</dd>

</dl>

**<a name="idp58668304"></a> Return Values**

This function returns void.

**<a name="idp58669216"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58670640"></a> 
## See Also

[“rfc2822_field”](/momentum/3/3-api/structs-rfc-2822-field)