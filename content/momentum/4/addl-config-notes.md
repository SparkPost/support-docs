---
lastUpdated: "03/26/2020"
title: "Additional Configuration Notes"
description: "Momentum writes a copy of every message to the spool disk to assure no loss of messages Sending at high volumes requires sufficient disk IOP capacity particularly for the spool disk Message Systems recommends the use of ext 4 file systems You can also use SA Ns or network attached..."
---

### <a name="notes.file.system"></a> File System

Momentum writes a copy of every message to the spool disk to assure no loss of messages. Sending at high volumes requires sufficient disk IOP capacity, particularly for the spool disk. Message Systems recommends the use of ext4 file systems. You can also use SANs or network attached file systems; however, these storage options introduce additional network IO and latency that can degrade performance. Make sure you account for this additional network traffic or consider a separate network for the storage components.

### <a name="notes.memory.speed"></a> Memory Speed

Momentum is a memory and CPU intensive application. For optimal performance, the system memory must operate at 1866 MHz or faster.

### <a name="notes.network.interface"></a> Network Interface

Ensure that you are running on a kernel that is 2.6.18-194 or newer. This will help you avoid bugs that were found in previous Linux kernels related to Broadcom NICs. Also, if you build custom kernels, review RedHat bug numbers 587799 and 581148 for more information.

### <a name="notes.noatime"></a> noatime

Momentum does not require the creation, modification or access times on either the data or metadata files to be correct (or maintained). So mounting a volume with the noatime mount option will greatly reduce the number of unnecessary disk accesses. The spool array should be formatted using either the ext2 or ext4 file system. ext2 and ext4 have comparable performance, with ext4 being considered more reliable (because of journaling). ext3 can slow down performance, so is not recommended. Set the following options in your fstab:

ext2:

`LABEL=/var/spool/ecelerity /var/spool/ecelerity ext2 rw,noatime 0 2`

ext4:

`LABEL=/var/spool/ecelerity /var/spool/ecelerity ext4 rw,noatime,barrier=0 0 2`
### <a name="notes.raid"></a> RAID

RAID arrays should be configured only in RAID1 or RAID10 configurations. The Momentum software maintains a very high write load that is not suitable for a RAID5 array; therefore, RAID5 is not supported.

### <a name="notes.virtualization"></a> Virtualization

Momentum performance testing is executed on physical (non-virtualized) servers. If you run Momentum in Amazon Web Services (AWS) or OpenStack environments, or in other common virtualized environments such as VMware, you should plan for a potential loss of 20% - 30% in performance.