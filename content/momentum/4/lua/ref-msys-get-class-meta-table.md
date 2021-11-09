---
lastUpdated: "03/26/2020"
title: "msys.getClassMetaTable"
description: "msys get Class Meta Table Return the metatable for the named class msys get Class Meta Table classnamestring Returns the metatable for the named class See http www lua org pil 13 html for more information about Lua metatables Because this function is in the msys namespace an explicit require..."
---

<a name="lua.ref.msys.getClassMetaTable"></a> 
## Name

msys.getClassMetaTable — Return the metatable for the named class

<a name="idp16097552"></a> 
## Synopsis

`msys.getClassMetaTable(classnamestring);`

`classnamestring: string`<a name="idp16100560"></a> 
## Description

Returns the metatable for the named class. See [http://www.lua.org/pil/13.html](http://www.lua.org/pil/13.html) for more information about Lua metatables.

Because this function is in the `msys` namespace, an explicit `require('msys')` is not necessary.