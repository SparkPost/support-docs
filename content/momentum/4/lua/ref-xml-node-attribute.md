---
lastUpdated: "03/26/2020"
title: "node:attribute"
description: "node attribute Set or get the attribute of a node node attribute name value The attribute function can be used to get or set the attribute of a node Use nil to unset value node attr is a synonym for node attribute Example 70 77 example xml parsexml..."
---

<a name="lua.ref.xml.node_attribute"></a> 
## Name

node:attribute — Set or get the attribute of a node

<a name="idp19365712"></a> 
## Synopsis

`require('xml');`

`node:attribute(name, value);`

```
name: string
value: mixed (optional)
```
<a name="idp19369424"></a> 
## Description

The attribute function can be used to get or set the attribute of a node. Use `nil` to unset `value`. `node:attr` is a synonym for `node:attribute`.

<a name="lua.ref.xml.node_attribute.example"></a> 


```
node:attr("name", "newval") -- sets the "name" attribute to "newval"
node:attr("name", nil) -- clears the "name" attribute
print(node:attr("name")) -- prints the value of the "name" attribute
```

<a name="idp19375248"></a> 
### See Also

[xml.parsexml](/momentum/4/lua/ref-xml-parsexml)