---
lastUpdated: "03/26/2020"
title: "Configuring Inbound Mail Service Using HTTP"
description: "The HTTP Listener is the listener that enables you to inject messages using HTTP and to use the REST API The HTTP Listener is configured in the msg gen conf file that is included from within ecelerity conf and specifies the end point s on which Momentum should listen for..."
---


The HTTP_Listener is the listener that enables you to inject messages using HTTP and to use the REST API.

## <a name="http_listener.config"></a> HTTP_Listener Configuration

The HTTP_Listener is configured in the `msg_gen.conf` file that is included from within `ecelerity.conf` and specifies the end-point(s) on which Momentum should listen for incoming HTTP connections. The following is an example configuration:

```
HTTP_Listener {
  Listen ":2081" {}
}
```

By default, the HTTP_Listener listens on port 2081.

### Note

In version 4.0, the API endpoints were accessed on port 8081\. As of version 4.1, no explicit port number is required to access the API endpoints.

For details about the non-module specific configuration options that are valid in the HTTP_Listener and its nested scopes, refer to [*Configuration Options Summary*](/momentum/4/config-options-summary) .

Modules and their configuration options are discussed in the [*Modules Reference*](/momentum/4/modules/) .

For general information regarding listeners, see [“Listeners”](/momentum/4/listeners).