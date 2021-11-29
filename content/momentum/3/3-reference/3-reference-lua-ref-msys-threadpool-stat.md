---
lastUpdated: "03/26/2020"
title: "msys.threadpool.stat"
description: "msys threadpool stat Return stats regarding a threadpool msys threadpool stat threadpoolname or jobclassid Configuration Change This feature is available as of version 3 2 Supply a job class ID integer or name string to this function A table is returned with the following fields name invocations avg concurrency saturation..."
---

<a name="lua.ref.msys.threadpool.stat"></a> 
## Name

msys.threadpool.stat — Return stats regarding a threadpool

<a name="idp27001760"></a> 
## Synopsis

`msys.threadpool.stat(threadpoolname_or_jobclassid);`

`threadpoolname_or_jobclassid: mixed`<a name="idp27004480"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.2.

Supply a job class ID (integer) or name (string) to this function. A table is returned with the following fields.

*   name

*   invocations

*   avg_concurrency

*   saturation

*   avg_wallclock_time_per_op

*   queue_sz

*   num_threads

*   num_active_threads

*   num_inactive_threads

*   job_num_queued

*   job_num_running

If no thread pool exists with the given name or job class then `nil` is returned. This function is only safe to call from the scheduler thread. Summaries returned by this function include a pretty printer.

<a name="lua.re.msys.threadpool_stat.example"></a> 


```
...
s = msys.threadpool.stat("SWAPIN");
print (s["invocations"]);
s = msys.threadpool.stat(1);
print (s["job_num_queued"]);
```

Enable this function with the statement `require('msys.threadpool');`.

<a name="idp27021536"></a> 
## See Also

[msys.threadpool.find](/momentum/3/3-reference/3-reference-lua-ref-msys-threadpool-find), [msys.threadpool.count](/momentum/3/3-reference/3-reference-lua-ref-msys-threadpool-count) [threadpool](/momentum/3/3-reference/3-reference-conf-ref-threadpool)