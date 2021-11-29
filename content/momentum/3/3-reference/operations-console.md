---
lastUpdated: "03/26/2020"
title: "The Momentum System Console"
description: "All Momentum online administration management and analysis can be performed through the Momentum System Console program ec console henceforth referred to as the console The console can connect to a Momentum instance via a Unix domain socket or a TCP IP socket with an optional user prefix depending upon how..."
---

All Momentum online administration, management and analysis can be performed through the Momentum System Console program **ec_console**, henceforth referred to as the console.

The console can connect to a Momentum instance via a Unix domain socket or a TCP/IP socket (with an optional user@ prefix) depending upon how Momentum is configured. See [the section called “Control_Listener”](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.control_listener) and [“Configuring Authentication for the Control Listener”](/momentum/3/3-reference/conf-aaa#conf.control_authen) for details on configuring Momentum's control listening behavior.

### <a name="idp2365664"></a> Connecting via a Unix Domain Socket

The console assumes that Unix domain sockets are located in `/tmp`. The standard endpoint for a control listener is `/tmp/2025`. When using the standard endpoint, connecting to the console simple requires issuing the **ec_console** command with no options.

**ec_console** also takes an optional argument to specify an endpoint if you choose to bind your Control_Listener to a non-standard value. This option is specified in the following way:

`shell> /opt/msys/ecelerity/bin/ec_console /tmp/2030`

This will attempt to connect to the local Momentum instance listening at `/tmp/2030`.

### <a name="idp2371536"></a> Connecting via TCP/IP

The following example attempts to connect the Momentum instance located at the IPv4 address 10.2.4.1 on port 2025:

`shell> /opt/msys/ecelerity/bin/ec_console 10.2.4.1:2025`

Likewise, you can attempt to connect to the Momentum instance located at the IPv6 address fd82:7796:815b:af9d:2e0:81ff:fe63:5ce8 on port 2424 in the following way:

`shell> /opt/msys/ecelerity/bin/ec_console ec_console [fd82:7796:815b:af9d:2e0:81ff:fe63:5ce8]:2424`
### Note

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `Gateway`, `Routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.

### <a name="idp2380704"></a> Successful Connection

A successful launch of the console will result in output similar to the following:

```
# /opt/msys/ecelerity/bin/ec_console
##############################################
# ecelerity version: 3.0.10.30987
# Copyright (c) 1999-2009 Message Systems, Inc.
# All Rights Reserved.
##############################################
```

By default, an interactive console session is established, and the console client provides line editing features and tab completion (it will load your `~/.inputrc` on startup). In this mode, the version of the remote server is displayed at connect time.

The console client enters batching mode if it detects that it is not connected to a terminal, or if additional command line parameters beyond the listener endpoint are specified. For example, you can list all your active modules and then exit in the following way:

`shell> ec_console /tmp/2025 module list`

For a TCP/IP connection to localhost requiring authentication of the user, `admin`, use the following command:

`shell> ec_console admin@localhost:2025 module list`

You will be asked for admin's password before the **module list**      command executes. Batch mode suppresses the version information that is normally displayed at connect time and disables advanced line editing features.

To exit the console enter the **quit** command.

### <a name="idp2388304"></a> SSH Tunnel Support

The **ec_console** command has ssh tunnel support. Assuming that you have a properly configured Control_Listener, you can connect in the following ways:

```
shell> ec_console ssh://user@hostname/ecuser@hostname:2025
shell> ec_console ssh://user:passwd@hostname/ecuser:passwd@*:2025
```

You need operating system (OS) credentials for the ssh connection to the machine hosting the MTA and system console credentials because the control listener requires authentication. The listener stanza is shown below:

```
Control_Listener {
  Enable_Authentication = "true"

  Listen "*:2025" {
  }
  ...
}
```

SSH support requires the remote server to support SSH protocol version 2, and that the server be configured to allow port-forwarding. It is not possible to tunnel Unix domain socket connections over SSH.

### <a name="operations.console.options"></a> Options Valid in the Control_Listener Scope

The configuration options valid in the Control_Listener scope are as follows:

<a name="control_listener-options-table"></a> 


| Option/Description | Default | Scopes |
| --- | --- | --- |
| **[accept_queue_backlog](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.accept_queue_backlog)** – The accept queue backlog | 0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| **[always_allow](/momentum/3/3-reference/conf-aaa#conf.control_authen.overriding)** – When set to true, authentication is considered to have succeeded, unless always_deny is set | false | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[always_deny](/momentum/3/3-reference/conf-aaa#conf.control_authen.overriding)** – If set to true, authentication is considered to have failed | false | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[authcrammd5parameters](/momentum/3/3-reference/conf-aaa#conf.inbound-auth.cram-md5)** – Configure CRAM-MD5 authentication |   | control_listener, esmtp_listener, listen, pathway, pathway_group |
| **[authdigestmd5parameters](/momentum/3/3-reference/conf-aaa#conf.inbound-authdigest-md5)** – Configure DIGEST-MD5 authentication |   | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[authloginparameters](/momentum/3/3-reference/conf-aaa#conf.control_authen.clear.text)** – Configure clear text login authentication |   | control_listener, esmtp_listener, listen, pathway, pathway_group |
| **[authorizationparameters](/momentum/3/3-reference/conf-aaa#conf.control_authz.ecauth)** – AuthorizationParameters dictionary points to authorization information |   | control_listener, esmtp_listener, listen |
| **[concurrency](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3)** – Define number of available threads | 0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, threadpool, xmpp_listener |
| **[disable_nagle_algorithm](/momentum/3/3-reference/3-reference-conf-ref-disable-nagle-algorithm)** – Disable nagle algorithm on sockets | false | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, global, http_listener, listen, xmpp_listener |
| **[enable](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3)** – Enable or disable a listener scope | true | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| **[enable_authentication](/momentum/3/3-reference/conf-ecelerity-conf#conf.inbound-mail)** – Whether or not to enable authentication |   | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[enable_authorization](/momentum/3/3-reference/conf-aaa#conf.control_authz)** – Whether or not to enable authorization for console commands |   | control_listener, listen, peer |
| **[events_per_iter](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.events_per_iter)** – Employ when using a Concurrency greater than 1 | 0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[file_mode](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.control_listener)** – File access rights in octal notation | 0660 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| **[listen](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.attributes)** *(scope)* – Specify the socket that a listener listens on |   | control_listener, ecstream_listener, esmtp_listener, http_listener, msgcserver_listener, xmpp_listener |
| **[listen_backlog](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.listen_backlog)** – The listen backlog | 500 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[peer](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.config.acls)** *(scope)* – Create an ACL within a specific listener |   | control_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[pool_name](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3)** – Associate a threadpool with a listener |   | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[tcp_recv_buffer_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.tcp_recv_buffer_size)** – The size of the TCP receive buffer size | 4096 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[tcp_send_buffer_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.tcp_send_buffer_size)** – The size of the TCP send buffer | 4096 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[timeout](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.timeout)** – The timeout for idle control connections on Control_Listeners | 60 | control_listener |