---
lastUpdated: "03/26/2020"
title: "The smpp_bounce_logger Module"
description: "It is often convenient to look at bounced SMPP messages only The smpp bounce logger makes this much easier by writing bounces both in band and out of band bounce messages to a single file in delimited format The writing of smpp bounce logger format logs is configured in your..."
---

It is often convenient to look at bounced SMPP messages only. The smpp_bounce_logger makes this much easier by writing bounces—both in-band and out-of-band bounce messages—to a single file in ‘`@`’ delimited format.

The writing of smpp_bounce_logger format logs is configured in your `ecelerity.conf` file. To load the smpp_bounce_logger module, add the following lines to the main body of your `ecelerity.conf` file or add the smpp_bounce_logger module using the web console:

```
smpp_bounce_logger "smpp_bounce_logger1" {
  bounce_concurrency = 1
  bounce_logfile = "/var/log/ecelerity/smppbouncelog.ec"
}
```

A complete list of the available configuration options follows:

<dl class="variablelist">

<dt>bounce_concurrency</dt>

<dd>

This option defines the number of threads in the pool. The default value for this option is `1`.

</dd>

<dt>bounce_logfile</dt>

<dd>

This option determines the name of the log file. The default value for this option is `/var/log/ecelerity/smppbouncelog.ec`.

</dd>

<dt>bounce_logmode</dt>

<dd>

The mode of the log file in octal notation. The default value for this option is `0644`.

</dd>

<dt>bounce_namespace</dt>

<dd>

This option specifies which macro namespaces should be searched, when expanding the format strings. This variable is set using commas to separate different namespaces. The default value for this option is `smpp_bounce_logger,sieve,custom_logger`.

</dd>

<dt>bounce_thread_pool</dt>

<dd>

Define a separate thread pool for bounces. Otherwise the `io` pool is used. For more information about defining thread pools see [threadpool](/momentum/3/3-reference/3-reference-conf-ref-threadpool).

</dd>

<dt>heartbeat</dt>

<dd>

The interval at which "heartbeat" entries will be written to the log. The default value for this option is `60`.

</dd>

<dt>log_bounce_heartbeat_format</dt>

<dd>

This option determines the format of the heartbeat log. The default value for this option is `%t@M` where the macro `%t` indicates a Unix timestamp and `M` is a literal indicating that this log entry is a heartbeat.

</dd>

<dt>log_bounce_inband</dt>

<dd>

Whether or not to log inband bounces. The default value for this option is `true`.

</dd>

<dt>log_bounce_inband_format</dt>

<dd>

This option defines the format of the inband bounces log. The default value for this option is `%t@I@%i@%sa@%da@%d@%g@%b@%H@%e`. How these macros are expanded is described in [Table 2.1, “Log format macros”](/momentum/mobile/mobile-reference/mobility-configuration-smpp#mobility.log.macros). In this case `I` is a literal indicating that this is an inband log entry.

</dd>

<dt>log_bounce_outband</dt>

<dd>

Whether or not to log out-of-band bounces. The default value for this option is `true`.

</dd>

<dt>log_bounce_outband_format</dt>

<dd>

This option defines the format of the out-of-band bounces log. The default value for this option is `%t@O@%i@%sa@%da@%d@%g@%b@%H@%e`. How these macros are expanded is described in [Table 2.1, “Log format macros”](/momentum/mobile/mobile-reference/mobility-configuration-smpp#mobility.log.macros). In this case `O` is a literal indicating that this is an out-of-band log entry.

</dd>

<dt>log_bounce_transient</dt>

<dd>

Whether or not to log transient bounces. The default value for this option is `true`.

</dd>

<dt>log_bounce_transient_format</dt>

<dd>

This option defines the format of transient bounces log. The default value for this option is `%t@T@%i@%sa@%da@%d@%g@%b@%H@%e`. How these macros are expanded is described in [Table 2.1, “Log format macros”](/momentum/mobile/mobile-reference/mobility-configuration-smpp#mobility.log.macros). In this case `T` is a literal indicating that this is a transient failure log entry.

</dd>

</dl>