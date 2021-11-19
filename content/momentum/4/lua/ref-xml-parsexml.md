---
lastUpdated: "03/26/2020"
title: "xml.parsexml"
description: "xml parsexml Create an XML document object xml parsexml strxml keep blanks This function parses an XML string and returns an XML document object The second argument keep blanks is an optional integer value When not set or set to 0 ignorable white spaces will be ignored otherwise text nodes..."
---

<a name="lua.ref.xml.parsexml"></a> 
## Name

xml.parsexml — Create an XML document object

<a name="idp19473344"></a> 
## Synopsis

`require('xml');`

`xml.parsexml(strxml, keep_blanks);`

```
strxml: string
keep_blanks: numeric (optional)
```
<a name="idp19477072"></a> 
## Description

This function parses an XML string and returns an XML document object. The second argument, `keep_blanks` is an optional integer value. When not set or set to `0`, ignorable white spaces will be ignored, otherwise, text nodes containing those blanks will be generated in the Document Object Model (DOM) output.

<a name="lua.ref.xml.parsexml.example"></a> 


```
local doc = xml.parsexml([[<doc></doc>]]);
local node = doc:root();
local child = node:addchild("item")
```

<a name="idp19482048"></a> 
### See Also

[doc:root](/momentum/4/lua/ref-xml-doc-root)