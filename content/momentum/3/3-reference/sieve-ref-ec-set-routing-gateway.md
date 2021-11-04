---
lastUpdated: "03/26/2020"
title: "ec_set_routing_gateway"
description: "ec set routing gateway dynamically change the gateway based on recipient ec set routing gateway address This action sets the gateway for the message in much the same way as the gateway configuration option the message will be queued to the domain specified by the gateway A gateway set with..."
---

<a name="sieve.ref.ec_set_routing_gateway"></a> 
## Name

ec_set_routing_gateway — dynamically change the gateway based on recipient

## Synopsis

`ec_set_routing_gateway` { *`address`* }

<a name="idp30520944"></a> 
## Description

This action sets the gateway for the message in much the same way as the [gateway](/momentum/3/3-reference/3-reference-conf-ref-gateway) configuration option; the message will be queued to the domain specified by the gateway. A gateway set with this action will override a possible Gateway configuration setting that would otherwise be applicable to the message. See also [routes](/momentum/3/3-reference/3-reference-conf-ref-routes) for domain-wide routing. The headers and the body of the message will not be changed.

The required *`address`* parameter can be either a dotted literal IP address, a hostname that resolves to an A record, or a domain name which resolves to one or more MX records.

Sieve scripts using `ec_set_routing_gateway` should be called in the each_rcpt_phase only.

<a name="example.ec_set_routing_gateway"></a> 


```
if envelope :domain :is "to" "do-set_routing_gateway.com" {
  ec_set_routing_gateway "foo.com";
  }
```

### Note

In order to prevent I/O on the scheduler, when using `ec_set_routing_gateway`, the [keep_message_dicts_in_memory](/momentum/3/3-reference/3-reference-conf-ref-keep-message-dicts-in-memory) option should be set to true.

### Warning

The sievelib module must be loaded explicitly in your configuration for correct operation of `ec_set_routing_gateway`.

<a name="idp30532624"></a> 
## See Also

[gateway](/momentum/3/3-reference/3-reference-conf-ref-gateway), [routes](/momentum/3/3-reference/3-reference-conf-ref-routes)