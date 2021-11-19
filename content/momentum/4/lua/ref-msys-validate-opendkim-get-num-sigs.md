---
lastUpdated: "03/26/2020"
title: "msys.validate.opendkim.get_num_sigs"
description: "msys validate opendkim get num sigs Return the number of DKIM signatures msys validate opendkim get num sigs dkim This function returns the number of DKIM signatures The dkim parameter is an array of DKIM SIGINFO objects created by msys validate opendkim verify For a description of the DKIM SIGINFO..."
---

<a name="lua.ref.msys.validate.opendkim.get_num_sigs"></a> 
## Name

msys.validate.opendkim.get_num_sigs — Return the number of DKIM signatures

<a name="idp18580080"></a> 
## Synopsis

`msys.validate.opendkim.get_num_sigs(dkim)`

`dkim: userdata, DKIM type`<a name="idp18583024"></a> 
## Description

This function returns the number of DKIM signatures. The `dkim` parameter is an array of DKIM_SIGINFO objects created by `msys.validate.opendkim.verify`. For a description of the DKIM_SIGINFO object, see [DKIM_DSIGINFO](http://www.opendkim.org/libopendkim/dkim_siginfo.html).

This function requires the [`opendkim`](/momentum/4/modules/opendkim) module.

Enable this function with the statement `require('msys.validate.opendkim');`.

This function returns the number of signatures and the DKIM status `DKIM_STAT`.

The DKIM status `DKIM_STAT` can be one of the following values:

*   `DKIM_STAT_OK` – successful completion

*   `DKIM_STAT_BADSIG` – signature did not match headers and body

*   `DKIM_STAT_NOSIG` – no signature present

*   `DKIM_STAT_NOKEY` – no key available for verifying

*   `DKIM_STAT_CANTVRFY` – cannot get key for verifying

*   `DKIM_STAT_SYNTAX` – message is not in valid syntax

*   `DKIM_STAT_NORESOURCE` – resource unavailable

*   `DKIM_STAT_INTERNAL` – internal error

*   `DKIM_STAT_REVOKED` – signing key revoked

*   `DKIM_STAT_INVALID` – invalid parameter(s)

*   `DKIM_STAT_NOTIMPLEMENT` – function not implemented

*   `DKIM_STAT_KEYFAIL` – key retrieval failed (try again later)

*   `DKIM_STAT_CBREJECT` – callback requested message rejection

*   `DKIM_STAT_CBTRYAGAIN` – callback cannot complete (try again later)

*   `DKIM_STAT_CBERROR` – unspecified callback error

<a name="lua.ref.msys.validate.opendkim.get_num_sigs.example"></a> 


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

<a name="idp18615184"></a> 
## See Also

[msys.validate.opendkim.get_sig_canons](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-canons), [msys.validate.opendkim.sign](/momentum/4/lua/ref-msys-validate-opendkim-sign), [msys.validate.opendkim.verify](/momentum/4/lua/ref-msys-validate-opendkim-verify), [msys.validate.opendkim.get_sig](/momentum/4/lua/ref-msys-validate-opendkim-get-sig), [msys.validate.opendkim.get_sig_domain](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-domain), [msys.validate.opendkim.get_sig_selector](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-selector), [msys.validate.opendkim.get_sig_errorstr](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-errorstr), [msys.validate.opendkim.get_sig_flags](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-flags), [msys.validate.opendkim.get_sig_identity](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-identity), [msys.validate.opendkim.get_sig_keysize](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-keysize), [msys.validate.opendkim.get_sig_signalg](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-signalg), [msys.validate.opendkim.get_sig_hdrsigned](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-hdrsigned)