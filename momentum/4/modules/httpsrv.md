---
title: "71.38. httpsrv – HTTP Server"
description: "The httpsrv module is the HTTP server infrastructure module It along with the HTTP Listener enables you to use the REST API The httpsrv module must be loaded in the msg gen conf file as follows This module only supports the two options common to all modules namely enabled and..."
---

The httpsrv module is the HTTP server infrastructure module. It, along with the [HTTP_Listener](http_listener "Chapter 20. Configuring Inbound Mail Service Using HTTP"), enables you to use the REST API.

### <a name="modules.httpsrv.config"></a> 71.38.1. Configuration

The httpsrv module must be loaded in the `msg_gen.conf` file, as follows:

`httpsrv { }`

This module only supports the two options common to all modules, namely `enabled` and `debug_level`.

For more information about the `debug_level` option, see [Section 15.5.2, “Module Debugging”](module_config#module_config.debugging "15.5.2. Module Debugging").