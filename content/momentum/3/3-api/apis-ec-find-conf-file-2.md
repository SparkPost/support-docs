---
lastUpdated: "03/26/2020"
title: "ec_find_conf_file2"
description: "ec find conf file 2 Find a filename in the given search path and return the resulting path int ec find conf file 2 path base outstr errstr const char path const char base string outstr string errstr Find a filename in the given search path and return the resulting..."
---

<a name="apis.ec_find_conf_file2"></a> 
## Name

ec_find_conf_file2 — Find a filename in the given search path and return the resulting path

## Synopsis

`#include "util.h"`

| `int **ec_find_conf_file2** (` | <var class="pdparam">path</var>, |   |
|   | <var class="pdparam">base</var>, |   |
|   | <var class="pdparam">outstr</var>, |   |
|   | <var class="pdparam">errstr</var>`)`; |   |

`const char * <var class="pdparam">path</var>`;
`const char * <var class="pdparam">base</var>`;
`string * <var class="pdparam">outstr</var>`;
`string * <var class="pdparam">errstr</var>`;<a name="idp52436000"></a> 
## Description

Find a filename in the given search path and return the resulting path.

**<a name="idp52437264"></a> Parameters**

<dl class="variablelist">

<dt>path</dt>

<dd>

A colon-separated path to search before the system configuration path.

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

**<a name="idp52445616"></a> Return Values**

On success this function returns `1`; on failure it returns `0`.

**<a name="idp52447456"></a> Threading**

It is legal to call this function in any thread.