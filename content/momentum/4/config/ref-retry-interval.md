---
lastUpdated: "03/26/2020"
title: "retry_interval"
description: "retry interval base retry interval Retry Interval 1200 The base retry period in seconds for a message which could not be delivered Momentum employs an exponential back off scheme for retrying messages On the first failure the message is retried Retry Interval seconds later On the second failure twice that..."
---

<a name="conf.ref.retry_interval"></a> 
## Name

retry_interval — base retry interval

## Synopsis

`Retry_Interval = "1200"`

<a name="idp26006864"></a> 
## Description

The base retry period in seconds for a message which could not be delivered. Momentum employs an exponential back-off scheme for retrying messages. On the first failure the message is retried `Retry_Interval` seconds later. On the second failure, twice that. On the third failure, four times that. On the fourth failure, eight times that. This process continues until the message is delivered, or the `Message_Expiration` timeout is reached, whichever comes first. The default value for this option is `1200` (20 minutes).

You can disable Momentum's exponential back-off scheme so that a message is retried at a fixed interval. For more information see [max_retries](/momentum/4/config/ref-max-retries).

<a name="idp26011616"></a> 
## Scope

retry_interval is valid in the binding, binding_group, domain and global scopes.

<a name="idp26013488"></a> 
## See Also

[message_expiration](/momentum/4/config/ref-message-expiration)