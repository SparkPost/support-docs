---
lastUpdated: "03/26/2020"
title: "bounce_logger – Momentum-Style Bounce Logging"
description: "The ec logger and event hydrant modules provide full disposition status of every message that goes through Momentum However it is often convenient to view status of only bounced messages The bounce logger module writes only inband or protocol time and out of band bounces to a single log file..."
---

<a name="idp20047184"></a> 

The ec_logger and event_hydrant modules provide full disposition status of every message that goes through Momentum. However, it is often convenient to view status of only bounced messages. The bounce_logger module writes only inband (or protocol-time) and out-of-band bounces to a single log file.

For details about the bouncelog file format, see [“`bouncelog`”](/momentum/4/log-formats-bouncelog).

### <a name="modules.bounce_logger.node"></a> Configuration

To configure the bounce_logger module, load it in the `ecelerity.conf` file. The following is the default configuration:

<a name="modules.bounce_logger.node.example"></a> 


```
bounce_logger "bounce_logger"
{
   bouncelog = "/var/log/ecelerity/bouncelog.ec"
   bouncelog_mode = 0644
   heartbeat = 60
}
```

This configuration instructs Momentum to write a `bouncelog` file to `/var/log/ecelerity/bouncelog.ec` with the file permissions 0644.

The `heartbeat` option sets the interval at which "heartbeat" entries will write to the log. Default value is `60`. The heartbeat entries in the log are essential for proper operation of the real time stats pieces, and changing the default value of `heartbeat` is not recommended unless advised to do so by Message Systems support.

### Note

If you find that you have rejectlog entries with the reason "550 5.7.1 [internal] discarded by policy", and you are having difficulty in correlating those rejections with your policy rules, it could be because your bounce processing configuration is set to blackhole any detected bounces. If this is the case, you should expect to see a corresponding entry in your bounce log, except in the case where the internal bounce classifier has determined that the incoming message was classified as BC_SUBSCRIBE, a subscription request. The bounce logger does not log this type of incoming mail because it does not relate to a specific outgoing message originating from your site.

In the configuration, you can also specify which events to log or not to log. Events will be logged based on the following lines in your configuration file:

```
log_inband_bounces = <on|off:  default on>
log_outofband_bounces = <on|off:  default on>
log_transient_failures = <on|off:  default on>
```

The `log_transient_failures` option creates a log entry of type ‘`T`’ in the bounce log along with the actual bounce log line. Apart from the type identifier, the log entry for a transient failure is the same as other bounce log entries. Note that bounce log entries differ in format from ec_logger entries. The default value for this option is `on`.

The bounce_logger relies on additional global configuration options: [bounce_domains](/momentum/4/config/ref-bounce-domains), [bounce_behavior](/momentum/4/config/ref-bounce-behavior), [bounce_suppress_list](/momentum/4/config/ref-bounce-suppress-list) and [bounce_pattern](/momentum/4/config/ref-bounce-pattern).

The default log file created by this logger is rotated by the utility script **ec_rotate**. For more information, see [ec_rotate](/momentum/4/executable/ec-rotate).

### <a name="modules.bounce_logger.cluster"></a> Configuration of Aggregated Cluster Node Logging

When the bounce_logger is defined in the `ecelerity-cluster.conf` file, it configures the files used to create aggregated text logs of node events.

The default `ecelerity-cluster.conf` file defines the following bounce_logger:

<a name="modules.bounce_logger.cluster.example"></a> 


```
bounce_logger "bounce_logger_cluster" {
  bouncelog = "cluster:///var/log/ecelerity/bouncelog.cluster=>master"
}
```

For a detailed explanation of setting up cluster-wide consolidated logging, see [“Configuration of Aggregated Cluster Node Logging”](/momentum/4/modules/ec-logger#modules.ec_logger.cluster).

### <a name="modules.bounce_logger.eccmgr"></a> Configuration for the Cluster Manager

The bounce_logger module can also be used to configure log events that occur on the cluster manager. Configuration is similar to [“Configuration”](/momentum/4/modules/bounce-logger#modules.bounce_logger.node) with the exception that the bounce_logger module is loaded in the `eccluster.conf` file.

### <a name="modules.bounce_logger.console"></a> Console Commands

The bounce_logger module allows for a limited set of online commands via `ec_console`:

<dl class="variablelist">

<dt>bounce_logger:*`bounce_logger_rt`* reopen logs</dt>

<dd>

If you move a log, use the ec_console command **reopen logs**      to close and reopen all the log files.

</dd>

</dl>