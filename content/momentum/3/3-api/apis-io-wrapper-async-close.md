---
lastUpdated: "03/26/2020"
title: "io_wrapper_async_close"
description: "io wrapper async close Close an IO wrapper deprecated void io wrapper async close io io object io Close an IO wrapper deprecated This API ignores refcounts and does not free Use io wrapper async destroy instead..."
---

<a name="apis.io_wrapper_async_close"></a> 
## Name

io_wrapper_async_close — Close an IO wrapper (deprecated)

## Synopsis

`#include "io_wrapper.h"`

| `void **io_wrapper_async_close** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp53505296"></a> 
## Description

Close an IO wrapper (deprecated).

**<a name="idp53506512"></a> Deprecated**

This API ignores refcounts and does not free. Use [io_wrapper_async_destroy](/momentum/3/3-api/apis-io-wrapper-async-destroy) instead.