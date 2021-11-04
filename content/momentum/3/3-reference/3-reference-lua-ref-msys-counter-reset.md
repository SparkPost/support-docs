---
lastUpdated: "03/26/2020"
title: "msys.counter.reset"
description: "msys counter reset Reset a counter msys counter reset object or path Resets the given counter object or counter associated with the given path to 0 If the supplied counter path does not have a counter associated with it then it is created with strict semantics Enable this function with..."
---

<a name="lua.ref.msys.counter.reset"></a> 
## Name

msys.counter.reset — Reset a counter

<a name="idp26451536"></a> 
## Synopsis

`msys.counter.reset(object_or_path);`

`object_or_path: mixed`<a name="idp26454176"></a> 
## Description

Resets the given counter object or counter associated with the given path to `0`. If the supplied counter path does not have a counter associated with it, then it is created with strict semantics.

Enable this function with the statement `require('msys.counter');`.

<a name="idp26457328"></a> 
## See Also

[msys.counter.inc](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-inc), [msys.counter.add](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-add), [msys.counter.open](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-open), [msys.counter.unlink](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-unlink), [counter](/momentum/3/3-reference/3-reference-console-commands-counter)