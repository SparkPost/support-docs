---
lastUpdated: "03/26/2020"
title: "show inbound"
description: "show inbound show all inbound connections show inbound This command shows all inbound connections In the following example the output has been wrapped for display purpose 23 is the file descriptor of the related event async body response for 0 264 s shows the last state of the messages coming..."
---

<a name="console_commands.show_inbound"></a> 
## Name

show inbound — show all inbound connections

## Synopsis

`show inbound`

<a name="idp12700240"></a> 
## Description

This command shows all inbound connections. In the following example, the output has been wrapped for display purpose. "23" is the file descriptor of the related event. "async body response (for 0.264s)" shows the last state of the messages coming in via this connection and the time spent in that state. "[floating]" means the messages coming in via this connection are not handled by the main scheduler right now. -->

```
10:47:35 /tmp/2025> show inbound
23: [inbound/esmtp_message_factory] IPv4 127.0.0.1:47741 async body response
(for 0.264s)  [floating]
```
<a name="idp12703728"></a> 
## See Also

[show outbound](/momentum/4/console-commands/show-outbound)