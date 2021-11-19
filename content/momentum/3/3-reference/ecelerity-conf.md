---
lastUpdated: "03/26/2020"
title: "ecelerity.conf"
description: "ecelerity conf Momentum configuration file The ecelerity conf file is the master configuration file for the Momentum application server The easiest way to manipulate this file is through the web UI If you make manual changes to this file be sure to use eccfg to commit your changes For more..."
---

<a name="ecelerity.conf"></a> 
## Name

ecelerity.conf — Momentum configuration file

<a name="ecelerity.conf.description"></a> 
## Description

The `ecelerity.conf` file is the master configuration file for the Momentum application server.

The easiest way to manipulate this file is through the web UI. If you make manual changes to this file be sure to use **eccfg** to commit your changes. For more information see [eccfg](/momentum/3/3-reference/executable-eccfg) and [“Best Practices for Manually Changing Configuration Files”](/momentum/3/3-reference/conf-manual-changes).

The default search path for config files is:

```
/opt/msys/ecelerity/etc/conf/global:/opt/msys/ecelerity/etc/conf/{NODENAME}:»
  /opt/msys/ecelerity/etc/conf/default
```
<a name="idp6423360"></a> 
## The Contents of `ecelerity.conf`

Options such as `max_outbound_connections` are simple configuration options while other configuration options define data structures. For example, the `security` option (or scope) has user and group options. Complex configuration options are as follows:

<a name="scope-options-table"></a> 


| Option/Description | Type | Scopes |
| --- | --- | --- |
| **[adaptive_backstore_leveldb](/momentum/3/3-reference/3-reference-conf-ref-adaptive-backstore-leveldb)** – Use LevelDB as the backing store for Adaptive Delivery | sending | global |
| **[adaptive_backstore_riak](/momentum/3/3-reference/3-reference-conf-ref-adaptive-backstore-riak)** – Define the characteristics of the Riak backing store | sending | global |
| **[adaptive_sweep_rule](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_sweep_rule)** – Set the thresholds and actions for adaptive fbl and bounce rules | sending | binding, binding_group, domain, global |
| **[authorization](/momentum/3/3-reference/3-reference-conf-ref-authorization)** – Configure the console commands applicable to users | na | global |
| **[binding](/momentum/3/3-reference/3-reference-conf-ref-binding)** – Configure binding-specific options | sending | binding_group, global |
| **[binding_group](/momentum/3/3-reference/3-reference-conf-ref-binding-group)** – Logically group a set of bindings | sending | global |
| **[control_listener](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.control_listener)** – The listener for incoming control connections | na | global |
| **[debug_flags](/momentum/3/3-reference/3-reference-conf-ref-debug-flags)** – Configure debug verbosity | na | global |
| **[domain](/momentum/3/3-reference/3-reference-conf-ref-domain)** – Configure domain-specific options | sending | binding, binding_group, global |
| **[eccluster_listener](/momentum/3/3-reference/ecelerity-cluster-conf#ecelerity-cluster.conf.eccluster_listener)** – Control communication between cluster nodes | na | global |
| **[ecstream_listener](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener)** – The listener for incoming ECSTREAM connections | receiving | global |
| **[esmtp_listener](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.esmtp_listener)** – The listener for incoming SMTP connections | receiving | global |
| **[eventloop](/momentum/3/3-reference/conf-ref-eventloop)** – Define a pool of event loops to enable multiple event loop configuration | both | global |
| **[host](/momentum/3/3-reference/3-reference-conf-ref-host)** – Configure host-specific options | sending | binding, binding_group, global |
| **[http_listener](/momentum/3/3-rest/rest-http-listener)** – The listener used with the REST injector | sending | global |
| **[listen](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.attributes)** – Specify the socket that a listener listens on | receiving | control_listener, ecstream_listener, esmtp_listener, http_listener, msgcserver_listener, xmpp_listener |
| **[logs](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs)** – Configure centralized log files on the cluster manager | na | global |
| **[manager](/momentum/3/3-reference/cluster-config-logging#cluster.config.logging.complex)** – Define managers for subclusters | na | logs |
| **[pathway](/momentum/3/3-reference/3-reference-conf-ref-pathway)** – A grouping of inbound configuration options | receiving | global, pathway_group |
| **[pathway_group](/momentum/3/3-reference/3-reference-conf-ref-pathway-group)** – A container for pathway scopes | receiving | global |
| **[peer](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.config.acls)** – Create an ACL within a specific listener | receiving | control_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[ecelerity-cluster.conf](/momentum/3/3-reference/ecelerity-cluster-conf)** – Define the cluster replication framework | na | cluster |
| **[authorization](/momentum/3/3-reference/3-reference-conf-ref-authorization)** – Define a role within an authorization stanza | na | authorization |
| **[security](/momentum/3/3-reference/3-reference-conf-ref-security)** – Scope for defining which permissions are retained by which user | na | global |
| **[SNMP](/momentum/3/3-reference/3-reference-conf-ref-snmp)** – Simple Network Management Protocol Support scope options | na | global |
| **[SNMP](/momentum/3/3-reference/3-reference-conf-ref-snmp)** – Enable and configure generation of SNMP traps | na | global |
| **[threadpool](/momentum/3/3-reference/3-reference-conf-ref-threadpool)** – Configure thread pool specific options | na | global |
| **[“DuraVIP™: IP Fail over”](/momentum/3/3-reference/3-reference-cluster-config-duravip)** – Define the cluster network topology | na | cluster |
| **[xmpp_listener](/momentum/mobile/mobile-reference/mobility-xmpp-modules#modules.xmpp.xmpp_listener)** – The listener for incoming XMPP connections (Mobile Momentum) | receiving | global |

Configuration options defined at the top level of the `ecelerity.conf` file are defined in a global scope. Many of these options can be defined in other scopes for a more fine-grained configuration. For example, the `max_outbound_connections` option can be set globally to apply to all outbound connections or within a domain scope to apply to a specific domain only. You can also set it in both scopes if you wish. For a discussion of which value applies in which circumstances see [“Configuration Scopes and Fallback”](/momentum/3/3-reference/3-reference-ecelerity-conf-fallback).

The various modules that extend the functionality of Momentum are also scopes. The clamav module for example, makes it possible to use ClamAV anti-virus scanning from within Momentum. Modules and their configuration options are discussed in the [*Modules Reference*](/momentum/3/3-reference/3-reference-modules) .

<a name="ecelerity.conf.comments.includes"></a> 
## Comments, Whitespace and Includes

In common with many other Unix configuration files, the `ecelerity.conf` file uses the `#` (commonly referred to as "hash", "pound" or "octothorpe") symbol to introduce a single line comment. Whitespace is unimportant in the various configuration stanza; feel free to pad the whitespace as you see fit for maximum readability.

### Note

If the values assigned to any options contain whitespace or any of the characters ‘`#`’, ‘`/`’, ‘`"`’, ‘`'`’, ‘`=`’, ‘`{`’, ‘`}`’, ‘`[`’, ‘`]`’, ‘`(`’, ‘`)`’ they must be enclosed by quotation marks. Note that binding names cannot contain spaces.

All configuration options are case insensitive. For example, you can define an SMTP listener as `ESMTP_Listener` or `esmtp_listener`.

You may use C-style comments in your `ecelerity.conf`. C-style comments begin with `/*` and end with `*/`. Any text between those two markers will be ignored by Momentum. C-style comments do not nest.

You may also break apart your configuration into multiple files and reference them using the `include` statement.

`include "/opt/msys/ecelerity/etc/other.conf"`

If you break up your configuration file into a number of different files you will need to add these new files to the repository. For instructions on adding configuration files to the repository see [“Best Practices for Adding Configuration Files”](/momentum/3/3-reference/conf-adding-configuration-files).

For included files, the directory that holds the file being included **from** is checked before the default search path.

You may also use the include statement to allow the inclusion of a directory. When the referenced path is a directory, all the files within that directory are included in lexical order. Hidden files (those whose names begin with a single period) are not included. Sub-directories are not automatically processed.

```
# assuming that /opt/msys/ecelerity/etc/config.d is a directory
# each file in that directory will be included
include "/opt/msys/ecelerity/etc/config.d"
```

In a cluster configuration, the `eccluster.conf` file is "included" from the `ecelerity.conf` file and configures cluster-related options.

<a name="idp6541312"></a> 
### Using the "readonly_include" Directive

<a name="idp6543168"></a> 

You may split the configuration into multiple files using not only an 'include' directive but also the 'readonly_include' directive. As with the 'include' directive, 'readonly_include' is valid in any scope. 'readonly_include' also supports making online changes to the configuration with the '**config set** ' and '**config unset** ' commands. For more information see [config](/momentum/3/3-reference/3-reference-console-commands-config).

When making an online change, Momentum must decide which of the multiple configuration files to save online changes to. This decision is controlled by the following factors:

*   The `Local_Changes_File` option

*   The `Local_Changes_Only` option,

*   The read-only status of a particular configuration file

*   Whether the operation being performed is replacing an old value with a new one, or setting a value that has not previously been set

<a name="readonly_include_files"></a> **Readonly 'include' Files. **<a name="idp6553824"></a>  Any configuration files included with the 'readonly_include' directive are read-only. Any configuration files included multiple times (overall, not necessarily from the same file) are read-only. Any configuration files loaded from a URI with a scheme other than 'file://', 'persist://', for example, are read-only. All other configuration files are considered writable.

The `Local_Changes_File` option sets the name of a configuration file which must be writable, and which is implicitly loaded after all other configuration files regardless of its placement in the configuration file. Since it must be writable and files included twice are read-only, the `Local_Changes_File` option cannot point to the same file as any 'include' directive, and it cannot point to the main configuration file. Since the `Local_Changes_File` is effectively loaded at the end of the main configuration file, options set in it are able to override any setting in any other configuration file; if it were loaded at some other point, options set after that point could not be overridden by it.

If the `Local_Changes_File` option is not defined, and the main configuration file is writable, then changes are written to the main configuration file. If `Local_Changes_File` is not defined, and the main configuration file is read-only, then a virtual file, not associated with any real path is used to hold changes; in this case, the **config writeback**           command will issue a warning stating that not all portions of the configuration could be saved, and show the contents of the virtual file. This situation can be remedied by setting the `Local_Changes_File` to a valid path and issuing the **config writeback**           command again, at which point changes in the virtual file will be saved to the newly configured location.

The `Local_Changes_Only` option defaults to 'false'. If it is 'true', the `Local_Changes_File` option must be defined and all changes are saved to the `Local_Changes_File`. If it is 'false', changes are distributed as described below:

*   When replacing a value that has previously been set, if the file it was last set in is writable then the change is made in-place; the new option value replaces the old option value at the same location in the writable file.

*   If replacing a value that was last set in a read-only file or setting a value that was not set previously, then the change will go to the lexically first writable file in which the scope instance containing the change was defined.

For an example of the lexically first writable file assume that `ecelerity.conf` is configured as follows:

```
readonly_include "foo.conf"
include "baz.conf"
```

and `foo.conf` contains:

```
Domain yahoo.com {
  Gateway = "server.yahoo.com"
  include "bar.conf"
}
```

Options set for the first time by commands starting with **config set Domain yahoo.com**                      will be saved in `bar.conf`, since `foo.conf` is read-only and `baz.conf` occurs after `bar.conf`. The change made by **config set Domain yahoo.com gateway "server2.yahoo.com"**                                                  would also end up in `bar.conf,` since the original location, `foo.conf`, is read-only, and `bar.conf` is the first writable location after it.

Finally, if the scope instance containing the change was only encountered in read-only files or not at all, then the change will be saved to the file defined by the `Local_Changes_File` option. Note that changes, even committed changes, are accumulated in in-memory representations of the configuration files and are not saved to disk until a **config writeback**           command is issued.

<a name="ecelerity.conf3.listener.config.bypass"></a> 
### Bypassing Validation Modules

It is possible to bypass validation modules by adding a context variable to your listener. Do this by creating a context variable with the name __bypass_*`module_name`* and setting its value to `true`. For example, to bypass the spf_v1 module create a variable called `__bypass_spf_v1` and set its value to `true`. To determine whether a module is a validation module see [“All Modules”](/momentum/3/3-reference/modules-summary#modules.summary.all.modules).

<a name="ecelerity.conf3.listeners"></a> 
## Listeners

Momentum is built around a powerful event based scheduling engine. A key part of that engine is responding to events that occur on inbound sockets, known as *listeners*.

The basic listener syntax is as follows:

```
Esmtp_Listener {
  Listen "*:25" {}
}
```

The `*:25` is an example of an address; multiple addresses can be specified for a given listener, allowing you to configure service on multiple IP/port or Unix sockets.

### Warning

When using any listener, if you change from listening on a specific IP address to listening on the "wildcard" address (*) or the reverse, you must issue the **config reload**        command twice in order to reactivate the listener. This applies to Linux systems only.

Momentum supports three major types of listener for serving SMTP, Control and ECStream clients.

### Note

As of version 3.1.4, Momentum also supports an HTTP_Listener that is used with the REST Injection API. For more information see "[HTTP_Listener](/momentum/3/3-rest/rest-http-listener)".

For a complete list of the options that are valid within a listener see [Table 9.25, “listener options”](/momentum/3/3-reference/ecelerity-conf#table-listener-options).

<a name="ecelerity.conf3.control_listener"></a> 
## Control_Listener

```
Control_Listener {
  Listen "/tmp/2025" {
    File_Mode = 0666
  }
}
```

Configures the end-point(s) on which Momentum should listen for incoming control connections (made via `ec_console` or the web console). For local-only configurations, a Unix domain socket may be appropriate. If your network is reasonably secure, you can specify an IPv4 address and port for TCP/IP services.

In this case the `file_mode` option is set to `0666`. With the socket file permission set to 0666, every user who can log in to the system can use ec_console to connect to the server.

The Control_Listener supports a number of extended properties including `ALWAYS-ALLOW`, `LOGIN` and `DIGEST-MD5`. For more information see [“Configuring Authentication for the Control Listener”](/momentum/3/3-reference/conf-aaa#conf.control_authen).

For information regarding IPv6 addresses and Listen stanzas, see [the section called “Listeners and IPv6 Addresses”](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ipv6).

<a name="ecelerity.conf3.esmtp_listener"></a> 
## ESMTP_Listener

Configures the end-point(s) on which Momentum should listen for incoming SMTP connections. This list can contain any number of Unix domain sockets and/or IP:port addresses for TCP/IP service.

The ESMTP_Listener supports all of the extended properties and extensions described below.

<a name="esmtp_listener_example3"></a> 


```
ESMTP_Listener {
  Listen ":25" {
      **Listen_Backlog = 500**       # new default, can be set > 200 now
      TCP_Recv_Buffer_Size = 4096
      TCP_Send_Buffer_Size = 4096
      Disable_Nagle_Algorithm = false
  }
  Listen ":587" {
      Enable = "false"
      Accept_Queue_Backlog = 200
      Events_Per_Iter = 20
      Concurrency = 4
      # you need to also create this pool in your configuration,
      # otherwise you get a warning and use the IO pool instead
      Pool_Name = "accept-pool"
  }
  # serve inbound SMTP on port 25 in IPv6
  #Listen "[::1]:25" {}

  # serve inbound SMTP at 192.168.0.1 on port 25 in IPv6
  #Listen "[::192.168.0.1]:25" {}
  # or
  #Listen "[::C0A8:1]:25" {}
}
ThreadPool accept-pool {
  Concurrency = 4
}
```

The `Pool_Name` option associates the `accept-pool` ThreadPool with the listener. Concurrency should have a value that is equal to or less than the concurrency defined in the ThreadPool.

When using threaded accepts for listeners, you must now explicitly provision the thread pool you intend to use via the ThreadPool directive. If the thread pool you name is not found, or is unspecified, the IO pool will be used and a critical message will appear in your log. In version 2.2 if the pool didn't exist, the listener subsystem would create it for you.

Listen stanzas map 1:1 to an underlying socket, this means that `:25` (which is the same as *:25) binds to IPv4 (and perhaps IPv6, depending on the kernel); for explicit IPv6, use `[*]:25` instead. This change makes it possible to suspend and enable listener sockets individually on the fly. If you wish to disable the listener on port 25, as shown in [“ESMTP_Listener”](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3), issue the command **`config set esmtp_listener listen :25 enable false`**                                             from the system console. You can use **config set, get**          or **eval** with any one of the listener subsystem options. This applies to ESMTP_Listeners and Control_Listeners.

Note that `Listen_Backlog` has a new default value and can now be set higher than `200`. Also note that the `enable` option is used in the listener scope to enable or disable a listener or listen scope and *not `enabled`* .

<a name="ecelerity.conf.ipv6"></a> 
### Listeners and IPv6 Addresses

IPv6 addresses are case insensitive and can use ‘`::`’ for zero suppression. For this reason, the same address can be expressed in a variety of ways. The following examples all represent the same IPv6 address (example adapted from [http://tools.ietf.org/html/rfc5952](http://tools.ietf.org/html/rfc5952) ):

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

Use of square brackets is also required when defining IPv6 ECCluster_listeners and and Control_Listeners.

### Note

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `Gateway`, `Routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.

<a name="reconfig_message"></a> 
### The `Reconfig_Message` Option

<a name="idp6628912"></a> 

Inbound SMTP connections check if the configuration has changed between messages and while handling the RSET command. If the connection discovers that it is using an old configuration, a 421 code will be returned in response to the MAIL FROM or RSET command that triggered the check, and the connection will be closed. The message that accompanies the 421 code is configurable via the `Reconfig_Message` setting in the ESMTP_Listener scope, and defaults to "4.3.2 Reconfiguration in progress".

Issuing the system console command **config reload**        while receiving email will trigger this message.

<a name="ecelerity.conf.ecstream_listener"></a> 
## ECStream_Listener

Configures the end-point(s) on which Momentum should listen for incoming ECStream connections. This list can contain any number of Unix domain sockets and/or IP:port addresses for TCP/IP service.

The ECStream protocol is a bare-bones, high performance injection mechanism. It does not support any extended properties.

```
ECStream_Listener {
  Listen ":1825" {
    ECStream_Idle_Time = 300
    ECStream_Max_Batch_Size = 10000
  }
}
```

The `ECStream_Idle_Time` is the number of seconds of inactivity before a client is disconnected. This option is valid in the ECStream_Listener and within the Listen and the Peer scopes within an ECStream_Listener. The default value is `300`. The `ECStream_Max_Batch_Size` option specifies the maximum number of ECStream messages to accept before dropping back into the scheduler. If users are having problems with the MTA becoming unresponsive when injecting messages via ECStream, it can be useful to set this to `1`. The default value for this option is `10000`.

### Warning

When delivering mail via ecstream, do not use the [routes](/momentum/3/3-reference/3-reference-conf-ref-routes) option. Use [gateway](/momentum/3/3-reference/3-reference-conf-ref-gateway) instead.

Not all listener options are valid within the ECStream_Listener or the Listen scope within an ECStream_Listener. Find below a table of those that are valid.

<a name="ecstream_listener-options-table"></a> 


| Option/Description | Default | Scopes |
| --- | --- | --- |
| **[accept_queue_backlog](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.accept_queue_backlog)** – The accept queue backlog | 0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| **[concurrency](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3)** – Define number of available threads | 0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, threadpool, xmpp_listener |
| **[disable_nagle_algorithm](/momentum/3/3-reference/3-reference-conf-ref-disable-nagle-algorithm)** – Disable nagle algorithm on sockets | false | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, global, http_listener, listen, xmpp_listener |
| **[ecstream_idle_time](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener)** – The number of seconds of inactivity before a client is disconnected (ECStream only) | 300 | ecstream_listener, listen, pathway, pathway_group, peer |
| **[ecstream_max_batch_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener)** – The maximum number of ECStream messages to accept before dropping back into the scheduler (ECStream only) | 10000 | ecstream_listener, listen, pathway, pathway_group, peer |
| **[enable](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3)** – Enable or disable a listener scope | true | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| **[event_loop](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listeners.multi-core)** – Associate a listener with an eventloop |   | ecstream_listener, esmtp_listener, listen |
| **[events_per_iter](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.events_per_iter)** – Employ when using a Concurrency greater than 1 | 0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[file_mode](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.control_listener)** – File access rights in octal notation | 0660 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| **[listen](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.attributes)** *(scope)* – Specify the socket that a listener listens on |   | control_listener, ecstream_listener, esmtp_listener, http_listener, msgcserver_listener, xmpp_listener |
| **[listen_backlog](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.listen_backlog)** – The listen backlog | 500 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[pathway](/momentum/3/3-reference/3-reference-conf-ref-pathway)** – A means for associating a Listener with a pathway scope |   | ecstream_listener, esmtp_listener, listen, peer |
| **[peer](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.config.acls)** *(scope)* – Create an ACL within a specific listener |   | control_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[pool_name](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3)** – Associate a threadpool with a listener |   | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[tcp_recv_buffer_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.tcp_recv_buffer_size)** – The size of the TCP receive buffer size | 4096 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[tcp_send_buffer_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.tcp_send_buffer_size)** – The size of the TCP send buffer | 4096 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[tls_allow_renegotiation](/momentum/3/3-reference/conf-ref-tls-allow-renegotiation)** – Whether to enable OpenSSL TLS renegotiation | true | ecstream_listener, esmtp_listener, http_listener, listen, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_certificate](/momentum/3/3-reference/conf-ref-tls-certificate)** – Certificate to use for inbound and outbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_ciphers](/momentum/3/3-reference/conf-ref-tls-ciphers)** – Allowable ciphers for a TLS session |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_client_ca](/momentum/3/3-reference/conf-ref-tls-client-ca)** – Certificate authority for inbound mail |   | ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_key](/momentum/3/3-reference/conf-ref-tls-key)** – the TLS key to use for outbound mail or inbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_protocols](/momentum/3/3-reference/conf-ref-tls-protocols)** – Allowable ciphers for TLS inbound and outbound sessions |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer |
| **[tls_verified_peer_can_relay](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options)** – Verification that peer can relay | false | ecstream_listener, esmtp_listener, listen, pathway, pathway_group, peer |
| **[tls_verify_mode](/momentum/3/3-reference/conf-ref-tls-verify-mode)** – Determine whether a TLS certificates is required |   | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[use_ssl](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.use_ssl)** – Whether to use SSL verification | false | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |

The `ecstream_idle_time` and `ecstream_max_batch_size` options are only valid within the ECStream scope or a listen scope within this scope. They are also the only options valid in the ECStream::Peer scope or ECStream_Listener::Listen::Peer scopes. For more information about these options see [Table 9.25, “listener options”](/momentum/3/3-reference/ecelerity-conf#table-listener-options).

For information regarding IPv6 addresses and Listen stanzas, see [the section called “Listeners and IPv6 Addresses”](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ipv6).

<a name="ecelerity.conf.ecstream_listener.webui"></a> 
### Configuring the ECStream_Listener in the Web UI

If you are adding an ECStream_Listener using the web UI, you must first add the `ecstream` module. You cannot configure ECStream options until the `ecstream` module has been added.

If you are using the web UI and you manually change the `ecelerity.conf` file, be sure that the `ecstream` module appears before the ECStream_Listener.

<a name="ecelerity.conf3.listeners.multi-core"></a> 
## Listener Options and Multiple Event Loops

**Configuration Change. ** This feature available as of version 3.6.

In version 3.6, multiple event loops are introduced. If you have purchased a multiple event loop license (the "Supercharger" license) you can associate mail delivery and reception with an event loop threadpool so that performance scales with multi-core CPUs.

### Note

The "Supercharger" license specifies a maximum number of event loops. When configuring an event loop, the `concurrency` option in the eventloop scope cannot exceed the licensed number of event loops. For more information see [“Configuring for Multiple Event Loops in Momentum 3.6”](/momentum/3/3-reference/conf-multi-core).

A typical configuration would be as follows:

```
eventloop "pool" {
  concurrency = 10
}
threadpool "accept" {
  concurrency = 1
}
delivery_pool = "pool"

esmtp_listener {
  listen ":25" {
    concurrency = 1
    pool_name = "accept"
    event_loop = "pool"
  }
}
```

The `event_loop` option is valid in the esmtp_listener, the ecstream_listener, the http_listener and the listen scopes within those scopes. These options should not be used in the control_listener scope. You cannot currently configure an XMPP listener to use the event loop.

### Note

In order to use this option you must have a "Supercharger" license. For more information see [“Configuring for Multiple Event Loops in Momentum 3.6”](/momentum/3/3-reference/conf-multi-core).

Changing the value of `event_loop` at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="ecelerity.conf3.tcpip.listener.syntax"></a> 
## TCP/IP Listen Address Syntax

```
Esmtp_Listener {
  Listen "*:25" {}
  Listen "127.0.0.1:25" {}
  Listen "[*]:25" {}
}
```

<dl class="variablelist">

<dt>*:25</dt>

<dd>

This configures Momentum to listen on `INADDR_ANY` on port 25.

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

For a detailed discussion of IPv6 syntax see [the section called “Listeners and IPv6 Addresses”](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ipv6).

<a name="ecelerity.conf3.unix.domain.listener.syntax"></a> 
## Unix Domain Listener Address Syntax

```
Control_Listener {
  Listen "/tmp/2025" {
    File_Mode = 0666
    Listen_Backlog = 500
  }
}
```

This example shows a Listener configured on a Unix domain socket located at `/tmp/2025` with a maximum backlog of `500`.

<a name="ecelerity.conf3.timeout"></a> **Timeout Option. **<a name="idp6764128"></a>  A '`Timeout`' option that specifies a timeout for idle control connections has been added to Control_Listeners. This option has a default value of `60` seconds and makes the `control_listener_timeout` option obsolete.

<a name="ecelerity.conf3.listener.attributes"></a> 
## Listener `Enable` Option

It may be necessary to temporarily disable a listener; the `enable` option provides a convenient way to express this, without completely removing the listener from the configuration file, and without having to comment out the entire listener stanza.

The following stanza configures listeners on port 25 and port 587; Momentum will bind a listener to port 25 but will skip port 587 because it is marked as disabled.

```
Esmtp_Listener {
  Listen "*:25" {
  }
  Listen "*:587" {
    Enable = false
  }
}
```

Note that the `enable` option is used to enable or disable a listener or listen scope and **not `enabled`** . The `enabled` option applies only to modules and the `enable` applies only to listen or listener stanzas.

<a name="ecelerity.conf3.listener.config.acls"></a> 
## Extended Listener Configuration Using Access Control Lists (ACLs)

<a name="idp6776560"></a> <a name="idp6778128"></a> 

ACLs are implemented via the Peer scope, which uses the existing matching infrastructure to find the most specific CIDR match for a given configured value. Fallback works here too, allowing for some expressive configurations that are easily understood. For more information about fallback see [“Configuration Scopes and Fallback”](/momentum/3/3-reference/3-reference-ecelerity-conf-fallback).

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

### Note

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `Gateway`, `Routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.

Options defined in the Peer CIDR block `10.0.0.0/16` will apply to all IP addresses defined by this block unless the connecting IP address is `10.0.0.1`. In that case, anything defined in the peer scope `10.0.0.1` takes precedence.

Note that SMTP extensions are defined using the `SMTP_Extensions` array. SMTP extensions are discussed in [the section called “SMTP Extensions”](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.extensions).

The options that are valid within the Peer scope are listed in the following section.

<a name="peer-options-table"></a> 


| Option/Description | Default | Scopes |
| --- | --- | --- |
| **[allow_ip_literal](/momentum/3/3-reference/3-reference-conf-ref-allow-ip-literal)** – Allow IP addresses in email addresses | true | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[allow_null_envelope_sender](/momentum/3/3-reference/3-reference-conf-ref-allow-null-envelope-sender)** – Allow the null envelope sender in email addresses | true | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[allow_trailing_whitespace_in_commands](/momentum/3/3-reference/3-reference-conf-ref-allow-trailing-whitespace-in-commands)** – Allow trailing white space at the end of an SMTP command | false | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[always_allow](/momentum/3/3-reference/conf-aaa#conf.control_authen.overriding)** – When set to true, authentication is considered to have succeeded, unless always_deny is set | false | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[always_deny](/momentum/3/3-reference/conf-aaa#conf.control_authen.overriding)** – If set to true, authentication is considered to have failed | false | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[authdigestmd5parameters](/momentum/3/3-reference/conf-aaa#conf.inbound-authdigest-md5)** – Configure DIGEST-MD5 authentication |   | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[banner_hostname](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.banner_hostname)** – Specifies the banner hostname that will be displayed to the remote client upon connecting |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[context](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.context)** – Use to set arbitrary connection context key value pairs |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[disable_chunked](/momentum/mobile/mobile-reference/mobility-mm-7-listener)** – An option used with aggregators who do not support chunked transfer-coding (Mobile Momentum) | false | http_listener, listen, pathway, pathway_group, peer |
| **[domain_for_unqualified_recipient_addresses](/momentum/3/3-reference/3-reference-conf-ref-domain-for-unqualified-recipient-addresses)** – Configure a domain which will be used to resolve delivery for unqualified addresses |   | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[domain_for_unqualified_sender_address](/momentum/3/3-reference/3-reference-conf-ref-domain-for-unqualified-sender-address)** – Configure a domain which will be used to substitute for unqualified sender addresses |   | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[ecstream_idle_time](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener)** – The number of seconds of inactivity before a client is disconnected (ECStream only) | 300 | ecstream_listener, listen, pathway, pathway_group, peer |
| **[ecstream_max_batch_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener)** – The maximum number of ECStream messages to accept before dropping back into the scheduler (ECStream only) | 10000 | ecstream_listener, listen, pathway, pathway_group, peer |
| **[enable_authentication](/momentum/3/3-reference/conf-ecelerity-conf#conf.inbound-mail)** – Whether or not to enable authentication |   | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[enable_authorization](/momentum/3/3-reference/conf-aaa#conf.control_authz)** – Whether or not to enable authorization for console commands |   | control_listener, listen, peer |
| **[idle_time](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.idle_time)** – The number of seconds of inactivity before a client is disconnected | 0 | esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[listener_sessions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.listener_sessions)** – Specifies the maximum number of concurrent sessions that can be established to a listener | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[log_requests_to_paniclog](/momentum/3/3-rest/rest-http-listener)** – Whether to log REST injection requests | false | http_listener, listen, pathway, pathway_group, peer |
| **[max_message_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_message_size)** – The maximum number of bytes allowed in a single message | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[max_receptions_per_connection](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_receptions_per_connection)** – The maximum number of messages allowed in a single session | 0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[max_recipients_per_connection](/momentum/3/3-reference/conf-ref-max-recipients-per-connection)** – The maximum number of recipients to send on a connection | 0 | binding, binding_group, domain, esmtp_listener, global, listen, peer |
| **[max_recipients_per_message](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_recipients_per_message)** – The maximum number of recipients allowed in a message | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[max_request_size](/momentum/3/3-rest/rest-http-listener)** – Limit the size of an HTTP request |   | http_listener, listen, pathway, pathway_group, peer |
| **[mcmt_reception](/momentum/mobile/mobile-reference/mm-7-mcmt-reception)** – Configure a listener to accept the Multi-Channel Message Type (Mobile Momentum) | passthru | esmtp_listener, listen, pathway, pathway_group, peer |
| **[open_relay](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.open_relay)** – Whether the MTA is an open relay or not | false | esmtp_listener, listen, pathway, pathway_group, peer |
| **[pathway](/momentum/3/3-reference/3-reference-conf-ref-pathway)** – A means for associating a Listener with a pathway scope |   | ecstream_listener, esmtp_listener, listen, peer |
| **[received_hostname](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.received_hostname)** – The hostname that is placed in the received headers |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[relay_for_sending_domains](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.relay_for_sending_domains)** – Domains that may use the MTA as a relay |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[relay_hosts](/momentum/3/3-reference/3-reference-conf-ref-relay-hosts)** – Configure the list of hosts for which Momentum relays mail |   | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[require_ehlo](/momentum/3/3-reference/3-reference-conf-ref-require-ehlo)** – Reject mail from clients that do not say HELO | false | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[service_sessions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.service_sessions)** – The maximum number of concurrent sessions that can be established to all listeners | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[smtp_extensions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.extensions)** – Array of SMTP extensions |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[starttls_injection_policy](/momentum/3/3-reference/conf-ref-starttls-injection-policy)** – Protect against SMTP injections prior to TLS | reject | esmtp_listener, listen, pathway, pathway_group, peer |
| **[static_banner](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.static_banner)** – The banner that is displayed to the remote client |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[tls_allow_renegotiation](/momentum/3/3-reference/conf-ref-tls-allow-renegotiation)** – Whether to enable OpenSSL TLS renegotiation | true | ecstream_listener, esmtp_listener, http_listener, listen, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_certificate](/momentum/3/3-reference/conf-ref-tls-certificate)** – Certificate to use for inbound and outbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_ciphers](/momentum/3/3-reference/conf-ref-tls-ciphers)** – Allowable ciphers for a TLS session |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_client_ca](/momentum/3/3-reference/conf-ref-tls-client-ca)** – Certificate authority for inbound mail |   | ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_key](/momentum/3/3-reference/conf-ref-tls-key)** – the TLS key to use for outbound mail or inbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_protocols](/momentum/3/3-reference/conf-ref-tls-protocols)** – Allowable ciphers for TLS inbound and outbound sessions |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer |
| **[tls_verified_peer_can_relay](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options)** – Verification that peer can relay | false | ecstream_listener, esmtp_listener, listen, pathway, pathway_group, peer |
| **[tls_verified_peer_is_authorized](/momentum/3/3-rest/rest-http-listener)** – Mark requests that use a verified SSL Client certificate as being authorized | false | http_listener, listen, pathway, peer |
| **[tls_verify_mode](/momentum/3/3-reference/conf-ref-tls-verify-mode)** – Determine whether a TLS certificates is required |   | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[use_ssl](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.use_ssl)** – Whether to use SSL verification | false | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |

<a name="ecelerity.conf3.listener.options"></a> 
## Listener Options

The following Listener options can also appear in both the Listen and the Peer scopes.

```
ESMTP_Listener {
  Relay_Hosts = ( "127.0.0.1" )
  Listener_Sessions = 100
  Service_Sessions = 100
  Idle_Time = 100
  Max_Receptions_Per_Connection = 100
  Max_Recipients_Per_Connection = 100
  Max_Recipients_Per_Message = 100
  Max_Message_Size = 102400
  Banner_Hostname = "string"
  Received_Hostname = "string"
  Static_Banner = "string"
  Context = [
        name = value
  ]
  **# replaces boolean use of relay_for_sending_domains
  Open_Relay = false** 
  Relay_For_Sending_Domains = (
        "*.foo.com"
  )
  SMTP_Extensions = ( "XCLIENT" )
  Use_SSL = false
  Allow_NULL_Envelope_Sender = true
  Domain_For_Unqualified_Sender_Address = "example.com"
  Domain_For_Unqualified_Recipient_Addresses = "example.com"
  Require_EHLO = false
  TLS_Verified_Peer_Can_Relay = true
  TLS_Certificate = "string"
  TLS_Key = "string"
  TLS_Client_CA = "string"
  TLS_Ciphers = "string"
  TLS_Verify_Mode = "string"
}
```

These options are explained in the following:.

<dl class="variablelist">

<dt><a name="ecelerity.conf3.listener.options.listener_sessions"></a> Listener_Sessions</dt>

<dd>

specifies the maximum number of concurrent sessions that can be established to this listener.

</dd>

<dt><a name="ecelerity.conf3.listener.options.service_sessions"></a> Service_Sessions</dt>

<dd>

specifies the maximum number of concurrent sessions that can be established to all listeners for this service (e.g. ESMTP, ECStream).

</dd>

<dt><a name="ecelerity.conf3.listener.options.idle_time"></a> Idle_Time</dt>

<dd>

The number of seconds of inactivity before a client is disconnected. The default for this option is `0`. In the default `ecelerity.conf` file this option is given a value of `300`. This is the recommended value.

</dd>

<dt><a name="ecelerity.conf3.listener.options.max_receptions_per_connection"></a> Max_Receptions_Per_Connection</dt>

<dd>

The maximum number of messages allowed in a single session, after which a 421 error will be returned.

</dd>

<dt><a name="ecelerity.conf3.listener.options."></a> Max_Recipients_Per_Connection</dt>

<dd>

The maximum number of recipients allowed in a single session, after which a 421 error will be returned.

</dd>

<dt><a name="ecelerity.conf3.listener.options.max_recipients_per_message"></a> Max_Recipients_Per_Message</dt>

<dd>

The maximum number of recipients allowed in a message, after which a 421 error will be returned.

</dd>

<dt><a name="ecelerity.conf3.listener.options.max_message_size"></a> Max_Message_Size</dt>

<dd>

The maximum number of bytes allowed in a single message before a "resources exhausted" message is returned to the client.

</dd>

<dt><a name="ecelerity.conf3.listener.options.banner_hostname"></a> Banner_Hostname</dt>

<dd>

Specifies the banner hostname that will be displayed to the remote client upon connecting. This is specific to the ESMTP service.

</dd>

<dt><a name="ecelerity.conf3.listener.options.static_banner"></a> Static_Banner</dt>

<dd>

Specifies the entire banner that will be displayed to the remote client upon connecting. You must include 220 as the beginning of your replacement string. Example replacement: `220 my.mail.server ESMTP`

</dd>

<dt><a name="ecelerity.conf3.listener.options.context"></a> Context</dt>

<dd>

Provides a mechanism to set arbitrary connection context key value pairs. The connection context is visible to all validation modules, the Sieve infrastructure and scriptlets. It allows the efficient assignment of metadata to connections based on the listener and arbitrary ACLs. See also [the section called “Bypassing Validation Modules”](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.config.bypass) and [“Setting Context Based on Connecting IP”](/momentum/3/3-reference/policy-context-based-on-ip).

</dd>

<dt><a name="ecelerity.conf3.listener.options.relay_for_sending_domains"></a> Relay_For_Sending_Domains</dt>

<dd>

Provides a mechanism for finer control over SMTP relaying. If specified with no parameters, it allows unrestricted use of the instance as an SMTP relay (a.k.a. open relay) from the IP ACL that was matched.

If parameters of the form `"domainname" "other_domainname"` are specified, then relaying will be allowed from that IP ACL if the sender domain matches one of the specified domain names. You can also use wildcards to specify a series of domain names, for example, `"*.foo.com"`. The Relay_Hosts options will override any restrictions enacted by this option for the IP addresses specified in Relay_Hosts.

</dd>

<dt><a name="ecelerity.conf3.listener.options.open_relay"></a> Open_Relay</dt>

<dd>

In version 3.x the *boolean* use of `relay_for_sending_domains` has been replaced by `Open_Relay`. In version 2.2 the boolean use is simply a line that says "relay_for_sending_domains" with no equals sign or dictionary following it. For more information see [Relay_For_Sending_Domains](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.relay_for_sending_domains) .

### Note

It is strongly recommended that this option be set to `false`. Otherwise the MTA could be used by spammers as an open relay.

</dd>

<dt><a name="ecelerity.conf3.listener.options.received_hostname"></a> Received_Hostname</dt>

<dd>

This is the hostname that will be placed in the received headers that are added to the messages as it transits Momentum.

</dd>

<dt><a name="ecelerity.conf3.listener.options.smtp_extensions"></a> SMTP_Extensions</dt>

<dd>

Use this array to include desired SMTP extensions. SMTP extension are discussed in [the section called “SMTP Extensions”](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.extensions).

</dd>

<dt><a name="ecelerity.conf3.listener.options.conf.ref.tls_certificate"></a> TLS_Certificate</dt>

<dd>

Specifies the path to the certificate file. See also [tls_certificate](/momentum/3/3-reference/conf-ref-tls-certificate).

</dd>

<dt><a name="ecelerity.conf3.listener.options.tls_key"></a> TLS_Key</dt>

<dd>

Specifies the path to the key that matches the certificate file.

</dd>

<dt><a name="ecelerity.conf3.listener.options.tls_client_ca"></a> TLS_Client_CA</dt>

<dd>

Specifies the path to the cabundle that specifies the list of allowed certificate issuers to use when verifying a client that presents a certificate. See also [tls_client_ca](/momentum/3/3-reference/conf-ref-tls-client-ca).

</dd>

<dt><a name="ecelerity.conf3.listener.options.tls_ciphers"></a> TLS_Ciphers</dt>

<dd>

Specifies which ciphers to use. The list is a standard OpenSSL cipher list, as described in `ciphers` in the OpenSSL documentation. See also [tls_ciphers](/momentum/3/3-reference/conf-ref-tls-ciphers).

</dd>

<dt><a name="ecelerity.conf3.listener.options.tls_verify_mode"></a> TLS_Verify_Mode</dt>

<dd>

Set the TLS verify mode string. The `TLS_Verify_Mode` option can be set to `require` or `none`. When set to `none`, if the SMTP client presents a certificate, it is ignored. When set to `require`, the SMTP client must present a certificate. When set to anything else, the client certificate will be verified if it is presented. By default no certificate is required. See also [tls_verify_mode](/momentum/3/3-reference/conf-ref-tls-verify-mode).

</dd>

<dt><a name="ecelerity.conf3.listener.options.accept_queue_backlog"></a> accept_queue_backlog</dt>

<dd>

The accept queue backlog. Its default value is `0`. This option is valid in the control and ESMTP listener and the listen scope but not in the Peer scope.

</dd>

<dt><a name="ecelerity.conf3.listener.options.listen_backlog"></a> listen_backlog</dt>

<dd>

The listen backlog. The default value for this option is `500`. This option is valid in the control and ESMTP Listener and the Listen scope but not in the Peer scope. In version 2.2 this option did not exist but you could specify the listen backlog as a number immediately following the listener IP/port combination.

</dd>

<dt><a name="ecelerity.conf3.listener.options.events_per_iter"></a> events_per_iter</dt>

<dd>

events_per_iter may be used when using a concurrency greater than 1 (a threaded accept). When running in this mode, `accept()` is called on a secondary thread (specified by the Pool_Name) and the accepted connection put on a queue to be dispatched from the main thread. events_per_iter limits the number of these items that can be dispatched in a single scheduler iteration. If unspecified, or less than 1, then events_per_iter will be treated as though it was set to 1.The default value for this option is `0`. This option is not applicable to the Peer scope.

</dd>

<dt><a name="ecelerity.conf3.listener.options.use_ssl"></a> use_ssl</dt>

<dd>

Whether or not to use SSL. The default value for this option is `false`. This option is not valid in the control listener scope.

</dd>

<dt><a name="ecelerity.conf3.listener.options.tcp_send_buffer_size"></a> tcp_send_buffer_size</dt>

<dd>

This option sets the TCP send buffer size. Its default value is `4096`. This option is valid in the control and ESMTP listener and the listen scopes but not in the Peer scope.

**Configuration Change. ** As of version 3.6, when this option is set to `0`, the operating system automatically manages the buffer size. Also as of version 3.6, the default value for this option within the HTTP_Listener scope is 32768.

</dd>

<dt><a name="ecelerity.conf3.listener.options.tcp_recv_buffer_size"></a> tcp_recv_buffer_size</dt>

<dd>

This option sets the TCP receive buffer size. Its default value is `4096`. This option is valid in the control and ESMTP listener and the listen scopes but not in the Peer scope.

**Configuration Change. ** As of version 3.6, when this option is set to `0`, the operating system automatically manages the buffer size. Also as of version 3.6, the default value for this option within the HTTP_Listener scope is 32768.

</dd>

</dl>

If client certificate verification fails, the SMTP session does not terminate. The TLS status is stored in pre-defined context validation variables so it is possible to drive TLS policy from policy scripts. You can use this to reject messages when client verification failed. For more information regarding the TLS-related context variables see [*Validation Context Variables*](/momentum/3/3-reference/3-reference-policy-context-variables) .

A complete list of the options that can be used within the listener scopes follows:

<a name="table-listener-options"></a> 


| Option/Description | Default | Scopes |
| --- | --- | --- |
| **[accept_queue_backlog](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.accept_queue_backlog)** – The accept queue backlog | 0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| **[allow_ip_literal](/momentum/3/3-reference/3-reference-conf-ref-allow-ip-literal)** – Allow IP addresses in email addresses | true | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[allow_null_envelope_sender](/momentum/3/3-reference/3-reference-conf-ref-allow-null-envelope-sender)** – Allow the null envelope sender in email addresses | true | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[allow_trailing_whitespace_in_commands](/momentum/3/3-reference/3-reference-conf-ref-allow-trailing-whitespace-in-commands)** – Allow trailing white space at the end of an SMTP command | false | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[always_allow](/momentum/3/3-reference/conf-aaa#conf.control_authen.overriding)** – When set to true, authentication is considered to have succeeded, unless always_deny is set | false | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[always_deny](/momentum/3/3-reference/conf-aaa#conf.control_authen.overriding)** – If set to true, authentication is considered to have failed | false | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[authcrammd5parameters](/momentum/3/3-reference/conf-aaa#conf.inbound-auth.cram-md5)** – Configure CRAM-MD5 authentication |   | control_listener, esmtp_listener, listen, pathway, pathway_group |
| **[authdigestmd5parameters](/momentum/3/3-reference/conf-aaa#conf.inbound-authdigest-md5)** – Configure DIGEST-MD5 authentication |   | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[authloginparameters](/momentum/3/3-reference/conf-aaa#conf.control_authen.clear.text)** – Configure clear text login authentication |   | control_listener, esmtp_listener, listen, pathway, pathway_group |
| **[authorizationparameters](/momentum/3/3-reference/conf-aaa#conf.control_authz.ecauth)** – AuthorizationParameters dictionary points to authorization information |   | control_listener, esmtp_listener, listen |
| **[authplainparameters](/momentum/3/3-reference/conf-aaa#conf.inbound-auth.plain.text)** – Configure plain text login authentication |   | esmtp_listener, http_listener, listen, pathway, pathway_group, xmpp_listener |
| **[banner_hostname](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.banner_hostname)** – Specifies the banner hostname that will be displayed to the remote client upon connecting |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[concurrency](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3)** – Define number of available threads | 0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, threadpool, xmpp_listener |
| **[context](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.context)** – Use to set arbitrary connection context key value pairs |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[disable_chunked](/momentum/mobile/mobile-reference/mobility-mm-7-listener)** – An option used with aggregators who do not support chunked transfer-coding (Mobile Momentum) | false | http_listener, listen, pathway, pathway_group, peer |
| **[disable_nagle_algorithm](/momentum/3/3-reference/3-reference-conf-ref-disable-nagle-algorithm)** – Disable nagle algorithm on sockets | false | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, global, http_listener, listen, xmpp_listener |
| **[domain_for_unqualified_recipient_addresses](/momentum/3/3-reference/3-reference-conf-ref-domain-for-unqualified-recipient-addresses)** – Configure a domain which will be used to resolve delivery for unqualified addresses |   | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[domain_for_unqualified_sender_address](/momentum/3/3-reference/3-reference-conf-ref-domain-for-unqualified-sender-address)** – Configure a domain which will be used to substitute for unqualified sender addresses |   | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[ecstream_idle_time](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener)** – The number of seconds of inactivity before a client is disconnected (ECStream only) | 300 | ecstream_listener, listen, pathway, pathway_group, peer |
| **[ecstream_max_batch_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener)** – The maximum number of ECStream messages to accept before dropping back into the scheduler (ECStream only) | 10000 | ecstream_listener, listen, pathway, pathway_group, peer |
| **[enable](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3)** – Enable or disable a listener scope | true | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| **[enable_authentication](/momentum/3/3-reference/conf-ecelerity-conf#conf.inbound-mail)** – Whether or not to enable authentication |   | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[event_loop](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listeners.multi-core)** – Associate a listener with an eventloop |   | ecstream_listener, esmtp_listener, listen |
| **[events_per_iter](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.events_per_iter)** – Employ when using a Concurrency greater than 1 | 0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[file_mode](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.control_listener)** – File access rights in octal notation | 0660 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| **[idle_time](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.idle_time)** – The number of seconds of inactivity before a client is disconnected | 0 | esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[listen](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.attributes)** – Specify the socket that a listener listens on |   | control_listener, ecstream_listener, esmtp_listener, http_listener, msgcserver_listener, xmpp_listener |
| **[listen_backlog](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.listen_backlog)** – The listen backlog | 500 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[listener_sessions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.listener_sessions)** – Specifies the maximum number of concurrent sessions that can be established to a listener | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[log_requests_to_paniclog](/momentum/3/3-rest/rest-http-listener)** – Whether to log REST injection requests | false | http_listener, listen, pathway, pathway_group, peer |
| **[max_message_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_message_size)** – The maximum number of bytes allowed in a single message | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[max_receptions_per_connection](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_receptions_per_connection)** – The maximum number of messages allowed in a single session | 0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[max_recipients_per_connection](/momentum/3/3-reference/conf-ref-max-recipients-per-connection)** – The maximum number of recipients to send on a connection | 0 | binding, binding_group, domain, esmtp_listener, global, listen, peer |
| **[max_recipients_per_message](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_recipients_per_message)** – The maximum number of recipients allowed in a message | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[max_request_size](/momentum/3/3-rest/rest-http-listener)** – Limit the size of an HTTP request |   | http_listener, listen, pathway, pathway_group, peer |
| **[mcmt_reception](/momentum/mobile/mobile-reference/mm-7-mcmt-reception)** – Configure a listener to accept the Multi-Channel Message Type (Mobile Momentum) | passthru | esmtp_listener, listen, pathway, pathway_group, peer |
| **[open_relay](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.open_relay)** – Whether the MTA is an open relay or not | false | esmtp_listener, listen, pathway, pathway_group, peer |
| **[pathway](/momentum/3/3-reference/3-reference-conf-ref-pathway)** – A means for associating a Listener with a pathway scope |   | ecstream_listener, esmtp_listener, listen, peer |
| **[peer](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.config.acls)** – Create an ACL within a specific listener |   | control_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[pool_name](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3)** – Associate a threadpool with a listener |   | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[received_hostname](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.received_hostname)** – The hostname that is placed in the received headers |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[reconfig_message](/momentum/3/3-reference/ecelerity-conf#reconfig_message)** – The message if the configuration has changed | 4.3.2 Reconfiguration in progress | esmtp_listener |
| **[relay_for_sending_domains](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.relay_for_sending_domains)** – Domains that may use the MTA as a relay |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[relay_hosts](/momentum/3/3-reference/3-reference-conf-ref-relay-hosts)** – Configure the list of hosts for which Momentum relays mail |   | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[require_ehlo](/momentum/3/3-reference/3-reference-conf-ref-require-ehlo)** – Reject mail from clients that do not say HELO | false | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[service_sessions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.service_sessions)** – The maximum number of concurrent sessions that can be established to all listeners | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[smtp_extensions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.extensions)** – Array of SMTP extensions |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[starttls_injection_policy](/momentum/3/3-reference/conf-ref-starttls-injection-policy)** – Protect against SMTP injections prior to TLS | reject | esmtp_listener, listen, pathway, pathway_group, peer |
| **[static_banner](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.static_banner)** – The banner that is displayed to the remote client |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[tcp_recv_buffer_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.tcp_recv_buffer_size)** – The size of the TCP receive buffer size | 4096 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[tcp_send_buffer_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.tcp_send_buffer_size)** – The size of the TCP send buffer | 4096 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[tls_allow_renegotiation](/momentum/3/3-reference/conf-ref-tls-allow-renegotiation)** – Whether to enable OpenSSL TLS renegotiation | true | ecstream_listener, esmtp_listener, http_listener, listen, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_certificate](/momentum/3/3-reference/conf-ref-tls-certificate)** – Certificate to use for inbound and outbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_ciphers](/momentum/3/3-reference/conf-ref-tls-ciphers)** – Allowable ciphers for a TLS session |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_client_ca](/momentum/3/3-reference/conf-ref-tls-client-ca)** – Certificate authority for inbound mail |   | ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_key](/momentum/3/3-reference/conf-ref-tls-key)** – the TLS key to use for outbound mail or inbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_protocols](/momentum/3/3-reference/conf-ref-tls-protocols)** – Allowable ciphers for TLS inbound and outbound sessions |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer |
| **[tls_verified_peer_can_relay](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options)** – Verification that peer can relay | false | ecstream_listener, esmtp_listener, listen, pathway, pathway_group, peer |
| **[tls_verified_peer_is_authorized](/momentum/3/3-rest/rest-http-listener)** – Mark requests that use a verified SSL Client certificate as being authorized | false | http_listener, listen, pathway, peer |
| **[tls_verify_mode](/momentum/3/3-reference/conf-ref-tls-verify-mode)** – Determine whether a TLS certificates is required |   | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[use_ssl](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.use_ssl)** – Whether to use SSL verification | false | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |

<a name="ecelerity.conf3.extensions"></a> 
## SMTP Extensions

<a name="idp7211920"></a> 
### XCLIENT Extension for SMTP

Implements the receiving side of an XCLIENT capable interaction. XCLIENT allows trusted senders to alter the connecting IP address and other connection-level identifiers to appear to be someone they are not. This is used for internally trusted re-mailing. More information on XCLIENT can be found at [http://www.postfix.org/XCLIENT_README.html](http://www.postfix.org/XCLIENT_README.html) .

Advertise support for the Enhanced-Status-Codes extension as defined in RFC 2034\. `ENHANCEDSTATUSCODE` is the EHLO keyword value associated with this extension. This capability makes reporting of success and errors more precise.

<a name="idp7215680"></a> 
### XDUMPCONTEXT Extension for SMTP

Enables the dumping of connection and message contexts during an SMTP conversation via an XDUMPCONTEXT command. This is mainly useful for debugging.

```
% telnet 10.80.116.84 25
Trying 10.80.116.84...
Connected to ecbuild-14.int.omniti.net (10.80.116.84).
Escape character is '^]'.
220 ecbuild-14 ESMTP ecelerity HEAD r(9610M) Wed, 08 Mar 2006 16:21:51 -0500
ehlo there
250-ecbuild-14 says EHLO to 10.80.116.73
250-PIPELINING
250-XDUMPCONTEXT
250-8BITMIME
250-AUTH=LOGIN
250-AUTH LOGIN
250 STARTTLS
XDUMPCONTEXT
250-[connection] ehlo_domain there
250-[connection] ehlo_string ehlo there
250 XDUMPCONTEXT complete
```
<a name="idp7218320"></a> 
### XREMOTEIP Extension for SMTP

This extension enables a connecting client to change the perceived IP address from which it connected. This is useful when the Momentum instance is deployed behind a trusted SMTP gateway. If enabled, then the remote client may, at anytime, present **XREMOTEIP *`IP_address`***                and Momentum will alter all identifying information to appear as if the client originally connected from the provided IP address.

<a name="idp7221088"></a> 
### XSETCONTEXT Extension for SMTP

XSETCONTEXT lets a client set name/value pairs in the connection level validation context. The extension takes a series of RFC1891 encoded parameters; each name=value pair sets the connection level validation context key "name" to value "value", overriding whatever other value was previously set (if any).

Since the extension can set arbitrary items in the validation context, it should be considered a trusted extension and should not be enabled for public Internet facing listeners, because there is a risk that an attacker can manipulate their way through a policy script. This also holds true for XCLIENT.

Set a name/value pair in the folowing way:

`XSETCONTEXT option1=value1 option2=value2`<a name="idp7224704"></a> 
### ALWAYS-ALLOW Property

If present, the connection will succeed and will automatically be authenticated as the `anonymous` user.

<a name="ecelerity.conf3.esmtp.authentication"></a> 
## ESMTP_Listener and Authentication

<a name="ecelerity.conf3.cram-md5.authentication"></a> 
### CRAM-MD5 Authentication

Implements the CRAM-MD5 authentication mechanism specified in RFC 2195\. A "uri" parameter is required specifying which uri to use for authentication. As the CRAM-MD5 protocol does not make use of any secure precalculated values, the passwords stored in the file (if it is a `file://` uri) must be stored in clear text.

To advertise this auth mechanism over SMTP, the "extension = AUTH" and "extension_argument = CRAM-MD5" must be specified.

<a name="ecelerity.conf3.digest-md5.authentication"></a> 
### DIGEST-MD5 Authentication

Implements the DIGEST-MD5 authentication mechanism specified in RFC 2831\. A "uri" parameter is required specifying which uri to use for authentication. DIGEST-MD5 supports secure precomputed values, so the passwords may be stored "hashed" or in clear text. By default, passwords returned from the provided uri should be hashed. If the parameter "stored_cleartext" is set to "true", the passwords will be expected in clear text and the hash will be computed internally before matching.

DIGEST-MD5 authenticates users within a given realm. This realm can be specified by adding a "realm" parameter valued as needed. If left unspecified, the server hostname will be used.

To advertise this auth mechanism over SMTP, the "extension = AUTH" and "extension_argument = DIGEST-MD5" must be specified.

<a name="ecelerity.conf3.cleartext.authentication"></a> 
### Cleartext LOGIN Authentication

Implements the LOGIN authentication mechanism specified in RFC 2222\. A "uri" parameter is required specifying which uri to use for authentication. As the LOGIN protocol does not make use of any secure precalculated values, the passwords stored in the file (if it is a file:// uri) must be stored in clear text.

To advertise this auth mechanism over SMTP, the "extension = AUTH" and "extension_argument = LOGIN" must be specified.

### Warning

Note that the LOGIN mechanism both stores passwords in clear text locally and transmits the username and password credentials in clear text over the network. This authentication mechanism (as defined by standards) is in no way "secure." It should be avoided unless absolutely necessary; if you must use it, use it in conjunction with TLS.

<a name="ecelerity.conf3.config.types"></a> 
## Configuration Option Types

The various configuration options can be broken out into specific types. All the listener-related options are found in [Table 9.25, “listener options”](/momentum/3/3-reference/ecelerity-conf#table-listener-options) and module-specific options are documented in [*Modules Reference*](/momentum/3/3-reference/3-reference-modules) . The remaining types are:

*   **Bounce Processing Options**                    – For a listing of bounce-related options see [Table 9.3, “bounce options”](/momentum/3/3-reference/options-summary#bounce-options-table).

*   **Compliance/Conformance Options**         – E-mail is built on top of a large number of different standards documents. By default, Momentum is configured to conform to and support all of those standards. However, in some deployments, it is sometimes desirable to detour from those standards in the interests of performance and manageability.

    These options allow you to detour from the various standards-defined behavior. In some cases this is partially allowed by the standards, but in others, it is frowned upon. Make sure you understand the impact of such changes before deploying them. For a complete list of RFC-related options see [Table 9.13, “RFC options”](/momentum/3/3-reference/options-summary#rfc-options-table).

*   **Logging** – For a list of logging-related options see [Table 9.7, “logging options”](/momentum/3/3-reference/options-summary#logging-options-table).

*   **Miscellaneous** – A list of the remaining options is found at [Table 9.8, “misc options”](/momentum/3/3-reference/options-summary#misc-options-table).

*   **Module-related (in a global scope)**                     – There are *module-related* (as oppposed to *module-specific*) options visible in the global scope that affect specific modules. Find these options listed at [Table 9.9, “module options”](/momentum/3/3-reference/options-summary#module-options-table).

    Because there are so many adaptive options in the global scope, these options are listed separately at [“Adaptive Options”](/momentum/3/3-reference/options-summary#adaptive-options).

*   **Resource Budgeting Options**                   – Many options tune the resource consumption of Momentum, affecting memory consumption, disk I/O and concurrency. Find a listing of these options at [Table 9.12, “resource options”](/momentum/3/3-reference/options-summary#resource-options-table).

*   **Routing Options**         – For a listing of routing-related options see [Table 9.14, “routing options”](/momentum/3/3-reference/options-summary#routing-options-table).

*   **Security Options**         – For a listing of security-related options see [Table 9.15, “security options”](/momentum/3/3-reference/options-summary#security-options-table).

*   **SNMP Support**         – Momentum features a built-in SNMP agent that exposes real-time metrics for consumption by SNMP capable consumers or by third-party SNMP Managers. Momentum's SNMP agent supports and provides information for Mail Monitoring MIB (MTA-MIB) objects as specified in RFC 2789\. Additionally, the agent provides Momentum product information objects, several system level MIB objects and extends the MTA-MIB. Momentum product objects, and MTA-MIB extensions are defined in Message System's enterprise MIB.

    SNMP configuration is described in detail in [SNMP](/momentum/3/3-reference/3-reference-conf-ref-snmp). For a complete list of SNMP options see [Table 9.17, “SNMP options”](/momentum/3/3-reference/options-summary#snmp-options-table).

*   **Timeout Configuration Options**                       – For the options used to configure various different timeouts see [Table 9.18, “timeout options”](/momentum/3/3-reference/options-summary#timeout-options-table).

*   **TLS Options**         – For a listing of TLS-related options see [Table 9.19, “TLS options”](/momentum/3/3-reference/options-summary#tls-options-table).

*   **Traffic Shaping Options**                 – Many options affect the network traffic characteristics of Momentum, changing the rate at which inbound and outbound connections are accepted or initiated and the volume of traffic on those connections. Find a listing of these options at [Table 9.16, “shaping options”](/momentum/3/3-reference/options-summary#shaping-options-table).

*   **Virtual Hosting**         – For a listing of virtual hosting related options see [Table 9.20, “virtual options”](/momentum/3/3-reference/options-summary#virtual-options-table).