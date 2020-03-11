---
title: "node:doc"
description: "node doc Return the document object that contains the specified node node doc Return the document object that contains the specified node Example 70 80 example doc tostring and xml parsexml..."
---

<a name="lua.ref.xml.node_doc"></a> 
## Name

node:doc — Return the document object that contains the specified node

<a name="idp19411072"></a> 
## Synopsis

`require('xml');`

`node:doc();`

<a name="idp19414032"></a> 
## Description

Return the document object that contains the specified node.

<a name="idp19415728"></a> 

**Example 70.80. example**

```
local doc = node:doc();
print(doc:tostring());
```

<a name="idp19417376"></a> 
### See Also

[doc:tostring](lua.ref.xml.doc_tostring "doc:tostring") and [xml.parsexml](lua.ref.xml.parsexml "xml.parsexml")