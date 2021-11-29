---
lastUpdated: "03/26/2020"
title: "trywrite"
description: "trywrite Write a string of buflen bytes for an event int trywrite event buffer buflen Event event const char buffer int buflen Write a string of buflen bytes for an event This function assumes that the event closure is an Section 68 2 accept construct All events are assumed to..."
---

<a name="apis.trywrite"></a> 
## Name

trywrite — Write a string of `buflen` bytes for an event

## Synopsis

`#include "ec_growbuf.h"`

| `int **trywrite** (` | <var class="pdparam">event</var>, |   |
|   | <var class="pdparam">buffer</var>, |   |
|   | <var class="pdparam">buflen</var>`)`; |   |

`Event * <var class="pdparam">event</var>`;
`const char * <var class="pdparam">buffer</var>`;
`int <var class="pdparam">buflen</var>`;<a name="idp48123024"></a> 
## Description

Write a string of `buflen` bytes for an event.

### Note

This function assumes that the event closure is an [“accept_construct”](/momentum/3/3-api/structs-accept-construct).

### Note

All events are assumed to be non-blocking, so the write semantics are non-blocking.

A sample call:

`i = trywrite(event, ".\r\n", 3)`

**<a name="idp48128576"></a> Parameters**

<dl class="variablelist">

<dt>event</dt>

<dd>

An event.

</dd>

<dt>buffer</dt>

<dd>

The string to write.

</dd>

<dt>buflen</dt>

<dd>

The length of `buffer`, in bytes.

</dd>

</dl>

**<a name="idp48135408"></a> Return Values**

This function returns `1` on success and `0` on failure.

**<a name="idp48137216"></a> Threading**

It is *only* legal to call this function in the `Scheduler` thread.

<a name="idp48139200"></a> 
## See Also

[trywritef](/momentum/3/3-api/apis-trywritef), [minimal_tryread_construct_free](/momentum/3/3-api/apis-minimal-tryread-construct-free), and [tryread_until](/momentum/3/3-api/apis-tryread-until)