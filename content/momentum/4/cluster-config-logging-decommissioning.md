---
lastUpdated: "03/26/2020"
title: "Decommissioning a Log Aggregator"
description: "To decommission a log aggregator complete the following operational procedure Modify the ecelerity cluster conf file s for the affected subclusters and remove the log aggregator from the subscriber list s in the log file names Apply that configuration to the cluster Allow time for the log aggregator to drain..."
---

To decommission a log aggregator, complete the following operational procedure:

1.  Modify the `ecelerity-cluster.conf` file(s) for the affected subclusters and remove the log aggregator from the subscriber list(s) in the log file names.

2.  Apply that configuration to the cluster.

3.  Allow time for the log aggregator to drain any remaining log data from the node(s). You may opt to skip this part if you have no plan to retain this data.

4.  Remove the log aggregator from your cluster.

5.  On each of the nodes that was journalling data for that log aggregator, use the [jlogctl](/momentum/4/executable/jlogctl) tool to erase the now redundant subscriber checkpoint information from each of the jlog files.