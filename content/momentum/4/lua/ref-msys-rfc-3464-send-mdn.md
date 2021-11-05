---
lastUpdated: "03/26/2020"
title: "msys.rfc3464.send_mdn"
description: "msys rfc 3464 send mdn Generate and enqueue an MDN msys rfc 3464 send mdn msg action Generate and enqueue an MDN from the input msg action can be one of msys core FAILED msys core DELAYED msys core DELIVERED msys core RELAYED and msys core EXPANDED Returns 1 if..."
---

<a name="lua.ref.msys.rfc3464.send_mdn"></a> 
## Name

msys.rfc3464.send_mdn — Generate and enqueue an MDN

<a name="idp18376496"></a> 
## Synopsis

`msys.rfc3464.send_mdn(msg, action);`

```
msg: userdata, ec_message type
action: number
```
<a name="idp18379504"></a> 
## Description

Generate and enqueue an MDN from the input `msg`. `action` can be one of msys.core.FAILED, msys.core.DELAYED, msys.core.DELIVERED, msys.core.RELAYED and msys.core.EXPANDED. Returns `1` if successful and `0` on failure.

Enable this function with the statement `require('msys.rfc3464');`.