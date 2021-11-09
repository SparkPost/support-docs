---
lastUpdated: "03/26/2020"
title: "thread_pool_stats"
description: "thread pool stats Obtain information about thread pools thread pool stats poolname jobname thread pool stats takes a thread pool name as its first argument and returns a hash containing various information about the pool including the number of threads in the pool queue size and number of invocations If..."
---

<a name="sieve.ref.thread_pool_stats"></a> 
## Name

thread_pool_stats — Obtain information about thread pools

## Synopsis

`thread_pool_stats` { *`poolname`* } [ *`jobname`* ]

<a name="idp31292384"></a> 
## Description

`thread_pool_stats` takes a thread pool name as its first argument and returns a hash containing various information about the pool, including the number of threads in the pool, queue size, and number of invocations.

If the optional `jobname` is also specified, the queue size and the number of running instances for that specific job in the pool is also returned.

### Note

The list of thread pools can be obtained on the console using the `threads stats` command.

The returned hash contains these keys and associated values:

<dl class="variablelist">

<dt>poolname</dt>

<dd>

The name of the pool (e.g. "CPU", "IO", "SWAPIN", etc).

</dd>

<dt>queue_sz</dt>

<dd>

The queue size (number of jobs pending for this thread pool).

</dd>

<dt>invocations</dt>

<dd>

The number of jobs that have been handled by this thread pool.

</dd>

<dt>job_num_queued</dt>

<dd>

The queue size for the specific job described in `jobname`. This will be present only if the `jobname` argument was given.

</dd>

<dt>job_num_running</dt>

<dd>

The number of running instances of the specific job described in `jobname`. This will be present only if the `jobname` argument was given.

</dd>

</dl>

<a name="example.thread_pool_stats"></a> 


```
$stats = thread_pool_stats "CPU";
$qsize = $stats["queue_sz"];
if ec_test :value "gt" :comparator "i;ascii-numeric" "${qsize}" "100" {
  ec_tarpit 10 "CPU queue backlog";
}
```

<a name="example.thread_pool_stats.second"></a> 


```
$stats = thread_pool_stats "CPU" "clamav_avscan";
$jqsize = $stats["job_num_queued"];
if ec_test :value "gt" :comparator "i;ascii-numeric" "${jqsize}" "100" {
  ec_action 451 "resource unavailable";
}
```