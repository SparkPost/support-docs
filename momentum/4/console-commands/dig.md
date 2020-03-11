---
title: "dig"
description: "dig submit a domain for DNS MX query dig domain This command submits a domain for DNS MX query This console command manipulates the route cache and likewise with the domain and refresh domain commands The DNS cache as manipulated by the dns cache series of console commands..."
---

<a name="console_commands.dig"></a> 
## Name

dig — submit a domain for DNS MX query

## Synopsis

`dig` [ *`domain`* ]

<a name="idp12989328"></a> 
## Description

This command submits a domain for DNS MX query.

```
10:47:35 /tmp/2025> dig mail.omniti.com
submitted
```

### Note

This console command manipulates the *route cache* , and likewise with the [domain](console_commands.domain "domain") and [refresh domain](console_commands.refresh_domain "refresh domain") commands. The *DNS cache* , as manipulated by the [dns_cache](console_commands.dns_cache "dns_cache") series of console commands.