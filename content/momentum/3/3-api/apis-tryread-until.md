---
lastUpdated: "03/26/2020"
title: "tryread_until"
description: "tryread until Read data in growbuf sized chunks int tryread until event needmask mtc until Event event int needmask minimal tryread construct mtc const char until Read data in growbuf sized chunks All events are assumed to be non blocking so the read and write semantics are non blocking The..."
---

<a name="apis.tryread_until"></a> 
## Name

tryread_until — Read data in `growbuf` sized chunks

## Synopsis

`#include "ec_growbuf.h"`

| `int **tryread_until** (` | <var class="pdparam">event</var>, |   |
|   | <var class="pdparam">needmask</var>, |   |
|   | <var class="pdparam">mtc</var>, |   |
|   | <var class="pdparam">until</var>`)`; |   |

`Event * <var class="pdparam">event</var>`;
`int * <var class="pdparam">needmask</var>`;
`minimal_tryread_construct * <var class="pdparam">mtc</var>`;
`const char * <var class="pdparam">until</var>`;<a name="idp48092656"></a> 
## Description

Read data in `growbuf` sized chunks.

### Note

All events are assumed to be non-blocking, so the read and write semantics are non-blocking.

The actual system call happening underneath can be either a 'read' or 'write' depending on the IO driver being used (for example, TLS).

**<a name="idp48095872"></a> Parameters**

<dl class="variablelist">

<dt>event</dt>

<dd>

An event.

</dd>

<dt>needmask</dt>

<dd>

The mask.

</dd>

<dt>mtc</dt>

<dd>

The address of a [“minimal_tryread_construct”](/momentum/3/3-api/structs-minimal-tryread-construct) struct.

</dd>

<dt>until</dt>

<dd>

An integer value, often `TRYREAD_UNTIL_CRLFDOTCRLF` or `TRYREAD_UNTIL_CRLF`.

</dd>

</dl>

**<a name="idp48105568"></a> Return Values**

This function returns the number of bytes successfully read or `-1` if there is an error. If there is an error, then `errno` is set appropriately (example, `EAGAIN, E2BIG, ENOMEM`).

**<a name="idp48107936"></a> Threading**

It is *only* legal to call this function in the `Scheduler` thread.

<a name="idp48109920"></a> 
## See Also

[trywrite](/momentum/3/3-api/apis-trywrite), [trywritef](/momentum/3/3-api/apis-trywritef), and [minimal_tryread_construct_free](/momentum/3/3-api/apis-minimal-tryread-construct-free).