---
lastUpdated: "03/26/2020"
title: "msys.counter.add"
description: "msys counter add Add to the current value of the specified counter msys counter add object or path delta The first argument is either a path to a counter for example sites site name errors or a counter object that was returned by msys counter open If a string is..."
---

<a name="lua.ref.msys.counter.add"></a> 
## Name

msys.counter.add — Add to the current value of the specified counter

<a name="idp26372992"></a> 
## Synopsis

`msys.counter.add(object_or_path, delta);`

```
object_or_path: mixed
delta: number
```
<a name="idp26375664"></a> 
## Description

The first argument is either a path to a counter (for example, `/sites/site_name/errors`) or a counter object that was returned by `msys.counter.open`. If a string is provided containing the path to a counter that does not exist, the counter is created with STRICT semantics. The second argument is atomically added to the current value of the counter.

Enable this function with the statement `require('msys.counter');`.

For a code example see [“msys.counter.read example”](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-read#lua.ref.msys.counter.read.example).

<a name="idp26380448"></a> 
## See Also

[msys.counter.reset](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-reset), [msys.counter.inc](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-inc), [msys.counter.open](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-open), [msys.counter.unlink](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-unlink), [counter](/momentum/3/3-reference/3-reference-console-commands-counter)