---
lastUpdated: "03/26/2020"
title: "tracking_link_expiry"
description: "tracking link expiry set the expiration time for engagement tracking for SMTP injections Tracking Link Expiry 31536000 Configuration Change This option is available as of version 4 1 HF 4 If open or click tracking is enabled this option determines the amount of time in seconds that Momentum will wait..."
---

<a name="config.tracking_link_expiry"></a> 
## Name

tracking_link_expiry — set the expiration time for engagement tracking for SMTP injections

## Synopsis

`Tracking_Link_Expiry = 31536000`

<a name="idp27100192"></a> 
## Description

**Configuration Change. ** This option is available as of version 4.1-HF4.

If open or click tracking is enabled, this option determines the amount of time, in seconds, that Momentum will wait for an engagement event in SMTP-injected messages.

This option can be set to any integer value.

The default value is `31536000` seconds (365 days).

The corresponding context variable is `smtpapi_tracking_link_expiry`. There is no corresponding X-MSYS-API header field.

<a name="idp27106240"></a> 
## Scope

`tracking_link_expiry` is valid in the esmtp_listener, listen, pathway, pathway_group, and peer scope.