---
lastUpdated: "03/26/2020"
title: "io_wrapper_destroy"
description: "io wrapper destroy Decrements the refcount on the io object and closes and frees it if the refcount reaches 0 void io wrapper destroy io io object io Decrement the refcount on the io object and close and frees it if the refcount reaches 0 Use io wrapper delref instead..."
---

<a name="apis.io_wrapper_destroy"></a> 
## Name

io_wrapper_destroy — Decrements the refcount on the io_object, and closes and frees it if the refcount reaches 0

## Synopsis

`#include "io_wrapper.h"`

| `void **io_wrapper_destroy** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp53633776"></a> 
## Description

Decrement the refcount on the io_object, and close and frees it if the refcount reaches `0`.

### Deprecated

Use [io_wrapper_delref](/momentum/3/3-api/apis-io-wrapper-delref) instead.

**<a name="idp53637568"></a> Threading**

It is legal to call this function in any thread.