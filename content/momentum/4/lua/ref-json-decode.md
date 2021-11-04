---
lastUpdated: "03/26/2020"
title: "json.decode"
description: "json decode Create a JSON object from a JSON string require json json decode str Create a JSON object from a JSON string On success this function returns a JSON object On failure the JSON object is nil and an error code and an error message are returned Use json..."
---

<a name="lua.ref.json.decode"></a> 
## Name

json.decode — Create a JSON object from a JSON string

<a name="idp16463360"></a> 
## Synopsis

require('json');

`json.decode(str);`

`str: string`<a name="idp16466768"></a> 
## Description

Create a JSON object from a JSON string. On success this function returns a JSON object. On failure the JSON object is nil and an error code and an error message are returned. Use [json.strerror](/momentum/4/lua/ref-json-strerror) to return a description of JSON error codes. You can also use [json.new](/momentum/4/lua/ref-json-new) to create an empty JSON object.

<a name="lua.ref.json.decode.example"></a> 


```
obj, code, err = json.decode([[{ "hello": "world" }]]);
if not obj then
 error(err);
end
print(obj.hello); -- { "hello": "world" }
obj.int = 4;
obj.num = 3.5;
print(obj); -- { "hello": "world", "int": 4, "num": 3.500000 }
```

Enable this function with the statement `require("json");`.

You can directly assign a primitive to the field of a JSON object. Lua tables, whether they are objects or arrays, are a different matter; See [json.encode](/momentum/4/lua/ref-json-encode) for more information.

<a name="idp16474720"></a> 
## See Also

[json.encode](/momentum/4/lua/ref-json-encode)