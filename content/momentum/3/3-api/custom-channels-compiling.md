---
lastUpdated: "03/26/2020"
title: "Compiling in C"
description: "To compile using Momentum Installation do the following Load the development tools Install gcc For current releases of Momentum that support Mobile Push change the include statement in opt msys delivery modules delivery http httpclnt h from include modules delivery ec delivery h to include modules delivery ec pd h..."
---

To compile using Momentum Installation, do the following:

*   Load the development tools.

*   Install **gcc**.

*   For current releases of Momentum that support Mobile Push, change the include statement in `/opt/msys/delivery/modules/delivery/http/httpclnt.h` from `#include modules/delivery/ec_delivery.h` to `#include modules/delivery/ec_pd.h`.

*   Use `/opt/msys/ecelerity/bin/ecxs -c <source_name.c>`.

*   Be sure to add the httpclnt module to your **.ecm** file.