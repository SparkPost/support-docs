---
lastUpdated: "06/01/2024"
title: "mta_sts_dns_cname_max_depth"
description: "config option on how many continuous CNAME lookups are allowed when doing MTA-STS TXT
record lookup for a domain"
---

<a name="config.mta-sts-dns-cname-max-depth"></a>
## Name

mta_sts_dns_cname_max_depth — specifies how many continuous `CNAME` lookups are allowed when doing DNS
 lookups for MTA-STS TXT record for a domain. Exceeding the configured value will be treated as a DNS
 lookup failure, which will be further treated as no MTA-STS policy available.

## Synopsis

`mta_sts_dns_cname_max_depth = 5`

## Description

Momentum supports MTA-STS policy delegation, which points the `_mta-sts` TXT record for the policy
 domain via `CNAME` (to the `_mta-sts` record maintained by the provider). Momentum's DNS lookup
 will follow the `CNAME`s. To avoid a DNS lookup loop, Momentum uses this config option to limit how
 many continuous `CNAME` lookups can happen before claiming a lookup failure.

The default value is `5`.


## Scope

`mta_sts_dns_cname_max_depth` is valid in the domain and global scopes.
