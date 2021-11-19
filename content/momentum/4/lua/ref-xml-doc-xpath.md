---
lastUpdated: "03/26/2020"
title: "doc:xpath"
description: "doc xpath Perform an X Path query doc xpath query contextnode This function performs an X Path query and returns an iterator over the resultant set of nodes You may specify an optional node from the same document to use as context for the X Path query Note If you..."
---

<a name="lua.ref.xml.doc_xpath"></a> 
## Name

doc:xpath — Perform an XPath query

<a name="idp19335344"></a> 
## Synopsis

`require('xml');`

`doc:xpath(query, [contextnode]);`

```
query: string
contextnode: string (optional)
```
<a name="idp19339072"></a> 
## Description

This function performs an XPath query and returns an iterator over the resultant set of nodes. You may specify an optional node from the same document to use as context for the XPath query. *Note*: If you include a context node you must enclose it in square brackets.

<a name="lua.ref.xml.doc_xpath.example"></a> 


```
...
for node in doc:xpath("//item") do
  print(node:name())
end
```

<a name="idp19343584"></a> 
### See Also

[xml.parsexml](/momentum/4/lua/ref-xml-parsexml)