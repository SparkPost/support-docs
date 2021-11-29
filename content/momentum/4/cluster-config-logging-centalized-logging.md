---
lastUpdated: "03/26/2020"
title: "Centralized Logging Example"
description: "This section provides an example of log aggregation when a custom logger and an fbl module are defined The following is an example configuration for the custom logger module Note The format options in the custom logger module above should be unbroken in your configuration file The following is an..."
---

This section provides an example of log aggregation when a custom_logger and an fbl module are defined.

The following is an example configuration for the [custom_logger](/momentum/4/modules/custom-logger) module:

```
custom_logger "custom_logger1" {
  permanent_failure_logfile = "cluster:///var/log/ecelerity/custombounce.cluster=>master"
  permanent_failure_format  = "%t@%i@%BI@%CI@B@%r@%R@%m@%M@%g@%b@%c@%C@%B@%H@%h{X-campaignid} »
    @%h{date}@%h{subject}@%n"
  transient_failure_logfile = "cluster:///var/log/ecelerity/custombounce.cluster=>master"
  transient_failure_format  = "%t@%i@%BI@%CI@T@%r@%R@%m@%M@%g@%b@%c@%C@%B@%H@%h{X-campaignid} »
    @%h{date}@%h{subject}@%n"
}
```

*Note*: The format options in the custom_logger module above should be unbroken in your configuration file.

The following is an example configuration for the [fbl](/momentum/4/modules/fbl) module:

```
fbl {
  Auto_Log = true # default is "false"
  Log_Path = "cluster:///var/log/ecelerity/fbllog.cluster=>master"
  Addresses = ( “^.*@fbl.domain.com” ) # default is unset
  Header_Name = “X-MSFBL” # this is the default
  User_String = “%{vctx_mess:my_context_variable}” # default is unset
  Message_Disposition = “blackhole” # default is blackhole, also allowed to set to "pass"
  Condition = “can_relay” # default is unset, should be name of a vctx entry
}
```

Given the above configuration for the custom_logger module and the fbl module, you would configure the cluster logs in the following way:

```
cluster {
  cluster_group = ec_cluster
  control_group = ec_console
  logs = [
    rejectlog = "/var/log/ecelerity/rejectlog.cluster"
    paniclog = "/var/log/ecelerity/paniclog.cluster"
    mainlog = "/var/log/ecelerity/mainlog.cluster"
    acctlog = "/var/log/ecelerity/acctlog.cluster"
    bouncelog = "/var/log/ecelerity/bouncelog.cluster"
    fbllog = "/var/log/ecelerity/fbllog.cluster"
    custombounce = "/var/log/ecelerity/custombounce.cluster"
  ]
  ...
}
```

If the `logfile` option in the `Logs` scope is configured as shown in [“`eccluster.conf` File”](/momentum/4/config/ref-eccluster-conf), you will have access to the fbl logs of `node1` belonging to subcluster `mysubcluster` in the /var/log/eccluster/*`year/mon/day`*/fbllog/mycluster/node1 directory on the log aggregator.