---
lastUpdated: "03/26/2020"
title: "reroute queue"
description: "reroute queue move messages from queues of one domain to queues of the other reroute queue domain name 1 domain name 2 The reroute queue command requires two domain names as its arguments It will move messages from queues of the first domain to the queues of the second domain..."
---

<a name="console_commands.reroute_queue"></a> 
## Name

reroute queue — move messages from queues of one domain to queues of the other

## Synopsis

`reroute queue` { *`domain_name1`* } { *`domain_name2`* }

<a name="idp12689408"></a> 
## Description

The **reroute queue**       command requires two domain names as its arguments. It will move messages from queues of the first domain to the queues of the second domain.

```
10:47:35 /tmp/2025> reroute queue relay.com newrelay.com
Moved 100 messages from 'relay.com' to 'newrelay.com'
```