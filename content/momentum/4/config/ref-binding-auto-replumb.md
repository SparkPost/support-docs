---
lastUpdated: "03/26/2020"
title: "binding_auto_replumb"
description: "binding auto replumb enable or disable the auto replumber binding auto replumb enabled binding auto replumb disabled This directive instructs Momentum to enable or disable the auto replumber The replumber periodically checks the plumbed state for bindings with static addresses and replumbs any that are unplumbed Bindings can become unplumbed..."
---

<a name="conf.ref.binding_auto_replumb"></a> 
## Name

binding_auto_replumb — enable or disable the auto replumber

## Synopsis

`binding_auto_replumb = "enabled"`
`binding_auto_replumb = "disabled"`

<a name="idp23519264"></a> 
## Description

This directive instructs Momentum to enable (or disable) the auto replumber. The replumber periodically checks the plumbed state for bindings with static addresses and replumbs any that are unplumbed. Bindings can become unplumbed if there are network issues or if the NIC goes down temporarily.

The default value is `disabled`.

<a name="idp23522272"></a> 
## Scope

`binding_auto_replumb` is valid in the global scope.

<a name="idp23524528"></a> 
## See Also

[binding_auto_replumb_interval](/momentum/4/config/ref-binding-auto-replumb-interval)