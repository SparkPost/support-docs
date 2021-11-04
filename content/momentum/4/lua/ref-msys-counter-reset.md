---
lastUpdated: "03/26/2020"
title: "msys.counter.reset"
description: "msys counter reset Reset a counter msys counter reset object or path Resets the given counter object or counter associated with the given path to 0 If the supplied counter path does not have a counter associated with it then it is created with strict semantics Enable this function with..."
---

<a name="lua.ref.msys.counter.reset"></a> 
## Name

msys.counter.reset — Reset a counter

<a name="idp17830384"></a> 
## Synopsis

`msys.counter.reset(object_or_path);`

`object_or_path: mixed`<a name="idp17833312"></a> 
## Description

Resets the given counter object or counter associated with the given path to `0`. If the supplied counter path does not have a counter associated with it, then it is created with strict semantics.

Enable this function with the statement `require('msys.counter');`.

You can also use the [counter](/momentum/4/console-commands/counter) console command to display and manipulate counters.

<a name="idp17837808"></a> 
## See Also

[msys.counter.inc](/momentum/4/lua/ref-msys-counter-inc), [msys.counter.add](/momentum/4/lua/ref-msys-counter-add), [msys.counter.open](/momentum/4/lua/ref-msys-counter-open), [msys.counter.unlink](/momentum/4/lua/ref-msys-counter-unlink)