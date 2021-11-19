---
lastUpdated: "03/26/2020"
title: "msys.counter.unlink"
description: "msys counter unlink Unlink a counter msys counter unlink counter path This removes the counter from the global counter index The handle will remain in the Lua counter cache for 5 minutes by default For a code example see Example 70 54 msys counter read example Enable this function with..."
---

<a name="lua.ref.msys.counter.unlink"></a> 
## Name

msys.counter.unlink — Unlink a counter

<a name="idp17845040"></a> 
## Synopsis

`msys.counter.unlink(counter_path);`

`counter_path: string`<a name="idp17847968"></a> 
## Description

This removes the counter from the global counter index. The handle will remain in the Lua counter cache for 5 minutes by default.

For a code example see [“msys.counter.read example”](/momentum/4/lua/ref-msys-counter-read#lua.ref.msys.counter.read.example).

Enable this function with the statement `require('msys.counter');`.

You can also use the [counter](/momentum/4/console-commands/counter) console command to display and manipulate counters.

<a name="idp17853600"></a> 
## See Also

[msys.counter.inc](/momentum/4/lua/ref-msys-counter-inc), [msys.counter.add](/momentum/4/lua/ref-msys-counter-add), [msys.counter.open](/momentum/4/lua/ref-msys-counter-open), [msys.counter.reset](/momentum/4/lua/ref-msys-counter-reset)