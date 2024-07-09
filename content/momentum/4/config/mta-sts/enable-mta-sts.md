---
lastUpdated: "06/01/2024"
title: "enable_mta_sts"
description: "config option to enable MTA-STS policy application for outbound mails"
---

<a name="config.enable-mta-sts"></a>
## Name

enable_mta_sts — specify whether Momentum should apply MTA-STS policies for outbound emails.

## Synopsis

`enable_mta_sts = "true|false"`

## Description

This option is only effective when [use_mta_sts](/momentum/4/config/mta-sts/use-mta-sts) is `true`
for a recipient domain.
This option specifies whether Momentum should try to apply the retrieved MTA-STS policy when sending
emails to a remote site. See [MTA-STS support in Momentum](/momentum/4/mta-sts) for more details.


When this option is `true`, the MTA-STS policy mode will be considered along with the configuration
 values for [TLS](/momentum/4/config/ref-tls) and [TLS_Verify](/momentum/4/config/tls-verify).
 The more strict policy will apply:
 
- When the MTA-STS policy mode is `enforce`, regardless of the
 values for `TLS` and `TLS_Verify`, Momentum will enforce TLS (equivalent to `TLS = required`) and
 will fail the delivery upon a failed certificate validation (equivalent to `TLS_Verify = host`).
- When the MTA-STS policy mode is `testing`, Momentum will apply `TLS = ifavailable` (unless
 `TLS = required` is specified) and `TLS_Verify = optional` (unless `TLS_Verify = host` is
 specified).
- When the MTA-STS policy mode is `none`, the policy will be ignored and the configuration values for
 `TLS` and `TLS_Verify` will be respected.

The default value is `true` when `use_mta_sts` is `true` for a domain.


## Scope

`enable_mta_sts` is valid in the domain, binding, binding_group, and global scopes.
