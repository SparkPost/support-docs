---
lastUpdated: "03/26/2020"
title: "Software Upgrade"
description: "You must upgrade the Analytics packages first Install the following Analytics packages using the new RP Ms Install the following Platform packages using the new RP Ms..."
---

### Note

You must upgrade the Analytics packages first.

1.  Install the following Analytics packages using the new RPMs:

    `yum install --disablerepo=* --enablerepo=momentum msys-app-adaptive-delivery-api`
2.  Install the following Platform packages using the new RPMs:

    `yum install --disablerepo=* --enablerepo=momentum msys-app-adaptive-delivery-etl`