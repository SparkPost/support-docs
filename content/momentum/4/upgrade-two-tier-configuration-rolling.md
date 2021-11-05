---
lastUpdated: "03/26/2020"
title: "Rolling Upgrade - Two-Tier Configuration and Combined Node"
description: "The installation and upgrade instructions in Chapters 8 through 11 are only applicable in their entirety for Momentum 4 x releases prior to 4 2 28 For release 4 2 28 and beyond please refer to the installation and upgrade PDF documents available under the desired release's folder on the..."
---


### Warning

**The installation and upgrade instructions in Chapters 8 through 11 are only applicable in their entirety for Momentum 4.x releases prior to 4.2.28.**                                                                                                                                                 For release 4.2.28 and beyond, please refer to the installation and upgrade PDF documents available under the desired release's folder on the Message Systems Support website's [Downloads page](https://support.messagesystems.com/start.php/). If you are uncertain as to which document is applicable to your situation, please contact your technical support representative.

<a name="idp1094736"></a> 

This section documents the upgrade procedures for a local cluster of four or more nodes. This installation type assumes your cluster will not be taken offline while the upgrade is performed. This installation type can be scaled for a variety of configurations, with a minimum configuration of three Platform nodes and one Analytics node to a maximum configuration of 12 Platform nodes and 12 Analytics nodes. The most common configuration consists of three Platform nodes and three Analytics nodes.

Instructions for upgrading a combined node configuration are included as additional information in specific steps or called out in Notes or Warnings.

### Tip

In a combined node configuration, Analytics and Platform nodes are the same nodes, which means instructions will be done on all nodes unless specified otherwise. In addition, primary nodes (i.e., the first Platform node and the first Analytics node) are the same node, and this node runs the `ecconfigd` configuration manager process.

### Note

You can only perform the upgrade from Momentum 4.1-HF4\. If you are running a version of Momentum prior to 4.1-HF4, you must first upgrade to that version, then upgrade to Momentum 4.2\. In addition, you must complete the upgrade in a single session.

## <a name="upgrade.two_tier.preparation_rolling"></a> Overview

An overview of the rolling upgrade process is shown below.

1.  Pre-upgrade preparation:

    1.  Consider performing a Cassandra compaction.

    2.  Perform a Vertica repartition.

    ### Warning

    Because these steps may take four to six hours to complete, we recommend you complete them before starting the upgrade.

2.  Upgrade the first Platform node.

    1.  Stop all submissions to one node in the cluster and wait for all generations started on that node to complete.

3.  Upgrade the remaining Platform nodes.

    1.  Divert all new submissions to the first node.

    2.  Wait for all generations started on the remaining Platform nodes to complete.

    3.  Upgrade Cassandra.

    4.  Upgrade the MTA (ecelerity packages and related upgrade steps).

4.  Upgrade the Analytics nodes.

### Note

Be sure to read the [Release Notes](https://support.messagesystems.com/start.php) for the version of Momentum that you are installing.