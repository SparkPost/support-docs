---
lastUpdated: "05/01/2024"
title: "Hardware Deployment Configuration"
description: "The Single Node Lab system is designed to support multiple functions in your environment including development testing staging and other non production roles"
---

The Single Node Lab system is designed to support multiple functions in your environment, including development, testing staging, and other non-production roles. The system deploys to a single server supporting all Momentum functionality. The Single Node Lab System should not be used for performance testing, nor it is recommended for production use due to its lack of redundancy.

### <a name="single_node_lab_hw_spec"></a> Hardware Specifications

| Resource | Specification |
| --- | --- |
| CPU Cores | 8 |
| CPU Speed | 3.2 GHz (min. 2.5 GHz) |
| Memory | 32 GiB (min. 16 GiB) RAM |
| Network Interface | 1 Gbps NIC |

__NOTE:__ If running in cloud environments, CPU-optimized instances are recommended over general-purpose and memory-optimized instances.

### <a name="single_node_lab_storage_array"></a> Storage Configuration

| Array | Mount Points | Configuration |
| --- | --- | --- |
| All Storage |   | 4 x 150 GiB 15k RPM HDD |
| Message Spools* | `/var/spool/ecelerity` | 2 x 150 GiB in RAID1 |
| OS<br>App Binaries<br>Logs<br>Platform DB<br>Analytics DB | `/` (root)<br>`/opt/msys`<br>`/var/log/ecelerity`<br>`/var/db/cassandra`<br>`/var/db/vertica` | 2 x 150 GiB in RAID1 |

(*) _This array should be dedicated to the spools._

### <a name="single_node_lab_ref_meas"></a> Reference Measurements

With the hardware specifications above, the system was able to sustain an ESMTP injection rate of:

- 1.8 M messages/hour
- 100 kiB each message

with:

- CPU Usage: __65%__ (5-6 cores out of 8)
- Memory usage:
    - Virtual: __2.2 GiB__
    - Resident: __500 MiB__
