---
lastUpdated: "12/31/2025"
title: "Summary"
description: "stats summary show global metrics Perhaps the most common API command stats summary will produce global metrics such as queue sizes message counts and throughput rates since startup or the last reset of statistics"
---

<a name="http_api_stats.summary"></a>
## Name

`/stats/summary` — global metrics

## Synopsis

`GET /stats/summary`

`DELETE /stats/summary`

## Description

<a name="http_api_stats.summary.get"></a>
### Gather Global Metrics

Perhaps the most common API command, `GET /stats/summary` will produce global metrics such as queue sizes, message counts and throughput rates since startup or the last reset of statistics.

The data is formatted as a JSON object and you might want to use the `curl` command to do the request (e.g. `curl -sS localhost:2081/stats/summary`).

Sample output is shown below:

```json
{
  "OutboundConcurrency": 209,
  "InboundConcurrency": 1340,
  "ActiveDomains": 8253,
  "ActiveQueueSize": 39,
  "DelayedQueueSize": 2,
  "TotalQueueSize": 47,
  "DNSResolver": "ares",
  "DNSAQueries": 6307067,
  "DNSATimeouts": 34,
  "DNSAAAAQueries": 0,
  "DNSAAAATimeouts": 0,
  "DNSMXQueries": 5361180,
  "DNSMXTimeouts": 22,
  "DNSTXTQueries": 114992,
  "DNSTXTTimeouts": 57,
  "DNSQueryRate": 2.25,
  "DNSResponseTimePeak": 291,
  "DNSResponseTimeAverage": 1.04,
  "DNSRateLimiterEnabled": false,
  "ResidentMessages": 120,
  "DiskQueueProgress": "    29/    29",
  "DeliveredMessages": 516030153,
  "FailedMessages": 6406412,
  "TransientFailures": 7533966,
  "RejectedMessages": 0,
  "ReceivedMessages": 522356470,
  "DeliveryRate": 100.85,
  "ReceptionRate": 100.84,
  "RejectionRate": 0,
  "RejectionPercentage": 0,
  "StatisticsLastReset": 5180099,
  "Uptime": 510923
}
```

The report fields are as follows:

<dl class="variablelist">

<dt>OutboundConcurrency</dt>

<dd>

The current number of established outbound sessions.

</dd>

<dt>InboundConcurrency</dt>

<dd>

The current number of established inbound sessions.

</dd>

<dt>ActiveDomains</dt>

<dd>

The number of domains in the DNS cache.

</dd>

<dt>ActiveQueueSize</dt>

<dd>

The number of messages in the system that require immediate delivery attempts.

</dd>

<dt>DelayedQueueSize</dt>

<dd>

The number of messages in the system that have been delayed. A message is delayed due to transient delivery failures (4xx SMTP codes) and a retry time is calculated for the message. When that retry time is reached, the message will be moved from the delayed queue to the active queue.

</dd>

<dt>TotalQueueSize</dt>

<dd>

The sum of all queues.

</dd>

<dt>DNSResolver</dt>

<dd>

The library used to resolve DNS queries.

</dd>

<dt>DNSAQueries</dt>

<dd>

The total number of A type queries issued since startup or last summary reset.

</dd>

<dt>DNSATimeouts</dt>

<dd>

_Introduced in Momentum 4.8._

The total number of A type queries that resulted expired since startup or last summary reset.

</dd>

<dt>DNSAAAAQueries</dt>

<dd>

The total number of AAAA type queries issued since startup or last summary reset.

</dd>

<dt>DNSAAAATimeouts</dt>

<dd>

_Introduced in Momentum 4.8._

The total number of AAAA type queries that resulted expired since startup or last summary reset.

</dd>

<dt>DNSMXQueries</dt>

<dd>

The total number of MX type DNS queries issued since startup or last summary reset.

</dd>

<dt>DNSMXTimeouts</dt>

<dd>

_Introduced in Momentum 4.8._

The total number of MX type queries that resulted expired since startup or last summary reset.

<dt>DNSTXTQueries</dt>

<dd>

_Introduced in Momentum 4.8._

The total number of TXT type queries issued since startup or last summary reset.

</dd>

<dt>DNSTXTTimeouts</dt>

<dd>

_Introduced in Momentum 4.8._

The total number of TXT type queries that resulted expired since startup or last summary reset.

</dd>

<dt>DNSQueryRate</dt>

<dd>

The average number of DNS queries/second performed since startup or last summary reset.

</dd>

<dt>DNSResponseTimePeak</dt>

<dd>

_Introduced in Momentum 4.8._

The peak of all answers response times since startup or last summary reset, in milliseconds.

</dd>

<dt>DNSResponseTimeAverage</dt>

<dd>

_Introduced in Momentum 4.8._

The average of all answers response times since startup or last summary reset, in milliseconds.

</dd>

<dt>DNSRateLimiterEnabled</dt>

<dd>

_Introduced in Momentum 5.3._

Whether the [DNS rate limiter](/momentum/4/config/ref-dns-rate-limit) is enabled (`true`) or disabled (`false`). When the rate limiter is enabled, the following additional fields are also reported:

<dl class="variablelist">

<dt>DNSRateLimitMXQueries</dt>

<dd>

The current value of [`dns_rate_limit_mx_queries`](/momentum/4/config/ref-dns-rate-limit) — the maximum number of MX DNS queries dispatched per `DNSRateLimitPeriod`.

</dd>

<dt>DNSRateLimitPeriod</dt>

<dd>

The current value of [`dns_rate_limit_period`](/momentum/4/config/ref-dns-rate-limit) — the period, in seconds, over which the MX query budget is enforced.

</dd>

<dt>DNSRateLimiterQueueSize</dt>

<dd>

The current number of domains waiting in the rate limiter queue for a token.

</dd>

<dt>DNSRateLimiterQueueMax</dt>

<dd>

The maximum number of domains that may be held in the rate limiter queue, as configured by [`dns_rate_limit_max_queue`](/momentum/4/config/ref-dns-rate-limit).

</dd>

<dt>DNSRateLimiterImmediate</dt>

<dd>

The total number of MX lookups dispatched without queueing — i.e. lookups that fit within the per-period budget — since startup or last summary reset.

</dd>

<dt>DNSRateLimiterQueued</dt>

<dd>

The total number of MX lookups that had to be queued to wait for a token since startup or last summary reset.

</dd>

<dt>DNSRateLimiterDrained</dt>

<dd>

The total number of MX lookups dispatched from the queue since startup or last summary reset.

</dd>

<dt>DNSRateLimiterOverflow</dt>

<dd>

The total number of MX lookups that bypassed the rate limiter because the queue was full since startup or last summary reset. A non-zero value indicates that [`dns_rate_limit_max_queue`](/momentum/4/config/ref-dns-rate-limit) may be too small for the workload.

</dd>

</dl>

</dd>

<dt>ResidentMessages</dt>

<dd>

The number of message bodies held in memory.

</dd>

<dt>DiskQueueProgress</dt>

<dd>

The message spool in progress.

</dd>

<dt>DeliveredMessages</dt>

<dd>

The number of messages successfully delivered by Momentum since it was started or since the last summary reset.

</dd>

<dt>FailedMessages</dt>

<dd>

The number of outbound messages permanently failed since it was started or since the last summary reset.

</dd>

<dt>TransientFailures</dt>

<dd>

The number of outbound messages transiently failed since it was started or since the last summary reset.

</dd>

<dt>RejectedMessages</dt>

<dd>

The number of messages rejected by Momentum since it was started or since the last summary reset.

</dd>

<dt>ReceivedMessages</dt>

<dd>

The number of messages received by Momentum for deliver since it was started or since the last summary reset.

</dd>

<dt>DeliveryRate</dt>

<dd>

The average number of messages/second delivered (successful and unsuccessful) since Momentum was started or since the last summary reset.

</dd>

<dt>ReceptionRate</dt>

<dd>

The average number of messages/second received for delivery since Momentum was started or since the last summary reset.

</dd>

<dt>RejectionRate</dt>

<dd>

The average number of messages/second rejected since Momentum was started or since the last summary reset.

</dd>

<dt>RejectionPercentage</dt>

<dd>

The percentage of messages rejected by Momentum since it was started or since the last summary reset.

</dd>

<dt>StatisticsLastReset</dt>

<dd>

The number of seconds since statistics were reset using the "summary reset" command (see below).

</dd>

<dt>Uptime</dt>

<dd>

The number of seconds that Momentum has been running continuously.

</dd>

</dl>

<a name="http_api_stats.summary.delete"></a>
### Reset Statistics

You can reset the statistics used to generate this report by issuing a `DELETE` request to the same URL: `DELETE /stats/summary`. This will reset all the cumulative counters to zero and the time-based metrics will be calculated from that point forward. The output of a successful reset operation is as follows:

```json
{
  "message": "statistics cleared"
}
```

## See Also

[summary](/momentum/4/console-commands/summary),
[summary reset](/momentum/4/console-commands/summary-reset)

## Note

`GET /stats/summary` was first implemented in Momentum 4.4.1.

`DELETE /stats/summary` was first implemented in Momentum 5.2.
