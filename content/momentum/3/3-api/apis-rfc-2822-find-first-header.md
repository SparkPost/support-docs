---
lastUpdated: "03/26/2020"
title: "rfc2822_find_first_header"
description: "rfc 2822 find first header Return the first header with the specified name rfc 2822 field rfc 2822 find first header ctx header name rfc 2822 context ctx const char header name Return the first header with the specified name ctx For more information about this struct see rfc 2822..."
---

<a name="apis.rfc2822_find_first_header"></a> 
## Name

rfc2822_find_first_header — Return the first header with the specified name

## Synopsis

`#include "rfc2822_parser.h"`

| `rfc2822_field **rfc2822_find_first_header** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">header_name</var>`)`; |   |

`rfc2822_context * <var class="pdparam">ctx</var>`;
`const char * <var class="pdparam">header_name</var>`;<a name="idp58590304"></a> 
## Description

Return the first header with the specified name.

**<a name="idp58591536"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

For more information about this struct see [rfc2822_context](/momentum/3/3-api/structs-rfc-2822-context).

</dd>

<dt>header</dt>

<dd>

The name of the header.

</dd>

</dl>

**<a name="idp58596832"></a> Return Values**

On success this function returns the first header; on failure, it returns NULL. For a definition of this struct see [rfc2822_field](/momentum/3/3-api/structs-rfc-2822-field). When you have finished with this struct use [rfc2822_free_header](/momentum/3/3-api/apis-rfc-2822-free-header) to free it.

**<a name="idp58599344"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58600448"></a> 
## See Also

[rfc2822_find_next_header](/momentum/3/3-api/apis-rfc-2822-find-next-header)