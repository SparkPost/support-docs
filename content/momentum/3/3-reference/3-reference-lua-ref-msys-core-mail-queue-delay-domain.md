---
lastUpdated: "03/26/2020"
title: "msys.core.mail_queue_delay_domain"
description: "msys core mail queue delay domain Add a domain record to the delayed queue msys core mail queue delay domain dr note Add a domain record to the delayed queue For a code example see Example 15 32 register Control example To obtain domain record userdata use msys core dns..."
---

<a name="lua.ref.msys.core.mail_queue_delay_domain"></a> 
## Name

msys.core.mail_queue_delay_domain — Add a domain record to the delayed queue

<a name="idp24122160"></a> 
## Synopsis

`msys.core.mail_queue_delay_domain(dr, note);`

```
dr: userdata, domain_record
note: string
```
<a name="idp24124512"></a> 
## Description

Add a domain record to the delayed queue. For a code example see [“registerControl example”](/momentum/3/3-reference/3-reference-lua-ref-msys-register-control#lua.ref.msys.registerControl.example). To obtain domain record userdata use `msys.core.dns_get_domain`. The second parameter is typically a string such as `"451 4.4.1 [internal] manually delayed domain"`. This function returns `nil`.

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp24129184"></a> 
## See Also

[msys.core.dns_get_domain](/momentum/3/3-reference/3-reference-lua-ref-msys-core-dns-get-domain)