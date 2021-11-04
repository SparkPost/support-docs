---
lastUpdated: "03/26/2020"
title: "siv_throttle_cache_size"
description: "siv throttle cache size set the maximum number of named throttles siv throttle cache size 1000 This option sets the maximum number of named throttles created by Lua scripts If you try to create more throttles than this value throttles created earlier will be destroyed The default value is 1000..."
---

<a name="conf.ref.siv_throttle_cache_size"></a> 
## Name

siv_throttle_cache_size — set the maximum number of named throttles

## Synopsis

`siv_throttle_cache_size = 1000`

<a name="idp26494832"></a> 
## Description

This option sets the maximum number of named throttles created by Lua scripts. If you try to create more throttles than this value, throttles created earlier will be destroyed.

The default value is `1000` (because Adaptive Delivery makes heavy use of throttles).

<a name="idp26497776"></a> 
## Scope

`siv_throttle_cache_size` is valid in the global scope.

<a name="idp26500048"></a> 
## See Also

[“adaptive – Adaptive Delivery”](/momentum/4/modules/4-adaptive)