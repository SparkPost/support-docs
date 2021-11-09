---
lastUpdated: "03/26/2020"
title: "Configuring Momentum's System Console"
description: "Momentum's online administration management and analysis is through the Momentum System Console program ec console henceforth referred to as the console The Control Listener is Momentum's listener for incoming control connections made via this console It is configured in the ecelerity conf file for connection to the nodes and in..."
---


Momentum's online administration, management, and analysis is through the Momentum System Console program `ec_console`, henceforth referred to as the console. The Control_Listener is Momentum's listener for incoming control connections made via this console. It is configured in the `ecelerity.conf` file for connection to the nodes and in the `eccluster.conf` file for connection to `eccmgr`.

## <a name="control_listener.config"></a> Control_Listener Configuration

The Control_Listener specifies the end-point(s) on which Momentum's `ec_console` should listen for incoming control connections. The `ec_console` can connect to a Momentum instance via a Unix domain socket or a TCP/IP socket (with an optional user@ prefix) depending upon how the Control_Listener is configured. For local-only configurations, a Unix domain socket may be appropriate. If your network is reasonably secure, you can specify an IPv6 address and port for TCP/IP services.

The following is an example configuration for a Unix domain socket:

```
Control_Listener {
  Listen "/tmp/2025" {
    file_mode = 0666
  }
}
```

In this example, the Unix domain socket is located in `tmp`, and the endpoint for the control listener is `/tmp/2025`. The `file_mode` option is set to `0666`. With the socket file permission set to 0666, every user who can log in to the system can use `ec_console` to connect to the server.

In addition, the Control_Listener supports a `Timeout` option that specifies a timeout for idle control connections. Default value is `60` seconds.

For details about the non-module specific configuration options that are valid in the Control_Listener and its nested scopes, refer to [*Configuration Options Summary*](/momentum/4/config-options-summary) .

Modules and their configuration options are discussed in the [*Modules Reference*](/momentum/4/modules/) .

For general information regarding listeners, see [“Listeners”](/momentum/4/listeners).

The Control_Listener supports a number of extended properties including `ALWAYS-ALLOW`, `LOGIN` and `DIGEST-MD5`. For more information, see [“Control_Listener Authentication”](/momentum/4/control-auth).