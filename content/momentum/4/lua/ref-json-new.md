---
lastUpdated: "03/26/2020"
title: "json.new"
description: "json new Create an empty JSON object json new Create an empty JSON object Example 70 38 json new example json strerror and json decode..."
---

<a name="lua.ref.json.new"></a> 
## Name

json.new — Create an empty JSON object

<a name="idp16520992"></a> 
## Synopsis

`require("json");`

`json.new()`

<a name="idp16523952"></a> 
## Description

Create an empty JSON object.

<a name="lua.ref.new.example"></a> 


```
o = json.new();
o.name = "value";
print(o); -- { "name": "value" }
```

<a name="idp16528256"></a> 
## See Also

[json.strerror](/momentum/4/lua/ref-json-strerror) and [json.decode](/momentum/4/lua/ref-json-decode)