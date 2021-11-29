---
lastUpdated: "03/26/2020"
title: "Environmental Considerations"
description: "Momentum can send very high volumes of traffic however it can be constrained by external factors in the deployment environment such as network throughput You should consider the impact of Momentum traffic volumes on your environment You must consider the total bandwidth required to support your traffic volumes A single..."
---

Momentum can send very high volumes of traffic; however, it can be constrained by external factors in the deployment environment, such as network throughput. You should consider the impact of Momentum traffic volumes on your environment.

### <a name="hardware.environmental.external_bandwidth"></a> External Network Bandwidth

You must consider the total bandwidth required to support your traffic volumes. A single node can readily saturate a one Gbps Network Interface Card (NIC). This is accounted for in the configurations specified below. It is also important to consider the total volumes of the entire cluster. It is possible to saturate a one Gbps network. It should also be noted that larger message sizes saturate available network bandwidth more quickly than smaller message sizes. Depending upon your expected message size, this can be an extremely important consideration when calculating rough estimates of required network bandwidth.

### <a name="hardware.environmental.firewall"></a> Firewall

Momentum’s queuing architecture allows delivery over hundreds or even thousands of parallel connections. Furthermore, Adaptive delivery rules allow for multiple parallel connections to receiving ISPs. Momentum takes full advantage of parallel connections to maximize delivery throughput. Firewalls need to support high connection volumes and bandwidth requirement of the total volume. Additionally, the firewall should not be stateful as firewalls are not able to keep up with the session management.

### <a name="hardware.environmental.internal_bandwidth"></a> Internal Network Bandwidth

When sending transactional or SMTP traffic into Momentum, the injection network must match the bandwidth of the external network.