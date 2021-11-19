---
lastUpdated: "03/26/2020"
title: "msys.validate.dkim.verify_status_to_string"
description: "msys validate dkim verify status to string Return a status string of DKIM verification msys validate dkim verify status to string status Return a textual representation of ec dkim verify result status that's suitable for use in an Authentication Results header For more information about status results see RFC 5451..."
---

<a name="lua.ref.msys.validate.dkim.verify_status_to_string"></a> 
## Name

msys.validate.dkim.verify_status_to_string — Return a status string of DKIM verification

<a name="idp27245376"></a> 
## Synopsis

`msys.validate.dkim.verify_status_to_string(status);`

`status: string`<a name="idp27248080"></a> 
## Description

Return a textual representation of ec_dkim_verify_result.status that's suitable for use in an Authentication-Results header. For more information about status results see [RFC 5451](http://tools.ietf.org/html/rfc5451#section-2.4.1). For a code example see [“msys.dkim.get_verify_results”](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-verify-results#lua.ref.msys.validate.dkim.get_verify_results.example).

**Configuration Change. ** This feature is available as of version 3.5.

*Note*: If status is nil then error is "`No status code is passed in`".

This function is valid in the validate_data_spool, data and data_spool_each_rcpt phases. Enable this function with the statement `require('msys.validate.dkim');`.

<a name="idp27256352"></a> 
## See Also

[msys.validate.dkim.verify_results_get_count](/momentum/3/3-reference/lua-ref-msys-validate-dkim-verify-results-get-count), [msys.validate.dkim.get_verify_results](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-verify-results), [msys.validate.dkim.verify_results_get_item](/momentum/3/3-reference/lua-ref-msys-validate-dkim-verify-results-get-item)