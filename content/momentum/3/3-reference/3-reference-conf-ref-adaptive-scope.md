---
lastUpdated: "03/26/2020"
title: "adaptive_scope"
description: "adaptive scope define the scope applicable to adaptive delivery adaptive scope auto Configuration Change This feature is available as of version 3 3 This directive is only valid if the Momentum adaptive module is loaded See Section 14 2 adaptive Adaptive Delivery Use this option to set the scope of..."
---

<a name="conf.ref.adaptive_scope"></a> 
## Name

adaptive_scope — define the scope applicable to adaptive delivery

## Synopsis

`adaptive_scope = "auto"`

<a name="idp7385328"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.3.

### Note

This directive is only valid if the Momentum adaptive module is loaded. See [“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive).

Use this option to set the scope of adaptive delivery to either local to the node or cluster-wide (i.e. global). Legal values for this option are: `local`, `global` and `auto`. When this option is set to `auto`, then the scope will be global if the binding is DuraVIP enabled and `local` for all other cases.

The default value for this option is `auto`.

<a name="idp7394512"></a> 
## Scope

adaptive_scope is valid in the binding, binding_group, domain and global scopes.

<a name="idp7396192"></a> 
## See Also

[“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive), [adaptive_enabled](/momentum/3/3-reference/3-reference-conf-ref-adaptive-enabled), [“The `adaptive_scope` Option”](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options.changes.3.3.adaptive_scope)