---
lastUpdated: "06/01/2024"
title: "mta_sts_policy_store"
description: "the location to store the MTA-STS policy"
---

<a name="config.mta-sts-policy-store"></a>
## Name

mta_sts_policy_store — specifies the location to keep the MTA-STS policy details for the domains.

## Synopsis

`mta_sts_policy_store = "/var/spool/ecelerity/mtasts"`

## Description

Momentum stores MTA-STS policy for a domain in a file on disk, and accesses the HTTPS endpoint to refresh the
 policy once every 24 hours. This config option specifies the directory where the policies are stored
 on the disk.

The default value is `/var/spool/ecelerity/mtasts`.


## Scope

`mta_sts_policy_store` is valid in the global scope.
