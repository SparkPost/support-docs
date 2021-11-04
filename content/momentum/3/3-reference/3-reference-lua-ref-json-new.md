---
lastUpdated: "03/26/2020"
title: "json.new"
description: "json new Create an empty JSON object json new Create an empty JSON object Example 15 39 json new example json strerror and json decode..."
---

<a name="lua.ref.json.new"></a> 
## Name

json.new — Create an empty JSON object

<a name="idp25247056"></a> 
## Synopsis

`require("json");`

`json.new()`

<a name="idp25249728"></a> 
## Description

Create an empty JSON object.

<a name="lua.ref.new.example"></a> 


```
o = json.new();
o.name = "value";
print(o); -- { "name": "value" }
```

<a name="idp25253616"></a> 
## See Also

[json.strerror](/momentum/3/3-reference/3-reference-lua-ref-json-strerror) and [json.decode](/momentum/3/3-reference/3-reference-lua-ref-json-decode)