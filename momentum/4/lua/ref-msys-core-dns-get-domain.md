---
title: "msys.core.dns_get_domain"
description: "msys core dns get domain Get a domain record msys core dns get domain domain Get domain record userdata by passing in the domain name For a code example see Example 70 33 register Control example Because this function is in the msys core namespace an explicit require msys core..."
---

<a name="lua.ref.msys.core.dns_get_domain"></a> 
## Name

msys.core.dns_get_domain — Get a domain record

<a name="idp15663056"></a> 
## Synopsis

`msys.core.dns_get_domain(domain);`

`domain: string`<a name="idp15665584"></a> 
## Description

Get domain record userdata by passing in the domain name. For a code example see [Example 70.33, “registerControl example”](lua.ref.msys.registerControl#lua.ref.msys.registerControl.example "Example 70.33. registerControl example").

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp15668976"></a> 
## See Also

[msys.core.mail_queue_delay_domain](lua.ref.msys.core.mail_queue_delay_domain "msys.core.mail_queue_delay_domain")