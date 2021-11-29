---
lastUpdated: "03/26/2020"
title: "message_expiration"
description: "message expiration the time to live for messages Message Expiration 604800 The maximum amount of time in seconds a message will remain undelivered in the system If a message remains undeliverable for this amount of time it will be removed and a delivery failure log entry will be made If..."
---

<a name="conf.ref.message_expiration"></a> 
## Name

message_expiration — the time to live for messages

## Synopsis

`Message_Expiration = 604800`

<a name="idp10367712"></a> 
## Description

The maximum amount of time in seconds a message will remain undelivered in the system. If a message remains undeliverable for this amount of time, it will be removed and a delivery failure log entry will be made. If the `Generate_Bounces` configuration option is enabled, then at failure time an out-of-band bounce message will be generated and queued for delivery. The default value for this option is `86400` seconds (24 hours). However, in the default `ecelerity.conf` file this option is set to `604800` (1 week).

<a name="idp10371552"></a> 
## Scope

`message_expiration` is valid in the binding, binding_group, domain and global scopes.

<a name="idp10373632"></a> 
## See Also

[never_attempt_expired_messages](/momentum/3/3-reference/3-reference-conf-ref-never-attempt-expired-messages), [retry_interval](/momentum/3/3-reference/3-reference-conf-ref-retry-interval) and [max_retries](/momentum/3/3-reference/3-reference-conf-ref-max-retries)