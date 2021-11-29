---
lastUpdated: "03/26/2020"
title: "Upgrade Ecelerity on the Remaining Platform Nodes"
description: "Upgrade the packages on the remaining Platform Nodes Upgrade the RPM packages with yum this includes all Momentum and third party packages If you are performing an upgrade on a Combined Node you must exclude Vertica Start Momentum If Ecelerity fails to start due to a licensing issue copy your..."
---

Upgrade the packages on the **remaining Platform Nodes** .

1.  Upgrade the RPM packages with yum (this includes all Momentum and third party packages).

    `yum --disablerepo=* --config momentum.repo --enablerepo=momentum upgrade`
    ### Warning

    If you are performing an upgrade on a Combined Node, you must exclude Vertica.

    `yum --disablerepo=* --config momentum.repo --enablerepo=momentum upgrade --exclude=msys-vertica`
2.  Start Momentum.

    `service ecelerity start`
    ### Note

    If Ecelerity fails to start due to a licensing issue, copy your license to the `/opt/msys/ecelerity/etc/license` file **on all nodes** .