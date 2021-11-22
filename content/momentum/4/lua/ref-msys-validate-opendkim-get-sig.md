---
lastUpdated: "03/26/2020"
title: "msys.validate.opendkim.get_sig"
description: "msys validate opendkim get sig Get a signature from a DKIM object msys validate opendkim get sig dkim num This function gets a signature DKIM SIGINFO from a DKIM object It requires the opendkim module Enable this function with the statement require msys validate opendkim It takes the following parameters..."
---

<a name="lua.ref.msys.validate.opendkim.get_sig"></a> 
## Name

msys.validate.opendkim.get_sig — Get a signature from a DKIM object

<a name="idp18626720"></a> 
## Synopsis

`msys.validate.opendkim.get_sig(dkim, num)`

```
dkim: userdata, DKIM type
num: numeric, optional
```
<a name="idp18630192"></a> 
## Description

This function gets a signature (DKIM_SIGINFO) from a DKIM object. It requires the [`opendkim`](/momentum/4/modules/opendkim) module.

Enable this function with the statement `require('msys.validate.opendkim');`.

It takes the following parameters:

*   `dkim` – array of DKIM_SIGINFO objects returned by the `msys.validate.opendkim.verify` function.

*   `num` – index of the DKIM_SIGINFO object that you wish to retrieve. The signature index, must be less than the number of signatures in the DKIM object.

For a description of the DKIM_SIGINFO object, see [DKIM_SIGINFO](http://www.opendkim.org/libopendkim/dkim_siginfo.html).

This function returns the DKIM_SIGINFO object and the DKIM status `DKIM_STAT`.

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

<a name="idp18662560"></a> 
## See Also

[msys.validate.opendkim.get_sig_canons](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-canons), [msys.validate.opendkim.sign](/momentum/4/lua/ref-msys-validate-opendkim-sign), [msys.validate.opendkim.verify](/momentum/4/lua/ref-msys-validate-opendkim-verify), [msys.validate.opendkim.get_num_sigs](/momentum/4/lua/ref-msys-validate-opendkim-get-num-sigs), [msys.validate.opendkim.get_sig_domain](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-domain), [msys.validate.opendkim.get_sig_selector](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-selector), [msys.validate.opendkim.get_sig_errorstr](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-errorstr), [msys.validate.opendkim.get_sig_flags](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-flags), [msys.validate.opendkim.get_sig_identity](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-identity), [msys.validate.opendkim.get_sig_keysize](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-keysize), [msys.validate.opendkim.get_sig_signalg](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-signalg), [msys.validate.opendkim.get_sig_hdrsigned](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-hdrsigned)