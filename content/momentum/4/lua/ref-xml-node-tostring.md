---
lastUpdated: "03/26/2020"
title: "node:tostring"
description: "node tostring Output a node as a string node tostring Where node is an XML element this method returns a string representation of the XML source of the node and its children This same method is also available as a tostring metamethod so node tostring and tostring node are equivalent..."
---

<a name="lua.ref.xml.node_tostring"></a> 
## Name

node:tostring — Output a node as a string

<a name="idp19442080"></a> 
## Synopsis

`require('xml');`

`node:tostring();`

<a name="idp19445040"></a> 
## Description

Where `node` is an XML element, this method returns a string representation of the XML source of the node and its children. This same method is also available as a __tostring metamethod, so `node:tostring()` and `tostring(node)` are equivalent.

<a name="lua.ref.xml.node_tostring.example"></a> 


```
local doc = xml.parsexml([[<doc></doc>]]);
local node = doc:root();
local child = node:addchild("item");
child:contents("I am a child node.");
print(child:tostring());
```

In this case the output is as follows:

```
<doc>
 <item>I am a child node.</item>
</doc>
```

### Note

The `print` function will automatically convert a node to string so the use of `child:tostring` in [“node:tostring example”](/momentum/4/lua/ref-xml-node-tostring#lua.ref.xml.node_tostring.example) is not strictly necessary.

<a name="idp19453856"></a> 
### See Also

[xml.parsexml](/momentum/4/lua/ref-xml-parsexml)