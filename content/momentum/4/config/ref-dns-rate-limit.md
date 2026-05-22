---
lastUpdated: "07/01/2026"
title: "dns_rate_limit_enabled, dns_rate_limit_mx_queries, dns_rate_limit_period, dns_rate_limit_max_queue"
description: "dns_rate_limit_* configuration options that limit the rate at which Momentum dispatches DNS queries, to prevent bursts that may overwhelm the DNS infrastructure"
---

<a name="conf.ref.dns_rate_limit"></a>
## Name

dns_rate_limit_enabled — enable or disable the DNS rate limiter

dns_rate_limit_mx_queries — maximum number of MX DNS lookups dispatched per period

dns_rate_limit_period — length of the rate limit window, in seconds

dns_rate_limit_max_queue — maximum number of domains the rate limiter will hold while waiting for a token

## Synopsis

`dns_rate_limit_enabled = true`

`dns_rate_limit_mx_queries = 500`

`dns_rate_limit_period = 1`

`dns_rate_limit_max_queue = 50000`

<a name="idp69437300"></a>
## Description

Momentum initiates an MX lookup each time a new destination domain enters the internal lookup table and each time a cached domain record expires and must be refreshed. Under normal traffic the resulting query rate is manageable, but several conditions can produce sudden, large bursts:

- Traffic spikes that bring in messages for thousands of distinct domains within a few seconds.
- TTL expiry storms where many cached records expire at the same instant.
- Restart recovery, where the lookup table is repopulated from the spool and can fire tens of thousands of lookups in rapid succession.

These bursts can overwhelm the recursive resolver configured in `resolv.conf` — some resolvers enforce their own incoming query-rate caps, others simply drop packets under load — causing DNS timeouts, stalled deliveries, and degraded throughput - even though the MTA itself is healthy.

### How It Works

The DNS rate limiter caps the number of outgoing MX lookups Momentum issues per unit of time. When the cap is reached, new lookups are placed in a bounded in-memory queue and dispatched at the configured rate. If the queue itself fills up, the lookup is sent immediately as a safety-valve fallback rather than being dropped.

### Configuration Options

`dns_rate_limit_enabled` turns the rate limiter on or off. The default value is `false` (disabled), in which case MX lookups go out as before and no queue is maintained. **Changing this option requires Momentum to be restarted.**

`dns_rate_limit_mx_queries` sets the maximum number of MX domain lookups that may be dispatched within each `dns_rate_limit_period`-second window. The budget is counted per domain lookup, not per UDP packet (see *Caveats* below). The default value is `100`. The value must be positive and can be changed with a configuration reload; the new limit becomes effective on the next drain cycle.

`dns_rate_limit_period` sets the length of the rate limit window, in seconds. `dns_rate_limit_mx_queries` lookups are permitted within each window. A period of `1` gives the smoothest rate, closest to a true per-second limit; larger values allow more burstiness within the window. Note that `dns_rate_limit_mx_queries = 200` with `dns_rate_limit_period = 2` is **not** equivalent to 100 lookups per second — it permits a total of 200 lookups across the 2-second window, so for example 180 lookups in the first second leave only 20 lookups of budget for the second second. The default value is `1`. The value must be positive and can be changed with a configuration reload.

`dns_rate_limit_max_queue` sets the maximum number of domains that may be held in the rate limiter queue waiting for a token. A domain that is already queued is not enqueued a second time. Size the queue large enough to absorb the burst expected between drain cycles (roughly 100 ms); raising it uses more memory, and lowering it below the expected burst size increases the likelihood of overflow events. When the queue is full, new domains bypass the rate limiter and are resolved immediately, which can temporarily exceed the configured query budget. The default value is `100000` and the minimum accepted value is `1000`. **Changing this option requires Momentum to be restarted.**

### Statistics

Counters reported by the `summary` [console command](/momentum/4/console-commands/summary) and the [HTTP API endpoint](/momentum/4/http-api-stats/summary) — `Immediate`, `Queued`, `Drained` and `Overflow` — can be used to evaluate whether the configured rate and queue size are appropriate for the workload. A healthy system under light-to-moderate load shows mostly `Immediate` increments. A system hitting its limit intentionally shows `Queued` and `Drained` growing in tandem. Persistent growth of `Overflow` means the queue or the configured rate is too small for the traffic volume — increase `dns_rate_limit_max_queue`, increase `dns_rate_limit_mx_queries`, or reduce the inbound message acceptance rate.

<a name="idp69437302"></a>
## Caveats

When the rate limiter is enabled, the internal DNS resolver library (c-ares) is forced to `attempts=1`. This reduces resilience to transient failures; ensure that the configured nameservers are reliable before enabling this feature.

The `rotate` option in `resolv.conf` cycles the starting nameserver round-robin across successive lookups, but combined with the forced `attempts=1` each nameserver is still attempted at most once per lookup, and only sequentially on timeout. When using `rotate` with multiple nameservers, take the nameserver count into account when sizing `dns_rate_limit_mx_queries`.

_Overflow is a safety valve, not a guarantee of delivery._ When the queue is full and a lookup bypasses the rate limiter, the configured rate is exceeded; if the resolver itself starts dropping or rate-limiting packets at that point, the resulting DNS timeouts may cause delivery delays.

TTL-expiry refreshes count against the same budget as lookups triggered by new messages. In environments with very high domain-cache churn, refreshes can consume a meaningful fraction of the configured limit.

<a name="idp69437301"></a>
## Scope

`dns_rate_limit_enabled`, `dns_rate_limit_mx_queries`, `dns_rate_limit_period` and `dns_rate_limit_max_queue` are valid in the global scope.
