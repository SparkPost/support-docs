---
lastUpdated: "03/26/2020"
title: "ec_open_tmpfile2"
description: "ec open tmpfile 2 Open a file with a unique name and store the name in outname int ec open tmpfile 2 outname char outname Open a file with a unique name and store the name in outname outname A buffer of MAXPATHLEN bytes to store the file name On..."
---

<a name="apis.ec_open_tmpfile2"></a> 
## Name

ec_open_tmpfile2 — Open a file with a unique name and store the name in `outname`

## Synopsis

`#include "util.h"`

| `int **ec_open_tmpfile2** (` | <var class="pdparam">outname</var>`)`; |   |

`char * <var class="pdparam">outname</var>`;<a name="idp52494512"></a> 
## Description

Open a file with a unique name and store the name in `outname`.

**<a name="idp52496192"></a> Parameters**

<dl class="variablelist">

<dt>outname</dt>

<dd>

A buffer of `MAXPATHLEN` bytes to store the file name.

</dd>

</dl>

**<a name="idp52499392"></a> Return Values**

On success this function returns a file descriptor; on failure, `-1`.

**<a name="idp52500800"></a> Threading**

It is legal to call this function in any thread.

<a name="idp52501904"></a> 
## See Also

[ec_open_tmpfile](/momentum/3/3-api/apis-ec-open-tmpfile), [ec_open_tmpfile3](/momentum/3/3-api/apis-ec-open-tmpfile-3)