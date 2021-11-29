---
lastUpdated: "03/26/2020"
title: "APN Modules"
description: "In order to configure Momentum for AP Ns you must use the apn module If you wish to log AP Ns notifications then you will also need to configure the apn logger module Configuration Change This feature is available as of version 3 5 4 The apn module is a..."
---


In order to configure Momentum for APNs you must use the `apn` module. If you wish to log APNs notifications, then you will also need to configure the `apn_logger` module.

## <a name="apns.apn_module"></a> apn Module

**Configuration Change. ** This feature is available as of version 3.5.4.

The apn module is a requirement if you wish to use the Apple Push Notification service.

### <a name="apns.apn_module.configuration"></a> Configuration

`apn { }`

There are no options for this module other than the two common to all modules, namely `enabled` and `debug_level`. For more information see [Module Overview](/momentum/3/3-reference/modules-overview-implicit).

In a cluster configuration, the apn module must be enabled on each MTA node used to deliver Apple Push notifications.