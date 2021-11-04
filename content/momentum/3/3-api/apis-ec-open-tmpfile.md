---
lastUpdated: "03/26/2020"
title: "ec_open_tmpfile"
description: "ec open tmpfile Open a file with a unique name unlink the file from disk and returns its descriptor int ec open tmpfile void Open a file with a unique name unlink the file from disk and return its descriptor On success this function returns a file descriptor on failure..."
---

<a name="apis.ec_open_tmpfile"></a> 
## Name

ec_open_tmpfile — Open a file with a unique name; unlink the file from disk and returns its descriptor

## Synopsis

`#include "util.h"`

| `int **ec_open_tmpfile** (` | `)`; |   |

`void`;<a name="idp52479584"></a> 
## Description

Open a file with a unique name; unlink the file from disk and return its descriptor.

**<a name="idp52480848"></a> Return Values**

On success this function returns a file descriptor; on failure, `-1`.

**<a name="idp52482256"></a> Threading**

It is legal to call this function in any thread.

<a name="idp52483360"></a> 
## See Also

[ec_open_tmpfile2](/momentum/3/3-api/apis-ec-open-tmpfile-2), [ec_open_tmpfile3](/momentum/3/3-api/apis-ec-open-tmpfile-3)