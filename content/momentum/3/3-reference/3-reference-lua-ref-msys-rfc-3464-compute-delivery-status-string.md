---
lastUpdated: "03/26/2020"
title: "msys.rfc3464.compute_delivery_status_string"
description: "msys rfc 3464 compute delivery status string Generate RFC 3464 compliant delivery status headers msys rfc 3464 compute delivery status string response text This function is similar to the compute delivery status function but returns a string concatenation of the header value pairs separated by r n This string is..."
---

<a name="lua.ref.msys.rfc3464.compute_delivery_status_string"></a> 
## Name

msys.rfc3464.compute_delivery_status_string — Generate RFC3464 compliant delivery status headers

<a name="idp26911824"></a> 
## Synopsis

`msys.rfc3464.compute_delivery_status_string(response_text);`

`response_text: string`<a name="idp26914544"></a> 
## Description

This function is similar to the `compute_delivery_status` function but returns a string concatenation of the header/value pairs separated by `\r\n`. This string is ready for insertion into the original message to form an MDN.

Enable this function with the statement `require('msys.rfc3464');`.

<a name="idp26918160"></a> 
## See Also

[msys.rfc3464.compute_delivery_status](/momentum/3/3-reference/3-reference-lua-ref-msys-rfc-3464-compute-delivery-status)