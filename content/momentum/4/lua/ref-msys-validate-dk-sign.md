---
lastUpdated: "03/26/2020"
title: "msys.validate.dk.sign"
description: "msys validate dk sign Sign a message using a Domain Key msys validate dk sign msg vctx options This function signs a message using a Domain Key signature This function requires the dk sign module Enable this function with the statement require msys sign dk It requires the following parameters..."
---

<a name="lua.ref.msys.validate.dk.sign"></a> 
## Name

msys.validate.dk.sign — Sign a message using a Domain Key

<a name="idp18554432"></a> 
## Synopsis

`msys.validate.dk.sign(msg, vctx, options);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
options: table
```
<a name="idp18557488"></a> 
## Description

This function signs a message using a DomainKey signature. This function requires the [`dk_sign`](/momentum/4/modules/domainkeys) module.

Enable this function with the statement `require('msys.sign.dk');`.

It requires the following parameters:

*   `msg` – mail message to sign

*   `vctx` – validation context

*   `options` – table that allows the caller to override the following options with values different from that provided by the dk_sign module:

    *   `base_domain` – default signing domain

    *   `selector` – default signing selector

    *   `keyfile` – default signing key file (which may be parameterized as defined in [“opendkim – Open Source DKIM”](/momentum/4/modules/opendkim))

    *   `keybuf` – default signing key

        This hash entry must contain the PEM encoded private key to use for signing the messages.

### Note

This function should only be invoked from the core_final_validation hook.

<a name="idp18574464"></a> 
## See Also

[msys.validate.dk.get_responsible_domain](/momentum/4/lua/ref-msys-validate-dk-get-responsible-domain)