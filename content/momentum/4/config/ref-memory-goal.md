---
lastUpdated: "03/26/2020"
title: "memory_goal"
description: "memory goal configure physical memory usage goal memory goal 90 The memory goal directive allows you to specify the maximum percentage of physical memory that should be used during normal operation If this threshold is exceeded the server will free up some resources to try to bring memory usage within..."
---

<a name="conf.ref.memory_goal"></a> 
## Name

memory_goal — configure physical memory usage goal

## Synopsis

`memory_goal = 90`

<a name="idp25408160"></a> 
## Description

The memory_goal directive allows you to specify the maximum percentage of physical memory that should be used during normal operation. If this threshold is exceeded, the server will free up some resources to try to bring memory usage within acceptable bounds. The default value is `90`.

It is possible for the server to exceed the memory_goal. Other than trying to free up some resources, no action is taken to stop the memory_goal from being exceeded. For a "harder" limit, see [memory_hwm](/momentum/4/config/ref-memory-hwm).

<a name="idp25411920"></a> 
## Scope

memory_goal is valid in the global scope.

<a name="idp25413744"></a> 
## See Also

[memory_hwm](/momentum/4/config/ref-memory-hwm)