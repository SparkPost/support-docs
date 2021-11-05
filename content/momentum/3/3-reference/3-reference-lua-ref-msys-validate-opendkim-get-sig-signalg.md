---
lastUpdated: "03/26/2020"
title: "msys.validate.opendkim.get_sig_signalg"
description: "msys validate opendkim get sig signalg Return the signing algorithm as a string msys validate opendkim get sig signalg dkim sig Configuration Change This function is available as of version 3 6 This function requires the opendkim module This function returns the DKIM signing algorithm string Use msys validate opendkim..."
---

<a name="lua.ref.msys.validate.opendkim.get_sig_signalg"></a> 
## Name

msys.validate.opendkim.get_sig_signalg — Return the signing algorithm as a string

<a name="idp27708448"></a> 
## Synopsis

`msys.validate.opendkim.get_sig_signalg(dkim_sig)`

`dkim_sig: userdata, DKIM_SIGINFO type`<a name="idp27711552"></a> 
## Description

**Configuration Change. ** This function is available as of version 3.6.

This function requires the opendkim module. This function returns the DKIM signing algorithm string. Use `msys.validate.opendkim.get_num_sigs` and `msys.validate.opendkim.get_sig` to get a DKIM_SIGINFO object to pass to this function. For a description of the DKIM_SIGINFO object see [DKIM_DSIGINFO](http://www.opendkim.org/libopendkim/dkim_siginfo.html). This function returns the signing algorithm. Return values are:

*   `rsa-sha1`

*   `rsa-sha256`

*   `unknown`

The DKIM status (DKIM_STAT) is also returned. `DKIM_STAT` can be any one of the following values:

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

<a name="idp27742112"></a> 
## See Also

[msys.validate.opendkim.get_sig_canons](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-canons), [msys.validate.opendkim.sign](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-sign), [msys.validate.opendkim.verify](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-verify), [msys.validate.opendkim.get_num_sigs](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-num-sigs), [msys.validate.opendkim.get_sig](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig), [msys.validate.opendkim.get_sig_domain](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-domain), [msys.validate.opendkim.get_sig_selector](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-selector), [msys.validate.opendkim.get_sig_errorstr](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-errorstr), [msys.validate.opendkim.get_sig_flags](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-flags), [msys.validate.opendkim.get_sig_identity](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-identity), [msys.validate.opendkim.get_sig_keysize](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-keysize), [msys.validate.opendkim.get_sig_hdrsigned](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-hdrsigned), [msys.validate.opendkim.get_sig_canons](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-canons), [“opendkim – OpenDKIM module”](/momentum/3/3-reference/3-reference-modules-opendkim) and [“dkim – DomainKeys Identified Mail Signatures”](/momentum/3/3-reference/modules-dkim)