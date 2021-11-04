---
lastUpdated: "03/26/2020"
title: "dkim"
description: "dkim enable or disable dkim signing dkim enabled dkim disabled This directive is only valid if the Momentum dkim sign module is loaded See Section 14 27 dkim Domain Keys Identified Mail Signatures This directive instructs Momentum to enable or disable signing messages with a DKIM signature globally on a..."
---

<a name="conf.ref.dkim"></a> 
## Name

dkim — enable or disable dkim signing

## Synopsis

`dkim = "enabled"`
`dkim = "disabled"`

<a name="idp8942800"></a> 
## Description

### Note

This directive is only valid if the Momentum dkim_sign module is loaded. See [“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim)

This directive instructs Momentum to enable (or disable) signing messages with a DKIM signature globally, on a specific domain, binding or domain within a binding. When the dkim_sign module is loaded signing occurs for all messages by default. This is the same as setting `dkim = "enabled"` at the global scope.

Note that you would not normally need to change this, since even when signing is enabled globally you also need to have a valid key and selector configured for a domain. For this reason signing is usually "enabled" by defining selectors and keys for the signing domains in the dkim_sign module.

<a name="idp8947632"></a> 
## Scope

dkim is valid in the binding, domain and global scope.

dkim is also valid in the binding_group scope.

<a name="idp8950080"></a> 
## See Also

[domainkeys](/momentum/3/3-reference/3-reference-conf-ref-domainkeys) and [“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim)