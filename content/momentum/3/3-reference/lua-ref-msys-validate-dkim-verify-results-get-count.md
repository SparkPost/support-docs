---
lastUpdated: "03/26/2020"
title: "msys.validate.dkim.verify_results_get_count"
description: "msys validate dkim verify results get count return a count of verification results msys validate dkim verify results get count results A message can contain zero or more DKIM signatures If more than one signature is found in a message they are normally found in the different parts of a..."
---

<a name="lua.ref.msys.validate.dkim.verify_results_get_count"></a> 
## Name

msys.validate.dkim.verify_results_get_count — return a count of verification results

<a name="idp27211776"></a> 
## Synopsis

`msys.validate.dkim.verify_results_get_count(results);`

`results: string`<a name="idp27214480"></a> 
## Description

A message can contain zero or more DKIM signatures. If more than one signature is found in a message, they are normally found in the different parts of a multi-part MIME type message. Each signature will be validated and one verification result will be created for each signature. This function returns the number of verification results.

**Configuration Change. ** This feature is available as of version 3.5.

*Note*: If results is nil then error is set to "`No verification results to count.`"

This function is valid in the validate_data_spool, data and data_spool_each_rcpt phases. Enable this function with the statement `require('msys.validate.dkim);`.

<a name="idp27221584"></a> 
## See Also

[msys.validate.dkim.verify_status_to_string](/momentum/3/3-reference/lua-ref-msys-validate-dkim-verify-status-to-string), [msys.validate.dkim.get_verify_results](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-verify-results), [msys.validate.dkim.verify_results_get_item](/momentum/3/3-reference/lua-ref-msys-validate-dkim-verify-results-get-item)