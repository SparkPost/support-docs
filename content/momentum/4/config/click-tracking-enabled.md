---
lastUpdated: "03/26/2020"
title: "click_tracking_enabled"
description: "click tracking enabled enable or disable click tracking for SMTP injections Click Tracking Enabled true false Configuration Change This option is available as of version 4 1 HF 4 When click tracking is enabled Momentum converts the target links in the top text plain and top text html part of..."
---

<a name="config.click_tracking_enabled"></a> 
## Name

click_tracking_enabled — enable or disable click tracking for SMTP injections

## Synopsis

`Click_Tracking_Enabled = "true|false"`

<a name="idp23780000"></a> 
## Description

**Configuration Change. ** This option is available as of version 4.1-HF4.

When click tracking is enabled, Momentum converts the target links in the top text/plain and top text/html part of SMTP-injected messages into click-tracked links . When a recipient clicks the link, Momentum reports this engagement event as a click.

This option can be set to the following:

*   `true` – Click tracking event data will be available for SMTP-injected messages.

*   `false` – Click tracking event data will not be available for SMTP-injected messages.

The default value is `false`.

The corresponding context variable is `smtpapi_click_tracking`, and the corresponding X-MSYS-API header field is `options.click_tracking` .

<a name="idp23790272"></a> 
## Scope

`click_tracking_enabled` is valid in the esmtp_listener, listen, pathway, pathway_group, and peer scope.