---
lastUpdated: "03/26/2020"
title: "relay_hosts"
description: "relay hosts configure the list of hosts for which Momentum relays mail relay hosts 10 0 0 1 Momentum is a powerful mail delivery system As an operator you can expose your system to abuse by allowing unauthorized machines to send e mail to domains for which the local instance..."
---

<a name="conf.ref.relay_hosts"></a> 
## Name

relay_hosts — configure the list of hosts for which Momentum relays mail

## Synopsis

`relay_hosts = ( "10.0.0.1" )`

<a name="idp25866816"></a> 
## Description

Momentum is a powerful mail delivery system. As an operator, you can expose your system to abuse by allowing unauthorized machines to send e-mail to domains for which the local instance does not provide mail service. Doing so makes your system an "open relay."

When configured to be an outbound e-mail relay, only trusted machines should be allowed to connect and inject messages. This is controlled by the `relay_hosts` option. This option takes a space-separated list of network blocks in Classless Inter-Domain Routing (CIDR) form. CIDR form consists of an IPv4 address followed by a number between 0 and 32 dictating the number of bits in the network portion of the address, as opposed to the host portion.

For example, all addresses in the `loopback` space begin with 127\. The netmask on a loopback device is 255.0.0.0, which sets 8 network bits with the remaining 24 bits used for host addresses within the network. Therefore, the CIDR form of the loopback network is 127.0.0.0/8\. For a class C network (256 IP addresses, 254 hosts), the netmask is 255.255.255.0, which means 24 network bits. The CIDR form of the IP block representing addresses 192.168.10.0 through 192.168.10.255 is 192.168.10.0/24. Single hosts have netmask with all (32) bits set making a host address 10.1.2.3 have a CIDR form 10.1.2.3/32.

### Note

Hosts specified by this option are not subject to any SMTP authentication that you may have implemented. For more information, see [“ESMTP_Listener Authentication”](/momentum/4/inbound-smtp).

The `relay_hosts` option has no effect on restricting access to an HTTP_Listener.

If your private network (10.10.10.0/24) contains machines that you trust and you wish to also enable relaying from the local host, the following `relay_hosts` directive would be reasonable:

`relay_hosts = ( "127.0.0.0/8" "10.10.10.0/24" )`

Use the same syntax for IPv6 addresses:

`relay_hosts = ("127.0.0.1/32" "::1" "10.79.0.0/16" "fd82:7796:815b:af9d::")`<a name="idp25877136"></a> 
## Scope

The `relay_hosts` option in the global scope follows the same semantics as the rest of the configuration options; if you specify it in both the global scope and in a listener, the listener setting overrides the global setting.

`relay_hosts` is valid in the global, esmtp_listener, listen, pathway_group, and pathway scopes. While it is valid in the Peer scope, generally speaking, you would not use it in this scope. Use `open_relay` instead.

<a name="idp25881120"></a> 
## See Also

[open_relay](/momentum/4/config/ref-open-relay)