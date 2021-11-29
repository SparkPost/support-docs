---
lastUpdated: "03/26/2020"
title: "Configuring Momentum to Use the Injector"
description: "Messages are injected into Momentum by activating the httpsrv restinjector and HTTP Listener modules A simple configuration follows Example 2 1 Configuring Momentum for REST Injection Manually changing the ecelerity conf file is described in Best Practices for Manually Changing Configuration Files You can also make these changes through the..."
---


Messages are injected into Momentum by activating the `httpsrv`, `restinjector` and HTTP_Listener modules. A simple configuration follows:

<a name="rest.injector.configuration"></a> 


```
# Set the debugging level for the http server
httpsrv {debug_level = "debug"}

# Set up the http listener
HTTP_Listener {
  Listen ":8081" {}
}

# Activate the REST API for injection
restinjector {}
```

Manually changing the `ecelerity.conf` file is described in "[Best Practices for Manually Changing Configuration Files](/momentum/3/3-reference/conf-manual-changes)". You can also make these changes through the Momentum web console.

### Note

Unlike the SMTP listener, there is no `mcmt_reception` option within the HTTP_Listener scope. *This listener is always MCMT enabled* .

Configuration is described in detail in the following sections.

## <a name="rest.httpsrv"></a> The httpsrv and restinjector Modules

These modules only support the two options common to all modules, namely `enabled` and `debug_level`. In [“Configuring Momentum for REST Injection”](/momentum/3/3-rest/rest-configuring#rest.injector.configuration) the debug level is set to `debug` for test purposes only.

For more information about the `debug_level` option see "[Module Debugging](/momentum/3/3-reference/modules-overview-implicit#modules.overview.debugging)".

### Note

Setting the `debug_level` to `debug` results in numerous `paniclog.ec` entries and can quickly use up disk space.

If you are adding these modules through the web UI, you must add the httpsrv module and commit this change before you can add the HTTP_Listener.