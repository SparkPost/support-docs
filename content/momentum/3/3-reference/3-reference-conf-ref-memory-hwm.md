---
lastUpdated: "03/26/2020"
title: "memory_hwm"
description: "memory hwm configure physical memory usage high water mark Memory HWM 95 The memory hwm directive allows you to specify the maximum percentage of physical memory that should be used during normal operation If this threshold is exceeded new mail will be transiently failed and the server will aggressively free..."
---

<a name="conf.ref.memory_hwm"></a> 
## Name

memory_hwm — configure physical memory usage high-water mark

## Synopsis

`Memory_HWM = 95`

<a name="idp10353968"></a> 
## Description

The memory_hwm directive allows you to specify the maximum percentage of physical memory that should be used during normal operation. If this threshold is exceeded, new mail will be transiently failed and the server will aggressively free up resources to bring memory usage within acceptable bounds. The default value for this option is `95`.

<a name="idp10357328"></a> 
## Scope

memory_hwm is valid in the global scope.

<a name="idp10358960"></a> 
## See Also

[memory_goal](/momentum/3/3-reference/3-reference-conf-ref-memory-goal)