---
lastUpdated: "05/21/2024"
title: "Production Environment Configurations"
description: "This section provides hardware specifications for different target volume levels"
---

This section provides hardware specifications for different target volume levels. The system deploys to a dedicated server supporting the cluster management and other servers supporting other typical Momentum functionalities of an MTA node.

---
> __TIP:__ If running in cloud environments, CPU-optimized instances are recommended over general-purpose and memory-optimized instances.

## <a name="production.config.cluster.manager"></a> Cluster Manager Node

The Cluster Manager is a dedicated node that aggregates the logs of all MTAs of the cluster and optionally centralizes some data storage in a PostgreSQL server. The Cluster Manager node is not intended to process any email traffic. The hardware specifications for this specific node are:

| Resource | Specification |
| --- | --- |
| CPU Cores | 8 |
| CPU Speed | 3.2 GHz (min. 2.5 GHz) |
| Memory | 16 GiB RAM |
| Network Interface | 1 Gbps NIC |
| Storage | 2 x 600 GiB 15k RPM HDD in RAID1 |

## <a name="production.config.cluster.mtas"></a> MTA Nodes

The MTA nodes are the workhorses of the Momentum cluster. The following topologies are rated for use with CPU utilization at 50% in order to accommodate traffic spikes. All volumes are specified with the assumption of an average message size of 100 kiB.

---
> __NOTE:__ The Cluster Manager node is not counted in the following configurations.
---
> __TIP:__ More the number of CPU cores in the configurations below, higher performance ratings than listed can be achieved with the [Supercharger](/momentum/4/licensed-features-supercharger) feature, i.e., configuring [multiple event loops](/momentum/4/multi-event-loops).

### <a name="production.config.basic.cluster"></a> Enterprise Basic

The Enterprise Basic configuration consists of three nodes running all MTA roles with the resources specified below.

#### <a name="production.config.basic.cluster.perf"></a> Performance Ratings

| MTA Node Capacity | Cluster Capacity<br><em>(2 Nodes Operational)</em> | Peak Cluster Capacity<br><em>(3 Nodes Operational)</em> |
| --- | --- | --- |
| 1.5 M msgs/hr | 3 M msgs/hr | 4.5 M msgs/hr |

#### <a name="production.config.basic.cluster.hw_specs"></a> Hardware Specifications

| Resource | Specification |
| --- | --- |
| CPU Cores | 8 |
| CPU Speed | 3.2 GHz (min. 2.5 GHz) |
| Memory | 32 GiB (min. 16 GiB) RAM |
| Network Interface | 1 Gbps NIC |

#### <a name="production.config.basic.cluster.storage_array"></a> Storage Configuration

| Array | Mount Points | Configuration |
| --- | --- | --- |
| All Storage |   | 6 x 300 GiB 15k RPM HDD |
| Message Spools* | `/var/spool/ecelerity` | 2 x 300 GiB in RAID1 |
| OS<br>App Binaries<br>Logs<br>Platform DB<br>Analytics DB | `/` (root)<br>`/opt/msys`<br>`/var/log/ecelerity`<br>`/var/db/cassandra`<br>`/var/db/vertica` | 2 x 300 GiB in RAID1 |

(*) _This array should be dedicated to the spools._

### <a name="production.config.standard.cluster"></a> Enterprise Standard

The Enterprise Standard configuration consists of three nodes running all MTA roles with the resources specified below.

#### <a name="production.config.standard.cluster.perf"></a> Performance Ratings

| MTA Node Capacity | Cluster Capacity<br><em>(2 Nodes Operational)</em> | Peak Cluster Capacity<br><em>(3 Nodes Operational)</em> |
| --- | --- | --- |
| 3 M msgs/hr | 6 M msgs/hr | 9 M msgs/hr |

#### <a name="production.config.standard.cluster.hw_specs"></a> Hardware Specifications

| Resource | Specification |
| --- | --- |
| CPU Cores | 16 |
| CPU Speed | 3.2 GHz (min. 2.5 GHz) |
| Memory | 64 GiB (min. 32 GiB) RAM |
| Network Interface | 1 Gbps NIC |

#### <a name="production.config.standard.cluster.storage_array"></a> Storage Configuration

| Array | Mount Points | Configuration |
| --- | --- | --- |
| All Storage |   | 8 x 300 GiB 15k RPM HDD |
| Message Spools* | `/var/spool/ecelerity` | 4 x 300 GiB in RAID10 |
| OS<br>App Binaries<br>Logs<br>Platform DB | `/` (root)<br>`/opt/msys`<br>`/var/log/ecelerity`<br>`/var/db/cassandra` | 2 x 300 GiB in RAID1 |
| Analytics DB* | `/var/db/vertica` | 2 x 300 GiB in RAID1 |

(*) _These arrays should be dedicated._

### <a name="production.config.plus.cluster"></a> Enterprise Plus

The Enterprise Plus configuration consists of three nodes running all MTA roles with the resources specified below.

#### <a name="production.config.plus.cluster.perf"></a> Performance Ratings

| MTA Node Capacity | Cluster Capacity<br><em>(2 Nodes Operational)</em> | Peak Cluster Capacity<br><em>(3 Nodes Operational)</em> |
| --- | --- | --- |
| 6 M msgs/hr | 12 M msgs/hr | 18 M msgs/hr |

#### <a name="production.config.plus.cluster.hw_specs"></a> Hardware Specifications

| Resource | Specification |
| --- | --- |
| CPU Cores | 32 |
| CPU Speed | 3.2 GHz (min. 2.5 GHz) |
| Memory | 64 GiB RAM |
| Network Interface | 1 Gbps NIC |

#### <a name="production.config.plus.cluster.storage_array"></a> Storage Configuration

| Array | Mount Points | Configuration |
| --- | --- | --- |
| All Storage |   | 8 x 600 GiB 15k RPM HDD |
| Message Spools* | `/var/spool/ecelerity` | 4 x 600 GiB in RAID10 |
| OS<br>App Binaries<br>Logs<br>Platform DB | `/` (root)<br>`/opt/msys`<br>`/var/log/ecelerity`<br>`/var/db/cassandra` | 2 x 600 GiB in RAID1 |
| Analytics DB* | `/var/db/vertica` | 2 x 600 GiB in RAID1 |

(*) _These arrays should be dedicated._

## <a name="production.config.scaling.cluster"></a> Enterprise Scaling Cluster

The Enterprise Scaling configuration consists of both an Analytics Cluster and a Platform Cluster. Because large volume deployments require more resources for sending than for analytics, Message Systems recommends separating the Platform and Analytics roles to separate clusters. This configuration allows you to scale the Platform cluster independent of the analytics cluster.

The baseline configuration consists of a three-node Analytics Cluster and a three-node Platform Cluster. You may scale sending capacity by incrementally adding Platform nodes to the cluster as needed.

### <a name="production.config.scaling.cluster.perf"></a> Baseline Performance Ratings

| Baseline Cluster Capacity<br><em>(2 Nodes Operational)</em> | Baseline Peak Cluster Capacity<br><em>(3 Nodes Operational)</em> | Incremental Platform Node Capacity |
| --- | --- | --- |
| 12 M msgs/hr | 18 M msgs/hr | 6 M msgs/hr |

### <a name="production.config.scaling.cluster.hw_specs"></a> Hardware Specifications

| Resource | Specification |
| --- | --- |
| CPU Cores | 32 |
| CPU Speed | 3.2 GHz (min. 2.5 GHz) |
| Memory | 64 GiB RAM |
| Network Interface | 1 Gbps NIC |

### <a name="production.config.scaling.cluster.storage_array"></a> Storage Configuration

#### <a name="production.config.scaling.cluster.storage_array.platform"></a> Platform Node

| Array | Mount Points | Configuration |
| --- | --- | --- |
| All Storage |   | 6 x 600 GiB 15k RPM HDD |
| Message Spools* | `/var/spool/ecelerity` | 4 x 600 GiB in RAID10 |
| OS<br>App Binaries<br>Logs<br>Platform DB | `/` (root)<br>`/opt/msys`<br>`/var/log/ecelerity`<br>`/var/db/cassandra` | 2 x 600 GiB in RAID1 |

(*) _This array should be dedicated to the spools._

#### <a name="production.config.scaling.cluster.storage_array.analytics"></a> Analytics Node

| Array | Mount Points | Configuration |
| --- | --- | --- |
| All Storage |   | 4 x 600 GiB 15k RPM HDD |
| OS<br>App Binaries<br>Logs | `/` (root)<br>`/opt/msys`<br>`/var/log/ecelerity` | 2 x 600 GiB in RAID1 |
| Analytics DB* | `/var/db/vertica` | 2 x 600 GiB in RAID1 |

(*) _This array should be dedicated to the Analytics DB._
