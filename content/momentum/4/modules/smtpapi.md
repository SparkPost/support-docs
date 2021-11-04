---
lastUpdated: "03/26/2020"
title: "smtpapi – SMTP Engagement Tracking"
description: "Configuration Change Engagement tracking for SMTP injections is available as of version 4 1 HF 4 The smtpapi module implements engagement tracking for SMTP injections and provides for open tracked images and click tracked links to be included in the message bodies Message Generation is a licensed feature that must..."
---

**Configuration Change. ** Engagement tracking for SMTP injections is available as of version 4.1-HF4.

The smtpapi module implements engagement tracking for SMTP injections and provides for open-tracked images and click-tracked links to be included in the message bodies.

### Note

Message Generation is a licensed feature that must be configured in order to use SMTP Engagement Tracking. For more information, see [“msg_gen – Message Generation”](/momentum/4/modules/msg-gen).

### <a name="modules.smtpapi.config"></a> Configuration

To track engagement in SMTP messages, the smtpapi module must be included in the `ecelerity.conf` file, as follows:

`smtpapi { }`

The smtpapi module has the following dependencies:

*   cassandra_client – Used for tag storage (automatically loaded)

*   engagement_tracker – Handles the creation of open-tracked and click-tracked links and the corresponding parsing of the links when an open or click event occurs and determines if metadata is included in click tracking (automatically loaded)

    For additional information, see [“engagement_tracker – HTTP Engagement Tracking”](/momentum/4/modules/engage-tracker).

*   msys.rest.templates.lua – Provides functionality to render the tracking links into the message

*   substitution_engine – Required to substitute the rendered links into the message (automatically loaded)

*   httpsrv – Required for http server lua bindings

### <a name="modules.smtpapi.hookpoint"></a> Hookpoint

The smtpapi module implements the `post_validate_data_spool_each_rcpt` hook to perform its message examination and transformations.

### <a name="modules.smtpapi.enable"></a> Enabling Engagement Tracking

In the default configuration, engagement tracking for SMTP injections is disabled and the associated configuration options are set to default values. To globally enable engagement tracking, change the default configuration. See [“Configuration Options for Engagement Tracking”](/momentum/4/modules/smtpapi#modules.smtpapi.config.options).

You can override the configuration for a specific message by specifying the attributes in an optional X-MSYS-API header or through policy by specifying the corresponding context variables. In these cases, the behavior is determined by the following order of precedence, from highest to lowest:

*   Associated context variables in Lua Policy – See [“Using Policy for Engagement Tracking”](/momentum/4/engagement-tracking-smtp-policy).

*   X-MSYS-API header in the SMTP message – See [“Using the X-MSYS-API Header for Engagement Tracking”](/momentum/4/x-msys-api-header).

*   Configuration options in the `ecelerity.conf` file – See [“Configuration Options for Engagement Tracking”](/momentum/4/modules/smtpapi#modules.smtpapi.config.options).

For example, if the `smtpapi_open_tracking` context variable is not specified, the `open_tracking` attribute in the X-MSYS-API header is used. If this attribute is also not specified, the value of the `open_tracking_enabled` configuration option is used.

While the configuration options for engagement tracking are not required when using the X-MSYS-API header or Lua Policy, the value of the configuration option will be used if the corresponding X-MSYS-API header field or context variable is not specified. This is especially important for `tracking_domain`, as the default value of `"localhost:8080"` is not appropriate for production environments.

### <a name="modules.smtpapi.config.options"></a> Configuration Options for Engagement Tracking

When tracking engagement in SMTP messages, configure the following options or ensure that the default values meet your needs. For details about each option, including the associated context variables in Lua Policy and X-MSYS-API header fields, follow each link:

*   [click_tracking_enabled](/momentum/4/config/click-tracking-enabled)

*   [click_tracking_scheme](/momentum/4/config/click-tracking-scheme)

*   [open_tracking_enabled](/momentum/4/config/open-tracking-enabled)

*   [open_tracking_scheme](/momentum/4/config/open-tracking-scheme)

*   [tracking_domain](/momentum/4/config/tracking-domain)

*   [tracking_link_expiry](/momentum/4/config/tracking-link-expiry)

These options are valid in the esmtp_listener, listen, pathway, pathway_group, and peer scope.

### Note

The smtpapi does **NOT** fallback to the msg_gen level configuration, and there are **NO** X-MSYS-API header fallbacks for `click_tracking_scheme`, `open_tracking_scheme`, `tracking_domain`, and `tracking_link_expiry`. Be sure to configure these options when using the X-MSYS-API header.

The following is an example configuration in the esmtp_listener scope:

<a name="example.smtpapi.esmtp_listener"></a> 


```
ESMTP_Listener {
        SMTP_Extensions = (XREMOTEIP XDUMPCONTEXT XCLIENT XSETCONTEXT)
        Listen "127.0.0.1:8650" {
        }
        Listen "[::1]:8650" {}
        open_tracking_enabled = "false"
        click_tracking_enabled = "true"
}
```