---
lastUpdated: "03/26/2020"
title: "Live Bounce Updates – Module"
description: "Momentum ships with a powerful bounce classification engine that canonicalizes bounce messages into a number of categories such as over quota or invalid user See Section 14 11 bounce classifier Bounce Classifier Over time however sites may change the error messages associated with specific bounces resulting in some messages not..."
---

<a name="idp20293200"></a> 

Momentum ships with a powerful bounce classification engine that canonicalizes bounce messages into a number of categories such as "over-quota" or "invalid user". (See [“bounce_classifier – Bounce Classifier”](/momentum/3/3-reference/modules-bounce-classifier).) Over time, however, sites may change the error messages associated with specific bounces, resulting in some messages not being canonicalized properly.

The Live Bounce Updates service provides a two-way communication mechanism between Message Systems and individual Momentum machines whereby the Momentum machine sends out unclassified bounce reasons to Message Systems via port 443 and also receives updated classification rule sets.

### Warning

If you subscribe to the Live Bounce Updates service, be sure to change the value of the bounce_classifier module option, `enable_system_updates`, to `true`. By default, this option is off. You will **not** receive live updates if you do not update this option. In version 3.1, `enable_system_updates` defaults to `true`.

Also note that as of version 3.1, the Live Bounce Updates service is provided free of charge with your support agreement. You can chose to enable this service during installation. In version 3.1, the `/opt/msys/ecelerity/etc/liveupdate.conf` is not required. For more information see [“Live Bounce Updates”](/momentum/3/3-reference/install-additional-packages#install.additional.packages.lbu).

### <a name="modules.live.bounce.updates.configuration"></a> Configuration

When you subscribe to Live Updates, bounce classification updates are automatically applied once every six hours. At the same time, any new unclassified bounce reasons will be sent to Message Systems. The `/opt/msys/ecelerity/etc/liveupdate.conf` file can be used to change this behavior. This file has two options: `BounceLiveUpdates` and `BounceFeedback`, which can be used to enable or disable installation of updates and reporting respectively.

The following would disable both Bounce Live Updates and unclassified bounce reporting.

```
BounceLiveUpdates=disabled
BounceFeedback=disabled
```

Alternately, `liveupdate.conf` can be used to enable unclassified bounce reporting even if the customer is not licensed for Bounce Live Updates:

`BounceFeedback=enabled`

The default configuration search path is used when opening the `liveupdate.conf` file, so you can put this file under revision control if you wish. To determine the best location for this file see [“The Momentum Configuration Server: ecconfigd”](/momentum/3/3-reference/conf-ecconfigd). For information on adding files to revision control see [“Best Practices for Adding Configuration Files”](/momentum/3/3-reference/conf-adding-configuration-files).

As of version 3.2, if you do not wish to leave port 443 open, you can process bounce updates manually. For instructions see [Automated Updates for the Adaptive Rules](/momentum/3/3-ad/ad-adaptive-update).

**<a name="modules.live.bounce.updates.disabling"></a> 14.44.1.1. Disabling Live Bounce Updates**

If you wish to disable Live Bounce Updates, set the configuration "BounceLiveUpdates=disabled" in `liveupdate.conf`. If `liveupdate.conf` does not exist, create `/opt/msys/ecelerity/etc/liveupdate.conf` with the entry, `BounceLiveUpdates=disabled`.

**<a name="modules.live.updates.adaptive"></a> 14.44.1.2. Adaptive Rule Updates**

**Configuration Change. ** This feature is available as of version 3.2.

As of version 3.2, the `liveupdate.conf` file is also used to configure adaptive rule updates.

If you have the adaptive module installed, and you enabled the update service during installation, the following entry is found in the `/opt/msys/ecelerity/etc/liveupdate.conf` file.

`AdaptiveLiveUpdates=enabled`

This setting enables automatic updating of the adaptive rules using port `443`. To disable adaptive updates, set this option to `disabled`. You can also choose to update adaptive rules using a proxy server or manually. For instructions see [Automated Updates for the Adaptive Rules](/momentum/3/3-ad/ad-adaptive-update).

### <a name="idp20324944"></a> See Also

[“bounce_classifier – Bounce Classifier”](/momentum/3/3-reference/modules-bounce-classifier), [“bounce_classifier_override – The Bounce Classifier Override Module”](/momentum/3/3-reference/3-reference-modules-bounce-classifier-override), [“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive)