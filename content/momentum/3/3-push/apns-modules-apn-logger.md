---
lastUpdated: "03/26/2020"
title: "The apn_logger Module"
description: "The apn logger logs Apple push notifications to file writing to a single file in delimited format Configuration Change This feature is available as of version 3 5 4 Like other loggers the apn logger is configured in the ecelerity conf file To load this module add the following lines..."
---

The apn_logger logs Apple push notifications to file, writing to a single file in ‘`@`’ delimited format.

**Configuration Change. ** This feature is available as of version 3.5.4.

Like other loggers, the apn_logger is configured in the `ecelerity.conf` file. To load this module add the following lines to the main body of the `ecelerity.conf` file:

<a name="apns.modules.apn_logger.configuration"></a> 


```
apn {}
apn_logger "apn_logger1" {
  logmode = 0644
  logfile = "/var/log/ecelerity/apnlog.ec"
  heartbeat = 60
}
```

You can configure multiple instances of this logger. For instance, you may also wish to create "real time" jlogs. For more information see the [jlog Module](/momentum/3/3-reference/3-reference-modules-jlog) and [Logging](/momentum/3/3-reference/operations-logging).

### Note

In order to load the apn_logger module, you must first load the apn module as shown in [“apn_logger module configuration”](/momentum/3/3-push/apns-modules-apn-logger#apns.modules.apn_logger.configuration). The apn module has no options apart from `debug_level` and `enabled`.

If you wish to export logged data to an external system create jlog files and follow the instructions given at [Using JLog::Reader](/momentum/3/3-reference/3-reference-modules-jlog#modules.jlog.reader).

The configuration shown in [“apn_logger module configuration”](/momentum/3/3-push/apns-modules-apn-logger#apns.modules.apn_logger.configuration) instructs Momentum to write a file containing records of Apple push notifications to `/var/log/eclerity/apnlog.ec` with the file permissions `0644`. The heartbeat option sets the interval at which "heartbeat" entries will write to the log. `60` is the default value. The heartbeat entries in the log are essential for proper operation of the real time statistics and changing the default value of heartbeat is not recommended unless you are advised to do so by Message Systems support.

A complete list of the configuration options follows:

<dl class="variablelist">

<dt>concurrency</dt>

<dd>

This option defines the number of threads used by the apn_logger. The default value for this option is `1`.

</dd>

<dt>heartbeat</dt>

<dd>

The interval at which "heartbeat" entries will be written to the log. The default value for this option is `60`.

</dd>

<dt>log_delivery</dt>

<dd>

Whether or not to log deliveries. The default value for this option is `true`.

</dd>

<dt>log_delivery_format</dt>

<dd>

This option determines the format of the delivery log. The default value for this option is `"%t@D@%i@\"%sa\"@\"%da\"@%d@%g@%b@%H@%B@%ti"`. How these macros are expanded is described in [“apn_logger Macros”](/momentum/3/3-push/apns-modules-apn-logger#apns.modules.apn_logger.macros). The second field value, `D`, is a literal indicating that this is a delivery log entry.

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

This option determines the format of the permanent failure log. The default value for this option is `%t@P@%i@%sa@%da@%d@%g@%b@%H@%S@%e`. How these macros are expanded is described in [“apn_logger Macros”](/momentum/3/3-push/apns-modules-apn-logger#apns.modules.apn_logger.macros). The second field value, `P`, is a literal indicating that this is a permanent failure log entry.

</dd>

<dt>log_tempfail</dt>

<dd>

Whether or not to log temporary failures. The default value for this option is `true`.

</dd>

<dt>log_tempfail_format</dt>

<dd>

This option determines the format of the temporary failure log. The default value for this option is `"%t@T@%i@\"%sa\"@\"%da\"@%d@%g@%b@%H@%B@%ti@%S@%e"`. How these macros are expanded is described in [“apn_logger Macros”](/momentum/3/3-push/apns-modules-apn-logger#apns.modules.apn_logger.macros). The second field value, `T`, is a literal indicating that this is a temporary failure log entry.

</dd>

<dt>logfile</dt>

<dd>

This option determines the name of the log file. The default value for this option is `var/log/ecelerity/apnlog.ec`.

</dd>

<dt>logmode</dt>

<dd>

The mode of the log file in octal notation. The default value for this option is `0644`.

</dd>

<dt>namespace</dt>

<dd>

This option specifies which macro namespaces should be searched, when expanding the format strings. This variable is set using commas to separate different namespaces. The default value for this option is `apn_logger,sieve,custom_logger`.

</dd>

<dt>thread_pool</dt>

<dd>

Associate a thread pool with the logger. There is no default value for this option. To create a thread pool, see [threadpool](/momentum/3/3-reference/3-reference-conf-ref-threadpool).

</dd>

</dl>

### <a name="apns.modules.apn_logger.macros"></a> apn_logger Macros

The macros are expanded as indicated in the following

*   `%B` – The size of the outbound message in bytes including the headers and payload. Taken from the value of the context variable "DLV_Msg_Length".

*   `%b` – The outbound binding name.

*   `%d` – The outbound domain name.

*   `%da` – The destination address. Taken from the value of the context variable "DLV_Dest_Addr" or the rcptto local part from the email envelop.

*   `%dt` – The device token. Taken from the value of the context variable "DLV_Dest_ID".

*   `%e` – The Apple server error description. Taken from the value of the context variable "DLV_Response_Status_Detail".

*   `%g` – The outbound binding group name.

*   `%H` – The IP address of the remote server. Taken from the value of the context variable, "DLV_Remote_IP_Address".

*   `%i` – The message ID.

*   `%S` – The Apple server error status code. Taken from the value of the context variable "DLV_Response_Status".

*   `%sa` – The source address of the sender. Taken from the value of the context variable "DLV_Source_Addr" or the mailfrom (including both local part and domain part) from the email envelop.

*   `%t` – The Unix timestamp.

*   `%ti` – The message identifier sent to the Apple server. Taken from the value of the context variable "DLV_Transaction_ID".