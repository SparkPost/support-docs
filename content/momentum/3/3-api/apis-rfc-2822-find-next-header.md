---
lastUpdated: "03/26/2020"
title: "rfc2822_find_next_header"
description: "rfc 2822 find next header Return the next header rfc 2822 field rfc 2822 find next header last rfc 2822 field last Return the next header last The previous header On success this function returns the next header on failure it returns NULL For a definition of this struct see..."
---

<a name="apis.rfc2822_find_next_header"></a> 
## Name

rfc2822_find_next_header — Return the next header

## Synopsis

`#include "rfc2822_parser.h"`

| `rfc2822_field **rfc2822_find_next_header** (` | <var class="pdparam">last</var>`)`; |   |

`rfc2822_field * <var class="pdparam">last</var>`;<a name="idp58611104"></a> 
## Description

Return the next header.

**<a name="idp58612304"></a> Parameters**

<dl class="variablelist">

<dt>last</dt>

<dd>

The previous header.

</dd>

</dl>

**<a name="idp58615040"></a> Return Values**

On success this function returns the next header; on failure, it returns NULL. For a definition of this struct see [rfc2822_field](/momentum/3/3-api/structs-rfc-2822-field). When you have finished with this struct use [rfc2822_free_header](/momentum/3/3-api/apis-rfc-2822-free-header) to free it.

**<a name="idp58617552"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58618656"></a> 
## See Also

[rfc2822_find_first_header](/momentum/3/3-api/apis-rfc-2822-find-first-header)