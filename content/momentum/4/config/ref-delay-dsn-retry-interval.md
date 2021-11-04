---
lastUpdated: "03/26/2020"
title: "delay_dsn_retry_interval"
description: "delay dsn retry interval base interval for sending DS Ns to the sender of a message that has not yet been delivered delay dsn retry interval 3600 The base retry period in seconds for sending warning messages delivery status notifications or DS Ns to the sender of a message which..."
---

<a name="conf.ref.delay_dsn_retry_interval"></a> 
## Name

delay_dsn_retry_interval — base interval for sending DSNs to the sender of a message that has not yet been delivered

## Synopsis

`delay_dsn_retry_interval = "3600"`

<a name="idp24131808"></a> 
## Description

The base retry period in seconds for sending warning messages (delivery status notifications, or DSNs) to the sender of a message which has not yet been delivered. Momentum employs an exponential back-off scheme for sending DSNs. The first DSN is sent `delay_dsn_retry_interval` seconds after the message is queued for delivery. The second DSN is sent twice that after the second DSN. The third DSN four times that after the second DSN. The fourth DSN, eight times that. This process continues until delivery attempts for the message have ceased. The interval between DSNs cannot exceed `delay_dsn_max_retry_interval`.

### Note

To use this feature the [delay_dsn](/momentum/4/modules/delay-dsn) module must be loaded.

The default value for this option is `3600`.

<a name="idp24137728"></a> 
## Scope

`delay_dsn_retry_interval` is valid in the binding_group, binding, domain, and global scopes.

<a name="idp24140048"></a> 
## See Also

[generate_delay_dsn](/momentum/4/config/ref-generate-delay-dsn), [delay_dsn_max_retry_interval](/momentum/4/config/ref-delay-dsn-max-retry-interval)