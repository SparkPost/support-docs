---
lastUpdated: "03/26/2020"
title: "dig"
description: "dig submit a domain for DNS MX query dig domain This command submits a domain for DNS MX query This console command manipulates the route cache and likewise with the domain and refresh domain commands The DNS cache as manipulated by the dns cache series of console commands..."
---

<a name="console_commands.dig"></a> 
## Name

dig — submit a domain for DNS MX query

## Synopsis

`dig` [ *`domain`* ]

<a name="idp15847904"></a> 
## Description

This command submits a domain for DNS MX query.

```
10:47:35 /tmp/2025> dig mail.omniti.com
submitted
```

### Note

This console command manipulates the *route cache* , and likewise with the [domain](/momentum/3/3-reference/3-reference-console-commands-domain) and [refresh domain](/momentum/3/3-reference/3-reference-console-commands-refresh-domain) commands. The *DNS cache* , as manipulated by the [dns_cache](/momentum/3/3-reference/3-reference-console-commands-dns-cache) series of console commands.