---
lastUpdated: "03/26/2020"
title: "siv_throttle_cache_size"
description: "siv throttle cache size set the maximum number of named throttles siv throttle cache size 1000 This option sets the maximum number of named throttles created by the Sieve command ec throttle create and by Lua scripts If you try to create more throttles than this value throttles created earlier..."
---

<a name="conf.ref.siv_throttle_cache_size"></a> 
## Name

siv_throttle_cache_size — set the maximum number of named throttles

## Synopsis

`siv_throttle_cache_size = 1000`

<a name="idp11747264"></a> 
## Description

This option sets the maximum number of named throttles created by the Sieve command **ec_throttle_create** and by Lua scripts. If you try to create more throttles than this value, throttles created earlier will be destroyed. Prior to version 3.0.24, the value of this option defaults to `100`. This option should only be changed if you need to use more than 100 named throttles.

**Configuration Change. ** As of version 3.0.24, the default value for this option has been increased to `1000`. This was done because Adaptive Delivery makes heavy use of throttles.

<a name="idp11752816"></a> 
## Scope

`siv_throttle_cache_size` is valid in the global scope.

<a name="idp11754864"></a> 
## See Also

[ec_throttle](/momentum/3/3-reference/sieve-ref-ec-throttle), [“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive)