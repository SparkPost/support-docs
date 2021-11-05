---
lastUpdated: "03/26/2020"
title: "io_wrapper_create_read_job"
description: "io wrapper create read job Creates a job to read the contents of a file io job io wrapper create read job filename const char filename This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.io_wrapper_create_read_job"></a> 
## Name

io_wrapper_create_read_job — Creates a job to read the contents of a file

## Synopsis

`#include "io_wrapper.h"`

| `io_job * **io_wrapper_create_read_job** (` | <var class="pdparam">filename</var>`)`; |   |

`const char * <var class="pdparam">filename</var>`;<a name="idp53604496"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Creates a job to read the contents of a file.

a read job will read the contents of the resource named by filename before completing, storing the results in the string buffer pointed at by the buffer member of the job structure. The caller is responsible for setting buffer to point at a valid string, and also for setting the completion options on the job. The lifetime of buffer is entirely the responsibility of the caller.

job = io_wrapper_create_read_job("foobar"); job->buffer = &mystate->stringbuffer; ec_async_wake_validation_module(job, ctx); ec_queue_async_job(job); return VALIDATE_AGAIN;