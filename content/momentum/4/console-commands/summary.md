---
lastUpdated: "11/05/2024"
title: "summary"
description: "summary show global metrics summary with mobile Perhaps the most common and useful command for the console summary will produce global metrics such as queue sizes message counts and throughput rates since startup or the last reset of statistics If you have configured your control listener to listen on the..."
---

<a name="console_commands.summary"></a> 
## Name

summary — show global metrics

## Synopsis

`summary` [ with-mobile ]

<a name="idp13042608"></a> 
## Description

Perhaps the most common and useful command for the console, **summary** will produce global metrics such as queue sizes, message counts and throughput rates since startup or the last reset of statistics.

```
10:47:35 /tmp/2025> summary
Summary Statistics
        Outbound Concurrency:    2248
        Inbound Concurrency:      90
        Active Domains:   35711
        Active Queue Size:   8793
        Delayed Queue Size: 263175
        Total Queue Size: 272334
        DNS Resolver: ares
        DNS A Queries: 565284
        DNS A Timeouts: 11
        DNS AAAA Queries: 0
        DNS AAAA Timeouts: 0
        DNS MX Queries: 243281
        DNS MX Timeouts: 6
        DNS TXT Queries: 39841
        DNS TXT Timeouts: 0
        Pending DNS Queries: 116
        Query Rate:   9.08 queries/second
        DNS Response Time Peak:  469 ms
        DNS Response Time Average:  0.302 ms
        Successfully Delivered Messages: 2102439
        Failed Messages: 2508439
        Rejected Messages:      1
        Received Messages: 4883262
        Delivery Rate:  51.76 messages/second
        Reception Rate:  54.82 messages/second
        Statistics Last Reset:  89081 seconds
        Uptime:  89083 seconds
```

If you have configured your control listener to listen on the default Unix socket, you can invoke the summary command without opening the system console by issuing the command, **`ec_console /tmp/2025 summary`**                   .

The report fields are as follows:

<dl class="variablelist">

<dt>Outbound Concurrency</dt>

<dd>

The current number of established outbound sessions.

</dd>

<dt>Inbound Concurrency</dt>

<dd>

The current number of established inbound sessions.

</dd>

<dt>Active Domains</dt>

<dd>

The number of domains in the DNS cache.

</dd>

<dt>Active Queue Size</dt>

<dd>

The number of messages in the system that require immediate delivery attempts.

</dd>

<dt>Delayed Queue Size</dt>

<dd>

The number of messages in the system that have been delayed. A message is delayed due to transient delivery failures (4xx SMTP codes) and a retry time is calculated for the message. When that retry time is reached, the message will be moved from the delayed queue to the active queue.

</dd>

<dt>Total Queue Size</dt>

<dd>

The sum of all queues.

</dd>

<dt>DNS Resolver</dt>

<dd>

The library used to resolve DNS queries.

</dd>

<dt>DNS A Queries</dt>

<dd>

The total number of A type queries issued since startup or last summary reset.

</dd>

<dt>DNS A Timeouts</dt>

<dd>

_Introduced in Momentum 4.8._

The total number of A type queries that resulted expired since startup or last summary reset.

</dd>

<dt>DNS AAAA Queries</dt>

<dd>

The total number of AAAA type queries issued since startup or last summary reset.

</dd>

<dt>DNS AAAA Timeouts</dt>

<dd>

_Introduced in Momentum 4.8._

The total number of AAAA type queries that resulted expired since startup or last summary reset.

</dd>

<dt>DNS MX Queries</dt>

<dd>

The total number of MX type queries issued since startup or last summary reset.

</dd>

<dt>DNS MX Timeouts</dt>

<dd>

_Introduced in Momentum 4.8._

The total number of MX type queries that resulted expired since startup or last summary reset.

<dt>DNS TXT Queries</dt>

<dd>

_Introduced in Momentum 4.8._

The total number of TXT type queries issued since startup or last summary reset.

</dd>

<dt>DNS TXT Timeouts</dt>

<dd>

_Introduced in Momentum 4.8._

The total number of TXT type queries that resulted expired since startup or last summary reset.

</dd>

<dt>Pending DNS Queries</dt>

<dd>

The total number of DNS queries that are not completed yet.

</dd>

<dt>Query Rate</dt>

<dd>

The average number of DNS queries/second performed since startup or last summary reset.

</dd>

<dt>DNS Response Time Peak</dt>

<dd>

_Introduced in Momentum 4.8._

The peak of all answers response times since startup or last summary reset, in milliseconds.

</dd>

<dt>DNS Response Time Average</dt>

<dd>

_Introduced in Momentum 4.8._

The average of all answers response times since startup or last summary reset, in milliseconds.

</dd>

<dt>Successfully Delivered Messages</dt>

<dd>

The number of messages successfully delivered by Momentum since it was started or since the last summary reset.

</dd>

<dt>Failed Messages</dt>

<dd>

The number of outbound messages permanently failed since it was started or since the last summary reset.

</dd>

<dt>Rejected Messages</dt>

<dd>

The number of messages rejected by Momentum since it was started or since the last summary reset.

</dd>

<dt>Received Messages</dt>

<dd>

The number of messages received by Momentum for deliver since it was started or since the last summary reset.

</dd>

<dt>Delivery Rate</dt>

<dd>

The average number of messages/second delivered (successful and unsuccessful) since Momentum was started or since the last summary reset.

</dd>

<dt>Reception Rate</dt>

<dd>

The average number of messages/second received for delivery since Momentum was started or since the last summary reset.

</dd>

<dt>Statistics Last Reset</dt>

<dd>

The number of seconds since statistics were reset using the "summary reset" command (see below).

</dd>

<dt>Uptime</dt>

<dd>

The number of seconds that Momentum has been running continuously.

</dd>

</dl>

Use the `with-mobile` option to display the status of SMPP and MM7 message queues.

<a name="idp9306560"></a> 
## See Also

[binding summary](/momentum/4/console-commands/binding-summary), [summary reset](/momentum/4/console-commands/summary-reset)

## Attention

On a busy system, if this command is run frequently, it may result in a Momentum watchdog restart. If `summary` data is needed multiple times per hour then it is recommended to use the [summary HTTP endpoint](/momentum/4/http-api-stats/summary.md) instead.
