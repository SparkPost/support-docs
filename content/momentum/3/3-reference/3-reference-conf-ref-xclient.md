---
lastUpdated: "03/26/2020"
title: "xclient"
description: "xclient use the XCLIENT extension to SMTP for outbound mail XCLIENT no ifavailable required XCLIENT allows information regarding the original sending host such as the connecting IP address to be communicated with the next hop and is useful when Momentum is deployed as a gateway device in a configuration where..."
---

<a name="conf.ref.xclient"></a> 
## Name

xclient — use the XCLIENT extension to SMTP for outbound mail

## Synopsis

`XCLIENT = "no|ifavailable|required"`

<a name="idp12453936"></a> 
## Description

XCLIENT allows information regarding the original sending host (such as the connecting IP address) to be communicated with the next hop and is useful when Momentum is deployed as a gateway device in a configuration where the internal hosts will benefit from knowing the original connecting IP address. In order to use this feature, the next-hop MTA must support XCLIENT. More information on XCLIENT can be found at [http://www.postfix.org/XCLIENT_README.html](http://www.postfix.org/XCLIENT_README.html)

```
Binding customer-1 {
  XCLIENT = "ifavailable"
  Domain relay.example.com {
    XCLIENT = "required"
  }
}
```

By enabling the XCLIENT option, outbound messages will be preceded by an ESMTP XCLIENT negotiation. If it is required then outbound mail will be transiently failed if the remote mail exchange does not support and accept the XCLIENT negotiation. If set to `ifavailable`, then Momentum will attempt to negotiate XCLIENT with the remote end prior to each message in the stream if the remote mail exchange supports XCLIENT. If that attempt fails, the message will be transmitted without XCLIENT data.

The default value for this directive is `no`.

<a name="idp12459728"></a> 
## Scope

xclient is valid in the binding, binding_group, domain and global scopes.