---
lastUpdated: "03/26/2020"
title: "msys.validate.dkim.reflect"
description: "msys validate dkim reflect Send an email to receiver addrs regarding the validation result of the current message msys validate dkim reflect msg vctx sender addrs receiver addrs subj note This function requires the dkim validate module It should be used before the data validate phase to instruct the system..."
---

<a name="lua.ref.msys.validate.dkim.reflect"></a> 
## Name

msys.validate.dkim.reflect — Send an email to `receiver_addrs` regarding the validation result of the current message

<a name="idp27157488"></a> 
## Synopsis

`msys.validate.dkim.reflect(msg, vctx, sender_addrs, receiver_addrs, subj, note);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
sender_addrs: string
receiver_addrs: string
subj: string, optional
note: string, optional
```
<a name="idp27160384"></a> 
## Description

This function requires the dkim_validate module. It should be used before the data_validate phase to instruct the system to send an email to `receiver_addrs` regarding the validation result of the current message.

*   `msg` the inbound message to be validated by dkim_validate.

*   `vctx` validation context.

*   `sender_addr` the "from" address of reflective email.

*   `receiver_addrs` a list of addresses (separated by semi-colon) who are going to receive the reflective email. The first one will be used as "To" address of the reflective email and the rest will be used as "Bcc" addresses.

*   `subject` optional subject line for the reflective email. If omitted, a default subject line is used.

*   `note` optional text to be added to the reflective email. If omitted, a default text is used.

Enable this function with the statement `require('msys.validate.dkim');`.

<a name="idp27171792"></a> 
## See Also

[msys.validate.dkim.get_responsible_domain](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-responsible-domain), [msys.validate.dkim.get_domains](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-domains), [msys.validate.dkim.sign](/momentum/3/3-reference/lua-ref-msys-validate-dkim-sign), [“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim)