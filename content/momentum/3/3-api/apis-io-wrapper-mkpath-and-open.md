---
lastUpdated: "03/26/2020"
title: "io_wrapper_mkpath_and_open"
description: "io wrapper mkpath and open Open a handle to a resource creating any missing directories if necessary and options and O CREAT io object io wrapper mkpath and open filename options dirmode filemode const char filename int options int dirmode int filemode This reference page was automatically generated from functions..."
---

<a name="apis.io_wrapper_mkpath_and_open"></a> 
## Name

io_wrapper_mkpath_and_open — Open a handle to a resource, creating any missing directories if necessary and (options and O_CREAT)

## Synopsis

`#include "io_wrapper.h"`

| `io_object * **io_wrapper_mkpath_and_open** (` | <var class="pdparam">filename</var>, |   |
|   | <var class="pdparam">options</var>, |   |
|   | <var class="pdparam">dirmode</var>, |   |
|   | <var class="pdparam">filemode</var>`)`; |   |

`const char * <var class="pdparam">filename</var>`;
`int <var class="pdparam">options</var>`;
`int <var class="pdparam">dirmode</var>`;
`int <var class="pdparam">filemode</var>`;<a name="idp53843072"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Open a handle to a resource, creating any missing directories if necessary and (options and O_CREAT).

Not fully implemented - only works for the scheme.

### Note

This function may induce IO or otherwise block the caller. Blocking in the scheduler thread will lead to degraded performance and should be avoided at all costs. If your code is running in the IO subsystem, the core will have already taken steps to ensure that blocking is acceptable. Otherwise, you should look at using the thread pool API to run a job in the IO pool.