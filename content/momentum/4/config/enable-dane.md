---
lastUpdated: "06/01/2024"
title: "enable_mta_sts"
description: "config option to enable application of DANE TLS verification for outbound mails"
---

<a name="config.enable-dane"></a>
## Name

enable_dane — specify whether Momentum should apply DANE TLS verification for outbound emails

## Synopsis

`enable_dane = "true|false"`

## Description

This option is only effective when [dane module](/momentum/4/modules/dane) is configured and
 [use_dane](/momentum/4/config/mta-sts/use-mta-sts) is `true` for a recipient domain.

This option specifies whether Momentum should try to apply the DANE TLS verification rules defined
 in TLSA record when sending emails to a remote site.

The default value is `true` when `use_dane` is `true` for a domain.


## Scope

`enable_dane` is valid in the binding, binding_group, domain and global scopes.
