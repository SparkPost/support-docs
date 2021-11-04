---
lastUpdated: "03/26/2020"
title: "ec_include"
description: "ec include include and run a Sieve script ec include uri stringlist of args The ec include action will fetch the named script from the script cache if it is not present in the cache it will be fetched from the underlying storage If the storage driver supports it the..."
---

<a name="sieve.ref.ec_include"></a> 
## Name

ec_include — include and run a Sieve script

## Synopsis

`ec_include` { *`uri`* } [ *`stringlist-of-args`* ]

<a name="idp29927728"></a> 
## Description

The `ec_include` action will fetch the named script from the script cache; if it is not present in the cache, it will be fetched from the underlying storage. If the storage driver supports it, the fetch can occur asynchronously; processing of the Sieve script is suspended while the fetch completes, allowing Momentum to continue to service other events as they become ready.

Each cached script has a time to live determined by the sieve module configuration option, `cache_life` so cached scripts are periodically refreshed. However, if you make changes to a script, a best practise is to flush the Sieve cache immediately using the ec_console command, **sieve:sieve1 flush cache** . For more information about this command see [“Flushing the Cache”](/momentum/3/3-reference/modules-sieve#modules.sieve.sieve.flush.cache).

Once the script has been located and compiled, the current Sieve script state is pushed onto a stack and the new script is executed. Execution continues until a terminal action is taken, or when the end of the new script is reached, whichever is soonest. If a terminal action is taken, processing for the phase is stopped in the usual way. If the end of the script was reached, the state for the original script is popped off the stack, and execution resumes at the statement immediately following the `ec_include` action.

`ec_include` accepts an optional stringlist that can be used to pass parameters to the underlying storage layer. For example, the datasource storage layer will use the stringlist as positional parameters in a prepared SQL statement.

If an included script can not be found, an error is logged to your paniclog and execution continues with the statement immediately following the include action.

If an include fails, then a Sieve error is raised, which will cause the current inbound session to transiently fail. You can allow the script to continue processing by using `ec_error_mode`. See [ec_error_mode](/momentum/3/3-reference/sieve-ref-ec-error-mode) for more information.

<a name="example.ec_include"></a> 


```
require "ec_include";
ec_include "/some/other/script.siv";
```

<a name="example.ec_include.second"></a> 


```
require "ec_include";
ec_include ":datasource:sievecache:select script from scripts where id = ?" [$id];
```