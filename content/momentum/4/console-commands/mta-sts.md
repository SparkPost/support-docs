---
lastUpdated: "06/01/2024"
title: "mta_sts"
description: "mta_sts ec_console commands" 
---

<a name="console_commands.mta-sts"></a>
## Name

mta_sts - commands for MTA-STS related data

## Synopsis

`mta_sts list all`

`mta-sts show domain {domain name}`

`mta-sts refresh policy {domain name}`

## Description

**mta_sts list all**     - lists all the active domains which have MTA-STS policies

```
15:42:38 /tmp/2025> mta_sts list all
gmail.com
Total domains: 1
```

**mta-sts show domain { domain name }**     - shows MTA-STS TXT record and policy details of a given domain.
 The same content will be shown in [domain](/momentum/4/console-commands/domain) command output also if
 available.


```
18:13:43 /tmp/2025> mta_sts show domain gmail.com
Domain 'gmail.com' has MTA-STS TXT and a TTL of 185 seconds
        id: 20190429T010101
        max_age: 86400 seconds; refresh in 86375 seconds
        mode: enforce
        mxlist:
               gmail-smtp-in.l.google.com
               *.gmail-smtp-in.l.google.com
```

**mta-sts refresh policy {domain name}**     - forces MTA-STS policy refresh by fetching the policy
 from the HTTPS endpoint for a given domain


```
18:14:41 /tmp/2025> mta_sts refresh policy gmail.com
MTA-STS policy for gmail.com refreshed.
```
