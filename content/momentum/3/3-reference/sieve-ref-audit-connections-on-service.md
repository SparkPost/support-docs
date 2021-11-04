---
lastUpdated: "03/26/2020"
title: "audit_connections_on_service"
description: "audit connections on service Return the number of connections currently established from a CIDR block audit connections on service address mask audit connections on service returns a stringlist containing a single member which is a string containing the number of connections the CIDR block argument currently has established to the..."
---

<a name="sieve.ref.audit_connections_on_service"></a> 
## Name

audit_connections_on_service — Return the number of connections currently established from a CIDR block

## Synopsis

`audit_connections_on_service` { *`address/mask`* }

<a name="idp28609168"></a> 
## Description

`audit_connections_on_service` returns a stringlist containing a single member, which is a string containing the number of connections the CIDR block argument currently has established to the SMTP service on the system. The address may be omitted, to cause the action to use the current IP address instead. In that case, one could provide an argument of "/32" or "/24" to get the current connections for the IP address currently connecting or for the /24 CIDR block of the IP address currently connecting.

### Note

This feature requires the inbound_audit module. See [“inbound_audit – Inbound traffic analytics”](/momentum/3/3-reference/3-reference-modules-inbound-audit) for more information.

### <a name="idp28613248"></a> IPv6 Support

As of version 3.4, this feature supports IPv6.

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `Gateway`, `Routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.

<a name="example.audit_connections_on_service"></a> 


```
($connections) = audit_connections_on_service "/32";
($c_connections) = audit_connections_on_service "/24";
if ec_test :value "gt" :comparator "i;ascii-numeric" "${connections}" "1000" {
  ec_tarpit 10 "too many connections /32";
}

if ec_test :value "gt" :comparator "i;ascii-numeric" "${c_connections}" "10000" {
  ec_tarpit 10 "too many connections /24";
}
```