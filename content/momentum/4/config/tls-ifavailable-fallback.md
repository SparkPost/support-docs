---
lastUpdated: "03/26/2020"
title: "tls_ifavailable_fallback"
description: "tls ifavailable fallback determine the behavior if TLS negotiation fails TLS Ifavailable fallback true false Configuration Change This option is available as of version 4 1 When opportunistic TLS is enabled this option determines the behavior if the TLS negotiation fails This option can be set to the following true..."
---

<a name="config.tls_ifavailable_fallback"></a> 
## Name

tls_ifavailable_fallback — determine the behavior if TLS negotiation fails

## Synopsis

`TLS_Ifavailable_fallback = "true|false"`

<a name="idp26960496"></a> 
## Description

**Configuration Change. ** This option is available as of version 4.1.

When opportunistic TLS is enabled, this option determines the behavior if the TLS negotiation fails.

This option can be set to the following:

*   `true` – Momentum will immediately try to send the message as plain-text if the remote mail exchange supports TLS but the negotiation fails.

*   `false` – The message is put back into the delayed queue and retried later. The retries will also be attempted with TLS. This behavior is the same as in prior Momentum versions.

The default value is `true`.

<a name="idp26968992"></a> 
## Scope

`tls_ifavailable_fallback` is valid in the binding, binding_group, domain, and global scopes.