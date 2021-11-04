---
lastUpdated: "03/26/2020"
title: "msys.type"
description: "msys type Return the type name of the supplied parameter msys type parameter Returns the type name of the supplied parameter just like the built in Lua type function The difference is that for userdata created by Momentum the underlying object name will be returned instead of userdata Because this..."
---

<a name="lua.ref.msys.type"></a> 
## Name

msys.type — Return the type name of the supplied parameter

<a name="idp16394288"></a> 
## Synopsis

`msys.type(parameter);`

`parameter: mixed`<a name="idp16397248"></a> 
## Description

Returns the type name of the supplied parameter, just like the built-in Lua `type` function. The difference is that for userdata created by Momentum, the underlying object name will be returned instead of "userdata".

Because this function is in the `msys` namespace, an explicit `require` is not necessary.