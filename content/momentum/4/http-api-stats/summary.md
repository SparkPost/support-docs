---
lastUpdated: "31/01/2023"
title: "Summary"
description: "stats summary show global metrics Perhaps the most common API command stats summary will produce global metrics such as queue sizes message counts and throughput rates since startup or the last reset of statistics"
---

<a name="http_api_stats.summary"></a>
## Name

`/stats/summary` — show global metrics

## Synopsis

`GET /stats/summary`

## Description

Perhaps the most common API command, `/stats/summary` will produce global metrics such as queue sizes, message counts and throughput rates since startup or the last reset of statistics.

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
  "DNSAAAAQueries": 0,
  "DNSMXQueries": 5361180,
  "DNSQueryRate": 2.25,
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

<dt>DNSAAAAQueries</dt>

<dd>

The total number of AAAA type queries issued since startup or last summary reset.

</dd>

<dt>DNSMXQueries</dt>

<dd>

The total number of MX type DNS queries issued since startup or last summary reset.

</dd>

<dt>DNSQueryRate</dt>

<dd>

The average number of DNS queries/second performed since startup or last summary reset.

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

## See Also

[summary reset](/momentum/4/console-commands/summary-reset)

## Note

This command was implemented in Momentum 4.5.
