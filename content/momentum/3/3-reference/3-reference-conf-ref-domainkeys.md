---
lastUpdated: "03/26/2020"
title: "domainkeys"
description: "domainkeys enable or disable domainkeys signing domainkeys enabled domainkeys disabled This directive is only valid if the Momentum dk sign module is loaded See Section 14 29 domainkeys Yahoo Domain Keys This directive instructs Momentum to enable or disable signing messages with a Domain Keys signature globally on a specific..."
---

<a name="conf.ref.domainkeys"></a> 
## Name

domainkeys — enable or disable domainkeys signing

## Synopsis

`domainkeys = "enabled"`
`domainkeys = "disabled"`

<a name="idp9412608"></a> 
## Description

### Note

This directive is only valid if the Momentum dk_sign module is loaded. See [“domainkeys – Yahoo! DomainKeys”](/momentum/3/3-reference/3-reference-modules-domainkeys)

This directive instructs Momentum to enable (or disable) signing messages with a DomainKeys signature globally, on a specific domain, binding or domain within a binding. When the dk_sign module is loaded, signing occurs for all messages by default. This is the same as setting domainkeys = enabled at the global scope.

<a name="idp9416288"></a> 
## Scope

domainkeys is valid in the binding, domain and global scope.

domainkeys is also valid in the binding group scope.

<a name="idp9418752"></a> 
## See Also

[dkim](/momentum/3/3-reference/conf-ref-dkim)