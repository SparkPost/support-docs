---
lastUpdated: "03/26/2020"
title: "io_wrapper_open2"
description: "io wrapper open 2 Open a handle to a resource with context io object io wrapper open 2 filename options mode context const char filename int options int mode EC Dict context This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.io_wrapper_open2"></a> 
## Name

io_wrapper_open2 — Open a handle to a resource with context

## Synopsis

`#include "io_wrapper.h"`

| `io_object * **io_wrapper_open2** (` | <var class="pdparam">filename</var>, |   |
|   | <var class="pdparam">options</var>, |   |
|   | <var class="pdparam">mode</var>, |   |
|   | <var class="pdparam">context</var>`)`; |   |

`const char * <var class="pdparam">filename</var>`;
`int <var class="pdparam">options</var>`;
`int <var class="pdparam">mode</var>`;
`ECDict <var class="pdparam">context</var>`;<a name="idp53884256"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Open a handle to a resource with context.

This is semantically equivalent to setting the context via [io_wrapper_set_context](/momentum/3/3-api/apis-io-wrapper-set-context) prior to calling [io_wrapper_open](/momentum/3/3-api/apis-io-wrapper-open).

The io object takes a reference on the context.

### Note

This function may induce IO or otherwise block the caller. Blocking in the scheduler thread will lead to degraded performance and should be avoided at all costs. If your code is running in the IO subsystem, the core will have already taken steps to ensure that blocking is acceptable. Otherwise, you should look at using the thread pool API to run a job in the IO pool.