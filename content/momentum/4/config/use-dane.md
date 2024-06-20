---
lastUpdated: "06/01/2024"
title: "use_dane"
description: "config option to enable DANE TLSA DNS lookup for a domain"
---

<a name="config.use-dane"></a>
## Name

use_dane — specify whether Momentum should check DNS record DNSSEC status and look up for TLSA
 record if applicable.

## Synopsis

`use_dane = "true|false"`

## Description

This option is only effective when [dane modue](/momentum/4/modules/dane) is configured.

This option specifies whether Momentum shall check the DNSSEC status of a domain's MX and A record,
 and if both pass DNSSEC validation, corresponding TLSA record will be fetched and DNSSEC status
 checked for DANE.

The default value is `false`.


## Scope

`use_dane` is valid in the domain and global scopes.
