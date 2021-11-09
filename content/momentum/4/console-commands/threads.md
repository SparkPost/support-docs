---
lastUpdated: "03/26/2020"
title: "threads"
description: "threads stats threads io queue threads cpu queue Display summary statistics for thread pools threads cpu queue threads io queue threads stats threads stats shows summary information of thread pools This command displays statistics for any of the built in thread pools and also any thread pools that you have..."
---

<a name="console_commands.threads"></a> 
## Name

threads stats, threads io queue, threads cpu queue — Display summary statistics for thread pools

## Synopsis

`threads cpu queue`

`threads io queue`

`threads stats`

<a name="idp11288848"></a> 
## Description

**threads stats**       shows summary information of thread pools.

```
10:47:35 /tmp/2025> threads stats
CPU thread pool: concurrency 4
IO thread pool: concurrency 5
               Total invocations: 46010
    Observed average concurrency: 1.00
          Thread pool saturation:  0.01%
   Average wallclock time per op: 0.11ms
            Current thread count: 0
  [inactive threads]
            Current thread count: 5
SWAPOUT thread pool: concurrency 5
               Total invocations: 46668
    Observed average concurrency: 3.94
          Thread pool saturation: 49.54%
   Average wallclock time per op: 780.56ms
            Current thread count: 0
  [inactive threads]
            Current thread count: 5
SWAPIN thread pool: concurrency 5
CLOSE thread pool: concurrency 0
```

This command displays statistics for any of the "built-in" thread pools and also any thread pools that you have created.

**threads io queue**          shows the queued IO jobs.

```
10:47:35 /tmp/2025> threads io queue
Jobs in the IO pool
0 jobs
```

**threads cpu queue**           shows the queued CPU jobs.

```
10:47:35 /tmp/2025> threads cpu queue
Jobs in the CPU pool
0 jobs
```
<a name="idp11295568"></a> 
## See Also

[threadpool](/momentum/4/config/ref-threadpool)