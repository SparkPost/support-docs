---
lastUpdated: "03/26/2020"
title: "domainkeys"
description: "domainkeys enable or disable domainkeys signing domainkeys enabled domainkeys disabled This directive instructs Momentum to enable or disable signing messages with a Domain Keys signature globally on a specific domain binding or domain within a binding To use this directive you must also configure the dk sign module When the..."
---

<a name="conf.ref.domainkeys"></a> 
## Name

domainkeys — enable or disable domainkeys signing

## Synopsis

`domainkeys = "enabled"`
`domainkeys = "disabled"`

<a name="idp24391872"></a> 
## Description

This directive instructs Momentum to enable (or disable) signing messages with a DomainKeys signature globally, on a specific domain, binding, or domain within a binding. To use this directive, you must also configure the [`dk_sign`](/momentum/4/modules/domainkeys) module. When the dk_sign module is loaded, signing occurs for all messages by default. This is the same as setting `domainkeys = "enabled"` at the global scope.

<a name="idp24395328"></a> 
## Scope

domainkeys is valid in the binding, binding_group, domain, and global scope.