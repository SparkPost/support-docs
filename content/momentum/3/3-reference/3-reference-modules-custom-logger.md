---
lastUpdated: "03/26/2020"
title: "custom_logger – Customizable Logging"
description: "The custom logger module provides completely configurable logging similar to Apache's mod log config module For more information on logging in general see Section 4 5 Logging If you wish you can set up multiple custom loggers Currently various custom logger options cannot be set from the web UI As..."
---

<a name="idp18902688"></a> 

The custom_logger module provides completely configurable logging similar to Apache's mod_log_config module. For more information on logging in general see [“Logging”](/momentum/3/3-reference/operations-logging). If you wish, you can set up multiple custom loggers.

### Warning

Currently, various custom_logger options cannot be set from the web UI. As a workaround, configure this module manually by editing the `ecelerity.conf` file. Best practices for changing configuration files are described at [“Best Practices for Manually Changing Configuration Files”](/momentum/3/3-reference/conf-manual-changes).

### <a name="modules.custom_logger.options"></a> Configuration Options

The options valid in the custom_logger scope are as follows:

<dl class="variablelist">

<dt>concurrency</dt>

<dd>

The `concurrency` option sets the size of the logger thread pool and has a default value of "1". This option is available because it is possible that a single logging thread may not be able to keep up with all the logging IO. Since the logger holds a reference to the message until logging is done, messages stay in the spool until the logger is done with them; if the logger is not keeping up, there will be more messages in the spool than are in the active and delayed queue. (Taking account of the fact that some other modules, as well as the process of spooling in messages at startup, can also cause the number of messages in the system to be more than the active plus the delayed queue.) Increasing concurrency can help the logger keep up, preventing a backlog of messages from building up in the spool.

To change the `concurrency` option at runtime use the system console, issuing the command **config set custom_logger *`custom_logger1`* concurrency *`new_value`***                                                               .

### Warning

Not all IO wrappers are thread-safe so before adjusting this option check with support.

</dd>

<dt>delivery_format</dt>

<dd>

This option specifies the fields that will be captured in the log. A complete list of format specifiers is given in [“Log Format Specifiers”](/momentum/3/3-reference/3-reference-modules-custom-logger#modules.custom_logger.formats). You can also use literals in the format string simply by adding a field that is not preceded by a ‘`%`’. There is no default value for this option.

</dd>

<dt>delivery_log_mode</dt>

<dd>

The file mode of the delivery log specified in octal format. The default value for this option is `0644`.

</dd>

<dt>delivery_logfile</dt>

<dd>

This option specifies the log file for the delivery stage and only deliveries will be logged to this path. There is no default value for this option.

</dd>

<dt>log_deliveries</dt>

<dd>

Whether or not to log deliveries. Set this option on by assigning the value `on`. If you set this option `on` be sure to also specify a format string; logging for this stage will fail if you do not specify a format. The default value for this option is `false`.

</dd>

<dt>log_errors</dt>

<dd>

Whether or not to log errors. The `log_errors` option logs errors to the paniclog, which is unstructured text, so there is no corresponding format option. The default value for this option is `false`.

</dd>

<dt>log_permanent_failures</dt>

<dd>

Whether or not to log permanent failures. Set this option on by assigning the value `on`. If you set this option `on` be sure to also specify a format string; logging for this stage will fail if you do not specify a format. The default value for this option is `false`.

</dd>

<dt>log_receptions</dt>

<dd>

Whether or not to log receptions. Set this option on by assigning the value `on`. If you set this option `on` be sure to also specify a format string; logging for this stage will fail if you do not specify a format. The default value for this option is `false`.

</dd>

<dt>log_rejections</dt>

<dd>

**Configuration Change. ** This option is available as of version 3.5.

Whether or not to log rejections. Set this option on by assigning the value `on`. If you set this option `on` be sure to also specify a format string; logging for this stage will fail if you do not specify a format. The default value for this option is `false`.

</dd>

<dt>log_transient_failures</dt>

<dd>

Whether or not to log transient failures. Set this option on by assigning the value ‘`on`’. If you set this option ‘`on`’ be sure to also specify a format string; logging for this stage will fail if you do not specify a format. The default value for this option is `false`.

</dd>

<dt>mainlog</dt>

<dd>

The `mainlog` option specifies the main log file. There is no default value for this option.

</dd>

<dt>mainlog_mode</dt>

<dd>

The file mode specified in octal format. The default value for this option is `0644`.

</dd>

<dt>namespace</dt>

<dd>

Use this option to specify which macro namespaces should be searched when expanding the custom_logger format strings. This variable is set using commas to separate different namespaces. For more information see [“The `namespace` Option”](/momentum/3/3-reference/3-reference-modules-custom-logger#modules.custom_logger.namespace). The default value for this option is `custom_logger,sieve`.

</dd>

<dt>paniclog</dt>

<dd>

The `paniclog` option specifies the location where error notifications are written. There is no default value for this option.

</dd>

<dt>paniclog_mode</dt>

<dd>

The file mode specified in octal format. The default value for this option is `0644`.

</dd>

<dt>permanent_failure_format</dt>

<dd>

This option specifies the fields that will be captured in the log. A complete list of format specifiers is given in [“Log Format Specifiers”](/momentum/3/3-reference/3-reference-modules-custom-logger#modules.custom_logger.formats). You can also use literals in the format string simply by adding a field that is not preceded by a ‘`%`’. There is no default value for this option.

</dd>

<dt>permanent_failure_log_mode</dt>

<dd>

The file mode specified in octal format. The default value for this option is `0644`.

</dd>

<dt>permanent_failure_logfile</dt>

<dd>

This option specifies the log file for permanent failures. There is no default value for this option.

</dd>

<dt>reception_format</dt>

<dd>

This option specifies the fields that will be captured in the log. A complete list of format specifiers is given in [“Log Format Specifiers”](/momentum/3/3-reference/3-reference-modules-custom-logger#modules.custom_logger.formats). You can also use literals in the format string simply by adding a field that is not preceded by a ‘`%`’. There is no default value for this option.

</dd>

<dt>reception_log_mode</dt>

<dd>

The file mode specified in octal format. The default value for this option is `0644`.

</dd>

<dt>reception_logfile</dt>

<dd>

This option specifies the log file for receptions. There is no default value for this option.

</dd>

<dt>rejection_format</dt>

<dd>

**Configuration Change. ** This option is available as of version 3.5.

This option specifies the fields that will be captured in the log. A complete list of format specifiers is given in [“Log Format Specifiers”](/momentum/3/3-reference/3-reference-modules-custom-logger#modules.custom_logger.formats). You can also use literals in the format string simply by adding a field that is not preceded by a ‘`%`’. There is no default value for this option.

</dd>

<dt>rejection_logfile</dt>

<dd>

**Configuration Change. ** This option is available as of version 3.5.

This option specifies the log file for rejections. There is no default value for this option.

</dd>

<dt>rejection_log_mode</dt>

<dd>

**Configuration Change. ** This option is available as of version 3.5.

The file mode specified in octal format. The default value for this option is `0644`.

</dd>

<dt>sanitize</dt>

<dd>

Define how user-supplied data is sanitized. For more information see [“The `sanitize` Option”](/momentum/3/3-reference/3-reference-modules-custom-logger#modules.custom_logger.sanitize).

</dd>

<dt>thread_pool</dt>

<dd>

The default threadpool for the custom_logger. For more information see [“The `thread_pool` Option”](/momentum/3/3-reference/3-reference-modules-custom-logger#modules.custom_logger.thread_pool).

</dd>

<dt>transient_failure_format</dt>

<dd>

This option specifies the fields that will be captured in the log. A complete list of format specifiers is given in [“Log Format Specifiers”](/momentum/3/3-reference/3-reference-modules-custom-logger#modules.custom_logger.formats). You can also use literals in the format string simply by adding a field that is not preceded by a ‘`%`’. There is no default value for this option.

</dd>

<dt>transient_failure_log_mode</dt>

<dd>

The file mode specified in octal format. The default value for this option is `0644`.

</dd>

<dt>transient_failure_logfile</dt>

<dd>

This option specifies the log file for transient failures. There is no default value for this option.

</dd>

<dt>xfer_format</dt>

<dd>

This option specifies the fields that will be captured in the log. A complete list of format specifiers is given in [“Log Format Specifiers”](/momentum/3/3-reference/3-reference-modules-custom-logger#modules.custom_logger.formats). You can also use literals in the format string simply by adding a field that is not preceded by a ‘`%`’. There is no default value for this option.

</dd>

<dt>xfer_log_mode</dt>

<dd>

The file mode specified in octal format. The default value for this option is `0644`.

</dd>

<dt>xfer_logfile</dt>

<dd>

This option specifies the log file for transfers between nodes. There is no default value for this option.

</dd>

</dl>

### <a name="modules.custom_logger.configuration"></a> Basic Configuration

The custom_logger module is configured through the `ecelerity.conf` file using a stanza such as the following:

<a name="example.custom_logger.3"></a> 


```
custom_logger "custom_logger1"
{
  delivery_logfile = "/var/log/ecelerity/delivery_log"
  delivery_format = "%t %r@%R"
}
```

The `delivery_logfile` option specifies the log file for the delivery stage and only deliveries will be logged to this path. The `delivery_format` option specifies the fields that will be captured in the log. A complete list of format specifiers is given in [“Log Format Specifiers”](/momentum/3/3-reference/3-reference-modules-custom-logger#modules.custom_logger.formats). You can also use literals in the format string simply by adding a field that is not preceded by a ‘`%`’. For an example see the `@R@` field shown in [“`namespace` example”](/momentum/3/3-reference/3-reference-modules-custom-logger#modules.custom_logger.namespace.example). Don't confuse this with the `@%R@` field which is the macro for the domain of the envelope RCPT TO.

The other stages that may be specified are:

```
reception_logfile = "/path/to/logfile"
transient_failure_logfile = "/path/to/logfile"
permanent_failure_logfile = "/path/to/logfile"
xfer_logfile = "/path/to/logfile"
rejection_logfile = "/path/to/logfile"
```

The xfer log file logs the transfer of deliveries between cluster nodes.

Use these directives to specify a log file for a specific stage. Multiple stages may be specified in the configuration stanza but a given stage can only be specified once.

You can also specify format strings for the reception, transfer, transient failure and permanent failure stages as shown below.

```
reception_format = "format_string"
xfer_format = "format_string"
transient_failure_format = "format_string"
permanent_failure_format = "format_string"
rejection_format = "format_string"
```

### Note

If a format is specified, logging for that stage is implicitly toggled on.

You can explicitly configure the logging of specific stages. The options to use are shown below with their default values.

```
log_deliveries = off
log_receptions = off
log_permanent_failures = off
log_transient_failures = off
log_errors = off
log_rejections = off
```

Set these options on by assigning the value ‘`on`’. If you use any of the above options (excepting `log_errors`) be sure to also specify a format string; logging for the specified stage will fail if you do not specify a format. The `log_errors` option logs errors to the paniclog, which is unstructured text, so there is no corresponding format option.

The other log files that can be created are shown below with their default values:

```
mainlog = "/var/log/ecelerity/mainlog.cl"
paniclog = "/var/log/ecelerity/paniclog.cl"
```

`mainlog` specifies a single log file location for consolidation of all logged stages and `paniclog` defines the location where error notifications are written.

You can also control the permissions of the various log files. The options to use are shown below with their default values.

```
mainlog_mode = 0644
paniclog_mode = 0644
delivery_log_mode = 0644
reception_log_mode = 0644
permanent_failure_log_mode = 0644
transient_failure_log_mode = 0644
xfer_log_mode = 0644
rejection_log_mode = 0644
```

Be sure to assign octal numbers to these options.

It is possible to aggregate logs in a cluster configuration. For an sample configuration see [“Centralized Logging with bounce_logger and fbl”](/momentum/3/3-reference/cluster-config-logging#cluster.config.logging.centalized.logging).

### <a name="modules.custom_logger.reject.log"></a> custom_logger and the Rejection Log

### Note

The rejection log options are available as of version 3.5.

Information in the rejection log may at times be incomplete.

The custom logger gets most of its information from the message object. The message object is not created until the MAILFROM stage. If rejection occurs during the preceding phases, accept, connect, or ehlo, the only information that is available to the rejection log is as follows:

*   The remote IP address

*   The rejection code

*   The timestamp

For example, suppose you have the following custom_logger configuration:

```
custom_logger "custom_logger1" {
    rejection_format = "%p @ %s @ %BI @ %A @ %U @ %n @ %h{Subject} @ %r »
@ %R @ %m @ %M @ %i @ %t @ %t{%Y-%m-%d} @ %H @ %mx @ %S"
  rejection_logfile = "/var/log/ecelerity/my_reject.log"
}
```

If a message is rejected during the connect phase, the rejection log entry will resemble the following entry:

```
unknown @  @ 00/00-00000-00000000 @  @  @ relaying denied @  @  @  @
@  @ 00/00-00000-00000000 @ 1339007869 @ 2012-06-06 @ 10.79.11.157 @  @
22
```

### <a name="modules.custom_logger.transient_failure"></a> custom_logger and Transient Failures

If you have a custom logger that reacts to transient failures and examines messages, you may experience poor performance, excessive memory utilization and potentially a watchdog timeout if a large batch of messages is transiently failed at the same time.

To manage such situations set `inline_transfail_processing` to `false` and adjust the values of `transfail_drain_rate` and `max_resident_transfails`. For more information see [inline_transfail_processing](/momentum/3/3-reference/3-reference-conf-ref-inline-transfail-processing).

### Warning

In circumstances where you are logging headers, use the `%vctx_mess{v}` macro rather than the `%h{X}` macro otherwise there may be a significant degradation in performance.

From Lua use the `msg:header` and the [msg:context_set](/momentum/3/3-reference/3-reference-lua-ref-msg-context-set) functions.

To do this in Sieve, write code for the each_rcpt phase to extract the header value you wish to log, and copy it into the validation context: the Sieve `ec_header_get` function gives access to the header and `vctx_mess_set` can be used to set the message context.

### <a name="modules.custom_logger.thread_pool"></a> The `thread_pool` Option

The default threadpool for the custom_logger deploys with a default `backlog` of `1024`. In some circumstances this default may be inadequate. To remedy this define a threadpool for the custom logger and associate it with the custom_logger module using the `thread_pool` option. An example follows.

```
threadpool "custom_logger1_pool" {
  concurrency = 1
  backlog = 1024
}
custom_logger "custom_logger1" {
  ...
  thread_pool = "custom_logger1_pool"
}
```

### Warning

It is possible to define a custom thread pool that uses different parameters than the one the custom_logger creates for itself by default. The most common parameter to change is the `backlog` option that controls how many custom_logger jobs may be queued up at a time. While raising this parameter from its default of 1024 may be appropriate in certain circumstances, *it should always be done under guidance from the Message Systems support team* . Specifically, raising this value means that you should also pay attention to both the `server_max_file_descriptors` setting, as well as the corresponding operating-system level maximum open file descriptors limit.

For more information about the threadpool scope see [threadpool](/momentum/3/3-reference/3-reference-conf-ref-threadpool).

After setting the `thread_pool` option you must restart the ecelerity process. Issuing the ec_console command **`config reload`**         will not suffice.

### <a name="modules.custom_logger.namespace"></a> The `namespace` Option

Use this option to specify which macro namespaces should be searched, when expanding the custom_logger format strings. This variable is set using commas to separate different namespaces.

<a name="modules.custom_logger.namespace.example"></a> 


```
namespace = "custom_logger,sieve,mymacros"
mainlog = "/var/log/ecelerity/customlog.ec"
reception_format = "%t@%i@R@%r@%R@%m@%M@%H@%B@%p@%g@%b@%mydate"
...
```

The default value for `namespace` is `custom_logger,sieve`. The preceding example adds a namespace called `mymacros` in order to reference the macro `mydate` in the reception format string. From a Sieve++ script you could use the macro in the following way:

`$foo = "%{mymacros:mydate}";`

The `mainlog` option can be any arbitrary name that you choose.

### <a name="modules.custom_logger.sanitize"></a> The `sanitize` Option

User-supplied data coming into the logger can be sanitized of newlines, special characters and such. The `sanitize` option has the three following parameters, which can be combined arbitrarily:

<dl class="variablelist">

<dt>special_characters</dt>

<dd>

Perform standard control character escaping.

</dd>

<dt>non_printable</dt>

<dd>

Replace all non-printable characters with their ASCII decimal code equivalent.

</dd>

<dt>tr/.../.../</dt>

<dd>

Perform tr() style character mapping on the data.

</dd>

</dl>

For example, the following line will replace all standard control characters with their escaped equivalents, and additionally convert spaces to underscores:

`sanitize = "special_characters,tr/ /_/"`
### Note

The `sanitize` option only runs on the note (i.e., the SMTP response) and the headers; it is not run against vctx variables. In addition, it will only work with the `%n` and `%h` log format specifiers.

### <a name="modules.custom_logger.formats"></a> Log Format Specifiers

### Warning

Do not use any of the following characters as delimiters: `a-z or A-Z, two or more ':' or '_'`

The following list shows the specifiers that can be used as format strings. *Note*: Some specifiers only make sense used at specific stages.

<dl class="variablelist">

<dt>Format</dt>

<dd>

Meaning

</dd>

<dt>%A</dt>

<dd>

Authentication method.

</dd>

<dt>%b</dt>

<dd>

The name of the MultiVIP© binding the message is assigned to.

</dd>

<dt>%B</dt>

<dd>

The size of the message in bytes (including headers).

</dd>

<dt>%BI</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.11.

The batch ID.

</dd>

<dt>%c</dt>

<dd>

The heuristic classification of the message from the DSN received from the remote MTA (only makes sense for failures).

</dd>

<dt>%C</dt>

<dd>

The number of the heuristic classification of the message from the DSN received from the remote MTA (only makes sense for failures).

</dd>

<dt>%CI</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.11.

The connection ID.

</dd>

<dt>%d</dt>

<dd>

The routing domain is the domain name that the message is queued against. Normally this is a real domain name but when you assign a Gateway for a domain, the Gateway becomes the routing domain. For example:

```
domain sub.test.example.com {
  gateway = "sinkhole.example.com"
}
```

This leads to mail being queued against sinkhole.example.com.

</dd>

<dt>%g</dt>

<dd>

The name of the MultiVIP© binding group the message is assigned to.

</dd>

<dt>%H</dt>

<dd>

The IP address of the remote host.

</dd>

<dt>%h{X}</dt>

<dd>

The value of header 'X', if it exists. If multiple headers match, the first and only the first will be used. The text in here is escaped as determined by the `sanitize` setting. For example, to obtain the value of the "Return-Path" header, specify `%h{Return-Path}`

You may be able to improve performance by using the `%vctx_mess{v}` macro rather than this macro. To do this, use a script in the each_rcpt phase to extract the header value you wish to log, and copy it into the validation context.

</dd>

<dt>%i</dt>

<dd>

The message-id of the message.

</dd>

<dt>%m</dt>

<dd>

The local-part of the envelope MAIL FROM:

</dd>

<dt>%M</dt>

<dd>

The domain of the envelope MAIL FROM:

</dd>

<dt>%n</dt>

<dd>

The text of the DSN returned by the remote server at any phase—delivery, transient failure or permanent failure. The text in here is escaped as determined by the sanitize setting.

</dd>

<dt>%N</dt>

<dd>

The number of times the message has been tried.

</dd>

<dt>%P</dt>

<dd>

The pathway that the message was assigned to.

</dd>

<dt>%p</dt>

<dd>

The protocol that the message was received via (esmtp or ecstream).

</dd>

<dt>%PG</dt>

<dd>

The pathway group that the message was assigned to.

</dd>

<dt>%r</dt>

<dd>

The local-part of the envelope RCPT TO:

</dd>

<dt>%R</dt>

<dd>

The domain of the envelope RCPT TO:

</dd>

<dt>%s</dt>

<dd>

The string description of the delivery stage of the message (only meaningful for failures). For a list of the different connection phases see [“Connection Stages”](/momentum/3/3-reference/3-reference-log-formats-connection-stages).

</dd>

<dt>%S</dt>

<dd>

The numeric indicator of the stage of the message. For a list of the different connection phases see [“Connection Stages”](/momentum/3/3-reference/3-reference-log-formats-connection-stages).

</dd>

<dt>%t</dt>

<dd>

The current time, as a Unix timestamp.

</dd>

<dt>%t{fmt}</dt>

<dd>

The current time, displayed in the strftime format 'fmt'.

</dd>

<dt>%T</dt>

<dd>

The amount of time the message has spent enqueued on the system. Defaults to two decimal places.

</dd>

<dt>%T{N}</dt>

<dd>

The time the message spent in the message queue where ‘`N`’ indicates the desired number of decimal places.

</dd>

<dt>%U</dt>

<dd>

The authenticated user.

</dd>

<dt>%us{*`N`*}</dt>

<dd>

**Configuration Change. ** This feature is available as of version 3.5.

Record the timestamp to *`N`* decimal places, where *`N`* is:

*   1 - deciseconds (1/10th of a second)

*   2 - centiseconds (1/100th of a second)

*   3 - milliseconds (1/1000th of a second)

*   4 - 1/10,000th of a second

*   5 - 1/100,000th of a second

*   6 - microseconds (1/1,000,000th of a second)

</dd>

<dt>%vctx_conn{key}</dt>

<dd>

The value of entry "key" in the connection context dictionary.

</dd>

<dt>%vctx_mess{key}</dt>

<dd>

The value of entry "key" in the message context dictionary.

</dd>

</dl>