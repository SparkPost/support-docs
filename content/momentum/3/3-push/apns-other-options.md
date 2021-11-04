---
lastUpdated: "03/26/2020"
title: "Other Configuration Options Used with APNs"
description: "Other options not directly related to AP Ns must also be set in order to use this service In order to configure Momentum for delivery of Apple push notifications you must use the routes and delivery method options You can also set the delivery response timeout and idle timeout options..."
---

Other options not directly related to APNs must also be set in order to use this service.

### <a name="apns.other.options.routes"></a> `routes` and Related Options

In order to configure Momentum for delivery of Apple push notifications you must use the [routes](/momentum/3/3-reference/3-reference-conf-ref-routes) and [delivery_method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method) options. You can also set the [delivery_response_timeout](/momentum/3/3-reference/3-reference-conf-ref-delivery-response-timeout) and [idle_timeout](/momentum/3/3-reference/3-reference-conf-ref-idle-timeout) options as needed. Set these options in the following way:

```
domain "apn_example.com"{
  ...
  idle_timeout = 10
  delivery_response_timeout = 1000
  delivery_method = "apn"
  routes = ("apn://gateway.push.apple.com?port=2195")
}
```

Set `delivery_method` to `apn`. `idle_timeout` allows a `0` value which usually means the connection is persistent and will not timeout. A zero value should never be used for Apple push.

Set `routes` to the `apn` protocol, the `gateway.push.apple.com` URL and use port `2195`. In a production environment the URL for `routes` is `gateway.push.apple.com`. In a development environment you can set this option to `gateway.sandbox.push.apple.com`.

### Note

If you change `routes` at runtime and issue the ec_console command config reload, any messages that are in process will continue to use the currently active connection. As soon as all active messages have been sent, the connection will close and any new connections will use the latest configuration values.

In this context, `delivery_response_timeout` defines the length of time, in milliseconds, to wait for an APNs error response. This value should be set to at least the Round Trip Time (RTT) between your host and the APNs and must be less than the value of [idle_timeout](/momentum/3/3-reference/3-reference-conf-ref-idle-timeout). You can determine your RTT by pinging the APNs server.

If you set `delivery_response_timeout` too low, Momentum will erroneously indicate that a submission was successful before receiving a failure response from APNs. In short, a failure in APNs will be logged and processed as success by Momentum. If you set this too high, messages will stay too long in memory and increase overhead.

### <a name="apns.other.options.mcmt"></a> Permit Multi-Channel Message Type (MCMT) Reception

Apple notifications are sent as MCMT messages so a listener must be configured to allow this. To allow reception of injected MCMT messages set the `MCMT_Reception` option within the ESMTP_Listener as shown below:

```
esmtp_listener {
  listen ":25"{
    mcmt_reception = "allow"
    ...
  }
}
```

If MCMT messages are not allowed, notifications will either be treated as regular email or rejected depending on the settings. For more information about this option see [The MCMT_Reception Option](/momentum/mobile/mobile-reference/mm-7-mcmt-reception).

<a name="push.apn.listener.rest"></a> 

**Using the REST Injector**

Momentum supports an HTTP REST injection API and has done so since version 3.1.4\. You can use REST injection and an HTTP Listener to send push notifications. Unlike the SMTP listener, there is no `mcmt_reception` option within the HTTP_Listener scope. *This listener is always MCMT enabled* . You can add an HTTP listener by adding the following stanza to your `ecelerity.conf` file:

```
http_listener {
  listen ":8081" {}
}
```

To use REST injection you must also configure the httpsrv and restinjector modules as described in [The Momentum REST Injector](https://support.messagesystems.com/docs/web-mc-rest/).

You can create a MCMT message as described at [“Message Injection and the APNs Payload”](/momentum/3/3-push/apns-using#apns.using.mcmt).

### <a name="apns.other.options.tls"></a> TLS

APNs requires a secure connection using an SSL certificate issued by Apple. For this reason the following Momentum TLS options must be set:

*   [tls](/momentum/3/3-reference/conf-ref-tls) – set this option to `required`. *Note*: currently, whether this option is set or not, a TLS connection with APNs will be attempted.

*   [tls_verify](/momentum/3/3-reference/conf-ref-tls-verify) – set this option to `no`

*   [tls_certificate](/momentum/3/3-reference/conf-ref-tls-certificate) – the certificate supplied by Apple

    Provide the full path to a `PEM` version of the `.cer` file provided by Apple, which can be converted in the following way: **openssl x509 -in *`apple-cert.cer`* -inform der -out *`mycert.pem`***                                                            

*   [tls_key](/momentum/3/3-reference/conf-ref-tls-key) – the key for the iOS app provided by APNs

    The value for this option should be the full path to a `PEM` version of your iOS app's `.p12` (pkcs12) key. This key is provided by Apple and can be converted using the following commands.

    *   **openssl pkcs12 -in *`your-app.p12`* -out *`mykey-pass.pem`***                                                    

    *   **openssl rsa -in *`mykey-pass.pem`* -out *`mykey.pem`***                                              

    ### Warning

    Be careful when performing this conversion. If you don't provide a pass phrase for the generated key created by the first command, there will **not** be an error. Consequently, the key will not be included in the generated PEM and you will have to strip the password in a separate operation.

*   [tls_ciphers](/momentum/3/3-reference/conf-ref-tls-ciphers) – the list of ciphers

Follow the preceding links for information on configuring these options.

### Note

SSL certificates are issued for specific apps. If you wish to send push notifications to multiple apps you must have a certificate for each app.

If you configure APNs with a valid self-signed certificate that was not issued by APNs, the message is retried numerous times and is not affected by [mx_failures_to_delay](/momentum/3/3-reference/3-reference-conf-ref-mx-failures-to-delay).

### <a name="apns.outbound.connections"></a> Outbound Connections and APNs

Connections to APNs are established on demand. To handle heavy traffic from a specific customer to a particular app, multiple connections to APNs can be established. Use the configuration option [max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-max-outbound-connections) to control the maximum number of connections to APNs on a domain/binding level. Notifications to an app will be spread over all available connections.

A connection will remain open until one of the following events occurs:

*   The connection has been idle for the configured length of time

*   An error response is received from APNs

*   There are exceptions on the connection

*   License expiration

### <a name="apns.momentum"></a> Momentum and APNs

In order to set up APNs you should also be familiar with the following sections of the Momentum Reference Manual (3.x):

*   [domain scope](/momentum/3/3-reference/3-reference-conf-ref-domain) – To configure APNs for a specific domain, you will need to use this option

*   [Configuration Scopes and Fallback](/momentum/3/3-reference/3-reference-ecelerity-conf-fallback) – This section of the manual describes how configuration options are scoped

*   [Manually Changing Configuration Files](/momentum/3/3-reference/conf-manual-changes) – To configure APNs, you will need to change the `ecelerity.conf` file.

*   [Logging](/momentum/3/3-reference/operations-logging) – This section describes how the Momentum logging API works. The apn_logger works in the same way as other Momentum loggers.