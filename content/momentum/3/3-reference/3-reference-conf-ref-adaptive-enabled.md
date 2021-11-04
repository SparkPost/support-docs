---
lastUpdated: "03/26/2020"
title: "adaptive_enabled"
description: "adaptive enabled enable or disable the adaptive module adaptive enabled true adaptive enabled false This directive is only valid if the Momentum adaptive module is loaded See Section 14 2 adaptive Adaptive Delivery This directive instructs Momentum to enable or disable the adaptive module globally on a specific domain binding..."
---

<a name="conf.ref.adaptive_enabled"></a> 
## Name

adaptive_enabled — enable or disable the adaptive module

## Synopsis

`adaptive_enabled = "true"`
`adaptive_enabled = "false"`

<a name="idp7372032"></a> 
## Description

### Note

This directive is only valid if the Momentum adaptive module is loaded. See [“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive).

This directive instructs Momentum to enable (or disable) the adaptive module globally, on a specific domain, binding or domain within a binding.

<a name="idp7375232"></a> 
## Scope

adaptive_enabled is valid in the binding, binding_group, domain and global scope.

<a name="idp7376912"></a> 
## See Also

[“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive)