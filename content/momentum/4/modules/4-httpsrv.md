---
lastUpdated: "03/26/2020"
title: "httpsrv – HTTP Server"
description: "The httpsrv module is the HTTP server infrastructure module It along with the HTTP Listener enables you to use the REST API The httpsrv module must be loaded in the msg gen conf file as follows This module only supports the two options common to all modules namely enabled and..."
---

The httpsrv module is the HTTP server infrastructure module. It, along with the [HTTP_Listener](/momentum/4/http-listener), enables you to use the REST API.

### <a name="modules.httpsrv.config"></a> Configuration

The httpsrv module must be loaded in the `msg_gen.conf` file, as follows:

`httpsrv { }`

This module only supports the two options common to all modules, namely `enabled` and `debug_level`.

For more information about the `debug_level` option, see [“Module Debugging”](/momentum/4/4-module-config#module_config.debugging).