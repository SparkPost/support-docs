---
lastUpdated: "03/26/2020"
title: "msys.counter.unlink"
description: "msys counter unlink Unlink a counter msys counter unlink counter path This removes the counter from the global counter index The handle will remain in the Lua counter cache for 5 minutes by default For a code example see Example 15 55 msys counter read example Enable this function with..."
---

<a name="lua.ref.msys.counter.unlink"></a> 
## Name

msys.counter.unlink — Unlink a counter

<a name="idp26464640"></a> 
## Synopsis

`msys.counter.unlink(counter_path);`

`counter_path: string`<a name="idp26467280"></a> 
## Description

This removes the counter from the global counter index. The handle will remain in the Lua counter cache for 5 minutes by default.

For a code example see [“msys.counter.read example”](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-read#lua.ref.msys.counter.read.example).

Enable this function with the statement `require('msys.counter');`.

<a name="idp26471536"></a> 
## See Also

[msys.counter.inc](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-inc), [msys.counter.add](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-add), [msys.counter.open](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-open), [msys.counter.reset](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-reset), [counter](/momentum/3/3-reference/3-reference-console-commands-counter)