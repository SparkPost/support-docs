---
lastUpdated: "03/26/2020"
title: "trywritef"
description: "trywritef Write formatted data for an event int trywritef event buffer Event event const char buffer Write formatted data for an event This function assumes that the event closure is an Section 68 2 accept construct All events are assumed to be non blocking so the write semantics are non..."
---

<a name="apis.trywritef"></a> 
## Name

trywritef — Write formatted data for an event

## Synopsis

`#include "ec_growbuf.h"`

| `int **trywritef** (` | <var class="pdparam">event</var>, |   |
|   | <var class="pdparam">buffer</var>, |   |
|   | <var class="pdparam">...</var>`)`; |   |

`Event * <var class="pdparam">event</var>`;
`const char * <var class="pdparam">buffer</var>`;
`<var class="pdparam">...</var>`;<a name="idp48151648"></a> 
## Description

Write formatted data for an event.

### Note

This function assumes that the event closure is an [“accept_construct”](/momentum/3/3-api/structs-accept-construct).

### Note

All events are assumed to be non-blocking, so the write semantics are non-blocking.

A sample call:

`i = trywritef(event, "250 OK\r\n");`

### Warning

This function assumes that the `buffer` is a maximum of `4096` bytes.

**<a name="idp48158592"></a> Parameters**

<dl class="variablelist">

<dt>event</dt>

<dd>

An event.

</dd>

<dt>buffer</dt>

<dd>

The string to write. This may be a format string.

</dd>

<dt>...</dt>

<dd>

The variable argument(s).

</dd>

</dl>

**<a name="idp48165008"></a> Return Values**

This function returns `1` on success and `0` on failure.

**<a name="idp48166816"></a> Threading**

It is *only* legal to call this function in the `Scheduler` thread.

<a name="idp48168800"></a> 
## See Also

[trywrite](/momentum/3/3-api/apis-trywrite), [minimal_tryread_construct_free](/momentum/3/3-api/apis-minimal-tryread-construct-free), and [tryread_until](/momentum/3/3-api/apis-tryread-until)