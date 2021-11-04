---
lastUpdated: "03/26/2020"
title: "thread.mutex"
description: "thread mutex create a new mutex thread mutex type Configuration Change This feature is available as of version 3 2 Create a new mutex for coordinating access to critical sections The optional parameter may be one of the following thread MUTEX NORMAL this is the default value thread MUTEX RECURSIVE..."
---

<a name="lua.ref.thread.mutex"></a> 
## Name

thread.mutex — create a new mutex

<a name="idp27844576"></a> 
## Synopsis

`thread.mutex(type);`

`type: integer, optional`<a name="idp27847264"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.2.

Create a new mutex for coordinating access to critical sections. The optional parameter may be one of the following:

*   `thread.MUTEX_NORMAL` – this is the default value

*   `thread.MUTEX_RECURSIVE` – define a recursive lock. Returns a mutex object that supports "lock", "unlock" and "trylock" methods.

*   `thread.MUTEX_ERRORCHECK` – define an error-checking lock. Returns a mutex object that supports "lock", "unlock" and "trylock" methods.

This function returns a mutex object.

Example code follows:

```
counter_lock = thread.mutex()
counter = 0;

function counter_inc()
   counter_lock:lock()
   counter = counter + 1
   counter_lock:unlock()
end

function counter_get()
   local value
   counter_lock:lock()
   value = counter
   counter_lock:unlock()
   return value
end

-- Incrementing the counter will now have consistent results regardless of
-- which threads call this function
counter_inc()
print("value is", counter_get())
```

Enable this function with the statement `require('thread');`.

<a name="idp27858064"></a> 
## See Also

[msys.runInPool](/momentum/3/3-reference/3-reference-lua-ref-msys-runinpool), [msys.sleep](/momentum/3/3-reference/3-reference-lua-ref-msys-sleep), [msys.lock](/momentum/3/3-reference/3-reference-lua-ref-msys-lock), [msys.unlock](/momentum/3/3-reference/3-reference-lua-ref-msys-unlock)