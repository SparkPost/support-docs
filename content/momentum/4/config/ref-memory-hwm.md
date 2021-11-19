---
lastUpdated: "03/26/2020"
title: "memory_hwm"
description: "memory hwm configure physical memory usage high water mark memory hwm 95 The memory hwm directive allows you to specify the maximum percentage of physical memory that should be used during normal operation If this threshold is exceeded new mail will be transiently failed and the server will aggressively free..."
---

<a name="conf.ref.memory_hwm"></a> 
## Name

memory_hwm — configure physical memory usage high-water mark

## Synopsis

`memory_hwm = 95`

<a name="idp25423600"></a> 
## Description

The memory_hwm directive allows you to specify the maximum percentage of physical memory that should be used during normal operation. If this threshold is exceeded, new mail will be transiently failed and the server will aggressively free up resources to bring memory usage within acceptable bounds. The default value is `95`.

<a name="idp25426176"></a> 
## Scope

memory_hwm is valid in the global scope.

<a name="idp25428000"></a> 
## See Also

[memory_goal](/momentum/4/config/ref-memory-goal)