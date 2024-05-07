---
lastUpdated: "06/01/2024"
title: "enable_mta_sts"
description: "config option to enable MTA-STS policy application for outbound mails"
---

<a name="config.enable-mta-sts"></a>
## Name

enable_mta_sts — specify whether Momentum should apply MTA-STS policies on outbound email sending

## Synopsis

`enable_mta_sts = "true|false"`

## Description

This option is only effective when [use_mta_sts](/momentum/4/config/mta-sts/use-mta-sts) is `true`
for a recipient domain.
This option specified whether Momentum try to apply the retrieved MTA-STS policies when sending
emails to a remote site. See [mta-sts](/momentum/4/mta-sts) for more details.
When this option is `true`, the MTA-STS policy mode will take the preference over the config options
 of [TLS](/momentum/4.config/tls) and [TLS_Verify](/momentum/4/config/tls-verify), unless the
 MTA-STS policy mode is `none`.

The default value is `true` when the domain level `use_mta_sts` is `true`.


## Scope

`enable_mta_sts` is valid in the binding, binding_group, domain and global scopes.
