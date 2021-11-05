---
lastUpdated: "03/26/2020"
title: "message retry"
description: "message retry perform an immediate delivery attempt on a message message retry message id This command takes a message ID as an argument and forces an immediate delivery attempt by placing it in the active queue for the appropriate domain..."
---

<a name="console_commands.message_retry"></a> 
## Name

message retry — perform an immediate delivery attempt on a message

## Synopsis

`message retry` { *`message_id`* }

<a name="idp16149200"></a> 
## Description

This command takes a message ID as an argument and forces an immediate delivery attempt by placing it in the active queue for the appropriate domain.

```
10:47:35 /tmp/2025> message retry 53/6B-18426-1AAEACF3
Message requeued for delivery
```