---
lastUpdated: "03/26/2020"
title: "node:addchild"
description: "node addchild Add a child node node addchild value When the parameter passed to this function is a string this function creates a node and adds it as a child of the existing node returning the new node The parameter passed to this method is the name of the XML..."
---

<a name="lua.ref.xml.node_addchild"></a> 
## Name

node:addchild — Add a child node

<a name="idp19350192"></a> 
## Synopsis

`require('xml');`

`node:addchild(value);`

`value: mixed`<a name="idp19353872"></a> 
## Description

When the parameter passed to this function is a string, this function creates a node and adds it as a child of the existing node, returning the new node. The parameter passed to this method is the name of the XML tag.

<a name="lua.ref.xml.node_addchild.example"></a> 


```
local doc = xml.parsexml([[<doc></doc>]]);
local node = doc:root();
local child = node:addchild("item");
child:contents("I am a child node.");
print(node:tostring());
```

You can also pass a node object to this function, the return value of [node:children](/momentum/4/lua/ref-xml-node-children), for example. When the parameter is an existing node object, it is added as a child node and the "new" node is the return value of the function.

<a name="idp19359088"></a> 
### See Also

[doc:root](/momentum/4/lua/ref-xml-doc-root)