---
lastUpdated: "03/26/2020"
title: "doc:tostring"
description: "doc tostring Output a DOM document as a string doc tostring Where doc is an XML document this method returns a string representation of the XML source of the entire document This same method is also available as a tostring metamethod so doc tostring and tostring doc are equivalent Example..."
---

<a name="lua.ref.xml.doc_tostring"></a> 
## Name

doc:tostring — Output a DOM document as a string

<a name="idp19316432"></a> 
## Synopsis

`require('xml');`

`doc:tostring();`

<a name="idp19319392"></a> 
## Description

Where `doc` is an XML document, this method returns a string representation of the XML source of the entire document. This same method is also available as a __tostring metamethod, so `doc:tostring()` and `tostring(doc)` are equivalent.

<a name="lua.ref.xml.doc_tostring.example"></a> 


```
doc = xml.parsexml([[<doc></doc>]]);
local node = doc:root();
local child = node:addchild("item");
child:contents("I am a child node.");
local doc = node:doc();
print(doc:tostring());
```

This function outputs the entire document as shown in the following:

```
<?xml version="1.0" encoding="utf8"?>
<doc>
  <item>I am a child node.</item>
</doc>
```

### Note

The `print` function will automatically convert a document to string so the use of `doc:tostring` in [“doc:tostring example”](/momentum/4/lua/ref-xml-doc-tostring#lua.ref.xml.doc_tostring.example) is not strictly necessary.

<a name="idp19328240"></a> 
### See Also

[node:doc](/momentum/4/lua/ref-xml-node-doc) and [xml.parsexml](/momentum/4/lua/ref-xml-parsexml)