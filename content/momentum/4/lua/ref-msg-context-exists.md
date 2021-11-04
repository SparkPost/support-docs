---
lastUpdated: "03/26/2020"
title: "msg:context_exists"
description: "msg context exists Check if a context variable exists msg context exists type key Check if a context variable exists Legal values for type are msys core ECMESS CTX MESS msys core ECMESS CTX CONN This function returns 1 if the key exists and 0 if the key does not..."
---

<a name="lua.ref.msg_context_exists"></a> 
## Name

msg:context_exists — Check if a context variable exists

<a name="idp15879280"></a> 
## Synopsis

`msg:context_exists(type, key);`

```
type: numeric
key: string
```
<a name="idp15882272"></a> 
## Description

Check if a context variable exists. Legal values for `type` are:

*   `msys.core.ECMESS_CTX_MESS`

*   `msys.core.ECMESS_CTX_CONN`

`local e = msg:context_exists(msys.core.ECMESS_CTX_MESS, 'key')`

This function returns `1` if the key exists and `0` if the key does not exist.

The return value of this function should always be compared explicitly. For example:

```
local e = msg:context_exists(msys.core.ECMESS_CTX_MESS, 'key')
if e == 1 then
  -- do something here that depends on the key existing
end
```

Note that Lua treats the numeric value `0` as true, which can be confusing.

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp15893616"></a> 
## See Also

[msg:context_exists_and_get](/momentum/4/lua/ref-msg-context-exists-and-get)