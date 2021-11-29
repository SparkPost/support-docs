---
lastUpdated: "03/26/2020"
title: "curl.new"
description: "curl new Create a c URL object curl new Create a new curl object The curl object serves as the main point of context for managing a session You must create an object to be able to use any of the networking operations of the c URL library Example 70..."
---

<a name="lua.ref.curl.new"></a> 
## Name

curl.new — Create a cURL object

<a name="idp15633952"></a> 
## Synopsis

`require('curl');`

`curl.new();`

<a name="idp15636912"></a> 
## Description

Create a new curl object. The curl object serves as the main point of context for managing a session. You must create an object to be able to use any of the networking operations of the cURL library.

<a name="lua.ref.curl.new.example"></a> 


```
c = curl.new();
c:setopt(curl.OPT_URL, "http://example.com/path");
c:perform();
```

<a name="idp15640880"></a> 
### See Also

[c:close](/momentum/4/lua/ref-curl-c-close)