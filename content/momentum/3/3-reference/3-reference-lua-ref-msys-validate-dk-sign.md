---
lastUpdated: "03/26/2020"
title: "msys.validate.dk.sign"
description: "msys validate dk sign Sign a message using a Domain Key msys validate dk sign msg vctx options This function requires the dk sign module msg is a mail message vctx is the validation context This function signs the message msg using a Domain Key signature options is a table..."
---

<a name="lua.ref.msys.validate.dk.sign"></a> 
## Name

msys.validate.dk.sign — Sign a message using a Domain Key

<a name="idp27106096"></a> 
## Synopsis

`msys.validate.dk.sign(msg, vctx, options);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
options: table
```
<a name="idp27108864"></a> 
## Description

This function requires the dk_sign module. `msg` is a mail message. `vctx` is the validation context. This function signs the message `msg` using a DomainKey signature. `options` is a table which allows the caller to override the following options with values different from that provided by dk_sign module:

*   `base_domain` override the default signing domain.

*   `selector` override the default signing selector.

*   `keyfile` override the default signing key file (which may be parameterized as defined in [“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim)).

*   `keybuf` Override the default signing key. This hash entry must contain the PEM encoded private key to use for signing the messages.

### Note

This function should only be invoked from the core_final_validation hook.

Enable this function with the statement `require('msys.validate.dk');`.

<a name="idp27120416"></a> 
## See Also

[msys.validate.dk.get_responsible_domain](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-dk-get-responsible-domain), [“domainkeys – Yahoo! DomainKeys”](/momentum/3/3-reference/3-reference-modules-domainkeys)