---
lastUpdated: "03/26/2020"
title: "Live Bounce Updates – Live Bounce Updates Service"
description: "Momentum ships with a powerful bounce classification engine that canonicalizes bounce messages into a number of categories such as over quota or invalid user Over time however sites may change the error messages associated with specific bounces resulting in some messages not being canonicalized properly The Live Bounce Updates service..."
---

<a name="idp21996832"></a> 

Momentum ships with a powerful bounce classification engine that canonicalizes bounce messages into a number of categories such as "over-quota" or "invalid user". Over time, however, sites may change the error messages associated with specific bounces, resulting in some messages not being canonicalized properly.

The Live Bounce Updates service is provided free of charge with your support agreement and is enabled by default. It provides a two-way communication mechanism between Message Systems and individual Momentum machines whereby the Momentum machine sends out unclassified bounce reasons to Message Systems via port 443 and also receives updated classification rule sets.

For information about bounce classifier override, see [“bounce_classifier_override – Override/Augment Bounce Classifications”](/momentum/4/modules/bounce-classifier-override).

### <a name="modules.live.bounce.updates.configuration"></a> Configuration

If you do not wish to leave port 443 open, you can process bounce updates manually. For instructions, see [Automated Updates for the Adaptive Rules](/momentum/3/3-ad/ad-adaptive-update).

Bounce classification updates are automatically applied every six hours. At the same time, any new unclassified bounce reasons will be sent to Message Systems. Use the `/opt/msys/ecelerity/etc/liveupdate.conf` file to change this behavior. If `liveupdate.conf` does not exist, create the file and put it under revision control. The default configuration search path is used when opening the `liveupdate.conf` file. For information on adding files to revision control, see [“Adding Configuration Files”](/momentum/4/conf-overview#conf.adding.configuration.files).

The `liveupdate.conf` file has two options: `BounceLiveUpdates` and `BounceFeedback`, which are used to enable or disable installation of updates and reporting respectively.

To disable both Bounce Live Updates and unclassified bounce reporting, set the configuration as shown below:

```
BounceLiveUpdates=disabled
BounceFeedback=disabled
```

You can also use `liveupdate.conf` to enable unclassified bounce reporting even if the customer is not licensed for Bounce Live Updates:

`BounceFeedback=enabled`**<a name="modules.live.updates.adaptive"></a> 71.44.1.1. Adaptive Rule Updates**

The `liveupdate.conf` file is also used to configure adaptive rule updates.

If you installed the adaptive module and you enabled the update service during installation, the following entry is in the `/opt/msys/ecelerity/etc/liveupdate.conf` file:

`AdaptiveLiveUpdates=enabled`

This setting enables automatic updating of the adaptive rules using port `443`. To disable adaptive updates, set this option to `disabled`. You can also choose to update adaptive rules using a proxy server or manually. For instructions, see [Automated Updates for the Adaptive Rules](/momentum/3/3-ad/ad-adaptive-update).

For information about the adaptive module, see [“adaptive – Adaptive Delivery”](/momentum/4/modules/4-adaptive).