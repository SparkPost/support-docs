---
lastUpdated: "03/26/2020"
title: "Mobile Momentum MM7"
description: "MM 7 defines the standards used between a Multimedia Messaging service MMS value added service VAS application and a MMS center MM 7 is used to send messages from third party providers e g a bank sending a statement or an advertiser sending publicity It is based on SOAP with..."
---


MM7 defines the standards used between a Multimedia Messaging service (MMS) value added service (VAS) application and a MMS center. MM7 is used to send messages from third party providers (e.g., a bank sending a statement or an advertiser sending publicity). It is based on SOAP with attachments, using HTTP as the transport protocol.

This document describes how to configure Momentum for Multimedia messaging. For a discussion of MM7 hook points see "[MM7 Hooks](/momentum/mobile/mobile-developer-guide/mobile-developer-guide-p-mm-7)".

## <a name="mobility.configuration.mm7"></a> The mm7_serv Module

The Mobile Momentum MM7 Server provides the MM7 Value Added Service Provider (VASP) implementations of the Deliver, Delivery Report, and Read Reply Report MM7 transactions. The MM7 Server is configured using the HTTP_Listener and MM7_Serv stanzas. This section describes the configuration of the mm7_serv module.

### Note

The HTTP_Listener is described in detail in "[HTTP_Listener](/momentum/3/3-rest/rest-http-listener)".

<a name="idp1479872"></a> 


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

<dl class="variablelist">

<dt>mm7_server_default_email_from_address</dt>

<dd>

This option defines the default FROM email address used for constructing source email addresses when converting MM7 requests to email. This parameter is used when the sender from the SOAP envelope is a short code or telephone number.

There is no default value for this option.

</dd>

<dt>mm7_server_default_email_from_domain</dt>

<dd>

This option defines the default FROM email domain used for constructing source email domains when converting MM7 requests to email. This parameter is used when the sender from the SOAP envelope is a short code or telephone number.

There is no default value for this option.

</dd>

<dt>mm7_server_default_email_to_address</dt>

<dd>

This option defines the default TO email address.

There is no default value for this option.

</dd>

<dt>mm7_server_default_email_to_domain</dt>

<dd>

This option defines the default TO email domain.

There is no default value for this option.

</dd>

<dt>mm7_vasp_uri_paths</dt>

<dd>

A list of URI path components that the MM7 server will register with the HTTP listener. You must provide the path component for each URI you intend to have handled by the MM7 server. A slash (‘`/`’) must be the last character in each path component name.

Suppose the host mm7.example.com uses Mobile Momentum and is configured with: `mm7_vasp_uri_paths = ("/ringtones/" "/photo_contest/" "/email_gateway/")` Then the following URIs are serviced by the Mobile Momentum MM7 server:

*   http://mm7.example.com/ringtones/

*   http://mm7.example.com/photo_contest/

*   http://mm7.example.com/email_gateway/

There is no default value for this option.

</dd>

<dt>mm7_server_version</dt>

<dd>

This option defines the MM7 version number.

The default value for this option is `6.8.0`.

</dd>

</dl>