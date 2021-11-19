---
lastUpdated: "03/26/2020"
title: "binding flush domain"
description: "binding flush domain perform delivery attempt on delayed queue of a domain on a binding binding flush domain binding name domain name The binding flush domain command takes a domain name and a binding name as arguments and immediately performs a delivery attempt for each message in the delayed queue..."
---

<a name="console_commands.binding_flush_domain"></a> 
## Name

binding flush domain — perform delivery attempt on delayed queue of a domain on a binding

## Synopsis

`binding flush domain` { *`binding_name`* } { *`domain_name`* }

<a name="idp15444864"></a> 
## Description

The **binding flush domain**              command takes a domain name and a binding name as arguments and immediately performs a delivery attempt for each message in the delayed queue for that domain/binding pair.

Momentum has its own reattempt schedule based on the the number of previous attempts and the retry_interval configuration parameter (see [retry_interval](/momentum/3/3-reference/3-reference-conf-ref-retry-interval) for details). Issuing this command will cause Momentum to disregard its internally calculated time of next attempt for each message in the delayed queue and set it to "now."

If a remote domain (just-revived.com) has had delivery problems and has just come "back online," all messages to that domain on the binding BINDING1 could be immediately attempted by performing the following command:

```
10:47:35 /tmp/2025> binding flush domain BINDING1 just-revived.com
just-revived.com flushed.  12521 messages requeued.
```

You may substitute `all` for the domain name to apply to all domains.

<a name="idp15450544"></a> 
## See Also

[message_expiration](/momentum/3/3-reference/3-reference-conf-ref-message-expiration)