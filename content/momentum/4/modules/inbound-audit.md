---
lastUpdated: "03/26/2020"
title: "inbound_audit – Inbound traffic analytics"
description: "The inbound audit module provides time series analytics on the behavior of sending I Ps It is designed to help spot emergent issues such as abuse and to provide a mechanism for implementing counter based policy on I Ps The inbound audit module differs from the standard analytics available in..."
---

<a name="idp21866176"></a> 

The inbound_audit module provides time-series analytics on the behavior of sending IPs. It is designed to help spot emergent issues, such as abuse, and to provide a mechanism for implementing counter-based policy on IPs. The inbound_audit module differs from the standard analytics available in Momentum in that it allows you to compare short-term real-time data with data from earlier time windows. This makes it easy to spot changes in behavior.

This module is required by the [adaptive](/momentum/4/modules/4-adaptive) and [alerting](/momentum/4/modules/alerting) modules.

### <a name="idp21871760"></a> Configuration

The inbound_audit module is a singleton, so it does not have an instance name, There is no configuration necessary in order to use many features of this module, apart from the module declaration. The definition of "monitors" in the configuration is needed only when using the **inbound_audit show ip**         console command. The following is an example configuration:

<a name="example.inbound_audit.3"></a> 


```
inbound_audit
{
  monitors = ( "300,6" "1800,4" )
}
```

The following configuration options are available:

<dl class="variablelist">

<dt>log_dir</dt>

<dd>

Directory where audit series with the serialized flag set are stored. Default value is `/var/log/ecelerity/audit_series_logs`.

</dd>

<dt>maintenance_interval</dt>

<dd>

Default value is `300`.

</dd>

<dt>monitors = ( "window-size,number-of-windows" ... )</dt>

<dd>

Create monitoring window(s) *window-size* seconds long and maintain *number-of-windows* windows historically. In the example above, we create two different time-series: 5 minutes for the past half hour, and 30 minutes for the past 2 hours.

</dd>

<dt>serialize_dir</dt>

<dd>

Directory where the audit series state is persisted on shutdown and read in on startup. Default value is `/var/log/ecelerity/audit_series_persist`.

</dd>

</dl>

### <a name="idp21887536"></a> Lua Functions

Configuring this module makes the following Lua functions available:

*   [msys.audit.rejections](/momentum/4/lua/ref-msys-audit-rejections)

*   [msys.audit.connections](/momentum/4/lua/ref-msys-audit-connections)

*   [msys.audit.receptions](/momentum/4/lua/ref-msys-audit-receptions)

*   [msys.audit.inbound_session_count](/momentum/4/lua/ref-msys-audit-inbound-session-count)

*   [msys.audit_series.add](/momentum/4/lua/ref-msys-audit-series-add)

*   [msys.audit_series.count](/momentum/4/lua/ref-msys-audit-series-count)

*   [msys.audit_series.define](/momentum/4/lua/ref-msys-audit-series-define)

*   [msys.audit_series.remove_item](/momentum/4/lua/ref-msys-audit-series-remove-item)

### <a name="modules.inbound_audit.console"></a> Console Commands

The inbound_audit module can be queried through the `ec_console`. The following commands are available:

<dl class="variablelist">

<dt>add</dt>

<dd>inbound_audit add *`series parameters ip increment`*

Add a value to a CIDR in a named series.

</dd>

<dt>count_cidr</dt>

<dd>inbound_audit count_cidr *`ip[/mask] series parameters period_start period_end`*

Count a CIDR in a named series.

</dd>

<dt>delete_ip</dt>

<dd>inbound_audit delete_ip *`ip`* *`series`* *`parameters`*

Delete an IP from a defined named series.

</dd>

<dt>help</dt>

<dd>`inbound_audit help`

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
</dd>

<dt>load</dt>

<dd>inbound_audit load *`series`* *`filename`*

Load a series from a file. The filename can be omitted if the file has the same name as the series.

</dd>

<dt>show all</dt>

<dd>`inbound_audit show all`

Display verbose statistics for all domains as a CSV list.

</dd>

<dt>show ip</dt>

<dd>inbound_audit show ip *`ip[/mask]`*

Dump all collected time-series data for the specified IP/netblock.

When you query the inbound_audit module's time-series data, the following formatted data is returned:

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

    Type is either connections made, messages received, or messages rejected.

*   **window size/window offset** 

    Size of the window being displayed, plus the number of the window. For example `300/0` is the current 5 minute window, while `300/2` is the 5 minute window that occurred 10 minutes ago (i.e., 2 windows before the current window).

*   **count**

    Number of events of the specified type that occurred during that window.

</dd>

<dt>subtract</dt>

<dd>inbound_audit subtract *`series parameters ip decrement`*

Subtract a value from a CIDR in a named series.

</dd>

</dl>