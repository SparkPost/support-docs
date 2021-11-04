---
lastUpdated: "03/26/2020"
title: "rfc2822_new_headerf"
description: "rfc 2822 new headerf Create a new header using a format specifier rfc 2822 field rfc 2822 new headerf name fmt const char name const char fmt Create a new header using a format specifier For example Remove headers using rfc 2822 remove header name The name of the new..."
---

<a name="apis.rfc2822_new_headerf"></a> 
## Name

rfc2822_new_headerf — Create a new header using a format specifier

## Synopsis

`#include "rfc2822_parser.h"`

| `rfc2822_field * **rfc2822_new_headerf** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | <var class="pdparam">...</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`const char * <var class="pdparam">fmt</var>`;
`<var class="pdparam">...</var>`;<a name="idp58745552"></a> 
## Description

Create a new header using a format specifier. For example:

`new_hdr = rfc2822_new_headerf("Content-Type", "%s", mimetype);`

Remove headers using `rfc2822_remove_header`.

**<a name="idp58748464"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

The name of the new header.

</dd>

<dt>fmt</dt>

<dd>

The string with embedded format specifier(s).

</dd>

<dt>...</dt>

<dd>

Variable argument.

</dd>

</dl>

**<a name="idp58754864"></a> Return Values**

This function returns a [rfc2822_field](/momentum/3/3-api/structs-rfc-2822-field).

**<a name="idp58756496"></a> Threading**

It is legal to call this function in the thread.

<a name="idp58758192"></a> 
## See Also

[rfc2822_new_header](/momentum/3/3-api/apis-rfc-2822-new-header) and [rfc2822_remove_header](/momentum/3/3-api/apis-rfc-2822-remove-header)