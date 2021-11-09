---
lastUpdated: "03/26/2020"
title: "msys.core.dns_get_domain"
description: "msys core dns get domain Get a domain record msys core dns get domain domain Get domain record userdata by passing in the domain name For a code example see Example 15 32 register Control example Because this function is in the msys core namespace an explicit require msys core..."
---

<a name="lua.ref.msys.core.dns_get_domain"></a> 
## Name

msys.core.dns_get_domain — Get a domain record

<a name="idp24097728"></a> 
## Synopsis

`msys.core.dns_get_domain(domain);`

`domain: string`<a name="idp24100032"></a> 
## Description

Get domain record userdata by passing in the domain name. For a code example see [“registerControl example”](/momentum/3/3-reference/3-reference-lua-ref-msys-register-control#lua.ref.msys.registerControl.example).

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp24103264"></a> 
## See Also

[msys.core.mail_queue_delay_domain](/momentum/3/3-reference/3-reference-lua-ref-msys-core-mail-queue-delay-domain)