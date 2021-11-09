---
lastUpdated: "03/26/2020"
title: "msys.validate.dkim.verify_results_get_item"
description: "msys validate dkim verify results get item Return the DKIM signature result at the specified index msys validate dkim verify results get item results index value Return the DKIM signature result at the specified index For an example of how this function is used see Example 15 36 msys dkim..."
---

<a name="lua.ref.msys.validate.dkim.verify_results_get_item"></a> 
## Name

msys.validate.dkim.verify_results_get_item — Return the DKIM signature result at the specified index

<a name="idp27227824"></a> 
## Synopsis

`msys.validate.dkim.verify_results_get_item(results, index_value);`

```
results: string
index_value: number
```
<a name="idp27230576"></a> 
## Description

Return the DKIM signature result at the specified index. For an example of how this function is used see [“msys.dkim.get_verify_results”](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-verify-results#lua.ref.msys.validate.dkim.get_verify_results.example).

**Configuration Change. ** This feature is available as of version 3.5.

*Note*: If results is nil then error is `"No verification results to get item from`" and if index_value is nil then error is `Index value not specified`" and if index_value is greater than the size of results then error is "`Index value is greater than the number of verification results`".

This function is valid in the validate_data_spool, data and data_spool_each_rcpt phases. Enable this function with the statement `require('msys.validate.dkim');`.

<a name="idp27239072"></a> 
## See Also

[msys.validate.dkim.get_verify_results](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-verify-results), [msys.validate.dkim.verify_results_get_count](/momentum/3/3-reference/lua-ref-msys-validate-dkim-verify-results-get-count), [msys.validate.dkim.verify_status_to_string](/momentum/3/3-reference/lua-ref-msys-validate-dkim-verify-status-to-string)