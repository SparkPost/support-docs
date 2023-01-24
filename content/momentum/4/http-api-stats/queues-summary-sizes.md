---
lastUpdated: "02/01/2023"
title: "Queues Sizes"
description: "show the status of the mail queues This command returns the current sizes of the active and delayed queues AQ DQ The data is formatted as a JSON object and you might want to use the curl command to do the request"
---

<a name="http_api_stats.queues_summary_sizes"></a>
## Name

`/stats/queues/summary/sizes` — show the status of the mail queues

## Synopsis

`GET /stats/queues/summary/sizes`

<a name="TODO"></a>

## Description

This command returns the current sizes of the active and delayed queues (AQ/DQ).

The data is formatted as a JSON object and you might want to use the `curl` command to do the request (e.g. `curl -sS localhost:2081/stats/queues/summary/sizes`).

Sample output is shown below:

```json
{
  "aq": 81,
  "dq": 2
}
```

The report fields are as follows:

<dl class="variablelist">

<dt>aq</dt>

<dd>

The current size of the active queue.

</dd>

<dt>dq</dt>

<dd>

The current size of the delayed queue.

</dd>

</dl>

## See Also

[Mail Queue](/momentum/4/http-api-stats/queues-mailq)

## Note

This command was implemented in Momentum 4.5.
