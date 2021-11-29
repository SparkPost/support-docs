---
lastUpdated: "03/26/2020"
title: "drop_body_after_trans_fail"
description: "drop body after trans fail number of retry attempts before freeing message memory drop body after trans fail 3 Momentum aggressively attempts to keep messages in memory to avoid reading their contents from disk For domains which have a large number of transient failures or for which messages often remain..."
---

<a name="conf.ref.drop_body_after_trans_fail"></a> 
## Name

drop_body_after_trans_fail — number of retry attempts before freeing message memory

## Synopsis

`drop_body_after_trans_fail = 3`

<a name="idp9427584"></a> 
## Description

Momentum aggressively attempts to keep messages in memory, to avoid reading their contents from disk. For domains which have a large number of transient failures, or for which messages often remain for a long time in the queue, this can have abusive effects on memory usage. To counter this, Momentum allows you to specify a threshold of transient failures after which Momentum will not store the message in memory, but instead always read it from disk. To force Momentum to read from disk all messages that have had any transient failures, set this value to 0.

The default value for this option is 3 attempts.

<a name="idp9430256"></a> 
## Scope

drop_body_after_trans_fail is valid in the binding, binding_group, domain and global scopes.