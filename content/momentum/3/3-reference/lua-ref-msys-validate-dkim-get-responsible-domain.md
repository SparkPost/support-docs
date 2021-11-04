---
lastUpdated: "03/26/2020"
title: "msys.validate.dkim.get_responsible_domain"
description: "msys validate dkim get responsible domain Return the domain responsible for the current message msys validate dkim get responsible domain msg vctx This function requires the dkim validate module msg is a mail message vctx is the validation context It returns the domain responsible for the current message Enable this..."
---

<a name="lua.ref.msys.validate.dkim.get_responsible_domain"></a> 
## Name

msys.validate.dkim.get_responsible_domain — Return the domain responsible for the current message

<a name="idp27143968"></a> 
## Synopsis

`msys.validate.dkim.get_responsible_domain(msg, vctx);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
```
<a name="idp27146736"></a> 
## Description

This function requires the dkim_validate module. `msg` is a mail message. `vctx` is the validation context. It returns the domain responsible for the current message.

Enable this function with the statement `require('msys.validate.dkim');`.

<a name="idp27150272"></a> 
## See Also

[msys.validate.dkim.get_domains](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-domains), [msys.validate.dkim.reflect](/momentum/3/3-reference/lua-ref-msys-validate-dkim-reflect), [msys.validate.dkim.sign](/momentum/3/3-reference/lua-ref-msys-validate-dkim-sign), [“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim)