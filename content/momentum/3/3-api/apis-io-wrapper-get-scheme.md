---
lastUpdated: "03/26/2020"
title: "io_wrapper_get_scheme"
description: "io wrapper get scheme Retrieves the scheme associated with an io object const char io wrapper get scheme io io object io This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.io_wrapper_get_scheme"></a> 
## Name

io_wrapper_get_scheme — Retrieves the scheme associated with an io object

## Synopsis

`#include "io_wrapper.h"`

| `const char * **io_wrapper_get_scheme** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp53769936"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Retrieves the scheme associated with an io object.

**<a name="idp53772816"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

the io object

</dd>

</dl>

**<a name="idp53775520"></a> Return Values**

the scheme. The buffer is guaranteed to exist only until the next call to [io_wrapper_set_scheme](/momentum/3/3-api/apis-io-wrapper-set-scheme), or until the object is destroyed.