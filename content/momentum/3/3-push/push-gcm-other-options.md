---
lastUpdated: "03/26/2020"
title: "Other Configuration Options Used with GCM"
description: "Other options not directly related to GCM must also be set in order to use this service As of Momentum version 3 5 6 the delivery method option includes a number of additional connection types gcm an HTTP protocol being one of them When using GCM you must set delivery..."
---

Other options not directly related to GCM must also be set in order to use this service.

### <a name="push.gcm.other.options.delivery_method"></a> `delivery_method` and Related Options

As of Momentum version 3.5.6, the [delivery_method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method) option includes a number of additional connection types, `gcm`, an HTTP protocol, being one of them. When using GCM, you must set `delivery_method` to this value.

In order to configure Momentum for delivery of Google push notifications you must also use the [routes](/momentum/3/3-reference/3-reference-conf-ref-routes) option and set the [delivery_response_timeout](/momentum/3/3-reference/3-reference-conf-ref-delivery-response-timeout) option and the [idle_timeout](/momentum/3/3-reference/3-reference-conf-ref-idle-timeout) options. Configure these options in the following way:

```
domain "gcm.example.com"{
  ...
  idle_timeout = 10
  delivery_response_timeout = 1000
  delivery_method = "gcm"
  routes = ("gcm://android.google.apis.com?port=443")
}
```

Set `routes` to the `gcm` protocol, the `android.google.apis.com` URL and use port `443`. For testing purposes you can set the [gcm_dry_run](/momentum/3/3-push/push-gcm-gcm-dry-run) option to `true`. There is no "sandbox" URL as there is for Apple push.

### Note

If you change `routes` at runtime and issue the ec_console command config reload, any messages that are in process will continue to use the currently active connection. As soon as any active messages are sent, the connection will close and any new connections will use the latest configuration values.

The `delivery_reponse_timeout` option must be set and it must be `1000` (1 sec) or greater. This is the maximum time that GCM will wait for a response. If it does not get a response in that amount of time it will temporarily fail the message and go on to the next one. A setting of less than `1000` will not work for GCM.

When used with GCM, `idle_timeout` specifies the time (in seconds)that a connection will remain open while waiting for the current active message (or for another message to be sent). It must be a positive integer greater than `0`. If the timer expires it will close the connection. In other delivery protocols, `0` indicates that the the connection is a persistent connection. GCM does not support persistent connections and for this reason `idle_timeout` should never be set to `0`.

**<a name="push.gcm.http.options"></a> 5.2.1.1. HTTP Protocol Configuration**<a name="idp745776"></a> 

Google push notifications also make use of the generic HTTP protocol configuration options introduced in Momentum 3.5.6. You must configure the following options with the values indicated:

```
http_uri = "/gcm/send"
http_host = "android.google.apis.com"
```

### Note

You can view Google push connections using the console command, [show outbound](/momentum/3/3-reference/3-reference-console-commands-show-outbound).

You need not configure the following options because their default values, `POST` and `1.1`, meet the GCM requirements:

```
http_method = "post" 
http_version = "1.1"
```

Do not use `http_basic_auth` with GCM because it defaults to `NULL`.

For a detailed description of these options see [http_basic_auth](/momentum/3/3-reference/3-reference-conf-ref-http-basic-auth) and following.

### <a name="push.gcm.listener"></a> Permit MCMT Reception

Google notifications are sent as Multi-Channel Message Type (MCMT) messages so a listener must be configured to allow this. To allow reception of injected MCMT messages set the `MCMT_Reception` option within the ESMTP_Listener as shown below:

```
esmtp_listener {
  listen ":25"{
    mcmt_reception = "allow"
  }
}
```

Messages with MCMT content will be accepted and they will be directed to the GCM module based on the envelope recipient domain.

If MCMT messages are not allowed, notifications will either be treated as regular email or rejected depending on the settings. For more information about this option see [The mcmt_reception Option](/momentum/mobile/mobile-reference/mm-7-mcmt-reception).

<a name="push.gcm.listener.rest"></a> 

**Using the REST Injector**

Momentum supports an HTTP REST injection API and has done so since version 3.1.4\. You can use REST injection and an HTTP Listener to send push notifications. Unlike the SMTP listener, there is no `mcmt_reception` option within the HTTP_Listener scope. *This listener is always MCMT enabled* . You can add an HTTP listener by adding the following stanza to your `ecelerity.conf` file:

```
http_listener {
  listen ":8081" {}
}
```

To use REST injection you must also configure the httpsrv and restinjector modules as described in [The Momentum REST Injector](https://support.messagesystems.com/docs/web-mc-rest/).

You can create a MCMT message as described at [“Message Injection and the GCM Payload”](/momentum/3/3-push/push-gcm-using#push.gcm.using.mcmt).

### <a name="push.gcm.other.options.tls"></a> TLS

GCM requires a secure connection. For this reason the following Momentum TLS options must be set:

*   [tls](/momentum/3/3-reference/conf-ref-tls) – set this option to `required`.

*   [tls_verify](/momentum/3/3-reference/conf-ref-tls-verify) – set this option to `no`

Follow the preceding links for information about configuring these options.

### <a name="push.gcm.outbound.connections"></a> Outbound Connections and GCM

Connections to GCM are established on demand. To handle heavy traffic from a specific customer to a particular app, multiple connections to GCM can be established. Use the configuration option [max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-max-outbound-connections) to control the maximum number of connections to GCM on a domain/binding level. Notifications to an app will be spread over all available connections.

A connection will remain open until one of the following events occurs:

*   The connection has been idle for the configured length of time

*   An error response is received from Google

*   There are exceptions on the connection

*   License expiration

### <a name="push.gcm.momentum"></a> Momentum and GCM

In order to set up GCM you should also be familiar with the following sections of the Momentum Reference Manual (3.x):

*   [domain scope](/momentum/3/3-reference/3-reference-conf-ref-domain) – To configure GCM for a specific domain, you will need to use this option. A Google GCM domain is characterized as a domain that has the `routes` option specified as `"gcm://android.google.apis.com?port=443"` in the domain stanza. It is suggested that you include `GCM` or `gcm` as part of the name as a convention but it is not a requirement.

*   [Configuration Scopes and Fallback](/momentum/3/3-reference/3-reference-ecelerity-conf-fallback) – This section of the manual describes how configuration options are scoped

*   [Manually Changing Configuration Files](/momentum/3/3-reference/conf-manual-changes) – To configure GCM, you will need to change the `ecelerity.conf` file.

*   [Logging](/momentum/3/3-reference/operations-logging) – This section describes how the Momentum logging API works. The gcm_logger works in the same way as other Momentum loggers.