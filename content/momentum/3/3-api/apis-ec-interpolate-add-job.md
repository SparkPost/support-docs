---
lastUpdated: "03/26/2020"
title: "ec_interpolate_add_job"
description: "ec interpolate add job Adds work for an interpolator running in async or non blocking mode int ec interpolate add job ctx job ec interpolate context ctx ec async job job This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.ec_interpolate_add_job"></a> 
## Name

ec_interpolate_add_job — Adds work for an interpolator running in async or non-blocking mode

## Synopsis

`#include "misc/expand_string.h"`

| `int **ec_interpolate_add_job** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">job</var>`)`; |   |

`ec_interpolate_context * <var class="pdparam">ctx</var>`;
`ec_async_job * <var class="pdparam">job</var>`;<a name="idp53315328"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Adds work for an interpolator running in async or non-blocking mode.

This function is intended to be called from inside an interpolator function when it needs to queue up work that is required to satisfy an asynchronous or non-blocking operation.

This function may be called multiple times from a given interpolator to batch together a number of work items. The interpolation infrastructure will set a completion routine in each job so that the original caller will be notified once all the work is complete.