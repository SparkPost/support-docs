---
lastUpdated: "03/26/2020"
title: "msys.shareSet"
description: "msys share Set Associate a value with a keystring in the global share space msys share Set keystring value This function associates a value with keystring in the global share space This association is thread safe and consistent across all Lua interpreters and co routines The act of setting the..."
---

<a name="lua.ref.msys.shareSet"></a> 
## Name

msys.shareSet — Associate a value with a keystring in the global share space

<a name="idp24735712"></a> 
## Synopsis

`msys.shareSet(keystring, value);`

```
keystring: string
value: string
```
<a name="idp24738416"></a> 
## Description

This function associates a value with `keystring` in the global share space. This association is thread-safe and consistent across all Lua interpreters and co-routines. The act of setting the value is thread safe and does not require an explicit mutex, but it is recommended that you use a mutex to coordinate modification of the value. `value` may be a number, string, boolean or nil value.

### Note

This function has been made obsolete by the data sharing features introduced in version 3.2\. For more information see [msys.runInPool](/momentum/3/3-reference/3-reference-lua-ref-msys-runinpool).

<a name="lua.ref.msys.shareSet.example"></a> 


```
...
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

<a name="idp24746624"></a> 
## See Also

[msys.shareGet](/momentum/3/3-reference/lua-ref-msys-share-get), [msys.shareUnset](/momentum/3/3-reference/lua-ref-msys-share-unset)