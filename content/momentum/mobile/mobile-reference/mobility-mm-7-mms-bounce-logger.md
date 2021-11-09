---
lastUpdated: "03/26/2020"
title: "The mms_bounce_logger Module"
description: "It is often desirable to look at bounced MM 7 messages only The mms bounce logger makes this easier by writing bounces both in band and out of band bounce messages to a single file in delimited format The writing of mms bounce logger format logs is configured in your..."
---

It is often desirable to look at bounced MM7 messages only. The mms_bounce_logger makes this easier by writing bounces—both in-band and out-of-band bounce messages—to a single file in ‘`@`’ delimited format.

The writing of mms_bounce_logger format logs is configured in your `ecelerity.conf` file. To load the mms_bounce_logger module, add the following lines to the main body of your `ecelerity.conf` file or add the mms_bounce_logger module using the web console:

<a name="mobility.mm7.mms_bounce_logger.configuration"></a> 


```
mm7 {}
mms_bounce_logger "mms_bounce_logger1" {
  bounce_logmode = 0644
  bounce_logfile = "/var/log/eclerity/mmsbouncelog.ec"
  heartbeat = 60
}
```

### Note

In order to load the mms_logger module, you must first load the mm7 module as indicated above. The mm7 module has no options apart from `debug_level` and `enabled`.

The configuration shown in [“mms_bounce_logger module configuration”](/momentum/mobile/mobile-reference/mobility-mm-7-mms-bounce-logger#mobility.mm7.mms_bounce_logger.configuration) instructs Momentum to write a bouncelog file containing MM7 bounce records to `/var/log/eclerity/mmsbouncelog.ec` with the file permissions `0644`. The heartbeat option sets the interval at which "heartbeat" entries are written to the log. `60` is the default value. The heartbeat entries in the log are essential for proper operation of the real time stats pieces, and changing the default value of heartbeat is not recommended unless you are advised to do so by Message Systems support.

A complete list of the available configuration options follows:

<dl class="variablelist">

<dt>bounce_concurrency</dt>

<dd>

This option defines the number of threads in the pool. The default value for this option is `1`.

</dd>

<dt>bounce_logfile</dt>

<dd>

This option determines the name of the log file. The default value for this option is `/var/log/eclerity/mmsbouncelog.ec`.

</dd>

<dt>bounce_logmode</dt>

<dd>

The mode of the log file in octal notation. The default value for this option is `0644`.

</dd>

<dt>bounce_namespace</dt>

<dd>

This option specifies which macro namespaces should be searched, when expanding the format strings. This variable is set using commas to separate different namespaces. The default value for this option is `mms_bounce_logger,sieve,custom_logger`.

</dd>

<dt>bounce_thread_pool</dt>

<dd>

Define a separate thread pool for bounces. Otherwise the `io` pool is used. For more information about defining thread pools see [threadpool](/momentum/3/3-reference/3-reference-conf-ref-threadpool).

</dd>

<dt>heartbeat</dt>

<dd>

The interval at which the "heartbeat" entries will be written to the log. The default value for this option is `60`.

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

This option defines the format of the inband bounces log. The default value for this option is `%t@I@%i@%sa@%da@%d@%g@%b@%H@%e`. How these macros are expanded is described in [“mms_logger Macros”](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger#mobility.mm7.mms_logger.macros). In this case `I` is a literal indicating that this is an inband log entry.

</dd>

<dt>log_bounce_outband</dt>

<dd>

Whether or not to log out-of-band bounces. The default value for this option is `true`.

</dd>

<dt>log_bounce_outband_format</dt>

<dd>

This option defines the format of the out-of-band bounces log. The default value for this option is `%t@O@%i@%sa@%da@%d@%g@%b@%H@%e`. How these macros are expanded is described in [“mms_logger Macros”](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger#mobility.mm7.mms_logger.macros). In this case `O` is a literal indicating that this is an out-of-band log entry.

</dd>

<dt>log_bounce_transient</dt>

<dd>

Whether or not to log transient bounces. The default value for this option is `true`.

</dd>

<dt>log_bounce_transient_format</dt>

<dd>

This option defines the format of transient bounces log. The default value for this option is `%t@T@%i@%sa@%da@%d@%g@%b@%H@%e`. How these macros are expanded is described in [“mms_logger Macros”](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger#mobility.mm7.mms_logger.macros). In this case `T` is a literal indicating that this is a transient failure log entry.

</dd>

</dl>