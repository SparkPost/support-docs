---
lastUpdated: "03/26/2020"
title: "Upgrade Remaining RPMs on Analytics Nodes"
description: "If you are performing an upgrade on a Combined Node skip this section Upgrade existing RP Ms on all Analytics nodes except Vertica since that was done in the previous section..."
---

### Note

If you are performing an upgrade on a Combined Node, skip this section.

1.  Upgrade existing RPMs on **all Analytics nodes**                 except Vertica (since that was done in the previous section).

    `yum upgrade --disablerepo=* --config momentum.repo --enablerepo=momentum --exclude=msys-vertica`