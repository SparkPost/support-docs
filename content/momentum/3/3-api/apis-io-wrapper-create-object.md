---
lastUpdated: "03/26/2020"
title: "io_wrapper_create_object"
description: "io wrapper create object manufactures an io object on the fly io object io wrapper create object wrapper handle io wrapper wrapper void handle This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.io_wrapper_create_object"></a> 
## Name

io_wrapper_create_object — manufactures an io_object on the fly

## Synopsis

`#include "io_wrapper.h"`

| `io_object * **io_wrapper_create_object** (` | <var class="pdparam">wrapper</var>, |   |
|   | <var class="pdparam">handle</var>`)`; |   |

`io_wrapper * <var class="pdparam">wrapper</var>`;
`void * <var class="pdparam">handle</var>`;<a name="idp53586992"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

manufactures an io_object on the fly.

Sometimes it is useful to create an io object from pre-existing resources rather than opening a path.

**<a name="idp53590400"></a> Parameters**

<dl class="variablelist">

<dt>wrapper</dt>

<dd>

pointer to an io_wrapper structure defining the streaming operations.

</dd>

<dt>handle</dt>

<dd>

pointer that will be set as the handle for the object.

</dd>

</dl>

**<a name="idp53595072"></a> Return Values**

Returns an io_object.