---
lastUpdated: "03/26/2020"
title: "generate_delay_dsn"
description: "generate delay dsn generate DS Ns if mail is delayed generate delay dsn true generate delay dsn false Momentum has the ability to generate warning messages delivery status notifications or DS Ns that are delivered to the envelope sender of a message that has not yet been delivered The default..."
---

<a name="conf.ref.generate_delay_dsn"></a> 
## Name

generate_delay_dsn — generate DSNs if mail is delayed

## Synopsis

`generate_delay_dsn = true`

`generate_delay_dsn = false`

<a name="idp24694320"></a> 
## Description

Momentum has the ability to generate warning messages (delivery status notifications, or DSNs) that are delivered to the envelope sender of a message that has not yet been delivered.

The default value for this option is `false`.

### Note

To use this feature the [delay_dsn](/momentum/4/modules/delay-dsn) module must be loaded.

<a name="idp24698896"></a> 
## Scope

`generate_delay_dsn` is valid in the binding_group, binding, domain and global scopes.

<a name="idp24701200"></a> 
## See Also

[delay_dsn_retry_interval](/momentum/4/config/ref-delay-dsn-retry-interval), [delay_dsn_max_retry_interval](/momentum/4/config/ref-delay-dsn-max-retry-interval) and [generate_delay_dsn](/momentum/4/config/ref-generate-delay-dsn)