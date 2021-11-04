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

<a name="idp10070208"></a> 
## Description

When set to a positive value, Momentum will use `mmap` to fulfill memory allocation requirements exeeding the `malloc2mmap_threshold` size, rather than allocating memory from the heap via `malloc` .

Lowering this setting can reduce heap fragmentation and the system RSS, but can use up more address space than heap allocations alone, since the minimum granularity of `mmap` is the system page size.

The default for this option is 4092.

<a name="idp10074800"></a> 
## Scope

malloc2mmap_threshold is valid in the global scope.

<a name="idp10076448"></a> 
## See Also

[Use_MMAP](/momentum/3/3-reference/3-reference-conf-ref-use-mmap)