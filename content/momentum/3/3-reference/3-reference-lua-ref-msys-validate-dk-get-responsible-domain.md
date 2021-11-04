---
lastUpdated: "03/26/2020"
title: "msys.validate.dk.get_responsible_domain"
description: "msys validate dk get responsible domain Return the domain responsible for the current message msys validate dk get responsible domain msg vctx This function requires the dk validate module msg is a mail message ctx is the validation context This function returns the domain responsible for the current message Enable..."
---

<a name="lua.ref.msys.validate.dk.get_responsible_domain"></a> 
## Name

msys.validate.dk.get_responsible_domain — Return the domain responsible for the current message

<a name="idp27094336"></a> 
## Synopsis

`msys.validate.dk.get_responsible_domain(msg, vctx);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
```
<a name="idp27097072"></a> 
## Description

This function requires the "dk_validate" module. `msg` is a mail message. `ctx` is the validation context. This function returns the domain responsible for the current message.

Enable this function with the statement `require('msys.validate.dk');`.

<a name="idp27100592"></a> 
## See Also

[msys.validate.dk.sign](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-dk-sign) [“domainkeys – Yahoo! DomainKeys”](/momentum/3/3-reference/3-reference-modules-domainkeys)