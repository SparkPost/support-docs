---
lastUpdated: "03/26/2020"
title: "msg:context_set"
description: "msg context set Sets a context variable msg context set type key value Set a context variable Legal values for type are msys core ECMESS CTX MESS msys core ECMESS CTX CONN The companion function msg context get always returns a string If for example My Value is a local..."
---

<a name="lua.ref.msg_context_set"></a> 
## Name

msg:context_set — Sets a context variable

<a name="idp15949664"></a> 
## Synopsis

`msg:context_set(type, key, value);`

```
type: numeric
key: string
value: string
```
<a name="idp15952672"></a> 
## Description

Set a context variable. Legal values for `type` are:

*   `msys.core.ECMESS_CTX_MESS`

*   `msys.core.ECMESS_CTX_CONN`

`msg:context_set(msys.core.ECMESS_CTX_MESS, "MyVariable", "MyValue")`
### Note

The companion function, `msg:context_get`, always returns a string. If, for example, `MyValue` is a local numeric variable, `msg:context_get` will still return a string.

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp15962608"></a> 
## See Also

[msg:context_get](/momentum/4/lua/ref-msg-context-get)