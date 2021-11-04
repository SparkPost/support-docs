---
lastUpdated: "03/26/2020"
title: "inbound_audit – Inbound traffic analytics"
description: "The inbound audit module provides time series analytics on the behavior of sending I Ps It is designed to help spot emergent issues such as abuse and to provide a mechanism for implementing counter based policy on I Ps The inbound audit module differs from the standard analytics available in..."
---

<a name="idp20142848"></a> 

The inbound_audit module provides time-series analytics on the behavior of sending IPs. It is designed to help spot emergent issues, such as abuse, and to provide a mechanism for implementing counter-based policy on IPs. The inbound_audit module differs from the standard analytics available in Momentum in that it allows you to compare short-term real-time data with data from earlier time windows. This makes it easy to spot changes in behavior.

### Note

This module is required by [“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive).

### <a name="idp20146976"></a> Runtime Usage

**<a name="idp20148032"></a> Lua Functions**

Configuring this module makes a number of Lua functions available. These are:

*   [msys.audit.rejections](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-rejections)

*   [msys.audit.connections](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-connections)

*   [msys.audit.receptions](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-receptions)

*   [msys.audit.inbound_session_count](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-inbound-session-count)

*   [msys.audit_series.add](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-add)

*   [msys.audit_series.count](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-count)

*   [msys.audit_series.define](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-define)

*   [msys.audit_series.remove_item](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-remove-item)

For more information follow the preceding links.

**<a name="idp20161568"></a> Sieve Commands**

Configuring this module makes a number of Sieve commands available. These commands are:

*   [audit_series](/momentum/3/3-reference/sieve-ref-audit-series) and [audit_series_add](/momentum/3/3-reference/sieve-ref-audit-series-add)

*   [audit_service](/momentum/3/3-reference/sieve-ref-audit-service) [audit_connections_on_service](/momentum/3/3-reference/sieve-ref-audit-connections-on-service) and [audit_connections_on_listener](/momentum/3/3-reference/sieve-ref-audit-connections-on-listener)

*   [ec_ip_connections](/momentum/3/3-reference/sieve-ref-ec-ip-connections), [ec_ip_rejections](/momentum/3/3-reference/sieve-ref-ec-ip-rejections) and [ec_ip_receptions](/momentum/3/3-reference/sieve-ref-ec-ip-receptions)

### <a name="idp20169760"></a> Cluster support

This module provides additional cluster-enabled features. In particular, there are clustered versions of the "ec_ip" commands: [ec_ip_connections_cluster](/momentum/3/3-reference/sieve-ref-ec-ip-connections-cluster), [ec_ip_rejections_cluster](/momentum/3/3-reference/sieve-ref-ec-ip-rejections-cluster) and [ec_ip_receptions_cluster](/momentum/3/3-reference/sieve-ref-ec-ip-receptions-cluster). Also, [audit_series_add](/momentum/3/3-reference/sieve-ref-audit-series-add) can be used in a replicated mode as described in its specific manual page. Replicated audit series allow for recording and acting on arbitrary IP-based events across a cluster. Users of replicated audit_series can also make use of the as_logger (see [“as_logger – Audit series logger”](/momentum/3/3-reference/3-reference-modules-as-logger)) module to automatically journal these series on the cluster manager at periodic intervals, allowing for post-analysis using the cluster web console or custom scripts. For more information about replication and inbound audit see [“Replicated inbound audit metrics”](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.replication.inbound_audit).

### <a name="idp20176144"></a> Configuration

There is no configuration necessary in order to use many features of this module, apart from the module declaration. The definition of "monitors" in the configuration is needed only when using the Sieve commands **ec_ip_connections, ec_ip_rejections** , or **ec_ip_receptions**; or if the "inbound_audit show ip" console command is used.

<a name="example.inbound_audit.3"></a> 


```
inbound_audit "inbound_audit1"
{
  monitors = ( "300,6" "1800,4" )
}
```

Starting with version 3.0.23, the inbound_audit module is a singleton and is defined in the following way:

```
inbound_audit
{
  monitors = ( "300,6" "1800,4" )
}
```

Valid configuration parameters are:

<dl class="variablelist">

<dt>log_dir</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.23.

The directory where audit series with the serialized flag set are stored. The default value for this option is `/var/log/ecelerity/audit_series_logs`.

</dd>

<dt>maintenance_interval</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.23.

The default value for this option is `300`.

</dd>

<dt>monitors = ( "window-size,number-of-windows" ... )</dt>

<dd>

Create monitoring window(s) *window-size* seconds long, and maintain *number-of-windows* windows historically. In the example above, we create two different time-series: 5 minutes for the past half hour, and 30 minutes for the past 2 hours.

</dd>

<dt>serialize_dir</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.23.

The directory where the audit series state is persisted on shutdown and read in on startup. The default value for this option is `/var/log/ecelerity/audit_series_persist`.

</dd>

</dl>

### <a name="modules.inbound_audit.console"></a> inbound_audit Management Using Console Commands

The inbound_audit module can be queried through the `ec_console`; the following commands are available:

**Configuration Change. ** As of version 3.0.23, the inbound_audit module is a singleton. Prior to this version all console commands must include an instance name.

**<a name="idp20205520"></a> 14.41.4.1. The show ip Command**inbound_audit:*`instance_name`* show ip ip[/mask]

This command dumps all collected time-series data for the specified IP/netblock.

When you query the inbound_audit module's time-series data, you get back data formatted as follows:

```
10:45:03 ecelerity(/tmp/2025)> inbound_audit:inbound_audit1 show ip 10.0.0.0/8
Connections 1800/0: 30
Connections 1800/1: 0
Connections 1800/2: 0
Connections 1800/3: 0
Connections 1800/4: 0
Receptions 1800/0: 1697
Receptions 1800/1: 0
Receptions 1800/2: 0
Receptions 1800/3: 0
Receptions 1800/4: 0
Rejections 1800/0: 0
Rejections 1800/1: 0
Rejections 1800/2: 0
Rejections 1800/3: 0
Rejections 1800/4: 0
```

The fields for this output are:

*   **type of data** 

    The type is either connections made, messages received or messages rejected.

*   **window size/window offset** 

    The size of the window being displayed, plus the number of the window. For example `300/0` is the current 5 minute window, while `300/2` is the 5 minute window that occurred 10 minutes ago (i.e 2 windows before the current window).

*   **count**

    The number of events of the specified type that occurred during that window.

**<a name="idp20218448"></a> 14.41.4.2. The help Command**inbound_audit:*`instance_name`* help

Show the available commands.

```
show ip <ip[/mask]>
    Display verbose statistics for the specified ip or cidr block
delete_ip <ip> <series> <parameters>
    Delete an IP from a defined named series
count_cidr <ip[/mask]> <series> <parameters> <period_start> <period_end>
    Count a CIDR in a named series
add <series> <parameters> <ip> <increment>
    Add a value to a CIDR in a named series
subtract <series> <parameters> <ip> <decrement>
    Subtract a value from a CIDR in a named series
show all
    Display verbose statistics for all domains as a CSV list
load <series> <filename>
    Load a series from a file.  The the filename can be omitted if
    the file has the same name as the series
```
**<a name="idp20222784"></a> 14.41.4.3. The delete_ip Command**inbound_audit:*`instance_name`* delete_ip *`ip`* *`series`* *`parameters`*

Delete an IP from a defined named series.

**<a name="idp20227040"></a> 14.41.4.4. The count_cidr Command**inbound_audit:*`instance_name`* count_cidr *`ip[/mask] series parameters period_start period_end`*

Count a CIDR in a named series.

**<a name="idp20230464"></a> 14.41.4.5. The add Command**inbound_audit:*`instance_name`* add *`series parameters ip increment`*

Add a value to a CIDR in a named series.

**<a name="idp20233888"></a> 14.41.4.6. The subtract Command**inbound_audit:*`instance_name`* subtract *`series parameters ip decrement`*

Subtract a value from a CIDR in a named series.

**<a name="idp20237312"></a> 14.41.4.7. The show all Command**inbound_audit:*`instance_name`* show all

Display verbose statistics for all domains as a CSV list.

**<a name="idp20240176"></a> 14.41.4.8. The load Command**

**Configuration Change. ** This feature is available starting from Momentum 3.0.23.

inbound_audit load *`series`* *`filename`*

Load a series from a file. The filename can be omitted if the file has the same name as the series.