---
lastUpdated: "03/26/2020"
title: "Listeners"
description: "Momentum is built around a powerful event based scheduling engine A key part of that engine is responding to events that occur on inbound sockets known as listeners These listeners are configured in Momentum's configuration files The following is an example of a basic listener syntax In this example the..."
---

Momentum is built around a powerful event-based scheduling engine. A key part of that engine is responding to events that occur on inbound sockets, known as *listeners*. These *listeners* are configured in Momentum's configuration files. The following is an example of a basic listener syntax:

```
ESMTP_Listener {
  Listen "*:25" {}
}
```

In this example, the listener is the `ESMTP_Listener`, and the `*:25` is an example of an address. Multiple addresses can be specified for a given listener, allowing you to configure service on multiple IP/port or Unix sockets.

### Warning

When using any listener, if you change from listening on a specific IP address to listening on the "wildcard" address (*) or the reverse, you must issue the **config reload**        command twice in order to reactivate the listener. This applies to Linux systems only.

Momentum supports the following listeners. Follow the links for details about each listener type:

*   [Control_Listener](/momentum/4/control-listener) - listens for incoming control connections made via the console

*   [ECCluster_Listener](/momentum/4/cluster-listeners#eccluster_listener) - configures direct, point-to-point communication between cluster nodes

*   [ECStream_Listener](/momentum/4/ecstream-listener) - enables messages to be injected using the ECStream protocol

*   [ESMTP_Listener](/momentum/4/esmtp-listener) - enables messages to be injected using the SMTP protocol

*   [HTTP_Listener](/momentum/4/http-listener) - enables messages to be injected using the HTTP protocol

*   [msgcserver_listener](/momentum/4/cluster-listeners#msgcserver_listener) - mediates between msgc_servers and between msgc_servers and their clients

In addition to the associated Listener scope, listeners can enclose Peer and Listen scopes. For a complete list of the configuration options valid in the associated scopes, see [*Configuration Options Summary*](/momentum/4/config-options-summary) .

### <a name="listeners.acls"></a> Extended Listener Configuration Using Access Control Lists (ACLs)

<a name="idp2949664"></a> <a name="idp2951456"></a> 

ACLs are implemented via the Peer scope, which uses the existing matching infrastructure to find the most specific CIDR match for a given configured value. Fallback works here too, allowing for some expressive configurations that are easily understood. For more information about fallback, see [“Configuration Scopes and Fallback”](/momentum/4/4-ecelerity-conf-fallback).

<a name="example.conf.peer"></a> 


```
ESMTP_Listener {
  Peer "10.0.0.0/16" {
    # general options for this netblock here
  }
  Listen ":25" {
    Peer "10.0.0.1" {
      # options for 10.0.0.1 here
      SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "AUTH LOGIN" )
    }
  }
}
```

Options defined in the Peer CIDR block `10.0.0.0/16` will apply to all IP addresses defined by this block unless the connecting IP address is `10.0.0.1`. In that case, anything defined in the peer scope `10.0.0.1` takes precedence.

Note that SMTP extensions are defined using the `SMTP_Extensions` array. SMTP extensions are discussed in [“SMTP Extensions”](/momentum/4/esmtp-listener-extensions).

### <a name="listeners.enable.option"></a> Listener `Enable` Option

The `enable` option provides a convenient way to temporarily disable a listener, without completely removing the listener from the configuration file or having to comment out the entire listener stanza.

For example, the following stanza configures listeners on port 25 and port 587\. Momentum will bind a listener to port 25 but will skip port 587 because it is marked as disabled.

```
ESMTP_Listener {
  Listen "*:25" {
  }
  Listen "*:587" {
    Enable = false
  }
}
```

Note that the `enable` option is used to enable or disable a listener or listen scope and **not** the `enabled` option. The `enabled` option applies only to modules, and the `enable` applies only to listen or listener stanzas.

It is possible to suspend and enable listener sockets individually on the fly. If you wish to disable the listener on port 25, as shown in the example, issue the command **`config set esmtp_listener listen :25 enable false`**                                             from the console. You can use **config set, get**          or **eval** with any one of the listener subsystem options.

### <a name="listeners.tcpip.listener.syntax"></a> TCP/IP Listen Address Syntax

The following is an example of a TCP/IP listen address configuration:

```
ESMTP_Listener {
  Listen "*:25" {}
  Listen "127.0.0.1:25" {}
  Listen "[*]:25" {}
}
```

This example shows a Listener configured as follows:

<dl class="variablelist">

<dt>*:25</dt>

<dd>

Listens on `INADDR_ANY` on port 25.

When using any listener, if you change from listening on a specific IP address to listening on the "wildcard" address (*) or the reverse, you must issue the **config reload**        command twice in order to reactivate the listener. This applies to Linux systems only.

</dd>

<dt>127.0.0.1:25</dt>

<dd>

Listens on port 25 of the IP address `127.0.0.1`.

</dd>

<dt>[*]:25</dt>

<dd>

Listens on port 25 of the IPv6 address.

</dd>

</dl>

For a detailed discussion of IPv6 syntax see [“Listeners and IPv6 Addresses”](/momentum/4/listeners#listeners.ipv6).

### <a name="listeners.unix.domain.listener.syntax"></a> Unix Domain Listener Address Syntax

The following is an example of a Unix listen address configuration:

```
Control_Listener {
  Listen "/tmp/2025" {
    File_Mode = 0666
    Listen_Backlog = 500
  }
}
```

This example shows a Listener configured on a Unix domain socket located at `/tmp/2025` with a maximum backlog of `500`.

### <a name="listeners.ipv6"></a> Listeners and IPv6 Addresses

IPv6 addresses are case insensitive and can use ‘`::`’ for zero suppression. For this reason, the same address can be expressed in a variety of ways. The following examples all represent the same IPv6 address (example adapted from [http://tools.ietf.org/html/rfc5952](http://tools.ietf.org/html/rfc5952)):

```
2001:db8:0:0:1:0:0:1

  2001:DB8:0:0:1:0:0:1

  2001:0DB8:0:0:1:0:0:1

  2001:db8::1:0:0:1

  2001:db8::0:1:0:0:1

  2001:0db8::1:0:0:1

  2001:db8:0:0:1::1

  2001:db8:0000:0:1::1

  2001:DB8:0:0:1::1
```

The ‘`::`’ can only appear once in an address.

When a Listen stanza uses an IPv6 address, you are required to enclose the IPv6 address in square brackets, followed by a colon and the port, with quotes around the entire address:port. For example:

```
Listen "[::]:25" {...}
Listen "[0:0:0:0:0:0:0:0]:25" {...}  # equivalent to the previous entry
Listen "[fd82:7796:815b:af9d:230:48ff:fef2:aa4a]:587" {...}
```

### Note

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

In circumstances where a configuration parameter can also contain something other than an IP address, the accepted convention is to require that an IPv6 address be enclosed in square brackets. In practical terms, this means that things like the `Gateway`, `Routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.