---
lastUpdated: "02/09/2021"
title: "msys.runInInst"
description: "msys run In Inst Run a function in a specific event loop"
---

<a name="lua.ref.msys.runininst"></a>
## Name

msys.runInInst — Run a function in a specific event loop

<a name="idp16309985"></a>
## Synopsis

`msys.runInInst(inst, closure)`

```
pool: mixed
closure: mixed
```

Since Momentum 4.3.1.62

<a name="idp16312993"></a>
## Description

This function runs a function in a specific event loop (scheduler).

### Note

The first parameter passed to this function must be an event loop instance pointer. The second must be a Lua function. That Lua function will be run in the event loop passed in. The currently executing Lua code will be suspended until the passed-in Lua function has been executed in the event loop instance.

It is recommended that you do not call this function from the master scheduler, as it may trigger the watchdog. Instead, you may wish to call it from a threadpool using `msys.runInPool`, e.g.: from an HTTP endpoint implemented in Lua.

The following example runs `closure` in the specified instance, returning the value(s) from the closure to the calling script. The calling script is suspended pending completion of the closure. This example uses `msys.core.scheduler_for_domain` to find out which event loop is responsible for the domain `domain.example`. This use of `msys.runInInst` may be used to safely query the DNS information for a domain when running in Supercharger mode, with multiple maintainer threads set up.

```
local inst = msys.core.scheduler_for_domain("domain.example")
local status, result = msys.runInInst(inst, closure)
```

Return values are the same as `pcall`; the first return value is a boolean indicating whether the function was called successfully or not. If it is `true` then the call was successful and the remaining return value(s) are those from the closure. If the status value is `false`, the second return value holds an error message.

In any of the preceding examples, the `closure` parameter may be a function reference or a function defined inline. For example:

```
local domain = "domain.example"
local do_heavy_lifting = function()
  print("doing heavy lifting for:", domain)
  return true
end

local inst = msys.core.scheduler_for_domain(domain)
local st, res = msys.runInInst(inst, do_heavy_lifting)
```

An inline function passed as a parameter would be as follows:

```
local domain = "domain.example"
local inst = msys.core.scheduler_for_domain(domain)
local st, res = msys.runInInst(inst,
  function()
    print("doing heavy lifting for:", domain)
    return true
  end
)
```

Here is an example of how you might run this from within a threadpool,
e.g.: if you're using this function from an HTTP endpoint in Lua.
In this case, you could use nested inline worker functions:

```
 local inst = msys.core.scheduler_for_domain("domain.example")
 local outer_ok, outer_result
   = msys.runInPool("somepool",
     function()
       local inner_ok, inner_result = msys.runInInst(inst,
         function()
           do_something()
         end)
       -- If successful, return the result.
       -- Otherwise return nil and log the error.
       if inner_ok then
         return inner_result
       else
         print("Failed", inner_result)
       end
     end)
 ```

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp16345393"></a>
## See Also

[msys.runInPool](/momentum/4/lua/ref-msys-runinpool)
