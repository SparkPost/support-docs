---
lastUpdated: "03/26/2020"
title: "io_wrapper_copy_to_buffer"
description: "io wrapper copy to buffer copies up to len bytes from the io object and writes them to buf int io wrapper copy to buffer io buf buflen len io object io char buf int buflen int len This reference page was automatically generated from functions found in the header..."
---

<a name="apis.io_wrapper_copy_to_buffer"></a> 
## Name

io_wrapper_copy_to_buffer — copies up to len bytes from the io object and writes them to buf

## Synopsis

`#include "io_wrapper.h"`

| `int **io_wrapper_copy_to_buffer** (` | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">buflen</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;
`char * <var class="pdparam">buf</var>`;
`int <var class="pdparam">buflen</var>`;
`int <var class="pdparam">len</var>`;<a name="idp53574288"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

copies up to len bytes from the io object and writes them to buf.

Copying stops when LEN bytes are copied, or when EOF is indicated on the IO object. Returns the number of bytes copied.