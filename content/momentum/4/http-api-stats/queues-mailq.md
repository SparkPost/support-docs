---
lastUpdated: "31/01/2023"
title: "Mail Queue"
description: "/stats/queues/mailq show the status of the mail queues When issued with no arguments this command shows counts for the active queue and the delayed queues sorted by binding groups and bindings This request shall be done to the port 2081 using any..."
---

<a name="http_api_stats.queues_mailq"></a>
## Name

`/stats/queues/mailq` — show the status of the mail queues

## Synopsis

`GET /stats/queues/mailq`

`GET /stats/queues/mailq?domain=some.domain`

`GET /stats/queues/mailq?binding=ip_1.2.3.4`

<a name="TODO"></a>

## Description

When issued with no arguments this command shows counts for the active queue and the delayed queues sorted by binding groups and bindings.

The data is formatted as a JSON object and you might want to use the `curl` command to do the request (e.g. `curl -sS localhost:2081/stats/queues/mailq`).

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

The `group` and `binding` fields shows the group and the binding that a domain belongs to. `aq` shows the items in the active queue and `aq` shows the items in the delayed queue. The number of receptions, permanent failures, transient failures, and deliveries are shown in the `receptions`, `permfails`, `transfails`, and `deliveries` fields respectively.

Use this request with the `domain=a.specific.domain` argument to show the statistics for a specific domain, and the `binding=name` can be used in the same way to show a specific binding. The output cannot be limited or split into multiple pages.

Examples of using the optional arguments:

```bash
# Check the queue for the "gmail.com" domain
curl -sS "localhost:2081/stats/queues/mailq?domain=gmail.com"

# Check the queue for the "gmail.com" domain related to the IP 1.2.3.4
curl -sS "localhost:2081/stats/queues/mailq?domain=gmail.com&binding=ip_1.2.3.4"
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

This command was implemented in Momentum 4.5.
