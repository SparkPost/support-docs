---
lastUpdated: "03/26/2020"
title: "memory_goal"
description: "memory goal configure physical memory usage goal Memory Goal 90 The memory goal directive allows you to specify the maximum percentage of physical memory that should be used during normal operation If this threshold is exceeded the server will free up some resources to try to bring memory usage within..."
---

<a name="conf.ref.memory_goal"></a> 
## Name

memory_goal — configure physical memory usage goal

## Synopsis

`Memory_Goal = 90`

<a name="idp10339088"></a> 
## Description

The memory_goal directive allows you to specify the maximum percentage of physical memory that should be used during normal operation. If this threshold is exceeded, the server will free up some resources to try to bring memory usage within acceptable bounds. The default value for this option is `90`.

It is possible for the server to exceed the memory_goal. Other than trying to free up some resources, no action is taken to stop the memory_goal from being exceeded. For a "harder" limit, see [memory_hwm](/momentum/3/3-reference/3-reference-conf-ref-memory-hwm).

<a name="idp10343584"></a> 
## Scope

memory_goal is valid in the global scope.

<a name="idp10345216"></a> 
## See Also

[memory_hwm](/momentum/3/3-reference/3-reference-conf-ref-memory-hwm)