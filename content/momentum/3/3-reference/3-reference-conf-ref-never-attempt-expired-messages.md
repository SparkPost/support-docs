---
lastUpdated: "03/26/2020"
title: "never_attempt_expired_messages"
description: "never attempt expired messages Never attempt delivery of expired messages Never Attempt Expired Messages false Momentum's default behavior is to always attempt delivery of a message when it gets to the front of the queue regardless of whether or not it should have expired based on the values of message..."
---

<a name="conf.ref.never_attempt_expired_messages"></a> 
## Name

never_attempt_expired_messages — Never attempt delivery of expired messages

## Synopsis

`Never_Attempt_Expired_Messages = "false"`

<a name="idp10448288"></a> 
## Description

Momentum's default behavior is to always attempt delivery of a message when it gets to the front of the queue, regardless of whether or not it should have expired based on the values of [message_expiration](/momentum/3/3-reference/3-reference-conf-ref-message-expiration) and [max_retries](/momentum/3/3-reference/3-reference-conf-ref-max-retries). This may be desirable for some users, however it can have a side-effect of message queues for 'slow' receiver domains to grow very large, and contain messages that are many times older than the server's policy says they should be. Setting Never_Attempt_Expired_Messages to 'true' will change this behavior, causing Momentum to not attempt delivery of a message if it should have already expired. When this option is set to 'true', log entries that have expired and reach the front of the queue will fail with the message "Delivery not attempted (message expired)".

### Warning

Under certain circumstances, using this feature can cause some messages to never have delivery attempted.

<a name="idp10453072"></a> 
## Scope

never_attempt_expired_messages is valid in the binding, binding_group, domain and global scopes.