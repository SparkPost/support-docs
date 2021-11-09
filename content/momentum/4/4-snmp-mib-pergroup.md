---
lastUpdated: "03/26/2020"
title: "Per-group (binding) Metrics, 1.3.6.1.4.1.19552.1.3"
description: "These act as a supplement to the MTA MIB defined group statistics so that the stat watcher can record active delayed queues G 1 is the MTA Group Index ID see RFC 2789 MTA MIB and Section B 1 1 Determining the ID for an MTA Group Index ID The..."
---

These act as a supplement to the MTA-MIB defined group statistics, so that the stat watcher can record active/delayed queues. `G+1` is the MTAGroupIndexID (see RFC 2789 MTA MIB and [“Determining the ID for an MTAGroupIndexID”](/momentum/4/4-snmp-mib#snmp-mib-MTAGroupIndexID)). The metrics are as follows:

*   1.3.6.1.4.1.19552.1.3.1.G+1: counter, active queue size

*   1.3.6.1.4.1.19552.1.3.2.G+1: counter, delayed queue size

*   1.3.6.1.4.1.19552.1.3.3.G+1: counter, failed message count

*   1.3.6.1.4.1.19552.1.3.4.G+1: string, binding name (matches MTA MIB)