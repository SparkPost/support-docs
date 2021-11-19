---
lastUpdated: "03/26/2020"
title: "ec_find_conf_file"
description: "ec find conf file Find a filename in the default search path and return the resulting path int ec find conf file base outstr errstr const char base string outstr string errstr Find a filename in the default search path and return the resulting path base The base filename to..."
---

<a name="apis.ec_find_conf_file"></a> 
## Name

ec_find_conf_file — Find a filename in the default search path and return the resulting path

## Synopsis

`#include "util.h"`

| `int **ec_find_conf_file** (` | <var class="pdparam">base</var>, |   |
|   | <var class="pdparam">outstr</var>, |   |
|   | <var class="pdparam">errstr</var>`)`; |   |

`const char * <var class="pdparam">base</var>`;
`string * <var class="pdparam">outstr</var>`;
`string * <var class="pdparam">errstr</var>`;<a name="idp52414736"></a> 
## Description

Find a filename in the default search path and return the resulting path.

**<a name="idp52416000"></a> Parameters**

<dl class="variablelist">

<dt>base</dt>

<dd>

The base filename to be found.

</dd>

<dt>outstr</dt>

<dd>

The string holding the resulting path.

</dd>

<dt>errstr</dt>

<dd>

The error message, set on failure.

</dd>

</dl>

**<a name="idp52422448"></a> Return Values**

On success this function returns `1`; on failure it returns `0`.

**<a name="idp52424288"></a> Threading**

It is legal to call this function in any thread.