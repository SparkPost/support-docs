---
lastUpdated: "03/26/2020"
title: "ec_copy_file"
description: "ec copy file Copy a file from one location to another int ec copy file srcpath destpath flags mode const char srcpath const char destpath int flags int mode Copy a file from one location to another srcpath The location of the source file destpath The location of the destination..."
---

<a name="apis.ec_copy_file"></a> 
## Name

ec_copy_file — Copy a file from one location to another

## Synopsis

`#include "util.h"`

| `int **ec_copy_file** (` | <var class="pdparam">srcpath</var>, |   |
|   | <var class="pdparam">destpath</var>, |   |
|   | <var class="pdparam">flags</var>, |   |
|   | <var class="pdparam">mode</var>`)`; |   |

`const char * <var class="pdparam">srcpath</var>`;
`const char * <var class="pdparam">destpath</var>`;
`int <var class="pdparam">flags</var>`;
`int <var class="pdparam">mode</var>`;<a name="idp52390976"></a> 
## Description

Copy a file from one location to another.

**<a name="idp52392192"></a> Parameters**

<dl class="variablelist">

<dt>srcpath</dt>

<dd>

The location of the source file.

</dd>

<dt>destpath</dt>

<dd>

The location of the destination file.

</dd>

<dt>flags</dt>

<dd>

The file creation flags for the destination `open()` call. For valid flags see **`man open`**      .

</dd>

<dt>mode</dt>

<dd>

The mode for the destination file. For valid modes see **`man open`**      .

</dd>

</dl>

This is a convenience wrapper that opens both files and then copies data from the source to the destination.

**<a name="idp52402448"></a> Return Values**

This function returns `0` on success.

**<a name="idp52403808"></a> Threading**

It is legal to call this function in any thread.