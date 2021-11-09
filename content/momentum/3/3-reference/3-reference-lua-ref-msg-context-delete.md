---
lastUpdated: "03/26/2020"
title: "msg:context_delete"
description: "msg context delete Delete a context variable msg context delete type key Delete a context variable Legal values for type are msys core ECMESS CTX MESS msys core ECMESS CTX CONN For a code example see Example 15 59 msys gcm gcm classify error example Because this function is in..."
---

<a name="lua.ref.msg_context_delete"></a> 
## Name

msg:context_delete — Delete a context variable

<a name="idp24273792"></a> 
## Synopsis

`msg:context_delete(type, key);`

```
type: numeric
key: string
```
<a name="idp24276496"></a> 
## Description

Delete a context variable. Legal values for `type` are:

*   `msys.core.ECMESS_CTX_MESS`

*   `msys.core.ECMESS_CTX_CONN`

For a code example see [“msys.gcm.gcm_classify_error example”](/momentum/3/3-reference/3-reference-lua-ref-msys-gcm-gcm-classify-error#lua.ref.msys.gcm.gcm_classify_error.example). Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

This function returns `1` if the key is deleted and `0` if the key does not exist.

<a name="idp24284656"></a> 
## See Also

[msg:context_set](/momentum/3/3-reference/3-reference-lua-ref-msg-context-set)