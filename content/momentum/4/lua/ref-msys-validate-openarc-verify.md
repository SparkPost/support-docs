---
lastUpdated: "11/26/2024"
title: "msys.validate.openarc.verify"
description: "msys validate openarc verify Verify ARC sets headers"
---

<a name="lua.ref.msys.validate.openarc.verify"></a>
## Name

msys.validate.openarc.verify — Verifies ARC set headers in an email, and stores the verification results
(`none/pass/fail`) into the email's context variable.

## Synopsis

`msys.validate.openarc.verify(msg)`

`msg: userdata, ec_message type`<a name="idp19138336"></a>
## Description

This function validates the ARC set headers contained in the input message. The validation result
will be stored as string value (`none` or `pass` or `fail`) in the `ec_message`'s context variable
of `arc_cv`. A caller can take actions (e.g. disposition of the message) based on the validation
result.

This function requires the [`openarc`](/momentum/4/modules/openarc) module.

Enable this function with the statement `require('msys.validate.openarc')`.

### Note

If the `ec_message` context variable `arc_cv` is not set after this function call, errors happened
and were logged into paniclog.

This function invokes dns lookup for signature validation. It's recommended to invoke it from a hook
which would not block Momentum's main tasks, e.g. from the `validate_data_spool` hook.

<a name="lua.ref.msys.validate.openarc.verify.example"></a>
### Example


```
require("msys.core");
require("msys.extended.message");
require("msys.validate.openarc");
local mod = {};

function mod:validate_data_spool(msg, ac, vctx)
  msys.validate.openarc.verify(msg)
  local cv = msg:context_get(msys.core.ECMESS_CTX_MESS, "arc_cv")
  if cv then
    print("ARC validation result: ", cv)
  else
	print("Failed to do ARC validation. Check paniclog for reasons.")
  end
end

msys.registerModule("openarc_verify", mod);
```

## See Also

[msys.validate.openarc.sign](/momentum/4/lua/ref-msys-validate-openarc-sign)
