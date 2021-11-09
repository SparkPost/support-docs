---
lastUpdated: "03/26/2020"
title: "node:unlink"
description: "node unlink Unlink an XML node from its DOM container node unlink Unlink an XML node from its DOM container Call this function when you wish to save the node prior to its container being garbage collected This function returns the XML node object Example 70 83 node unlink example..."
---

<a name="lua.ref.xml.node_unlink"></a> 
## Name

node:unlink — Unlink an XML node from its DOM container

<a name="idp19460368"></a> 
## Synopsis

`require('xml');`

`node:unlink();`

<a name="idp19463328"></a> 
## Description

Unlink an XML node from its DOM container. Call this function when you wish to save the node prior to its container being garbage collected. This function returns the XML node object.

<a name="idp19465152"></a> 


```
local doc = xml.parsexml([[<doc><item/></doc>]]);
local node = doc:root();
local node = node:unlink();
```

<a name="idp19466848"></a> 
### See Also

[xml.parsexml](/momentum/4/lua/ref-xml-parsexml)