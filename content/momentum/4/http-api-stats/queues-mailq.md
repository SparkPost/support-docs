---
lastUpdated: "04/15/2026"
title: "Mail Queue"
description: "GET /stats/queues/mailq returns mail queue statistics as JSON Optional query parameters domain binding ip and limit filter or tune how many binding domain pairs are ranked like ec console mailq"
---

<a name="http_api_stats.queues_mailq"></a>
## Name

`/stats/queues/mailq` — show the status of the mail queues

## Synopsis

`GET /stats/queues/mailq`

`GET /stats/queues/mailq?domain=some.domain`

`GET /stats/queues/mailq?binding=ip_1.2.3.4`

`GET /stats/queues/mailq?limit=50`

`GET /stats/queues/mailq?domain=example.com&binding=default&limit=100`

## Description

When issued with no query parameters, this endpoint shows counts for the active queue and the delayed queues sorted by binding groups and bindings.

The data is formatted as a JSON object and you might want to use the `curl` command to do the request (e.g. `curl -sS localhost:2081/stats/queues/mailq`).

### Query parameters

| Parameter | Meaning |
| --------- | ------- |
| `domain` | Restrict results to a specific domain (case is normalized to lower case). |
| `binding` | Restrict results to a specific binding name (for example `default` or `ip_1.2.3.4`). |
| `ip` | Alternative to `binding` for SparkPost-style IP bindings: `ip=1.2.3.4` is treated like `binding=ip_1.2.3.4`. If both `binding` and `ip` are present, `binding` wins. |
| `limit` | Positive integer passed through to the same logic as the ec_console `mailq` **`--limit` / `-l`** option: it sets how many binding/domain pairs are ranked and retained in the summary. If `limit` is omitted, zero, or not a valid positive number, the default (**20**) is used. There is no hard maximum in the product; larger values cause each maintainer thread to allocate larger internal structures, so use the smallest value that still meets your needs. |

You can combine `domain`, `binding` (or `ip`), and `limit` in one request.

Sample output is shown below:

```json
{
  "QueueSummary": [
    {
      "group": "bg_new",
      "binding": "ip_23.45.67.89",
      "domain": "a.random.domain",
      "aq": 1,
      "dq": 284,
      "receptions": 1048,
      "permfails": 1056,
      "transfails": 11612,
      "deliveries": 0
    },
    {
      "group": "spc:123456:foobar_1",
      "binding": "ip_12.34.56.78",
      "domain": "some.other.domain",
      "aq": 0,
      "dq": 0,
      "receptions": 0,
      "permfails": 0,
      "transfails": 0,
      "deliveries": 0
    }
  ]
}
```

The `group` and `binding` fields show the group and the binding that a domain belongs to. `aq` shows the items in the active queue and `dq` shows the items in the delayed queue. The number of receptions, permanent failures, transient failures, and deliveries are shown in the `receptions`, `permfails`, `transfails`, and `deliveries` fields respectively.

Examples of using the optional arguments:

```bash
# Check the queue for the "gmail.com" domain
curl -sS "localhost:2081/stats/queues/mailq?domain=gmail.com"

# Check the queue for the "gmail.com" domain related to the IP 1.2.3.4
curl -sS "localhost:2081/stats/queues/mailq?domain=gmail.com&binding=ip_1.2.3.4"

# Same binding selection using ip= (SparkPost-style binding name)
curl -sS "localhost:2081/stats/queues/mailq?domain=gmail.com&ip=1.2.3.4"

# Rank and return up to 100 binding/domain pairs (default is 20 if limit is omitted)
curl -sS "localhost:2081/stats/queues/mailq?limit=100"
```

The output might be a somewhat large JSON array, so to make it easier to read, you can try using `jq` and `column` to convert it to a table:

```bash
# Table with just bindings, domains, AQ and DQ
curl -sS "localhost:2081/stats/queues/mailq" | \
    jq -r '(["BINDING","DOMAIN","AQ","DQ"]|(.,map(length*"-"))),(.QueueSummary|.[]|[.binding,.domain,.aq,.dq])|@tsv' | \
    column -t

# Table with all fields
curl -sS "localhost:2081/stats/queues/mailq" | \
    jq -r '(["GROUP","BINDING","DOMAIN","AQ","DQ","RECEPTIONS","PERMFAILS","TRANSFAILS","DELIVERIES"]|(.,map(length*"-"))),(.QueueSummary|.[]|[.group,.binding,.domain,.aq,.dq,.receptions,.permfails,.transfails,.deliveries])|@tsv' | \
    column -t
```

And the output will be something like this:

```
GROUP                BINDING     DOMAIN       AQ  DQ  RECEPTIONS  PERMFAILS  TRANSFAILS  DELIVERIES
-----                -------     ------       --  --  ----------  ---------  ----------  ----------
amet:1:lorem         ip_1.2.3.4  gmail.com    5   0   14107       1          10          14092
consectetur:1:ipsum  ip_2.3.4.5  hotmail.com  5   0   224         0          0           215
adipiscing:1:dolor   ip_3.4.5.6  yahoo.com    5   0   181         23         153         0
elit:1:sit           ip_4.5.6.7  hotmail.com  4   0   223         0          0           216
```

## Note

This command was implemented in Momentum 4.4.1.
