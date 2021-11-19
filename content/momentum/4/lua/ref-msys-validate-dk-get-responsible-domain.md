---
lastUpdated: "03/26/2020"
title: "msys.validate.dk.get_responsible_domain"
description: "msys validate dk get responsible domain Return the domain responsible for the current message msys validate dk get responsible domain msg vctx This function returns the domain responsible for the current message This function requires the dk validate module Enable this function with the statement require msys validate dk It..."
---

<a name="lua.ref.msys.validate.dk.get_responsible_domain"></a> 
## Name

msys.validate.dk.get_responsible_domain — Return the domain responsible for the current message

<a name="idp18538544"></a> 
## Synopsis

`msys.validate.dk.get_responsible_domain(msg, vctx);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
```
<a name="idp18541600"></a> 
## Description

This function returns the domain responsible for the current message. This function requires the [`dk_validate`](/momentum/4/modules/domainkeys) module.

Enable this function with the statement `require('msys.validate.dk');`.

It takes the following parameters:

*   `msg` – mail message

*   `vctx` – validation context

<a name="idp18548960"></a> 
## See Also

[msys.validate.dk.sign](/momentum/4/lua/ref-msys-validate-dk-sign)