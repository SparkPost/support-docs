---
lastUpdated: "03/26/2020"
title: "node:children"
description: "node children Return an iterator of all child nodes node children Return an iterator of all child nodes of the specified node Any text nodes are also included Example 70 78 example xml parsexml..."
---

<a name="lua.ref.xml.node_children"></a> 
## Name

node:children — Return an iterator of all child nodes

<a name="idp19381760"></a> 
## Synopsis

`require('xml');`

`node:children();`

<a name="idp19384720"></a> 
## Description

Return an iterator of all child nodes of the specified node. Any text nodes are also included.

<a name="lua.ref.xml.node_children.example"></a> 


```
for child in node:children() do
  print(child:name());
end
```

<a name="idp19388560"></a> 
### See Also

[xml.parsexml](/momentum/4/lua/ref-xml-parsexml)