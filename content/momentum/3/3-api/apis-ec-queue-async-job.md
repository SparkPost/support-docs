---
lastUpdated: "03/26/2020"
title: "ec_queue_async_job"
description: "ec queue async job Enqueue an asynchronous job int ec queue async job job ec async job job Enqueue an asynchronous job The ec queue async job function without a terminating underscore invokes ec queue async job and is defined in the following way define ec queue async job job..."
---

<a name="apis.ec_queue_async_job_"></a> 
## Name

ec_queue_async_job — Enqueue an asynchronous job

## Synopsis

`#include "ec_thread_pool.h"`

| `int **ec_queue_async_job** (` | <var class="pdparam">job</var>`)`; |   |

`ec_async_job * <var class="pdparam">job</var>`;<a name="idp63292192"></a> 
## Description

Enqueue an asynchronous job.

### Note

The `ec_queue_async_job` function (without a terminating underscore) invokes `ec_queue_async_job_` and is defined in the following way: `#define ec_queue_async_job(job) ec_queue_async_job_(job, __FILE__, __LINE__, 0)`. Invoking `ec_queue_async_job_` directly is not usually required.

**<a name="idp63296272"></a> Parameters**

<dl class="variablelist">

<dt>job</dt>

<dd>

The job you wish to enqueue. For a definition of this data type see [ec_async_job](/momentum/3/3-api/structs-ec-async-job).

</dd>

</dl>

**<a name="idp63299776"></a> Return Values**

On success this function returns `1`; on failure, `0`.

**<a name="idp63301600"></a> Threading**

It is legal to call this function in any thread.

<a name="idp63303024"></a> 
## See Also

[The Threadpool API](/momentum/3/3-api/arch-primary-apis#arch.threadpool)