---
lastUpdated: "03/26/2020"
title: "Restore Transmissions to the Remaining Platform Nodes"
description: "On all Analytics nodes edit opt msys 3rd Party nginx conf d momo upstream conf and restore the lines identifying all nodes other than the first Platform node For a combined cluster upgrade perform this action on all nodes in the cluster Reload the NGINX configuration..."
---

1.  On **all Analytics nodes** , edit `/opt/msys/3rdParty/nginx/conf.d/momo_upstream.conf` and restore the lines identifying all nodes other than the first Platform node. For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

2.  Reload the NGINX configuration.

    `pssh -h /var/tmp/vertica-hosts-file "/etc/init.d/msys-nginx reload"`