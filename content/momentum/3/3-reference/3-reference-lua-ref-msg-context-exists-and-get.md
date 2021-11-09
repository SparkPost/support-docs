---
lastUpdated: "03/26/2020"
title: "msg:context_exists_and_get"
description: "msg context exists and get Check if a context variable exists and get it msg context exists and get type key Check if a context variable exists and get it Legal values for type are msys core ECMESS CTX MESS msys core ECMESS CTX CONN If the context variable key..."
---

<a name="lua.ref.msg_context_exists_and_get"></a> 
## Name

msg:context_exists_and_get — Check if a context variable exists and get it

<a name="idp24311152"></a> 
## Synopsis

`msg:context_exists_and_get(type, key);`

```
type: numeric
key: string
```
<a name="idp24313856"></a> 
## Description

Check if a context variable exists and get it. Legal values for `type` are:

*   `msys.core.ECMESS_CTX_MESS`

*   `msys.core.ECMESS_CTX_CONN`

`local e, str = msg:context_exists_and_get(msys.core.ECMESS_CTX_MESS, 'key')`

If the context variable `key` was found, `e` will be `1` and `str` will be a string value. If the context variable `key` was not found, `e` will be `0` and `str` will be nil.

This function is similar to msg:context_get(); however, msg:context_get() returns an empty string if the key does not exist. msg:context_exists_and_get() is more useful in the general case because policy scripts generally take a different path when the key does not exist and in those cases a default of empty string is not helpful.

The return value of this function should always be compared explicitly. For example:

```
local e, str = msg:context_exists_and_get(msys.core.ECMESS_CTX_MESS, 'key')
if e == 1 then
  -- do something here that depends on the key existing
end
```

Note that Lua treats the numeric value `0` as true, which can be confusing.

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp24327584"></a> 
## See Also

[msg:context_get](/momentum/3/3-reference/3-reference-lua-ref-msg-context-get)