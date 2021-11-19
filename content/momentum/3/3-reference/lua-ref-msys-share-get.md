---
lastUpdated: "03/26/2020"
title: "msys.shareGet"
description: "msys share Get Retrieve the value associated with keystring set by an earlier call to msys share Set msys share Get keystring Retrieves the value associated with keystring set by an earlier call to msys share Set If there is no value associated with the keystring this function returns nil..."
---

<a name="lua.ref.msys.shareGet"></a> 
## Name

msys.shareGet — Retrieve the value associated with keystring set by an earlier call to msys.shareSet

<a name="idp24718032"></a> 
## Synopsis

`msys.shareGet(keystring);`

`keystring: string`<a name="idp24720720"></a> 
## Description

Retrieves the value associated with `keystring` set by an earlier call to `msys.shareSet`. If there is no value associated with the `keystring`, this function returns nil. It returns true if the value was stored successfully, false otherwise. The most likely cause of failure is an invalid value for `keystring`.

### Note

This function has been made obsolete by the data sharing features introduced in version 3.2\. For more information see [msys.runInPool](/momentum/3/3-reference/3-reference-lua-ref-msys-runinpool).

<a name="lua.ref.msys.shareGet.example"></a> 


```
incrementing a counter in a thread safe manner
msys.lock("counter-example");
local c= msys.shareGet("my-counter");
if c == nil then
  c = 0;
end
msys.shareSet("my-counter", c + 1);
msys.unlock("counter-example");
```

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp24729728"></a> 
## See Also

[msys.shareSet](/momentum/3/3-reference/lua-ref-msys-share-set), [msys.shareUnset](/momentum/3/3-reference/lua-ref-msys-share-unset)