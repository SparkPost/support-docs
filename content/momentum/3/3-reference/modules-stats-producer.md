---
lastUpdated: "03/26/2020"
title: "statp – Stats Producer Module"
description: "The stats producer module is used internally by the MTA to provide real time graphing data for both the single node web console as well as the cluster wide web console However you must also configure the logging modules as described in Section 4 5 5 Logging and the Web..."
---

<a name="idp21508704"></a> 

The `stats_producer` module is used internally by the MTA to provide real-time graphing data for both the single-node web console as well as the cluster-wide web console. However, you must also configure the logging modules as described in [“Logging and the Web UI”](/momentum/3/3-reference/operations-logging#operations.logging.web.ui).

This module is configured as follows:

<a name="example.statp.3"></a> 


```
statp "statp1" {
  log_file = "jlog:///var/log/ecelerity/statp.rt"
  interval = 60
}
```

The the default value for `interval` is `60` seconds. You should not need to change this option.

The `log_file` option defaults to `jlog:///var/log/ecelerity/statp.rt`. This option should not need to be changed from its default. This module is intended to be run in conjunction with **ec_rt_stats2**, with the rollup process running centrally on a single web UI node.

**Configuration Change. ** This feature is available starting from Momentum 3.0.13.

Sites with large numbers of bindings and a highly contended disk subsystem will need to enable the `watchlist_only` option to track bounces for domains on the watchlist only. In version 3.0.13 the default value for this option is `false`. As of version 3.0.14, the default value for this option is `true`. This reduces the amount of data generated and disk i/o.

The watchlist is a schema that is created automatically in the `ecelerity` PostgreSQL database. The `rt_stats_watchlist_only` option also needs to be enabled in the `ec_rotate.conf` file. For more information see [the section called “The `ec_rotate.conf` File”](/momentum/3/3-reference/executable-ec-rotate#ec_rotate.conf).

Apart from these three options, all other options have been removed in version 3.0.

### <a name="idp21527744"></a> See Also

[ec_rt_stats2](/momentum/3/3-reference/executable-ec-rt-stats-2)