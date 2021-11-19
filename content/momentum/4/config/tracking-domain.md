---
lastUpdated: "03/26/2020"
title: "tracking_domain"
description: "tracking domain set the tracking domain to use for engagement tracking in SMTP injections tracking domain localhost 8080 Configuration Change This option is available as of version 4 1 HF 4 If open or click tracking is enabled this option sets the tracking domain to use in the hyperlink for..."
---

<a name="config.tracking_domain"></a> 
## Name

tracking_domain — set the tracking domain to use for engagement tracking in SMTP injections

## Synopsis

`tracking_domain = "localhost:8080"`

<a name="idp27084800"></a> 
## Description

**Configuration Change. ** This option is available as of version 4.1-HF4.

If open or click tracking is enabled, this option sets the tracking domain to use in the hyperlink for engagement tracking in SMTP-injected messages.

The default value is `localhost:8080`.

The corresponding context variable is `smtpapi_tracking_domain`. There is no corresponding X-MSYS-API header field.

<a name="idp27090304"></a> 
## Scope

`tracking_domain` is valid in the esmtp_listener, listen, pathway, pathway_group, and peer scope.