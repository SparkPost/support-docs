---
lastUpdated: "03/26/2020"
title: "ec_find_file"
description: "ec find file Find a file in the given search path and return the resulting path int ec find file search path base outstr errstr const char search path const char base string outstr string errstr Find a filename in the given search path and return the resulting path search..."
---

<a name="apis.ec_find_file"></a> 
## Name

ec_find_file — Find a file in the given search path and return the resulting path

## Synopsis

`#include "util.h"`

| `int **ec_find_file** (` | <var class="pdparam">search_path</var>, |   |
|   | <var class="pdparam">base</var>, |   |
|   | <var class="pdparam">outstr</var>, |   |
|   | <var class="pdparam">errstr</var>`)`; |   |

`const char * <var class="pdparam">search_path</var>`;
`const char * <var class="pdparam">base</var>`;
`string * <var class="pdparam">outstr</var>`;
`string * <var class="pdparam">errstr</var>`;<a name="idp52459136"></a> 
## Description

Find a filename in the given search path and return the resulting path.

**<a name="idp52460400"></a> Parameters**

<dl class="variablelist">

<dt>search_path</dt>

<dd>

The colon-separated path to search.

</dd>

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

**<a name="idp52468704"></a> Return Values**

On success this function returns `1`; on failure it returns `0`.

**<a name="idp52470544"></a> Threading**

It is legal to call this function in any thread.