---
lastUpdated: "05/21/2024"
title: "Production Environment Configurations"
description: "This section provides hardware specifications for different target volume levels. All systems are rated for use with CPU utilization at 50% in order to accommodate traffic spikes. All volumes are specified with the assumption of an average message size of 100 kB."
---

This section provides hardware specifications for different target volume levels. All systems are rated for use with CPU utilization at 50% in order to accommodate traffic spikes. All volumes are specified with the assumption of an average message size of 100 kB.

### <a name="production.config.basic.cluster"></a> Enterprise Basic Cluster

The Enterprise Basic Configuration consists of three nodes running all roles with the resources specified below. The system supports the following performance ratings.

<a name="enterprise_basic_performance_ratings"></a> 

| Node Capacity | Cluster Capacity<br><em>(2 Nodes Operational)</em> | Peak Cluster Capacity<br><em>(3 Nodes Operational)</em> |
| --- | --- | --- |
| 500,000 msgs/hr | 1 M msgs/hr | 1.5 M msgs/hr |

<a name="enterprise_basic_cluster_hw_reqs"></a> 

| Resource | Minimum Specification |
| --- | --- |
| CPU | 8 x 2.5 GHz Cores (Min Speed) |
| Memory | 32 GB RAM |
| Network Interface | 1 GB NIC |

<a name="enterprise_basic_cluster_storage_array"></a> 

| Array | Mount Points | Configuration |
| --- | --- | --- |
| All Storage |   | 6 x 300 GB 15k RPM HDD |
| Message Spools* | /var/spool/ecelerity | 2 x 300 GB in RAID1 |
| OS<br>App Binaries<br>Logs<br>Platform DB<br>Analytics DB | / (root)<br>/opt/msys<br>/var/log/ecelerity<br>/var/db/cassandra<br>/var/db/vertica | 2 x 300 GB in RAID1 |

(*) Note: This array should be dedicated to the spools.

### <a name="production.config.standard.cluster"></a> Enterprise Standard Cluster

The Enterprise Standard Configuration consists of three nodes running all roles with the resources specified below. The system supports the following performance ratings.

<a name="enterprise_standard_performance_ratings"></a> 

| Node Capacity | Cluster Capacity<br><em>(2 Nodes Operational)</em> | Peak Cluster Capacity<br><em>(3 Nodes Operational)</em> |
| --- | --- | --- |
| 1 M msgs/hr | 2 M msgs/hr | 3 M msgs/hr |

<a name="enterprise_standard_cluster_hw_reqs"></a> 

| Resource | Minimum Specification |
| --- | --- |
| CPU | 16 x 2.5 GHz Cores (Min Speed) |
| Memory | 64 GB RAM |
| Network Interface | 1 GB NIC |

<a name="enterprise_standard_cluster_storage_array"></a> 

| Array | Mount Points | Configuration |
| --- | --- | --- |
| All Storage |   | 8 x 300 GB 15k RPM HDD |
| Message Spools* | /var/spool/ecelerity | 4 x 300 GB in RAID10 |
| OS<br>App Binaries<br>Logs<br>Platform DB | / (root)<br>/opt/msys<br>/var/log/ecelerity<br>/var/db/cassandra | 2 x 300 GB in RAID1 |
| Analytics DB* | /var/db/vertica | 2 x 300 GB in RAID1 |

(*) Note: These arrays should be dedicated.

### <a name="production.config.plus.cluster"></a> Enterprise Plus Cluster

The Enterprise Plus Configuration consists of three nodes running all roles with the resources specified below. The system supports the following performance ratings.

<a name="enterprise_plus_performance_ratings"></a> 

| Node Capacity | Cluster Capacity<br><em>(2 Nodes Operational)</em> | Peak Cluster Capacity<br><em>(3 Nodes Operational)</em> |
| --- | --- | --- |
| 1.5 M msgs/hr | 3 M msgs/hr | 4.5 M msgs/hr |

<a name="enterprise_plus_cluster_hw_reqs"></a> 

| Resource | Minimum Specification |
| --- | --- |
| CPU | 20 x 2.5 GHz Cores (Min Speed) |
| Memory | 64 GB RAM |
| Network Interface | 1 GB NIC |

<a name="enterprise_plus_cluster_storage_array"></a> 

| Array | Mount Points | Configuration |
| --- | --- | --- |
| All Storage |   | 8 x 600 GB 15k RPM HDD |
| Message Spools* | /var/spool/ecelerity | 4 x 600 GB in RAID10 |
| OS<br>App Binaries<br>Logs<br>Platform DB | / (root)<br>/opt/msys<br>/var/log/ecelerity<br>/var/db/cassandra | 2 x 600 GB in RAID1 |
| Analytics DB* | /var/db/vertica | 2 x 600 GB in RAID1 |

(*) Note: These arrays should be dedicated.

### <a name="production.config.scaling.cluster"></a> Enterprise Scaling Cluster

The Enterprise Scaling Configuration consists of both an Analytics Cluster and a Platform Cluster. Because large volume deployments require more resources for sending than for analytics, Message Systems recommends separating the Platform and Analytics roles to separate clusters. This configuration allows you to scale the Platform cluster independent of the analytics cluster. The baseline configuration consists of a three-node Analytics Cluster and a three-node Platform Cluster. You may scale sending capacity by incrementally adding Platform nodes to the cluster as needed.

The baseline system supports the following performance ratings.

<a name="enterprise_scaling_performance_ratings"></a> 

| Baseline Cluster Capacity<br><em>(2 Nodes Operational)</em> | Baseline Peak Cluster Capacity<br><em>(3 Nodes Operational)</em> | Incremental Platform Node Capacity |
| --- | --- | --- |
| 3 M msgs/hr | 4.5 M msgs/hr | 1.5 M msgs/hr |

<a name="enterprise_scaling_platform_node_cluster_hw_reqs"></a> 

| Resource | Minimum Specification |
| --- | --- |
| CPU | 20 x 2.5 GHz Cores (Min Speed) |
| Memory | 64 GB RAM |
| Network Interface | 1 GB NIC |

<a name="enterprise_scaling_platform_node_cluster_storage_array"></a> 

| Array | Mount Points | Configuration |
| --- | --- | --- |
| All Storage |   | 6 x 600 GB 15k RPM HDD |
| Message Spools* | /var/spool/ecelerity | 4 x 600 GB in RAID10 |
| OS<br>App Binaries<br>Logs<br>Platform DB | / (root)<br>/opt/msys<br>/var/log/ecelerity<br>/var/db/cassandra | 2 x 600 GB in RAID1 |

(*) Note: This array should be dedicated to the spools.

<a name="enterprise_scaling_analytics_node_cluster_hw_reqs"></a> 

| Resource | Minimum Specification |
| --- | --- |
| CPU | 20 x 2.5 GHz Cores (Min Speed) |
| Memory | 64 GB RAM |
| Network Interface | 1 GB NIC |

<a name="enterprise_scaling_analytics_node_cluster_storage_array"></a> 

| Array | Mount Points | Configuration |
| --- | --- | --- |
| All Storage |   | 4 x 600 GB 15k RPM HDD |
| OS<br>App Binaries<br>Logs | / (root)<br>/opt/msys<br>/var/log/ecelerity | 2 x 600 GB in RAID1 |
| Analytics DB* | /var/db/vertica | 2 x 600 GB in RAID1 |

(*) Note: This array should be dedicated to the Analytics DB.
