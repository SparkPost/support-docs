---
lastUpdated: "03/26/2020"
title: "delay_dsn_max_retry_interval"
description: "delay dsn max retry interval maximum interval for sending DS Ns to the sender of a message that has not yet been delivered Delay DSN Max Retry Interval 43200 The maximum interval between successive warning messages delivery status notifications or DS Ns sent to the sender of a message that..."
---

<a name="conf.ref.delay_dsn_max_retry_interval"></a> 
## Name

delay_dsn_max_retry_interval — maximum interval for sending DSNs to the sender of a message that has not yet been delivered

## Synopsis

`Delay_DSN_Max_Retry_Interval = "43200"`

<a name="idp8780896"></a> 
## Description

The maximum interval between successive warning messages (delivery status notifications, or DSNs) sent to the sender of a message that has not yet been delivered. This provides a cap on the effective interval between DSNs calculated from `Delay_DSN_Retry_Interval`.

### Note

To use this feature the [delay_dsn](/momentum/3/3-reference/3-reference-modules-delay-dsn) module must be loaded.

The default value for this option is `0`.

<a name="idp8786864"></a> 
## Scope

`delay_dsn_max_retry_interval` is valid in the binding_group, binding, domain and global scopes.

<a name="idp8788960"></a> 
## See Also

[generate_delay_dsn](/momentum/3/3-reference/3-reference-conf-ref-generate-delay-dsn), [delay_dsn_max_retry_interval](/momentum/3/3-reference/3-reference-conf-ref-delay-dsn-max-retry-interval) and [delay_dsn_retry_interval](/momentum/3/3-reference/3-reference-conf-ref-delay-dsn-retry-interval)