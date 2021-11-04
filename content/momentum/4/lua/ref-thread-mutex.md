---
lastUpdated: "03/26/2020"
title: "thread.mutex"
description: "thread mutex create a new mutex thread mutex type Create a new mutex for coordinating access to critical sections The optional parameter may be one of the following thread MUTEX NORMAL this is the default value thread MUTEX RECURSIVE define a recursive lock Returns a mutex object that supports lock..."
---

<a name="lua.ref.thread.mutex"></a> 
## Name

thread.mutex — create a new mutex

<a name="idp19182336"></a> 
## Synopsis

`thread.mutex(type);`

`type: integer, optional`<a name="idp19185312"></a> 
## Description

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

<a name="idp19195024"></a> 
## See Also

[msys.runInPool](/momentum/4/lua/ref-msys-runinpool), [msys.sleep](/momentum/4/lua/ref-msys-sleep), [msys.lock](/momentum/4/lua/ref-msys-lock), [msys.unlock](/momentum/4/lua/ref-msys-unlock)