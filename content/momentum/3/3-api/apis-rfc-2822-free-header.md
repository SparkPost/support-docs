---
lastUpdated: "03/26/2020"
title: "rfc2822_free_header"
description: "rfc 2822 free header Free the specified header void rfc 2822 free header header rfc 2822 field header Free an rfc 2822 field header header For more information about this struct see rfc 2822 field header The name of the header This function returns void It is legal to call..."
---

<a name="apis.rfc2822_free_header"></a> 
## Name

rfc2822_free_header — Free the specified header

## Synopsis

`#include "rfc2822_parser.h"`

| `void **rfc2822_free_header** (` | <var class="pdparam">header</var>`)`; |   |

`rfc2822_field * <var class="pdparam">header</var>`;<a name="idp58642032"></a> 
## Description

Free an rfc2822_field header.

**<a name="idp58643248"></a> Parameters**

<dl class="variablelist">

<dt>header</dt>

<dd>

For more information about this struct see [rfc2822_field](/momentum/3/3-api/structs-rfc-2822-field).

</dd>

<dt>header</dt>

<dd>

The name of the header.

</dd>

</dl>

**<a name="idp58648560"></a> Return Values**

This function returns void.

**<a name="idp58649472"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58650576"></a> 
## See Also

[rfc2822_find_next_header](/momentum/3/3-api/apis-rfc-2822-find-next-header) and [rfc2822_find_first_header](/momentum/3/3-api/apis-rfc-2822-find-first-header)