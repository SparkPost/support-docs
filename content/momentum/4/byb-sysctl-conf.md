---
lastUpdated: "11/04/2024"
title: "Adjusting /etc/sysctl.conf"
description: "Momentum 4 uses a large number of connections and is able to establish them quickly This can overwhelm the operating system if special parameters are not used These issues can be addressed by configuring the following lines in etc sysctl conf These options are described below net ipv 4 tcp..."
---

Momentum 4 uses a large number of connections and is able to establish them quickly. This can overwhelm the operating system if special parameters are not used. These issues can be addressed by configuring the following lines in `/etc/sysctl.conf`:

```
fs.file-max = 9721865

net.core.netdev_max_backlog = 262144
net.core.optmem_max = 16777216
net.core.rmem_default = 67108864
net.core.rmem_max = 67108864
net.core.somaxconn = 8192
net.core.wmem_default = 67108864
net.core.wmem_max = 67108864

net.ipv4.tcp_base_mss = 1024
net.ipv4.tcp_fastopen = 1
net.ipv4.tcp_fin_timeout = 15
net.ipv4.tcp_max_syn_backlog = 65535
net.ipv4.tcp_max_tw_buckets = 2000000
net.ipv4.tcp_mem = 2885568	3847424	67108864
net.ipv4.tcp_mtu_probing = 1
net.ipv4.tcp_rmem = 4096	87380	67108864
net.ipv4.tcp_slow_start_after_idle = 0
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_wmem = 4096	65536	67108864
net.ipv4.udp_mem = 2885568	3847424	67108864

vm.max_map_count = 1048575
```
