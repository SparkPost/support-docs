---
lastUpdated: "03/26/2020"
title: "starttls_injection_policy"
description: "starttls injection policy protect against SMTP injections prior to TLS starttls injection policy reject Configuration Change This feature is available as of version 3 3 This option deals with the security issue described by CVE 2011 0411 namely that SMTP commands can be injected before the MTA switches to TLS..."
---

<a name="conf.ref.starttls_injection_policy"></a> 
## Name

starttls_injection_policy — protect against SMTP injections prior to TLS

## Synopsis

`starttls_injection_policy = "reject"`

<a name="idp11891056"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.3.

This option deals with the security issue described by CVE-2011-0411—namely that SMTP commands can be injected before the MTA switches to TLS. Consequently, a "man in the middle" could inject SMTP commands that are not protected by TLS.

This option has three possible values: `allow`, `reject`, `ignore`. The default value for this option is `reject`. When set to `reject`, if any commands are present in the buffer immediately after a STARTTLS command, then the STARTTLS is rejected and the connection is dropped. This event will be logged in the rejectlog.

If the value is `ignore`, then any commands after STARTTLS are ignored and commands after the successful TLS negotiation will be interpreted. When set to `allow`, the ESMTP listener will process commands after STARTTLS and before successful SSL negotiation. `allow` was the only supported behavior prior to Momentum 3.3.

<a name="idp11901728"></a> 
## Scope

This option is valid in the ESMTP_Listener, listen, pathway, pathway_group and peer scopes.