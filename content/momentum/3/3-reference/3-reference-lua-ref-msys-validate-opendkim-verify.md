---
lastUpdated: "03/26/2020"
title: "msys.validate.opendkim.verify"
description: "msys validate opendkim verify Verify a DKIM signature msys validate opendkim verify msg Configuration Change This function is available as of version 3 6 This function requires the opendkim module It verifies a DKIM signature and returns a DKIM handle to context specific information about the message Typically you would..."
---

<a name="lua.ref.msys.validate.opendkim.verify"></a> 
## Name

msys.validate.opendkim.verify — Verify a DKIM signature

<a name="idp27797664"></a> 
## Synopsis

`msys.validate.opendkim.verify(msg)`

`msg: userdata, ec_message type`<a name="idp27800752"></a> 
## Description

**Configuration Change. ** This function is available as of version 3.6.

This function requires the opendkim module. It verifies a DKIM signature and returns a DKIM handle to context-specific information about the message. Typically you would pass the return value of this function to other functions such as `msys.validate.opendkim.get_num_sigs` and `msys.validate.opendkim.get_sig`.

<a name="lua.ref.msys.validate.opendkim.verify.example"></a> 


```
require("opendkim.dkim");
require("msys.validate.opendkim");
local mod = {};

function mod:validate_data(msg, accept, vctx)
  local num = 0;
  local stat;
  local dkim_sig;
  local dkim = msys.validate.opendkim.verify(msg);
  num, stat = msys.validate.opendkim.get_num_sigs(dkim);
  -- create loop controlled by num 
  if num > 0 then
    for i = 0, num-1 do
      dkim_sig = msys.validate.opendkim.get_sig(dkim, i);
      -- now do something with the signature
      local size = msys.validate.opendkim.get_sig_keysize(dkim_sig);
      if size < 1024 then
        ...
      end
    end
  end 
  return msys.core.VALIDATE_CONT;
end
msys.registerModule("test_opendkim", mod);
```

### Note

This function should only be invoked in the `validate_data` validation phase.

This function also returns the DKIM status (DKIM_STAT). `DKIM_STAT` can be any one of the following values:

*   `DKIM_STAT_OK` – successful completion

*   `DKIM_STAT_BADSIG` – signature did not match headers and body

*   `DKIM_STAT_NOSIG` – no signature present

*   `DKIM_STAT_NOKEY` – no key available for verifying

*   `DKIM_STAT_CANTVRFY` – can't get key for verifying

*   `DKIM_STAT_SYNTAX` – message is not in valid syntax

*   `DKIM_STAT_NORESOURCE` – resource unavailable

*   `DKIM_STAT_INTERNAL` – internal error

*   `DKIM_STAT_REVOKED` – signing key revoked

*   `DKIM_STAT_INVALID` – invalid parameter(s)

*   `DKIM_STAT_NOTIMPLEMENT` – function not implemented

*   `DKIM_STAT_KEYFAIL` – key retrieval failed (try again later)

*   `DKIM_STAT_CBREJECT` – callback requested message rejection

*   `DKIM_STAT_CBTRYAGAIN` – callback can't complete (try again later)

*   `DKIM_STAT_CBERROR` – unspecified callback error

Enable this function with the statement `require('msys.validate.opendkim');`.

<a name="idp27831872"></a> 
## See Also

[msys.validate.opendkim.get_sig_canons](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-canons), [msys.validate.opendkim.sign](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-sign), [msys.validate.opendkim.get_num_sigs](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-num-sigs), [msys.validate.opendkim.get_sig](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig), [msys.validate.opendkim.get_sig_domain](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-domain), [msys.validate.opendkim.get_sig_selector](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-selector), [msys.validate.opendkim.get_sig_errorstr](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-errorstr), [msys.validate.opendkim.get_sig_flags](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-flags), [msys.validate.opendkim.get_sig_identity](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-identity), [msys.validate.opendkim.get_sig_keysize](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-keysize), [msys.validate.opendkim.get_sig_signalg](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-signalg), [msys.validate.opendkim.get_sig_hdrsigned](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-hdrsigned), [msys.validate.opendkim.get_sig_canons](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-canons), [“opendkim – OpenDKIM module”](/momentum/3/3-reference/3-reference-modules-opendkim) and [“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim)