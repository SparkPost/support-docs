---
lastUpdated: "03/26/2020"
title: "msys.rfc3464.compute_delivery_status"
description: "msys rfc 3464 compute delivery status Generate RFC 3464 compliant delivery status headers msys rfc 3464 compute delivery status msg action Generates RFC 3464 compliant delivery status headers It takes two inputs msg and action msg is an msys core ec message and action is one of the following integers..."
---

<a name="lua.ref.msys.rfc3464.compute_delivery_status"></a> 
## Name

msys.rfc3464.compute_delivery_status — Generate RFC3464 compliant delivery status headers

<a name="idp26899424"></a> 
## Synopsis

`msys.rfc3464.compute_delivery_status(msg, action);`

```
msg: userdata, ec_message type
action: number
```
<a name="idp26902176"></a> 
## Description

Generates RFC3464 compliant delivery status headers. It takes two inputs: `msg` and `action`. `msg` is an msys.core:_ec_message and `action` is one of the following integers: msys.core.FAILED, msys.core.DELAYED, msys.core.DELIVERED, msys.core.RELAYED and msys.core.EXPANDED. Returns a table of header/value pairs.

Enable this function with the statement `require('msys.rfc3464');`.

<a name="idp26906704"></a> 
## See Also

[msys.rfc3464.compute_delivery_status_string](/momentum/3/3-reference/3-reference-lua-ref-msys-rfc-3464-compute-delivery-status-string)