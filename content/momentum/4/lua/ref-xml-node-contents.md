---
lastUpdated: "03/26/2020"
title: "node:contents"
description: "node contents Get or set a text node node contents text str When a parameter is passed a text node with the specified value is created If no string is passed the value of the text node is returned To remove text pass an empty string Example 70 79 node..."
---

<a name="lua.ref.xml.node_contents"></a> 
## Name

node:contents — Get or set a text node

<a name="idp19395104"></a> 
## Synopsis

`require('xml');`

`node:contents(text_str);`

`text_str: string (optional)`<a name="idp19398768"></a> 
## Description

When a parameter is passed, a text node with the specified value is created. If no string is passed, the value of the text node is returned. To remove text, pass an empty string.

<a name="idp19400592"></a> 


```
local node = doc:root();
local child = node:addchild("item");
child:contents("I am a child node.");
```

### Note

In the preceding example, the element node <item>, holds a child text node with the value "I am a child node". `node:contents()` will return the value of the text node of <item>. "I am a child node" is not the value of the <item> element. This is evident if you look at [“node:name example”](/momentum/4/lua/ref-xml-node-name#lua.ref.xml.node_name.example)".

<a name="idp19404480"></a> 
### See Also

[xml.parsexml](/momentum/4/lua/ref-xml-parsexml)