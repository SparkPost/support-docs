---
lastUpdated: "03/26/2020"
title: "msys.unlock"
description: "msys unlock Release a lock obtained via msys lock msys unlock mutexname Releases a lock obtained via msys lock This function must be called from the same OS level thread that obtained it For example code see thread mutex Because this function is in the msys namespace an explicit require..."
---

<a name="lua.ref.msys.unlock"></a> 
## Name

msys.unlock — Release a lock obtained via msys.lock

<a name="idp16405360"></a> 
## Synopsis

`msys.unlock(mutexname);`

`mutexname: string`<a name="idp16408320"></a> 
## Description

Releases a lock obtained via msys.lock. **This function must be called from the same OS level thread that obtained it.** 

For example code see [thread.mutex](/momentum/4/lua/ref-thread-mutex).

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp16413344"></a> 
## See Also

[msys.lock](/momentum/4/lua/ref-msys-lock)