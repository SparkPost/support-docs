---
lastUpdated: "06/01/2024"
title: "mta_sts_policy_store"
description: "the location to store the MTA-STS policy"
---

<a name="config.mta-sts-policy-store"></a>
## Name

mta_sts_policy_store — specifies how many continous cname lookups are allowed when doing DNS
 lookups for MTA-STS TXT record for a domain. Exceeding the configured value will be treated as a DNS
 lookup failure, which will be further treated as no MTA-STS policy available.

## Synopsis

`mta_sts_policy_store = "/var/spool/ecelerity/mtasts"`

## Description

Momentum stores MTA-STS policy for a domain in file on disk, and accesses the HTTPS endpoint to refresh the
 policy once every 24 hours. This config option specifies the directory where the policies are stored
 on the disk.

The default value is `/var/spool/ecelerity/mtasts`.


## Scope

`mta_sts_dns_cname_max_depth` is valid in the global scope.
