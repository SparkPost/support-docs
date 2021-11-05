---
lastUpdated: "03/26/2020"
title: "io_wrapper_clone"
description: "io wrapper clone Duplicates an io object making it an independent cursor on the stream io object io wrapper clone io io object io This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.io_wrapper_clone"></a> 
## Name

io_wrapper_clone — Duplicates an io_object, making it an independent cursor on the stream

## Synopsis

`#include "io_wrapper.h"`

| `io_object * **io_wrapper_clone** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp53528032"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Duplicates an io_object, making it an independent cursor on the stream.

Makes a copy of an io_object with its own separate file position indicator. If it returns NULL, consult errno for an indication of why it failed.