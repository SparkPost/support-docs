---
lastUpdated: "03/26/2020"
title: "msg:context_get"
description: "msg context get Get a context variable msg context get type key Get a context variable Legal values for type are msys core ECMESS CTX MESS msys core ECMESS CTX CONN This function always returns a string In the code example given above the context variable key is returned as..."
---

<a name="lua.ref.msg_context_get"></a> 
## Name

msg:context_get — Get a context variable

<a name="idp24334224"></a> 
## Synopsis

`msg:context_get(type, key);`

```
type: numeric
key: string
```
<a name="idp24336928"></a> 
## Description

Get a context variable. Legal values for `type` are:

*   `msys.core.ECMESS_CTX_MESS`

*   `msys.core.ECMESS_CTX_CONN`

```
local val = 1
msg:context_set(msys.core.ECMESS_CTX_MESS, 'key', 'val')
local messval = msg:context_get(msys.core.ECMESS_CTX_MESS, 'key')
```

### Note

This function always returns a string. In the code example given above, the context variable `key` is returned as the string value `'1'` and not as a numeric value.

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp24345728"></a> 
## See Also

[msg:context_set](/momentum/3/3-reference/3-reference-lua-ref-msg-context-set), [msg:context_exists](/momentum/3/3-reference/3-reference-lua-ref-msg-context-exists), and [msg:context_exists_and_get](/momentum/3/3-reference/3-reference-lua-ref-msg-context-exists-and-get)