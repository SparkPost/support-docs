---
lastUpdated: "03/26/2020"
title: "io_wrapper_get_path"
description: "io wrapper get path Retrieve the path associated with an io object const char io wrapper get path io io object io Retrieve the path associated with an io object io The io object The path The buffer is guaranteed to exist only until the next call to io wrapper..."
---

<a name="apis.io_wrapper_get_path"></a> 
## Name

io_wrapper_get_path — Retrieve the path associated with an io object

## Synopsis

`#include "io_wrapper.h"`

| `const char * **io_wrapper_get_path** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp53755008"></a> 
## Description

Retrieve the path associated with an io object.

**<a name="idp53756240"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

The io object.

</dd>

</dl>

**<a name="idp53758944"></a> Return Values**

The path. The buffer is guaranteed to exist only until the next call to [io_wrapper_set_path](/momentum/3/3-api/apis-io-wrapper-set-path), or until the object is destroyed.

**<a name="idp53760512"></a> Threading**

It is legal to call this function in any thread.