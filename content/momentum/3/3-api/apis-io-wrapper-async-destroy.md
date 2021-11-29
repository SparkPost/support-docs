---
lastUpdated: "03/26/2020"
title: "io_wrapper_async_destroy"
description: "io wrapper async destroy schedules an io wrapper destroy in the IO thread pool if you're not in the scheduler thread you can use io wrapper destroy directly void io wrapper async destroy io io object io This reference page was automatically generated from functions found in the header files..."
---

<a name="apis.io_wrapper_async_destroy"></a> 
## Name

io_wrapper_async_destroy — schedules an io_wrapper_destroy in the IO thread pool if you're not in the scheduler thread, you can use io_wrapper_destroy directly

## Synopsis

`#include "io_wrapper.h"`

| `void **io_wrapper_async_destroy** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp53516640"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

schedules an io_wrapper_destroy in the IO thread pool if you're not in the scheduler thread, you can use io_wrapper_destroy directly