---
lastUpdated: "03/26/2020"
title: "rfc2822_new_header"
description: "rfc 2822 new header Create a new header rfc 2822 field rfc 2822 new header name str const char name const char str Create a new header Headers should be removed using rfc 2822 remove header name The name of the new header str The content of the header This..."
---

<a name="apis.rfc2822_new_header"></a> 
## Name

rfc2822_new_header — Create a new header

## Synopsis

`#include "rfc2822_parser.h"`

| `rfc2822_field * **rfc2822_new_header** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">str</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`const char * <var class="pdparam">str</var>`;<a name="idp58725200"></a> 
## Description

Create a new header. Headers should be removed using [rfc2822_remove_header](/momentum/3/3-api/apis-rfc-2822-remove-header).

**<a name="idp58727168"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

The name of the new header.

</dd>

<dt>str</dt>

<dd>

The content of the header.

</dd>

</dl>

**<a name="idp58731728"></a> Return Values**

This function returns a [rfc2822_field](/momentum/3/3-api/structs-rfc-2822-field).

**<a name="idp58733360"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58734784"></a> 
## See Also