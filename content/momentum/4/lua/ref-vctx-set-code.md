---
lastUpdated: "03/26/2020"
title: "vctx:set_code"
description: "vctx set code Set the inbound disposition and response message vctx set code codenum message Sets the inbound disposition and response message This can cause the current message to be rejected if the codenum is set to an appropriate value Because this function is in the msys core namespace an..."
---

<a name="lua.ref.vctx_set_code"></a> 
## Name

vctx:set_code — Set the inbound disposition and response message

<a name="idp19278816"></a> 
## Synopsis

`vctx:set_code(codenum, message);`

```
codenum: string
message: string
```
<a name="idp19281808"></a> 
## Description

Sets the inbound disposition and response message. This can cause the current message to be rejected if the `codenum` is set to an appropriate value.

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.