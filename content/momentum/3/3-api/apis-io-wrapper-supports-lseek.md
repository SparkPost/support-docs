---
lastUpdated: "03/26/2020"
title: "io_wrapper_supports_lseek"
description: "io wrapper supports lseek Indicates if a stream is seekable int io wrapper supports lseek io io object io This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and..."
---

<a name="apis.io_wrapper_supports_lseek"></a> 
## Name

io_wrapper_supports_lseek — Indicates if a stream is seekable

## Synopsis

`#include "io_wrapper.h"`

| `int **io_wrapper_supports_lseek** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp54069328"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Indicates if a stream is seekable.

**<a name="idp54072192"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

the io object

</dd>

</dl>

**<a name="idp54074896"></a> Return Values**

return 1 if the stream is seekable, 0 otherwise.