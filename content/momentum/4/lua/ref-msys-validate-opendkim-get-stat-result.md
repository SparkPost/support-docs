---
lastUpdated: "08/11/2026"
title: "msys.validate.opendkim.get_stat_result"
description: "msys validate opendkim get stat result Map a DKIM verification status with no per signature verdict to an Authentication Results result msys validate opendkim get stat result stat This function maps the DKIM STAT returned by msys validate opendkim verify to a result string or returns nil when the per signature results are authoritative..."
---

<a name="lua.ref.msys.validate.opendkim.get_stat_result"></a> 
## Name

msys.validate.opendkim.get_stat_result — Map a DKIM verification status with no per-signature verdict to an Authentication-Results result

<a name="idp18915744"></a> 
## Synopsis

`msys.validate.opendkim.get_stat_result(stat)`

`stat: number, DKIM_STAT returned by msys.validate.opendkim.verify`<a name="idp18919200"></a> 
## Description

This function maps the overall verification status returned by `msys.validate.opendkim.verify` to a result string for the `dkim` clause of an `Authentication-Results` header, for the statuses that carry no per-signature verdict. It returns:

*   `"none (message not signed)"` – the message carried no DKIM signature (`DKIM_STAT_NOSIG`).

*   `nil` – the per-signature results are authoritative (`DKIM_STAT_OK`, `DKIM_STAT_BADSIG`, `DKIM_STAT_NOKEY`, `DKIM_STAT_CANTVRFY`, `DKIM_STAT_REVOKED`); iterate the signatures and report `msys.validate.opendkim.get_sig_result` for each.

*   `"permerror (signature syntax error)"` – the message could not be evaluated (`DKIM_STAT_SYNTAX`).

*   `"temperror (verification status <n>)"` – any other status, including key-retrieval tempfails (`DKIM_STAT_KEYFAIL`) and internal or resource errors; verification may succeed if retried later.

See the [msys.validate.opendkim.get_sig_result](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-result) page for a usage example combining both functions.

This function requires the [`opendkim`](/momentum/4/modules/opendkim) module.

Enable this function with the statement `require('msys.validate.opendkim');`.

<a name="idp18957456"></a> 
## See Also

[msys.validate.opendkim.get_sig_result](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-result), [msys.validate.opendkim.verify](/momentum/4/lua/ref-msys-validate-opendkim-verify), [msys.validate.opendkim.get_num_sigs](/momentum/4/lua/ref-msys-validate-opendkim-get-num-sigs), [msys.validate.opendkim.get_sig](/momentum/4/lua/ref-msys-validate-opendkim-get-sig)