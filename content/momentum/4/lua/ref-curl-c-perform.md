---
lastUpdated: "03/26/2020"
title: "c:perform"
description: "c perform Perform the file transfer c perform After all setopt calls have been made perform a file transfer Example 70 15 c perform example See c setopt for an explanation of the parameters passed to setopt..."
---

<a name="lua.ref.curl.c_perform"></a> 
## Name

c:perform — Perform the file transfer

<a name="idp15388672"></a> 
## Synopsis

`require('curl');`

`c:perform();`

<a name="idp15391632"></a> 
## Description

After all `setopt` calls have been made, perform a file transfer.

<a name="lua.ref.curl.c_perform.example"></a> 


```
c = curl.new();
c:setopt(curl.OPT_URL, "http://example.com/index.php");
c:setopt(curl.OPT_WRITEFUNCTION, function(userdata, datastring) print(datastring); »
  return string.len(datastring); end);
c:perform();
```

<a name="idp15396016"></a> 
### See Also

See [c:setopt](/momentum/4/lua/ref-curl-c-setopt) for an explanation of the parameters passed to `setopt`.