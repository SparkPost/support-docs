---
lastUpdated: "03/26/2020"
title: "ec_open_tmpfile3"
description: "ec open tmpfile 3 Open a file with a unique name in the specified a directory int ec open tmpfile 3 outname base char outname const char base Open a file with a unique name in the specified a directory Configuration Change This feature is available starting from Momentum 3..."
---

<a name="apis.ec_open_tmpfile3"></a> 
## Name

ec_open_tmpfile3 — Open a file with a unique name in the specified a directory

## Synopsis

`#include "util.h"`

| `int **ec_open_tmpfile3** (` | <var class="pdparam">outname</var>, |   |
|   | <var class="pdparam">base</var>`)`; |   |

`char * <var class="pdparam">outname</var>`;
`const char * <var class="pdparam">base</var>`;<a name="idp52513504"></a> 
## Description

Open a file with a unique name in the specified a directory.

**Configuration Change. ** This feature is available starting from Momentum 3.5.1.

**<a name="idp52516416"></a> Parameters**

<dl class="variablelist">

<dt>outname</dt>

<dd>

A buffer of MAXPATHLEN bytes to store the file name.

</dd>

<dt>base</dt>

<dd>

The temporary directory to use.

</dd>

</dl>

**<a name="idp52521024"></a> Return Values**

On success this function returns a file descriptor; on failure, `-1`.

**<a name="idp52522432"></a> Threading**

It is legal to call this function in any thread.

<a name="idp52523536"></a> 
## See Also

[ec_open_tmpfile](/momentum/3/3-api/apis-ec-open-tmpfile), [ec_open_tmpfile2](/momentum/3/3-api/apis-ec-open-tmpfile-2)