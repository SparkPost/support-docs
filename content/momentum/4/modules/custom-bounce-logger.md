---
lastUpdated: "03/26/2020"
title: "custom_bounce_logger – Custom Bounce Logging"
description: "Configuration Change This feature is available in Momentum 4 2 and later The custom bounce logger is similar to the bounce logger module It supports the same functionality as the bounce logger and adds the capability to append a User String to the end of each bounce record This addition..."
---

<a name="idp20849648"></a> 

**Configuration Change. ** This feature is available in Momentum 4.2 and later.

The `custom_bounce_logger` is similar to the `bounce_logger` module. It supports the same functionality as the `bounce_logger` and adds the capability to append a "User_String" to the end of each bounce record. This addition can be used to include some message context data in each bounce record.

### <a name="modules.custom_bounce_logger.configuration"></a> Configuration

The writing of custom_bounce_logger format logs is configured in your `ecelerity.conf` file. To load the custom_bounce_logger module and include the connection context variable "foo" in each log record, add the following lines to the main body of your `ecelerity.conf` file:

<a name="example.custom_bounce_logger"></a> 


```
custom_bounce_logger custom_bounce_logger1 {
    bouncelog = "/var/log/ecelerity/bouncelog.cl"
    user_string = "%{vctx_conn:foo}"
 }
```

### <a name="idp20861136"></a> See Also

[“bounce_logger – Momentum-Style Bounce Logging”](/momentum/4/modules/bounce-logger)