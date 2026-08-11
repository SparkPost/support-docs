---
lastUpdated: "08/11/2026"
title: "msys.validate.opendkim.get_sig_ar_verdict"
description: "msys validate opendkim get sig ar verdict Derive the Authentication Results verdict for a DKIM signature msys validate opendkim get sig ar verdict dkim sig This function returns pass when the signature verified successfully and fail with the failure reason otherwise Use it instead of testing msys validate opendkim get sig errorstr..."
---

<a name="lua.ref.msys.validate.opendkim.get_sig_ar_verdict"></a> 
## Name

msys.validate.opendkim.get_sig_ar_verdict — Derive the Authentication-Results verdict for a DKIM signature

<a name="idp18905744"></a> 
## Synopsis

`msys.validate.opendkim.get_sig_ar_verdict(dkim_sig)`

`dkim_sig: userdata, DKIM_SIGINFO type`<a name="idp18909200"></a> 
## Description

This function derives the verdict for one DKIM signature, in the form used by the `dkim` clause of an `Authentication-Results` header. It returns the string `"pass"` when the signature verified successfully — the signature validated cryptographically (`DKIM_SIGFLAG_PASSED`) *and* the computed body hash matched the signature's `bh=` tag — and otherwise a string of the form `"fail (<reason>)"` naming the specific failure, for example `"fail (signature verification failed)"` or `"fail (key not found in DNS)"`. If `dkim_sig` is nil, the function instead returns two values, nil and the DKIM status `DKIM_STAT_INVALID`, like the other DKIM_SIGINFO accessors.

Use `msys.validate.opendkim.get_num_sigs` and `msys.validate.opendkim.get_sig` to get a DKIM_SIGINFO object to pass to this function.

Do not decide pass/fail by testing `msys.validate.opendkim.get_sig_errorstr` for nil: for a valid signature that function returns the literal string `"no signature error"`, never nil. This function applies the verification result the way libopendkim intends.

Use `msys.validate.opendkim.get_stat_ar_verdict` first to handle verification statuses that carry no per-signature verdict:

```lua
local opendkim = require("msys.validate.opendkim")

local dkim, stat = opendkim.verify(msg)
local result = opendkim.get_stat_ar_verdict(stat)
if result == nil then
  local num = opendkim.get_num_sigs(dkim)
  for i = 0, num - 1 do
    local sig = opendkim.get_sig(dkim, i)
    if sig then
      local domain = opendkim.get_sig_domain(sig)
      result = opendkim.get_sig_ar_verdict(sig)
      -- e.g. build "header.DKIM-Signature=@" .. domain .. "; dkim=" .. result
    end
  end
end
```

This function requires the [`opendkim`](/momentum/4/modules/opendkim) module.

Enable this function with the statement `require('msys.validate.opendkim');`.

<a name="idp18947456"></a> 
## See Also

[msys.validate.opendkim.get_stat_ar_verdict](/momentum/4/lua/ref-msys-validate-opendkim-get-stat-ar-verdict), [msys.validate.opendkim.verify](/momentum/4/lua/ref-msys-validate-opendkim-verify), [msys.validate.opendkim.get_num_sigs](/momentum/4/lua/ref-msys-validate-opendkim-get-num-sigs), [msys.validate.opendkim.get_sig](/momentum/4/lua/ref-msys-validate-opendkim-get-sig), [msys.validate.opendkim.get_sig_domain](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-domain), [msys.validate.opendkim.get_sig_errorstr](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-errorstr), [msys.validate.opendkim.get_sig_flags](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-flags)
