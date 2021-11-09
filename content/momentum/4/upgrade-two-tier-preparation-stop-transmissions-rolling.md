---
lastUpdated: "03/26/2020"
title: "Restore Transmissions to the First Platform Node and Stop Transmissions to all other Platform Nodes"
description: "On all Analytics nodes edit opt msys 3rd Party nginx conf d momo upstream conf and restore the line identifying the first Platform node For a combined cluster upgrade perform this action on all nodes in the cluster Reload the NGINX configuration On all Analytics nodes edit opt msys 3rd..."
---

1.  On **all Analytics nodes** , edit `/opt/msys/3rdParty/nginx/conf.d/momo_upstream.conf` and restore the line identifying the first Platform node. For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

2.  Reload the NGINX configuration.

    `pssh -h /var/tmp/vertica-hosts-file "/etc/init.d/msys-nginx reload"`
3.  On **all Analytics nodes** , edit `/opt/msys/3rdParty/nginx/conf.d/momo_upstream.conf` and comment out the lines identifying all nodes other than the first Platform node. For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

4.  Reload the NGINX configuration.

    `pssh -h /var/tmp/vertica-hosts-file "/etc/init.d/msys-nginx reload"`
5.  Allow all other nodes time to finish generation.

    ```
    $ /opt/msys/ecelerity/bin/ec_console
    16:26:02 /tmp/2025> msg_gen joblist   
    Job: 84158406797069455 jctl: 4 Restarts: 0 resync: 0 complete: 0 del_pend: 0
          inprog: 1 Recips:    100  LastStart:      1 worker(count: 1 complete: 0)

          own  start count s_recip s_count s_total complete fail status state restart seqno finish
            4      1   100       1     100       0        0    0      0     0       0     1      0
    Job: 84158406797069346 jctl: 4 Restarts: 0 resync: 0 complete: 0 del_pend: 0
          inprog: 1 Recips:    100  LastStart:      1 worker(count: 1 complete: 0)

          own  start count s_recip s_count s_total complete fail status state restart seqno finish
            4      1   100       1     100       0        0    0      0     0       0     1      0

    16:26:06 /tmp/2025> msg_gen joblist                                                                                          
    Ok
    ```