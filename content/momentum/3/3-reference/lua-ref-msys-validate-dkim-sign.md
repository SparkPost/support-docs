---
lastUpdated: "03/26/2020"
title: "msys.validate.dkim.sign"
description: "msys validate dkim sign Sign a message using a DKIM signature msys validate dkim sign msg vctx options This function requires the dkim sign module msg is a mail message vctx is the validation context It signs the message msg using a DKIM signature options is a table which allows..."
---

<a name="lua.ref.msys.validate.dkim.sign"></a> 
## Name

msys.validate.dkim.sign — Sign a message using a DKIM signature

<a name="idp27178560"></a> 
## Synopsis

`msys.validate.dkim.sign(msg, vctx, options);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
options: table, optional
```
<a name="idp27181344"></a> 
## Description

This function requires the dkim_sign module. `msg` is a mail message. `vctx` is the validation context. It signs the message `msg` using a DKIM signature. `options` is a table which allows the caller to override the following options:

*   `base_domain/signing_domain` override the default signing domain. These two parameters are synonyms for one another, each will have the same effect.

*   `header_canon` override the default header canonicalization setting.

*   `body_canon` override the default body canonicalization setting.

*   `digest` override the default digest setting.

*   `headerlist` override the default list of headers to sign.

*   `identity` override the default signing identity.

*   `selector` Override the default signing selector

*   `keyfile` override the default signing key file, which may be parameterized as defined in [“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim).

*   `keybuf` Override the default signing key. This hash entry must contain the PEM encoded private key to use for signing the messages. This must be a contiguous string, with no line breaks and no white space, without the `BEGIN` and `END` tags that are found in the key file itself. The format is similar to the format used to store the public key in the DKIM DNS records.

*   `body_length_limit` Override the default body_length_limit setting.

<a name="lua.ref.msys.validate.dkim.sign.example"></a> 


require("msys.validate.dkim");
local mod = {};
function mod:core_final_validation(msg, accept, vctx)
  local options = {};
  options["base_domain"] = "example.com";
  options["selector"] = "*`selector_name`*";
  local domain = msys.validate.dkim.get_responsible_domain();
  print("msys.validate.dkim.get_responsible_domain returns ", domain);
  print("msys.validate.dkim.sign returns ", msys.validate.dkim.sign(nil, nil, options));
  local domains = msys.validate.dkim.get_domains(msg, vctx);
  print("msys.validate.dkim.get_domains returns ", domains);
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("test_dkim", mod);

### Note

This function should only be invoked during the core_final_validation hook.

Enable this function with the statement `require('msys.validate.dkim');`.

<a name="idp27205024"></a> 
## See Also

[msys.validate.dkim.get_responsible_domain](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-responsible-domain), [msys.validate.dkim.get_domains](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-domains), [msys.validate.dkim.reflect](/momentum/3/3-reference/lua-ref-msys-validate-dkim-reflect), [“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim)