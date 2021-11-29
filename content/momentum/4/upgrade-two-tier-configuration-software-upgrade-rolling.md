---
lastUpdated: "03/26/2020"
title: "Install the Adaptive Delivery API"
description: "You must upgrade the Analytics node first On all Analytics nodes install the following packages using the new RP Ms For a combined cluster upgrade perform this action on all nodes in the cluster On all Platform nodes install the following packages using the new RP Ms For a combined..."
---

### Note

You must upgrade the Analytics node first.

1.  On **all Analytics nodes** , install the following packages using the new RPMs. For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

    `yum install --disablerepo=* --config momentum.repo --enablerepo=momentum msys-app-adaptive-delivery-api`
2.  On **all Platform nodes** , install the following packages using the new RPMs. For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

    `yum install --disablerepo=* --config momentum.repo --enablerepo=momentum msys-app-adaptive-delivery-etl`