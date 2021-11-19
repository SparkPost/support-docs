---
lastUpdated: "03/26/2020"
title: "Log Aggregation"
description: "The log aggregation capability of the cluster provides a reliable durable centralized logging facility The default cluster configuration implements centralized logging in addition to the regular loggers and maintains its own local logs in the usual location There is no requirement that log aggregation be enabled These logs are gathered..."
---


The log aggregation capability of the cluster provides a reliable, durable centralized logging facility. The default cluster configuration implements centralized logging in addition to the regular loggers and maintains its own local logs in the usual location.

There is no requirement that log aggregation be enabled. These logs are gathered for the customer's own use and are not used by any Momentum software. However, log aggregation means that you can see any log from any node on any date by going to the `/var/log/eccluster` directory on the log aggregator (if you use the default configuration).

## <a name="log_aggregation.configuration"></a> Configuring Log Aggregation

The following elements are required in order to aggregate log files on the log aggregator:

*   Define logger modules in `ecelerity-cluster.conf`. See [Aggregated Cluster Node Logging](/momentum/4/config/ref-ecelerity-cluster-conf#conf.ref.ecelerity_cluster.conf.logging) .

*   Define the `logs` dictionary within the cluster module scope in `ecelerity-cluster.conf` See [logs](/momentum/4/modules/4-modules-cluster#option.logs.dictionary) .

    You can view the configuration by issuing the console command **config show cluster**              from the console on a cluster node.

*   Define the `Logs` stanza in `eccluster.conf`. See [Log Aggregation](/momentum/4/config/ref-eccluster-conf#conf.ref.eccluster.conf.logs) .