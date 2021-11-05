---
lastUpdated: "03/26/2020"
title: "eccluster.conf File"
description: "The eccluster conf file configures the behavior of the Momentum Cluster Manager eccmgr Note that it does not configure the behavior of cluster nodes This file is found in the opt msys ecelerity etc conf default directory The following is an example eccluster conf file Example 16 1 eccluster conf..."
---

The `eccluster.conf` file configures the behavior of the Momentum Cluster Manager [eccmgr](/momentum/4/executable/eccmgr). Note that it does not configure the behavior of cluster nodes. This file is found in the `/opt/msys/ecelerity/etc/conf/default/` directory.

The following is an example `eccluster.conf` file:

<a name="conf.ref.eccluster.conf.example"></a> 


```
# Security stanza
Security {
  user = "ecuser"
  group = "ecuser"
}

# Logs stanza
Logs {
  logfile = "/var/log/eccluster/%Y/%m/%d/%{l}/%{s}/%{n}"
  file_mode = "0640"
  dir_mode = "0755"
}

# Control_Listener stanza
Control_Listener {
  AuthDigestMD5Parameters = [
    uri = "ecauth://"
  ]
  Enable_Authentication = "true"

  Enable_Authorization = "false"
  AuthorizationParameters = [
    uri = "ecauth://"
  ]

  Listen "/tmp/2025" {
    Enable_Authentication = "false"
  }
  Listen "127.0.0.1:2025" {
  }
}

# Cluster Manager event logging
# troubleshoot the eccmgr instance by looking for its logs
# in /var/log/eccluster/paniclog.ec
ec_logger "ec_logger"
{
  rejectlog = "/var/log/eccluster/rejectlog.ec"
  mainlog = "/var/log/eccluster/mainlog.ec"
  heartbeat = "0"
  paniclog = "/var/log/eccluster/paniclog.ec"
# acctlog = "/var/log/eccluster/acctlog.ec"
}

# Include auxillary information prepared by the installer; this must be the
# last thing in the top level eccluster.conf file
readonly_include "/opt/msys/etc/installer/eccmgr.d/ecdb.conf"
```

Using the console from the cluster manager, you can view the contents of the `eccluster.conf` file. For instance, if your configuration matches the example above, the output of **config show Logs**           is as follows:

```
/tmp/2025> config show Logs
dir_mode = "0755"
logfile = "/var/log/eccluster/%Y/%m/%d/%{l}/%{s}/%{n}"
file_mode = "0640"
```

Since the `eccluster.conf` file is specific to the cluster manager, you cannot view the `Logs` scope from the console on a cluster node.

For a discussion of scopes and fallbacks, see [“Configuration Scopes and Fallback”](/momentum/4/4-ecelerity-conf-fallback).

For a summary of all the non-module specific configuration options, refer to [*Configuration Options Summary*](/momentum/4/config-options-summary) .

Modules and their configuration options are discussed in the [*Modules Reference*](/momentum/4/modules/) .

The following sections provide an overview of the configuration commonly defined in the `eccluster.conf` file.

<dl class="variablelist">

<dt>Security</dt>

<dd>

For a discussion of the `Security` stanza options, see [security](/momentum/4/config/ref-security).

</dd>

<dt>Control_Listener</dt>

<dd>

The `Control_Listener` stanza, specifies the port on which `eccmgr` listens. On Unix systems, `eccmgr` listens at `/tmp/2025` by default. For a discussion of the Control_Listener, see [*Configuring Momentum's System Console*](/momentum/4/control-listener) .

</dd>

<dt>Cluster Manager Event Logging</dt>

<dd>

For a discussion of using the ec_logger module on the cluster manager, see [“Configuration for the Cluster Manager”](/momentum/4/modules/ec-logger#modules.ec_logger.eccmgr).

For a discussion of using the bounce_logger module on the cluster manager, see [“Configuration for the Cluster Manager”](/momentum/4/modules/bounce-logger#modules.bounce_logger.eccmgr).

</dd>

<dt><a name="conf.ref.eccluster.conf.logs"></a> Log Aggregation</dt>

<dd>

The `Logs` scope must be configured in order to aggregate node logs on the log aggregator. The following is the default configuration in the `eccluster.conf` file:

<a name="conf.ref.eccluster.conf.logs.stanza"></a> 


```
Logs {
  logfile = "/var/log/eccluster/%Y/%m/%d/%{l}/%{s}/%{n}"
  file_mode = "0640"
  dir_mode = "0755"
}
```

The following options are valid in the `Logs` scope.

<dl class="variablelist">

<dt><a name="eccluster.conf.logs.control_cache"></a> Control_Cache</dt>

<dd>

Name of the cache file storing asynchronous responses to clusterwide Momentum inquiries

</dd>

<dt><a name="eccluster.conf.logs.dir_mode"></a> Dir_Mode</dt>

<dd>

Octal representation of the file permissions of newly created log directories

</dd>

<dt><a name="eccluster.conf.logs.file_mode"></a> File_Mode</dt>

<dd>

Octal representation of the file permissions of newly created log files

</dd>

<dt><a name="eccluster.conf.logs.logfile"></a> Logfile</dt>

<dd>

Defines the full pathname of the log file to be written.

As `eccmgr` is capable of writing log files into several distinct locations, a simple interpolation set is provided. All of the POSIX strftime macros are supported (see the POSIX strftime standard), as well as two special interpolations. %{n} will interpolate to the name of the cluster node that generated the log line in question. %{l} will interpolate to the name of the log as named in the logs section of the cluster configuration in the `ecelerity.conf`. For more information about the POSIX strftime macros, see [strftime](http://www.opengroup.org/onlinepubs/009695399/functions/strftime.html).

There is no restriction on the value assigned to this option as long as it creates a valid path after all the macros get expanded; it does not have to exist beforehand, `eccmgr` will create directories as needed, hence the `Dir_Mode`.

</dd>

<dt><a name="eccluster.conf.logs.max_idle"></a> Max_Idle</dt>

<dd>

Maximum number of seconds a log file may be left open without writing a new log entry to it

</dd>

<dt><a name="eccluster.conf.logs.max_open"></a> Max_Open</dt>

<dd>

Maximum number of concurrently open log files

</dd>

</dl>

The example configuration, [“Logs Stanza”](/momentum/4/config/ref-eccluster-conf#conf.ref.eccluster.conf.logs.stanza), creates logs under `/var/log/eccluster` according to the `logfile` setting. This is processed by `strftime` expanding the macros as follows:

<dl class="variablelist">

<dt>%Y</dt>

<dd>

Four digit representation of the year

</dd>

<dt>%m</dt>

<dd>

Two digit representation of the month

</dd>

<dt>%d</dt>

<dd>

Two digit representation of the day of the month

</dd>

</dl>

Additional special place holders are as follows:

<dl class="variablelist">

<dt>%{l}</dt>

<dd>

Expands to the name of the log specified as the key in the `logs` dictionary configured within the cluster scope of the `ecelerity-cluster.conf` file. See [logs](/momentum/4/modules/4-modules-cluster#option.logs.dictionary)

</dd>

<dt>%{n}</dt>

<dd>

Expands to the name of the node

</dd>

<dt>%{s}</dt>

<dd>

Expands to the name of the subcluster to which the node belongs

</dd>

</dl>

For example, the mainlog, being pulled from `node1`, where `node1` is a member of the subcluster named `mycluster`, the data would be logged to: /var/log/eccluster*`/year/month/day/`*mainlog/mycluster/node1.

In addition to the place holders shown above, all of the POSIX `strftime` macros are supported. For more information, see [strftime](http://www.opengroup.org/onlinepubs/009695399/functions/strftime.html).

There are no requirements regarding the structure of the filenames, nor is there any expectation that you have configured centralized logging, so you are free to adjust the `logfile` parameter to suit your needs as long as `logfile` defines a valid path after all the macros get expanded. The path does not have to exist beforehand, `eccmgr` will create directories as needed.

</dd>

<dt>Included Files</dt>

<dd>

The `/opt/msys/etc/installer/eccmgr.d/ecdb.conf` file contains the definition of the `ecdb` datasource file.

</dd>

<dt>as_logger Module</dt>

<dd>

The [as_logger](/momentum/4/modules/as-logger) module is specific to the cluster manager. It must be manually added to the `eccluster.conf` file, if needed.

</dd>

</dl>