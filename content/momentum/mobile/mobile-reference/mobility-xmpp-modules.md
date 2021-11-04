---
lastUpdated: "03/26/2020"
title: "Mobile Momentum XMPP"
description: "As of Momentum version 3 4 the Extensible Messaging and Presence Protocol XMPP modules are available XMPP is a messaging protocol based on XML typically used for sending and receiving instant messages This protocol is sometimes called the Jabber protocol Implementing XMPP entails configuring the xmpp and xmpp logger modules..."
---


As of Momentum version 3.4 the Extensible Messaging and Presence Protocol (XMPP) modules are available. XMPP is a messaging protocol based on XML typically used for sending and receiving instant messages. This protocol is sometimes called the `Jabber` protocol.

Implementing XMPP entails configuring the xmpp and xmpp_logger modules and an xmpp_listener. You will also have to configure appropriate domains as XMPP servers or clients. The disposition for XMPP messages is controlled by specifying the `XMPP_Role` option in a Domain stanza. When this option is set to `server`, incoming streams for that domain are allowed.

Additionally, in order to maintain rosters and show the network availability of contacts, Lua sources must be added to the scriptlet module.

## <a name="modules.xmpp"></a> The XMPP Module and Listener

If you wish to use Momentum's XMPP capabilities, first add the following xmpp module to your configuration file:

`xmpp {}`

This module has no options apart from the `enabled` and `debug_level` options common to all modules. If you wish to use the `debug_level` option see [Module Debugging](/momentum/3/3-reference/modules-overview-implicit#modules.overview.debugging).

You cannot add the xmpp_listener before adding the xmpp module.

### <a name="modules.xmpp.xmpp_listener"></a> xmpp_listener

The xmpp_listener is built on Momentum's existing listener infrastructure, so it allows both IPv4 and IPv6 connections. This Listener accepts XMPP client and XMPP server streams and is configured in the same way as other Momentum listeners. However, this listener must use authentication as shown in the following:

<a name="modules.xmpp.xmpp_listener.example"></a> 


```
xmpp_listener {
  AuthPlainParameters = [
     # you may use any auth storage scheme here, such as auth_ds,
     # but it must provide access to the password in clear text
     uri = "file:///opt/msys/etc/passwd"
  ]

  Listen "*:5222" {} # xmpp client port
}
```

The Listener stanza must contain a [AuthPlainParameters](/momentum/3/3-reference/conf-aaa#conf.inbound-auth.plain.text) or a [AuthDigestMD5Parameters](/momentum/3/3-reference/conf-aaa#conf.inbound-authdigest-md5) stanza indicating the password file.

The client-server port is customizable by the client. However, since the "well-known" port is 5222, if you are not using this port you'll need to ensure that anyone connecting to the server reconfigures their client.

Options valid in the xmpp_listener scope are as follows:

<a name="xmpp_listener-options-table"></a> 


| Option/Description | Default | Scopes |
| --- | --- | --- |
| **[accept_queue_backlog](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.esmtp_listener)** – The accept queue backlog | 0 | listen, xmpp_listener |
| **[authdigestmd5parameters](/momentum/3/3-reference/conf-aaa#conf.inbound-authdigest-md5)** – Configure DIGEST-MD5 authentication |   | listen, pathway, pathway_group, peer, xmpp_listener |
| **[authplainparameters](/momentum/3/3-reference/conf-aaa#conf.inbound-auth.plain.text)** – Configure plain text login authentication |   | listen, pathway, pathway_group, xmpp_listener |
| **[concurrency](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.esmtp_listener)** – Define number of available threads | 0 | listen, threadpool, xmpp_listener |
| **[disable_nagle_algorithm](/momentum/3/3-reference/3-reference-conf-ref-disable-nagle-algorithm)** – Disable nagle algorithm on sockets | false | global, listen, xmpp_listener |
| **[enable](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.esmtp_listener)** – Enable or disable a listener scope | true | listen, xmpp_listener |
| **[events_per_iter](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.events_per_iter)** – Employ when using a Concurrency greater than 1 | 0 | listen, xmpp_listener |
| **[file_mode](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.control_listener)** – File access rights in octal notation | 0660 | xmpp_listener |
| **[idle_time](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.idle_time)** – The number of seconds of inactivity before a client is disconnected | 0 | listen, pathway, pathway_group, peer, xmpp_listener |
| **[listen](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.attributes)** *(scope)* – Specify the socket that a listener listens on |   | xmpp_listener |
| **[listen_backlog](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.listen_backlog)** – The listen backlog | 500 | listen, xmpp_listener |
| **[peer](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.config.acls)** *(scope)* – Create an ACL within a specific listener |   | listen, xmpp_listener |
| **[pool_name](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3)** – Associate a threadpool with a listener |   | listen, xmpp_listener |
| **[tcp_recv_buffer_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.tcp_recv_buffer_size)** – The size of the TCP receive buffer size | 4096 | listen, xmpp_listener |
| **[tcp_send_buffer_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.tcp_send_buffer_size)** – The size of the TCP send buffer | 4096 | listen, xmpp_listener |
| **[tls_certificate](/momentum/3/3-reference/conf-ref-tls-certificate)** – Certificate to use for inbound and outbound mail |   | binding, binding_group, domain, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_ciphers](/momentum/3/3-reference/conf-ref-tls-ciphers)** – Allowable ciphers for a TLS session |   | binding, binding_group, domain, global, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_client_ca](/momentum/3/3-reference/conf-ref-tls-client-ca)** – Certificate authority for inbound mail |   | global, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_key](/momentum/3/3-reference/conf-ref-tls-key)** – the TLS key to use for outbound mail or inbound mail |   | binding, binding_group, domain, global, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_verify_mode](/momentum/3/3-reference/conf-ref-tls-verify-mode)** – How to handle certificates for inbound mail | none | listen, pathway, pathway_group, peer, xmpp_listener |

### <a name="mobility.xmpp.modules.xmpp_role"></a> XMPP_Role Domain and XMPP_Dialback_Secret Options

The `XMPP_Role` option is valid in the domain scope and is used to define which domains are acting as XMPP servers and which as clients.

The `XMPP_Dialback_Secret` is used in the domain scope in order to define the string used for the encrypted hash when generating and verifying the server dialback key.

Server dialback is defined at [XEP-0220](http://xmpp.org/extensions/xep-0220.html) as follows:

"This specification defines the Server Dialback protocol, which is used between XMPP servers to provide identity verification. Server Dialback uses the Domain Name System (DNS) as the basis for verifying identity; the basic approach is that when a receiving server accepts a server-to-server connection from an originating server, it does not process traffic over the connection until it has verified a key with an authoritative server for the domain asserted by the originating server. "

These configuration options are used in the following way:

```
domain "#xmpp#remotexmpp.example.com" {
  XMPP_Role = "client"
  XMPP_Dialback_Secret = "myS3cr3T"
}
```

In the previous example, setting `XMPP_Role` to `client` enables XMPP server-to-server connections to the domain `remotexmpp.example.com`. For more information about specifying protocols with domain names see [“Multi Protocol Domain Naming”](/momentum/mobile/mobile-reference/mobility-mm-7-multiprotocol).

When the role option is set to `server`, incoming streams are allowed for the specified domain. When it is set to `client`, you enable outgoing server-to-server connections on that domain.

Outgoing IPv6 support has the same behavior and caveats as it does for outgoing IPv6 SMTP.

**<a name="idp1331744"></a> Dialback and Solaris**

Because Solaris does not include the backported SHA256 library functions, server dialback does not work properly on this operating system. As a workaround include the following dkim module on Solaris systems:

`dkim_sign "dkim_sign1" {}`

Adding this module simply forces Momentum to load the Solaris-compatible sha256 library. There is no dependency on DKIM functionality for this feature to work.