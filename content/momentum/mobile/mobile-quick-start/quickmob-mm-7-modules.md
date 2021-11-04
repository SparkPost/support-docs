---
lastUpdated: "03/26/2020"
title: "The MM7 Modules"
description: "There are four MM 7 modules mm 7 mm 7 serv mms logger and mms bounce logger The mm 7 module the MM 7 client is loaded automatically as required so we need not be concerned with it You only need to configure it if you wish to set the..."
---

There are four MM7 modules: mm7, mm7_serv, mms_logger and mms_bounce_logger. The mm7 module, the MM7 client is loaded automatically as required so we need not be concerned with it. You only need to configure it if you wish to set the debug level.

### <a name="quickmob.modules.mm7serv"></a> mm7_serv Module

MM7 defines the standards used between a Multimedia Messaging service (MMS) value added service (VAS) application and a MMS center. MM7 is used to send messages from third party providers (e.g., a bank sending a statement or an advertiser sending publicity). It is based on SOAP with attachments, using HTTP as the transport protocol.

A sample configuration follows:

<a name="quickmob.example.mm7_serv"></a> 


```
mm7_serv {
  mm7_server_default_email_from_address = "test@messagesystems.com"
  mm7_server_default_email_from_domain = "messagesystems.com"
  mm7_server_default_email_to_address = "test@exampleto.com"
  mm7_server_default_email_to_domain = "exampleto.com"
  mm7_server_version = "6.8.0"
  mm7_vasp_uri_paths =  ("/ringtones/" "/photo_contest/" "/email_gateway/")
}
```

You must add this module to your configuration file if you wish to run an MM7 server. You can do this using the web UI or as described in "[Best Practices for Manually Changing Configuration Files](/momentum/3/3-reference/conf-manual-changes)".

For detailed instructions regarding this module's configuration options see "[The mm7_server Module](/momentum/mobile/mobile-reference/mobility-mm-7#mobility.configuration.mm7)".

**<a name="quickmob.httplistener"></a> 3.2.1.1. HTTP_Listener**

The HTTP_listener is new in Mobile Momentum. It is a listener module that can enclose Peer and Listen scopes like other listeners. All the options that are valid in the SMTP_Listener scope and its nested Peer and Listen scopes are likewise valid in the HTTP_Listener scope and its nested scopes. For a complete list of these options see "[The Listener Options](/momentum/3/3-reference/ecelerity-conf#listener-options)".

Since the MM7 protocol uses SOAP calls, configuring an MM7 server requires that this listener be configured. Find an example below:

<a name="quickmob.config.httplistener"></a> 


```
HTTP_Listener {
  Listen ":8089" { }
  Listen "[::1]:8089" {}
}
```

In this case the listener is listening on port 8089 and the server will responds to URIs configured using the mm7_serv module `MM7_VASP_URI_Paths` option. These are SOAP endpoints.

URI paths are registered to the HTTP_Listener by the mm7 server. When the HTTP_Listener recognizes a registered URI, it wakes the mm7 server with the incoming mm7 XML SOAP message.

Your aggregator or mobile network provider will supply the URI path names it will use when sending MM7 SOAP web service requests. You will specify those on the MM7_VASP_URI_Paths configuration parameter

For more details about the HTTP_Listener see "[HTTP_Listener](/momentum/3/3-rest/rest-http-listener)".

### <a name="quickmob.modules.mmslogger"></a> The mms_logger Module

It is often convenient to look at MM7 messages only. The mms_logger makes this much easier by writing to a single file in ‘@’ delimited format.

A sample configuration follows:

<a name="quickmob.example.mms_logger"></a> 


```
mms_logger "mms_logger1" {
  logmode = 0644
  logfile = "/var/log/ecelerity/mmslog.ec"
  heartbeat = 60
}
```

You must add this module to your configuration file if you wish to log MMS events. You can do this using the web UI or as described in "[Best Practices for Manually Changing Configuration Files](/momentum/3/3-reference/conf-manual-changes)".

You may not need to change any of the configuration options from their default values. For detailed instructions regarding this module's configuration options see "[The mms_logger Module](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger)".

### <a name="quickmob.modules.mmsbouncelogger"></a> mms_bounce_logger Module

It is often convenient to look at bounced MM7 messages only. The mms_bounce_logger makes this much easier by writing bounces—both in-band and out-of-band bounce messages—to a single file in ‘@’ delimited format.

A sample configuration follows:

<a name="quickmob.example.mms_bounce"></a> 


```
mms_bounce_logger "mms_bounce_logger1" {
  bounce_logmode = 0644
  bounce_logfile = "/var/log/eclerity/mmsbouncelog.ec"
  heartbeat = 60
}
```

You must add this module to your configuration file if you wish to log MMS bounces separately. You can do this using the web UI or as described in "[Best Practices for Manually Changing Configuration Files](/momentum/3/3-reference/conf-manual-changes)".

You may not need to change any of the configuration options from their default values. For detailed instructions regarding this module's configuration options see "[The mms_bounce_logger Module](/momentum/mobile/mobile-reference/mobility-mm-7-mms-bounce-logger)".