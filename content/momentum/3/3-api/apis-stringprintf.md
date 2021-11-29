---
lastUpdated: "03/26/2020"
title: "stringprintf"
description: "stringprintf Print a formatted string string stringprintf str format string str const char format Format a string passing in the format argument s Use this function in the following way str The ec string format The string with embedded format specifier s The variable argument s Returns the formatted string..."
---

<a name="apis.stringprintf"></a> 
## Name

stringprintf — Print a formatted string

## Synopsis

`#include "misc/ec_string.h"`

| `string * **stringprintf** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">format</var>, |   |
|   | <var class="pdparam">...</var>`)`; |   |

`string * <var class="pdparam">str</var>`;
`const char * <var class="pdparam">format</var>`;
`<var class="pdparam">...</var>`;<a name="idp62977312"></a> 
## Description

Format a string passing in the format argument(s). Use this function in the following way:

```
stringprintf(out, "header '%s' has %d nodes %d childnodes\n",
    parent->ancestry, parent->nodes->size, parent->childnodes->size);
```
**<a name="idp62979424"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

The ec_string.

</dd>

<dt>format</dt>

<dd>

The string with embedded format specifier(s).

</dd>

<dt>...</dt>

<dd>

The variable argument(s).

</dd>

</dl>

**<a name="idp62985808"></a> Return Values**

Returns the formatted string.

**<a name="idp62986736"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62987840"></a> 
## See Also

[“string”](/momentum/3/3-api/structs-string)