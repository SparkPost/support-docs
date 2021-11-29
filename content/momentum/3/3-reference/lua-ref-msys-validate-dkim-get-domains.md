---
lastUpdated: "03/26/2020"
title: "msys.validate.dkim.get_domains"
description: "msys validate dkim get domains Return a list of valid signing domains msys validate dkim get domains msg vctx This function requires the dkim validate module msg is a mail message vctx is the validation context This function returns a list of valid signing domains Example 15 65 msys validate..."
---

<a name="lua.ref.msys.validate.dkim.get_domains"></a> 
## Name

msys.validate.dkim.get_domains — Return a list of valid signing domains

<a name="idp27127504"></a> 
## Synopsis

`msys.validate.dkim.get_domains(msg, vctx);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
```
<a name="idp27130256"></a> 
## Description

This function requires the dkim_validate module. `msg` is a mail message. `vctx` is the validation context. This function returns a list of valid signing domains.

<a name="lua.ref.msys.validate.dkim.get_domains.example"></a> 


```
require("msys.validate.dkim");
local mod = {};
function mod:validate_data_spool(msg, accept, vctx)
  local domain = msys.validate.dkim.get_responsible_domain();
  print("msys.validate.dkim.get_responsible_domain returns ", domain);
  local domains = msys.validate.dkim.get_domains(msg, vctx);
  print("msys.validate.dkim.get_domains returns ", domains);
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("test_dkim", mod);
```

Enable this function with the statement `require('msys.validate.dkim');`.

<a name="idp27136624"></a> 
## See Also

[msys.validate.dkim.get_responsible_domain](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-responsible-domain), [msys.validate.dkim.get_domains](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-domains), [msys.validate.dkim.reflect](/momentum/3/3-reference/lua-ref-msys-validate-dkim-reflect), [msys.validate.dkim.sign](/momentum/3/3-reference/lua-ref-msys-validate-dkim-sign), [“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim)