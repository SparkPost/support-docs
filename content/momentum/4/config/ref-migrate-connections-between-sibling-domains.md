---
lastUpdated: "03/26/2020"
title: "migrate_connections_between_sibling_domains"
description: "migrate connections between sibling domains optimize connections for sibling domains migrate connections between sibling domains true When this option is false if the active queue for a binding domain pair becomes empty its existing connection s sit idle When set to true Momentum attempts to find a sibling domain which..."
---

<a name="conf.ref.migrate_connections_between_sibling_domains"></a> 
## Name

migrate_connections_between_sibling_domains — optimize connections for sibling domains

## Synopsis

`migrate_connections_between_sibling_domains = true`

<a name="idp25454416"></a> 
## Description

When this option is `false`, if the active queue for a binding/domain pair becomes empty, its existing connection(s) sit idle. When set to `true`, Momentum attempts to find a sibling domain which shares the same binding and has a non-empty active queue and then move the idle connections to it.

If two domains have at least one common mail server (MX), they are considered siblings.

The default value is `true`.

<a name="idp25458848"></a> 
## Scope

`migrate_connections_between_sibling_domains` is valid in the global scope.