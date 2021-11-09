---
lastUpdated: "03/26/2020"
title: "GCM Modules"
description: "In order to configure Momentum for GCM you must use the gcm module If you wish to log GCM notifications then you will also need to configure the gcm logger module Configuration Change This feature is available as of version 3 5 5 The gcm module is a requirement if..."
---


In order to configure Momentum for GCM you must use the `gcm` module. If you wish to log GCM notifications, then you will also need to configure the `gcm_logger` module.

## <a name="push.modules.gcm"></a> gcm Module

**Configuration Change. ** This feature is available as of version 3.5.5.

The gcm module is a requirement if you wish to use the Google Cloud Messaging service. It creates the JSON-encoded message for delivery to the GCM server using HTTP Post requests. This module also handles HTTP Post *responses*, implementing a mechanism to retry messages and provide permanent failure processing for messages that fail or are not accepted for delivery by GCM servers.

### <a name="push.configuration"></a> Configuration

`gcm {}`

There are no options for this module other than the two common to all modules, namely `enabled` and `debug_level`. For more information see [Module Overview](/momentum/3/3-reference/modules-overview-implicit).

In a cluster configuration, the gcm module must be enabled on each MTA node used to deliver Google Push notifications.

### <a name="push.gcm.context"></a> Context Variables

There is only one context variable specifically associated with Google and that is `GCM_Retry_After` which corresponds to the Google `Retry-After` field. Other context variables are the generic delivery context variables beginning with `DLV_`. For a list of these variables see [*Callouts and Push Notifications*](/momentum/3/3-push/push-generic-delivery-lua) .

You can access these variables from a script and use them to customize the behavior of Momentum or to customize the content of notifications. They are also used by the gcm_logger module.