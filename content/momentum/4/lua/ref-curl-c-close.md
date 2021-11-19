---
lastUpdated: "03/26/2020"
title: "c:close"
description: "c close Close a curl object c close Close a curl object created using curl new equivalent to c nil This function can be used to force closure of all resources associated with the curl object It is called automatically when the curl object is garbage collected so you will..."
---

<a name="lua.ref.curl.c_close"></a> 
## Name

c:close — Close a curl object

<a name="idp15373776"></a> 
## Synopsis

`require('curl');`

`c:close();`

<a name="idp15376736"></a> 
## Description

Close a curl object created using `curl.new`; equivalent to `c = nil;`.

This function can be used to force closure of all resources associated with the curl object. It is called automatically when the curl object is garbage collected, so you will not typically need to call this function. After calling this function, a runtime error will result if you attempt to use the curl object.

<a name="lua.ref.curl.c_close.example"></a> 


```
c = curl.new();
c:setopt(curl.OPT_URL, "http://example.com/path");
c:perform();
c:close();
```

<a name="idp15382224"></a> 
### See Also

[curl.new](/momentum/4/lua/ref-curl-new)