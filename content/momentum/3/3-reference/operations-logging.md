---
lastUpdated: "03/26/2020"
title: "Logging"
description: "Momentum provides an extremely flexible and robust logging API and ships with five bundled implementations ec logger Exim format Postfix format Sendmail format and a freeform custom logger that lets you specify your own logging format For a list of configuration options related to logging see Table 9 7 logging..."
---

Momentum provides an extremely flexible and robust logging API, and ships with five bundled implementations: ec_logger, Exim format, Postfix format, Sendmail format, and a freeform custom_logger that lets you specify your own logging format.

For a list of configuration options related to logging see [Table 9.7, “logging options”](/momentum/3/3-reference/options-summary#logging-options-table).

### <a name="operations.logging.ec_logger"></a> ec_logger

ec_logger writes three main log files, `mainlog.ec`, `paniclog.ec`, and `rejectlog.ec`. The `mainlog.ec` format was designed to be a concise, machine-parseable and computationally inexpensive format for writing complete information about every message received and delivered by Momentum. Fixed position codes signify whether the log line represents a reception, delivery, transient failure or permanent failure. The ec_logger module is a self-contained entity that tracks the full disposition status of every message that goes through Momentum. Everything either ends up in the mainlog or rejectlog. Both of these logs together provide a full picture of all the mail transiting the system.

The `paniclog.ec` is a debugging log where system events are logged depending on the level of Debug_Flags set in your configuration. Under normal circumstances Debug_Flags should be empty or should be omitted from the `ecelerity.conf` file. For debugging purposes, set up Debug_Flags as described in [debug_flags](/momentum/3/3-reference/3-reference-conf-ref-debug-flags). When a problem event occurs, if it is within the logging level set by the `Debug_Flags` option, then the event is written to the paniclog. Excepting informational startup messages, the paniclog should be empty under normal circumstances. It is recommended that you periodically check your `paniclog.ec` (or schedule a cron job to do it for you) to look for any anomalous events.

The `rejectlog.ec` is a debugging log where records of inbound mails that are rejected by Momentum (either due to policy or protocol deviations) are stored. Momentum lists the full context for all rejected messages, as well as a summary of why the mail was rejected.

**<a name="operations.ec_logger.configuration"></a> 4.5.1.1. ec_logger Configuration**

The writing of ec_logger format logs is configured in your `ecelerity.conf` file. All logging capabilities in Momentum are implemented through the extension API. To load the ec_logger module, you add the following lines to the main body of your `ecelerity.conf` file. An ec_logger module is most easily added using the web UI. This process is described in [“Changing Module Configuration Options”](/momentum/3/3-reference/web-3-administration#web3.module_config).

<a name="example.operations.ec_logger.3"></a> 


```
ec_logger "ec_logger1"
{
   mainlog = "/var/log/ecelerity/mainlog.ec"
   paniclog = "/var/log/ecelerity/paniclog.ec"
   rejectlog = "/var/log/ecelerity/rejectlog.ec"
   acctlog = "/var/log/ecelerity/acctlog.ec"
   importlog = "/var/log/ecelerity/importlog.ec"
}
```

In the default configuration, the ec_logger module is enabled and logging is configured for the reject log, the panic log and the main log. Detailed configuration information is available in [“ec_logger – Momentum-Style Logging”](/momentum/3/3-reference/3-reference-modules-ec-logger).

ec_logger can also write an accounting log by configuring a path for the `acctlog` option. This log records authentication and authorization events. You should note that, by default, no log rotation is performed for the accounting log. For more information on this topic see [“Configuring Authentication for the Control Listener”](/momentum/3/3-reference/conf-aaa#conf.control_authen).

You can also record the outcome of a spool import operation (see [spool import](/momentum/3/3-reference/3-reference-console-commands-spool-import)) by configuring a path for the `importlog`. Again, by default, no log rotation is performed for the import log.

### Note

If you find that you have rejectlog entries with the reason "550 5.7.1 [internal] discarded by policy", and you are having difficulty in correlating those rejections with your policy rules, it could be because your bounce processing configuration is set to blackhole any detected bounces. If this is the case, you should expect to see a corresponding entry in your bounce log, except in the case where the internal bounce classifier has determined that the incoming message was classified as BC_SUBSCRIBE, a subscription request. The bounce logger does not log this type of incoming mail because it does not relate to a specific outgoing message originating from your site.

**<a name="operations.ec_logger.console"></a> 4.5.1.2. Using System Console Commands**

The ec_logger module is accessible through ec_console for run-time configuration.

The information types logged can be toggled as in the following example.

<a name="example.operations.ec_logger.options.3"></a> 


ecelerity> config set ec_logger *`ec_logger1`* log_transient_failures off

If the command is successful, then `Set` is output to the screen. Set other options in exactly the same way.

The **internal stats**       command shows internal metrics such as the pending journal size. If you move a log, issue the command **ec_logger:*`ec_logger1`* reopen logs** .

For more information see [“ec_logger Management Using Console Commands”](/momentum/3/3-reference/3-reference-modules-ec-logger#modules.ec_logger.console).

### <a name="idp2821408"></a> The `mainlog.ec` Format

The `mainlog.ec` file logs reception, delivery, transient failure, permanent failure and heartbeat events. The log entry format differs depending upon the event type. The different formats are described in [“The `mainlog.ec` Format”](/momentum/3/3-reference/log-formats-version-3#log_formats.mainlog3).

A permanent failure indicates that the message that was attempted failed in such a way that it should not be retried further. After logging a permanent failure the message will be discarded.

A transient failure is a failure which allows retrying the same message. The ec_logger module allows for optional logging of transient failures. Since they are not permanent failures and only indicate that a message will be attempted later due to temporary problems, many users opt to disable them to conserve log space. Note that if you have enabled the bounce_logger, transient failures will also be recorded there. The bounce_logger is a supplemental log that contains additional information and different formatting. For more information see [“bounce_logger – Momentum-Style Bounce Logging”](/momentum/3/3-reference/3-reference-modules-bounce-logger).

### <a name="idp2827536"></a> bounce_logger

bounce_logger writes a single logfile, `bouncelog.ec`, which records both inband (or protocol-time) and out-of-band bounces. The format was designed to be a concise, machine-parseable, computationally inexpensive and complete format for writing information about every bounce message.

For a description of the bounce_logger file format see [“The bounce_logger”](/momentum/3/3-reference/log-formats-version-3#log_formats.bouncelog3).

**<a name="idp2831072"></a> 4.5.3.1. bounce_logger Configuration**

The writing of bounce_logger format logs is determined by the `ecelerity.conf` file. To load the bounce_logger module, add the following lines to the main body of your `ecelerity.conf` file:

For a description of how the `bouncelog.ec` file is formatted see [“The bounce_logger”](/momentum/3/3-reference/log-formats-version-3#log_formats.bouncelog3).

<a name="example.operations.bounce_logger.3"></a> 


```
bounce_logger "bounce_logger1"
{
   bouncelog = "/var/log/ecelerity/bouncelog.ec"
   log_inband_bounces = true
   log_outofband_bounces = true
}
```

Detailed configuration information is available in [“bounce_logger – Momentum-Style Bounce Logging”](/momentum/3/3-reference/3-reference-modules-bounce-logger).

**<a name="idp2838992"></a> 4.5.3.2. bounce_logger Management**

The bounce_logger module allows for a limited set of online commands via ec_console.

If you move a log, the ec_console command 'reopen logs' will cause ec_logger to reopen all its logfiles.

For a complete list of the bounce_logger system console commands see [“bounce_logger – Momentum-Style Bounce Logging”](/momentum/3/3-reference/3-reference-modules-bounce-logger).

### <a name="idp2842368"></a> custom_logger Configuration

custom_logger is configured through the `ecelerity.conf` file with a stanza such as:

<a name="example.operations.custom_logger.3"></a> 


```
custom_logger "custom_logger1"
{
  delivery_format = "%t %r@%R"
  delivery_logfile = "/var/log/ecelerity/delivery_log"
}
```

Detailed configuration information is available in [“custom_logger – Customizable Logging”](/momentum/3/3-reference/3-reference-modules-custom-logger).

### <a name="operations.logging.web.ui"></a> Logging and the Web UI

In order to report statistics through the web UI you need to to add loggers that create jlog-formatted files that are consumed by **ec_rt_stats**. The jlog files are also know as "real time" logs.

Find below a table of the additional logger modules that you can create. If the logger is included in the default `ecelerity.conf` file, the `Included` column is checked.

<a name="operations.logging.web.ui.modules"></a> 


| Logger module | Instance name | Included | Remarks |
| --- | --- | --- | --- |
| [“ec_logger – Momentum-Style Logging”](/momentum/3/3-reference/3-reference-modules-ec-logger) | ec_logger_rt | ✓ | Log for every message |
| [“bounce_logger – Momentum-Style Bounce Logging”](/momentum/3/3-reference/3-reference-modules-bounce-logger) | bounce_logger_rt | ✓ | Log bounces only |
| [smpp_logger](/momentum/mobile/mobile-reference/momentum-mobility#modules.mobility.smpp_logger) | smpp_logger_rt |   | Log SMPP messages only |
| [mms_logger](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger) | mms_logger_rt |   | Log MMS messages only |

### Note

There is also a statp logger that logs in jlog format. This logger is included with the default `ecelerity.conf` so you need not worry about configuring it or loading it.

When defining log files for use by the web UI, use the same format described in [“ec_logger Module in `ecelerity-cluster.conf`”](/momentum/3/3-reference/cluster-config-logging#cluster.config.logging.ec_logger)—you must define the protocol and the subscriber. Sample real time logger definitions follow:

<a name="operations.logging.web.ui.examples"></a> 


```
ec_logger "ec_logger_rt" {
  mainlog = "jlog:///var/log/ecelerity/mainlog.rt=>ec_rt_stats"
  rejectlog = "jlog:///var/log/ecelerity/rejectlog.rt=>ec_rt_stats"
}
bounce_logger "bounce_logger_rt" {
  bouncelog = "jlog:///var/log/ecelerity/bouncelog.rt=>ec_rt_stats"
}
smpp_logger "smpp_logger_rt" {
  logfile = "jlog:///var/log/ecelerity/smpp.rt=>ec_rt_stats"
}
mms_logger "mms_logger_rt" {
  logfile = "jlog:///var/log/ecelerity/mm7.rt=>ec_rt_stats"
}
```

The smpp_logger "smpp_logger_rt" and the mms_logger "mms_logger_rt" module instances are only used with Mobile Momentum. If you do not have Mobile Momentum installed or do not wish to view statistics related to Mobile Momentum, you need not worry about creating "real time" loggers for SMMPP and MM7. However, the web UI will still display columns for summary statistics and queue sizes for MM7 and SMPP.

The jlogs created by loggers are processed by **ec_rt_stats2**. For more information see [ec_rt_stats2](/momentum/3/3-reference/executable-ec-rt-stats-2).

### <a name="idp2879232"></a> Rotating Logs

Momentum provides a utility script `ec_rotate` which will rotate and compress logs for you. The number of previous days logs to keep can be set. It is recommended that you run this script daily from your system's crontab.

Momentum opens its logfiles at startup and maintains an open filehandle to them throughout its life cycle. When you invoke ec_rotate, the `mainlog.ec` and `paniclog.ec` are moved to `mainlog.ec.1` and `paniclog.ec.1` and Momentum is instructed to re-open its logfiles. This creates new `mainlog.ec` and `paniclog.ec` files. Unix file I/O semantics guarantee that no log lines will be lost between the time the file is moved and the logs are re-opened; they will simply appear in the older of the logs. To avoid the overhead of checking the logfile on every attempt, Momentum relies on the user to tell it when the logfile needs to be re-opened.

To invoke ec_rotate you can simply execute **ec_rotate** as the root user. This will rotate the `mainlog.ec` and `paniclog.ec` files in the `/var/log/ecelerity` directory, compress them using bzip, and keep seven days of logs on disk. You can modify this behavior by passing the following options:

<dl class="variablelist">

<dt>`-r, -retention`</dt>

<dd>

Specify the maximum number of logs to keep on disk. Default is 7.

</dd>

<dt>`-c, -compress`</dt>

<dd>

Specify the compression utility to use for compressing logfiles. Default is /usr/bin/bzip2.

</dd>

<dt>`-l, -logfile`</dt>

<dd>

Specify the logfile(s) to be rotated. May be specified multiple times to handle multiple logs.

</dd>

</dl>

If your logfiles are in `/var/log/email/` and you only want to keep 3 days, you should use:

```
/opt/msys/ecelerity/bin/ec_rotate -l /var/log/email/mainlog.ec \
  -l /var/log/email/paniclog.ec -r 3
```

### <a name="idp2896112"></a> custom_logger

Using the custom_logger module, Momentum can write logs for every stage of a message's life cycle in user-defined formats. custom_logger lets you log each phase to its own logfile, or use a combined logfile for all stages. Logging stages can be enabled or disabled individually. For more information see [“custom_logger – Customizable Logging”](/momentum/3/3-reference/3-reference-modules-custom-logger).