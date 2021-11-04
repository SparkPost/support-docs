---
lastUpdated: "03/26/2020"
title: "Message Bus"
description: "The cluster utilitizes an extended virtual synchrony group communication messaging bus to share information and coordinate operations The message bus process mbusd must run on each node participating in the cluster In addition the mbusd conf configuration file must be identical across those nodes for correct operation of the cluster..."
---

The cluster utilitizes an extended virtual synchrony group communication messaging bus to share information and coordinate operations. The message bus process, mbusd, must run on each node participating in the cluster. In addition, the `mbusd.conf` configuration file must be identical across those nodes for correct operation of the cluster. We strongly recommend that the `mbus.conf` file be checked into the "global" repo so that the cluster-wide configuration replication will automatically keep each node in sync. In other words, the `mbus.conf` file is typically found at `/opt/msys/ecelerity/etc/conf/global/mbus.conf`.

**Configuration Change. ** As of version 3.4, Momentum uses [“msgc – Modules”](/momentum/3/3-reference/3-reference-modules-msgc) for cluster communication rather than `mbus`.

Message bus configuration is sensitive to your overall networking configuration, so we strongly advise that you follow these guidelines:

*   Each node must have "nodename" on the message bus.

*   The nodename must be 19 characters or less

*   The nodename must correspond to the system nodename

*   The nodename must be DNS resolvable (the DNS search path must allow resolution of the 19-character-or-less nodename)

*   The reverse lookup for the IP should resolve to the nodename

When adding new nodes to the cluster, we recommend adding the node to the `mbus.conf`, committing that change to the repository and allowing enough time for the existing nodes to pick up the change and restart their mbus daemons before you bring the daemon for the new node online.

For a description of the `mbus.conf` file see [mbus.conf](/momentum/3/3-reference/mbus-conf).