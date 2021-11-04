---
lastUpdated: "03/26/2020"
title: "msys.rfc3464.create_mdn"
description: "msys rfc 3464 create mdn Generate an MDN from a message msys rfc 3464 create mdn msg action Generates an MDN from the input msg action can be one of msys core FAILED msys core DELAYED msys core DELIVERED msys core RELAYED and msys core EXPANDED Returns the generated MDN..."
---

<a name="lua.ref.msys.rfc3464.create_mdn"></a> 
## Name

msys.rfc3464.create_mdn — Generate an MDN from a message

<a name="idp26923104"></a> 
## Synopsis

`msys.rfc3464.create_mdn(msg, action);`

```
msg: userdata, ec_message type
action: number
```
<a name="idp26925824"></a> 
## Description

Generates an MDN from the input `msg`. `action` can be one of msys.core.FAILED, msys.core.DELAYED, msys.core.DELIVERED, msys.core.RELAYED and msys.core.EXPANDED. Returns the generated MDN.

Enable this function with the statement `require('msys.rfc3464');`.