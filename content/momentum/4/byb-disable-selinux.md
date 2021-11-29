---
lastUpdated: "03/26/2020"
title: "Disable SELinux"
description: "Red Hat uses the Security Enhanced Linux SE Linux security policies Running Momentum 4 with SE Linux enabled is not supported To disable SE Linux edit etc selinux config and set SELINUX disabled then run setenforce 0..."
---

Red Hat uses the Security-Enhanced Linux (SELinux) security policies. Running Momentum 4 with SELinux enabled is not supported. To disable SELinux, edit `/etc/selinux/config` and set `SELINUX=disabled` then run **`setenforce 0`**   .