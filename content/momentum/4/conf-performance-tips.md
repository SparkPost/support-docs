---
lastUpdated: "05/21/2024"
title: "Performance Tips"
description: "This chapter provides you with some tips to optimize the Momentum performance ratings"
---

Momentum is an exceptionally powerful all-in-one email infrastructure solution. For several reasons, however, the default configuration shipped with the installation bundle does not run at full speed for all the use cases. This chapter provides you with some tips to optimize the Momentum performance ratings.

## <a name="conf.tips.cpu_optimized"></a> CPU Optimization

With [Supercharger](/momentum/4/licensed-features-supercharger) licensed feature, Momentum runs on top of several [event loop](/momentum/4/multi-event-loops) schedulers and uses multicore CPUs with improved efficiency. In this model, it is also possible to assign dedicated event loops to listeners (e.g. the HTTP one) with desired concurrency. On the other hand, the default configuration is based solely on the thread pools to offload specific tasks, therefore Momentum keeps running on top of the original master event loop only, and it can be occasionally bottlenecked.

The Supercharger's *"75% of CPU cores"* formula works fine on systems largely SMTP-driven. For systems with larger [message generation](momentum/4/message-gen) flows (i.e., REST injections), the number of event loops can be limited to 4 or 5, with higher concurrency values assigned to the `msg_gen` thread pools (see `gen_transactional_threads` configuration [here](momentum/4/modules/msg-gen)). For instance:

```
msg_gen  {
  (...)
  gen_transactional_threads = 4
}
```

Also, the CPU thread pool is expected to be used for a lot of functions in the REST flows, so it is recommended to increase the concurrency from its default value (of 4):

```
ThreadPool "CPU" {
  concurrency = 8
}
```

Last, it is recommended to assign separated event loops for listeners to reduce latency and improve the overall performance. For instance, the following configuration assigns dedicated event loops to the ESMTP and HTTP listeners:

```
ESMTP_Listener {
  event_loop = "smtp_pool"
  (...)
}
(...)
HTTP_Listener {
  event_loop = "http_pool"
  (...)
}
```

## <a name="conf.tips.caches"></a> Better Caching

Momentum has some built-in caches that can be tuned to improve performance. The following are the most important ones:

### <a name="conf.tips.caches.getter"></a> Generic Getter

This cache is used for parameters that are not in a binding/domain scope.  So anything that's global, or module configuration, exist in the generic getter cache. This cache gets a lot of traffic, so setting it in `ecelerity.conf` to something like few million entries is reasonable:

```
generic_getter_cache_size = 4000000
```

### <a name="conf.tips.caches.match"></a> Regex Match

The match cache saves results of queries against regular expression domain stanzas. This cache is enabled by default, but its [size](momentum/4/config/ref-match-cache-size) is very small by default (16384 entries). Making it larger is a great idea, especially if user is using any regular expression domain stanzas:

```
match_cache_size = 2000000
```

## <a name="conf.tips.jemalloc"></a> Boosting `jemalloc` Performance

`jemalloc` has demonstrated excellent performance and stability. Because of that, it became the default Momentum's memory allocator. However, it is possible to get even more from it by tuning the `MALLOC_CONF` environment variable.

Add these lines to `/opt/msys/ecelerity/etc/environment` file (or create it):

```
MALLOC_CONF="background_thread:true"
export MALLOC_CONF
```

then (re)start the `ecelerity` service.

## <a name="conf.tips.lua"></a> Tuning Lua

Lua has a garbage collector that can be tuned to improve performance. The following are some recommended settings:

In the `ecelerity.conf` file:

```
ThreadPool "gc" {
    concurrency = 10
}
(...)
scriptlet "scriptlet" {
    (...)
    gc_every = 20
    gc_step_on_recycle = true
    gc_stepmul = 300
    gc_threadpool = “gc”
    gc_trace_thresh = 1000
    gc_trace_xref_thresh = 1000
    global_trace_interval = 13
    max_uses_per_thread = 5000
    reap_interval = 13
    use_reusable_thread = true
}
```

Enforce these settings in the `/opt/msys/ecelerity/etc/environment` file:

```
USE_TRACE_THREADS=true
export USE_TRACE_THREADS
LUA_USE_TRACE_THREADS=true
export LUA_USE_TRACE_THREADS
LUA_NUM_TRACE_THREADS=8
export LUA_NUM_TRACE_THREADS
LUA_NON_SIGNAL_COLLECTOR=true
export LUA_NON_SIGNAL_COLLECTOR
```

## <a name="conf.tips.misc"></a> Miscellaneous Configuration

These are `ecelerity.conf` settings that are known to improve performance on different tasks of Momentum. Before applying them, however, review their documentation and make sure they fit to your environment and use cases:

```
fully_resolve_before_smtp = false
growbuf_size = 32768
inline_transfail_processing = 0
initial_hash_buckets = 64
keep_message_dicts_in_memory = true
large_message_threshold = 262144
max_resident_active_queue = 1000
max_resident_messages = 100000
```

## <a name="conf.tips.misc"></a> Miscellaneous Tips

- Don't forget to [adjust `sysctl` settings](momentum/4/byb-sysctl-conf) for best TCP connections performance;
- Prefer [chunk_logger](momentum/4/modules/chunk-logger) over logging to `paniclog`. The reasons are taken from the `chunk_logger` page:

> _Logging to the_ `paniclog` _in the scheduler thread (the main thread) can limit throughput and cause watchdog kills. (...) [It] involves disk I/O, and writing to the_ `paniclog` _in the scheduler thread may block its execution for a long time, thereby holding up other tasks in the scheduler thread and decreasing throughput._
