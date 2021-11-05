---
lastUpdated: "03/26/2020"
title: "doc:root"
description: "doc root Return the root node of an XML document doc root Where doc is an XML object created using xml parsexml return the root node Example 70 73 doc root example xml parsexml..."
---

<a name="lua.ref.xml.doc_root"></a> 
## Name

doc:root — Return the root node of an XML document

<a name="idp19302080"></a> 
## Synopsis

`require('xml');`

`doc:root();`

<a name="idp19305040"></a> 
## Description

Where `doc` is an XML object created using `xml.parsexml`, return the root node.

<a name="lua.ref.xml.doc_root.example"></a> 


```
local doc = xml.parsexml([[<doc></doc>]]);
local node = doc:root();
local child = node:addchild("item");
child:contents("I am a child node.");
print(node:tostring());
```

<a name="idp19310048"></a> 
## See Also

[xml.parsexml](/momentum/4/lua/ref-xml-parsexml)