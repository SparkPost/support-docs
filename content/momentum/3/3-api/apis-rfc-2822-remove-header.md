---
lastUpdated: "03/26/2020"
title: "rfc2822_remove_header"
description: "rfc 2822 remove header Create a new header int rfc 2822 remove header ctx h rfc 2822 context ctx const char h Remove a header created using rfc 2822 new header When you remove a header the memory associated with it is freed be sure to deal with any external..."
---

<a name="apis.rfc2822_remove_header"></a> 
## Name

rfc2822_remove_header — Create a new header

## Synopsis

`#include "rfc2822_parser.h"`

| `int **rfc2822_remove_header** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">h</var>`)`; |   |

`rfc2822_context * <var class="pdparam">ctx</var>`;
`const char * <var class="pdparam">h</var>`;<a name="idp58805088"></a> 
## Description

Remove a header created using [rfc2822_new_header](/momentum/3/3-api/apis-rfc-2822-new-header).

### Note

When you remove a header, the memory associated with it is freed; be sure to deal with any external references to that header.

**<a name="idp58808064"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

The rfc2822_context associated with the header.

</dd>

<dt>h</dt>

<dd>

The header you wish to remove.

</dd>

</dl>

**<a name="idp58812624"></a> Return Values**

This function returns the index of the removed header.

**<a name="idp58813568"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58814992"></a> 
## See Also

[“rfc2822_context”](/momentum/3/3-api/structs-rfc-2822-context)