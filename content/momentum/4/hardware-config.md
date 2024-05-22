---
lastUpdated: "05/01/2024"
title: "Hardware Deployment Configuration"
description: "The Single Node Lab system is designed to support multiple functions in your environment including development testing staging and other non production roles"
---

The Single Node Lab system is designed to support multiple functions in your environment, including development, testing staging, and other non-production roles. The system deploys to a single server supporting all Momentum functionality. The Single Node Lab System should not be used for performance testing, nor it is recommended for production use due to its lack of redundancy.

<a name="single_node_lab_hw_reqs"></a> 

| Resource | Minimum Specification |
| --- | --- |
| CPU | 8 x 2.5 GHz Cores (Min Speed) |
| Memory | 16 GiB RAM |
| Network Interface | 1 GB NIC |

<a name="single_node_lab_storage_array"></a> 

| Array | Mount Points | Configuration |
| --- | --- | --- |
| All Storage |   | 4 x 150 GB 15k RPM HDD |
| Message Spools* | /var/spool/ecelerity | 2 x 150 GB in RAID1 |
| OS<br>App Binaries<br>Logs<br>Platform DB<br>Analytics DB | / (root)<br>/opt/msys<br>/var/log/ecelerity<br>/var/db/cassandra<br>/var/db/vertica | 2 x 150 GB in RAID1 |

(*) Note: This array should be dedicated to the spools.

<a name="single_node_lab_ref_env"></a>

For reference, with the following CPU configuration:

| Resource | Specification |
| --- | --- |
| Cores | 8 |
| Model | Intel(R) Xeon(R) |
| Speed | 3.6 MHz |
| Bogomips | 4800.00 |

and 16 GiB of RAM, the system was able to sustain an ESMTP injection rate of ~100 messages per second, with:

- CPU Usage: 10% (80% of one core)
- Memory usage:
    - Virtual: 2.1 GiB
    - Resident: 350 MiB
