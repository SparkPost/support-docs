---
lastUpdated: "03/26/2020"
title: "io_wrapper_fdopen"
description: "io wrapper fdopen Open an io object on top of an existing descriptor io object io wrapper fdopen fd int fd This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of..."
---

<a name="apis.io_wrapper_fdopen"></a> 
## Name

io_wrapper_fdopen — Open an io_object on top of an existing descriptor

## Synopsis

`#include "io_wrapper.h"`

| `io_object * **io_wrapper_fdopen** (` | <var class="pdparam">fd</var>`)`; |   |

`int <var class="pdparam">fd</var>`;<a name="idp53646912"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Open an io_object on top of an existing descriptor.

**<a name="idp53649792"></a> Parameters**

<dl class="variablelist">

<dt>fd</dt>

<dd>

the file descriptor

</dd>

</dl>

**<a name="idp53652512"></a> Return Values**

Returns an io_object that will operate on the fd.