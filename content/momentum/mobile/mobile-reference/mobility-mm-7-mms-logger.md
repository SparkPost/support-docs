---
lastUpdated: "03/26/2020"
title: "The mms_logger Module"
description: "It is often desirable to look at MM 7 messages only The mms logger makes this easier by writing to a single file in delimited format The writing of mms logger format logs is configured in your ecelerity conf file To load the mms logger module add the following lines..."
---

It is often desirable to look at MM7 messages only. The mms_logger makes this easier by writing to a single file in ‘`@`’ delimited format.

The writing of mms_logger format logs is configured in your `ecelerity.conf` file. To load the mms_logger module, add the following lines to the main body of your `ecelerity.conf` file or add the mms_logger module using the web console:

<a name="mobility.mm7.mms_logger.configuration"></a> 


```
mm7 {}
mms_logger "mms_logger1" {
  logmode = 0644
  logfile = "var/log/ecelerity/mm7log.ec"
  heartbeat = 60
}
```

### Note

In order to load the mms_logger module, you must first load the mm7 module as indicated above. The mm7 module has no options apart from `debug_level` and `enabled`.

The configuration shown in [“mms_logger module configuration”](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger#mobility.mm7.mms_logger.configuration) instructs Momentum to write a file containing MM7 records to `/var/log/eclerity/mmslog.ec` with the file permissions `0644`. The heartbeat option sets the interval at which "heartbeat" entries will write to the log. `60` is the default value. The heartbeat entries in the log are essential for proper operation of the real time stats pieces, and changing the default value of heartbeat is not recommended unless you are advised to do so by Message Systems support.

A complete list of the available configuration options follows:

<dl class="variablelist">

<dt>concurrency</dt>

<dd>

This option defines the number of threads used by the mms_logger. The default value for this option is `1`.

</dd>

<dt>heartbeat</dt>

<dd>

The interval at which "heartbeat" entries will be written to the log. The default value for this option is `60`.

</dd>

<dt>log_conversion</dt>

<dd>

Whether or not to log message conversions. The default value for this option is `true`.

</dd>

<dt>log_conversion_format</dt>

<dd>

This option defines the format of the log for message conversions. The default value for this option is `%t@X@%i@%sa@%da@%d@%g@%b@%H@%e`. How these macros are expanded is described in [“mms_logger Macros”](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger#mobility.mm7.mms_logger.macros). Fields that are not preceded by a ‘`%`’ are literals. In this case `X` indicates that this is a conversion log entry.

</dd>

<dt>log_delivery</dt>

<dd>

Whether or not to log deliveries. The default value for this option is `true`.

</dd>

<dt>log_delivery_format</dt>

<dd>

This option determines the format of the delivery log. The default value for this option is `%t@D@%i@%sa@%da@%d@%g@%b@%H@%B@\"%rm\"@\"%ti\"`. How these macros are expanded is described in [“mms_logger Macros”](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger#mobility.mm7.mms_logger.macros). In this case `D` is a literal indicating that this is a delivery log entry.

</dd>

<dt>log_heartbeat_format</dt>

<dd>

This option determines the format of the heartbeat log. The default value for this option is `%t@M` where the macro `%t` expands to a Unix timestamp and `M` is a literal indicating that this entry is a heartbeat.

</dd>

<dt>log_permfail</dt>

<dd>

Whether or not to log permanent failures. The default value for this option is `true`

</dd>

<dt>log_permfail_format</dt>

<dd>

This option determines the format of the permanent failure log. The default value for this option is `%t@P@%i@%sa@%da@%d@%g@%b@%H@%S@%e`. How these macros are expanded is described in [“mms_logger Macros”](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger#mobility.mm7.mms_logger.macros). In this case `P` is a literal indicating that this is a permanent failure log entry.

</dd>

<dt>log_reception</dt>

<dd>

Whether or not to log receptions. The default value for this option is `true`.

</dd>

<dt>log_reception_format</dt>

<dd>

This option determines the format of the reception log. The default value for this option is `%t@R@%i@%sa@%da@%d@%P@%PG@%H@%B@%S@%e@\"%ti\"`. How these macros are expanded is described in [“mms_logger Macros”](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger#mobility.mm7.mms_logger.macros). In this case `R` is a literal indicating that this is a reception log entry.

</dd>

<dt>log_status</dt>

<dd>

Whether or not to log the status of a message. The default value for this option is `true`.

</dd>

<dt>log_status_format</dt>

<dd>

This option determines the format of the status log. The default value for this option is `%t@S@%sa@%da@%d@%g@%b@%H@\"%rm\"@%drl@%S@%e`. How these macros are expanded is described in [“mms_logger Macros”](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger#mobility.mm7.mms_logger.macros). In this case `S` is a literal indicating that this is a status log entry.

</dd>

<dt>log_tempfail</dt>

<dd>

Whether or not to log temporary failures. The default value for this option is `true`.

</dd>

<dt>log_tempfail_format</dt>

<dd>

This option determines the format of the temporary failure log. The default value for this option is `%t@T@%i@%sa@%da@%d@%g@%b@%H@%S@%e`. How these macros are expanded is described in [“mms_logger Macros”](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger#mobility.mm7.mms_logger.macros). In this case `T` is a literal indicating that this is a temporary failure log entry.

</dd>

<dt>logfile</dt>

<dd>

This option determines the name of the log file. The default value for this option is `var/log/ecelerity/mm7log.ec`.

</dd>

<dt>logmode</dt>

<dd>

The mode of the log file in octal notation. The default value for this option is `0644`.

</dd>

<dt>namespace</dt>

<dd>

This option specifies which macro namespaces should be searched, when expanding the format strings. This variable is set using commas to separate different namespaces. The default value for this option is `mms_logger,sieve,custom_logger`.

</dd>

<dt>thread_pool</dt>

<dd>

There is no default value for this option.

</dd>

</dl>

### <a name="mobility.mm7.mms_logger.macros"></a> mms_logger Macros

The macros are expanded as indicated in the following

*   `%t` – the Unix timestamp

*   `%i` – the message ID

*   `%I` – the original message ID

*   `%ti` – the transaction ID

*   `%rm` – the remote ID

*   `%d` – the domain name

*   `%g` – the binding group name

*   `%b` – the binding name

*   `%P` – the pathway name

*   `%PG` – the pathway group name

*   `%H` – the IP address

*   `%sa` – the source address

*   `%da` – the destination address

*   `%S` – the message status

*   `%e` – the message error

*   `%B` – the message size

*   `%drl` – the delivery report latency. For MM7 this is the interval between message submission and the delivery report and for SMPP the interval between submission and receipt.