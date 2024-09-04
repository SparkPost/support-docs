---
lastUpdated: "06/01/2024"
title: "use_mta_sts"
description: "config option to enable MTA-STS policy fetching for a domain"
---

<a name="config.use-mta-sts"></a>
## Name

use_mta_sts — specify whether Momentum should do MTA-STS policy fetching for a domain.

## Synopsis

`use_mta_sts = "true|false"`

## Description

This option specifies whether Momentum shall attempt to discover the recipient domain's MTA-STS
 policy (via a DNS TXT lookup to retrieve the MTA-STS policy ID and a HTTPS lookup to retrieve the
 MTA-STS policy).

The default value is `false`.


## Scope

`use_mta_sts` is valid in the domain and global scopes.
