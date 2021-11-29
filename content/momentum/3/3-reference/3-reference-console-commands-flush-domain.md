---
lastUpdated: "03/26/2020"
title: "flush domain"
description: "flush domain perform delivery attempt on delayed queue of a domain flush domain domain name The flush domain command takes a domain name as an argument and immediately performs a delivery attempt for each message in the delayed queue Momentum has its own retry schedule based on the the number..."
---

<a name="console_commands.flush_domain"></a> 
## Name

flush domain — perform delivery attempt on delayed queue of a domain

## Synopsis

`flush domain` { *`domain_name`* }

<a name="idp16026320"></a> 
## Description

The **flush domain**        command takes a domain name as an argument and immediately performs a delivery attempt for each message in the delayed queue.

Momentum has its own retry schedule based on the the number of previous attempts and the retry_interval configuration parameter (see Configuration section for details). Issuing this command will cause Momentum to disregard its internally calculated time to next retry for each message in the delayed queue and set it to "now."

If a remote domain (just-revived.com) has had delivery problems and has just come "back online," all messages to that domain could be immediately attempted by performing the following command:

```
10:47:35 /tmp/2025> flush domain just-revived.com
just-revived.com flushed.  12521 messages requeued.
```

You may substitute `all` for the domain name to apply to all domains.