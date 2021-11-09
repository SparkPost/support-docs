---
lastUpdated: "03/26/2020"
title: "msys.lock"
description: "msys lock The current running OS level thread obtains a lock on the named mutex msys lock mutexname The current running OS level thread obtains a lock on the named mutex The caller is responsible for releasing the lock at the earliest appropriate opportunity Note that the lock is not..."
---

<a name="lua.ref.msys.lock"></a> 
## Name

msys.lock — The current running OS level thread obtains a lock on the named mutex

<a name="idp16167760"></a> 
## Synopsis

`msys.lock(mutexname);`

`mutexname: string`<a name="idp16170720"></a> 
## Description

The current running OS level thread obtains a lock on the named mutex. The caller is responsible for releasing the lock at the earliest appropriate opportunity. Note that the lock is not automatically released when the script is de-scheduled (for example, via `msys.sleep`, `msys.readfile` or the `msys.db.query` functions), so exercise caution.

For example code see [thread.mutex](/momentum/4/lua/ref-thread-mutex).

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp16176560"></a> 
## See Also

[msys.unlock](/momentum/4/lua/ref-msys-unlock)