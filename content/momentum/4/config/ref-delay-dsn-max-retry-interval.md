---
lastUpdated: "03/26/2020"
title: "delay_dsn_max_retry_interval"
description: "delay dsn max retry interval maximum interval for sending DS Ns to the sender of a message that has not yet been delivered delay dsn max retry interval 43200 The maximum interval between successive warning messages delivery status notifications or DS Ns sent to the sender of a message that..."
---

<a name="conf.ref.delay_dsn_max_retry_interval"></a> 
## Name

delay_dsn_max_retry_interval — maximum interval for sending DSNs to the sender of a message that has not yet been delivered

## Synopsis

`delay_dsn_max_retry_interval = "43200"`

<a name="idp24113264"></a> 
## Description

The maximum interval between successive warning messages (delivery status notifications, or DSNs) sent to the sender of a message that has not yet been delivered. This provides a cap on the effective interval between DSNs calculated from `delay_dsn_retry_interval`.

### Note

To use this feature the [delay_dsn](/momentum/4/modules/delay-dsn) module must be loaded.

The default value is `0`.

<a name="idp24118352"></a> 
## Scope

`delay_dsn_max_retry_interval` is valid in the binding_group, binding, domain, and global scopes.

<a name="idp24120672"></a> 
## See Also

[generate_delay_dsn](/momentum/4/config/ref-generate-delay-dsn), [delay_dsn_max_retry_interval](/momentum/4/config/ref-delay-dsn-max-retry-interval), and [delay_dsn_retry_interval](/momentum/4/config/ref-delay-dsn-retry-interval)