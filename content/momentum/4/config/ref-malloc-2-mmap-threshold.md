---
lastUpdated: "03/26/2020"
title: "malloc2mmap_threshold"
description: "malloc 2 mmap threshold use mmap when allocations exceed this amount malloc 2 mmap threshold 4092 When set to a positive value Momentum will use mmap to fulfill memory allocation requirements exeeding the malloc 2 mmap threshold size rather than allocating memory from the heap via malloc Lowering this setting..."
---

<a name="conf.ref.malloc2mmap_threshold"></a> 
## Name

malloc2mmap_threshold — use mmap when allocations exceed this amount

## Synopsis

`malloc2mmap_threshold = 4092`

<a name="idp25128832"></a> 
## Description

When set to a positive value, Momentum will use `mmap` to fulfill memory allocation requirements exeeding the `malloc2mmap_threshold` size, rather than allocating memory from the heap via `malloc`.

Lowering this setting can reduce heap fragmentation and the system RSS, but can use more address space than heap allocations alone, since the minimum granularity of `mmap` is the system page size.

The default is 4092.

<a name="idp25133664"></a> 
## Scope

malloc2mmap_threshold is valid in the global scope.

<a name="idp25135504"></a> 
## See Also

[use_mmap](/momentum/4/config/ref-use-mmap)