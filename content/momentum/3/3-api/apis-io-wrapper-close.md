---
lastUpdated: "03/26/2020"
title: "io_wrapper_close"
description: "io wrapper close Close an IO wrapper deprecated int io wrapper close io io object io Close an IO wrapper deprecated This API ignores refcounts and does not free Use io wrapper delref..."
---

<a name="apis.io_wrapper_close"></a> 
## Name

io_wrapper_close — Close an IO wrapper (deprecated)

## Synopsis

`#include "io_wrapper.h"`

| `int **io_wrapper_close** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp53539936"></a> 
## Description

Close an IO wrapper (deprecated).

**<a name="idp53541152"></a> Deprecated**

This API ignores refcounts and does not free. Use [io_wrapper_delref](/momentum/3/3-api/apis-io-wrapper-delref).