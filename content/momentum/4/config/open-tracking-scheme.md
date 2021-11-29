---
lastUpdated: "03/26/2020"
title: "open_tracking_scheme"
description: "open tracking scheme set the hyperlink scheme to use for open tracking links in SMTP injections open tracking scheme http Configuration Change This option is available as of version 4 1 HF 4 If open or click tracking is enabled this option sets the hyperlink scheme to use for open..."
---

<a name="config.open_tracking_scheme"></a> 
## Name

open_tracking_scheme — set the hyperlink scheme to use for open tracking links in SMTP injections

## Synopsis

`open_tracking_scheme = "http"`

<a name="idp25614688"></a> 
## Description

**Configuration Change. ** This option is available as of version 4.1-HF4.

If open or click tracking is enabled, this option sets the hyperlink scheme to use for open tracking links in SMTP-injected messages.

The default value is `http`.

The corresponding context variable is `smtpapi_open_tracking_scheme`. There is no corresponding X-MSYS-API header field.

<a name="idp25620192"></a> 
## Scope

`open_tracking_scheme` is valid in the esmtp_listener, listen, pathway, pathway_group, and peer scope.