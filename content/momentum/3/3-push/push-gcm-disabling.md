---
lastUpdated: "03/26/2020"
title: "Disabling GCM"
description: "If you enable GCM at the domain level you can disable GCM for a specific domain by removing the routes and the delivery method options from the scope where you wish to disable GCM In Example 7 1 Configuring for GCM all you need do is remove the GCM related..."
---

If you enable GCM at the domain level you can disable GCM for a specific domain by removing the `routes` and the `delivery_method` options from the scope where you wish to disable GCM. In [“Configuring for GCM”](/momentum/3/3-push/push-gcm-using#push.gcm.configuring.gcm) all you need do is remove the GCM-related options from any Google push domains that you have defined. (*Note*: Apps are domain-specific so if you need to disable notifications for a specific app, disable the appropriate domain.)

### Note

If you have some domains that are GCM enabled and some that are not, do not configure GCM-related options in a global context (excepting the HTTP options shown at [“HTTP Protocol Configuration”](/momentum/3/3-push/push-gcm-other-options#push.gcm.http.options) which are identical for all domains). Only set them within the domain scope as shown in [“Configuring for GCM”](/momentum/3/3-push/push-gcm-using#push.gcm.configuring.gcm).

To disable GCM entirely, remove the `gcm` module, the gcm_logger module and any options used to configure GCM.