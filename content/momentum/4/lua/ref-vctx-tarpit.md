---
lastUpdated: "03/26/2020"
title: "vctx:tarpit"
description: "vctx tarpit Issue a time cost on the inbound session vctx tarpit interval This instructs Momentum that the SMTP session should be put on hold for the specified number of seconds Currently only the SMTP listener supports this Enable this function with the statement require msys extended vctx Example 70..."
---

<a name="lua.ref.vctx_tarpit"></a> 
## Name

vctx:tarpit — Issue a time cost on the inbound session

<a name="idp19288736"></a> 
## Synopsis

`vctx:tarpit(interval);`

`interval: number`<a name="idp19291696"></a> 
## Description

This instructs Momentum that the SMTP session should be put on hold for the specified number of seconds. Currently only the SMTP listener supports this.

Enable this function with the statement `require('msys.extended.vctx');`.

<a name="lua.ref.vctx_tarpit.example"></a> 


```
require("msys.core");
require("msys.extended.vctx");

local mod = {};
function mod:validate_connect(accept, vctx)
  vctx:tarpit(1);
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("validate_connect", mod);
```