---
title: "Chapter 20. Configuring Inbound Mail Service Using HTTP"
description: "The HTTP Listener is the listener that enables you to inject messages using HTTP and to use the REST API The HTTP Listener is configured in the msg gen conf file that is included from within ecelerity conf and specifies the end point s on which Momentum should listen for..."
---

[navigation path="/4/http_listener"]

The HTTP_Listener is the listener that enables you to inject messages using HTTP and to use the REST API.

## <a name="http_listener.config"></a> 20.1. HTTP_Listener Configuration

The HTTP_Listener is configured in the `msg_gen.conf` file that is included from within `ecelerity.conf` and specifies the end-point(s) on which Momentum should listen for incoming HTTP connections. The following is an example configuration:

```
HTTP_Listener {
  Listen ":2081" {}
}
```

By default, the HTTP_Listener listens on port 2081.

### Note

In version 4.0, the API endpoints were accessed on port 8081\. As of version 4.1, no explicit port number is required to access the API endpoints.

For details about the non-module specific configuration options that are valid in the HTTP_Listener and its nested scopes, refer to [Chapter 66, *Configuration Options Summary*](config.options.summary "Chapter 66. Configuration Options Summary") .

Modules and their configuration options are discussed in the [Chapter 71, *Modules Reference*](modules "Chapter 71. Modules Reference") .

For general information regarding listeners, see [Section 15.4, “Listeners”](listeners "15.4. Listeners").