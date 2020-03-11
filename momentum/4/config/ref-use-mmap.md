---
title: "use_mmap"
description: "use mmap use mmap when spooling messages from disk use mmap false use mmap true When set to true Momentum will attempt to memory map message bodies via mmap rather than allocating memory from the heap and reading the file from disk The default is false This option should be..."
---

<a name="conf.ref.use_mmap"></a> 
## Name

use_mmap — use mmap when spooling messages from disk

## Synopsis

`use_mmap = false`

`use_mmap = true`

<a name="idp27228400"></a> 
## Description

When set to true, Momentum will attempt to memory map message bodies (via `mmap`), rather than allocating memory from the heap and reading the file from disk.

The default is `false`. This option should be set dependent on the performance and stability of `mmap` on your system.

### Warning

If you set `use_mmap` to `true` the `compress_spool` module will not load. For more information see [Section 71.21, “compress_spool – Dynamic Spool Compression”](modules.compress_spool "71.21. compress_spool – Dynamic Spool Compression")

<a name="idp27235040"></a> 
## Scope

use_mmap is valid in the global scope.

<a name="idp27236864"></a> 
## See Also

[malloc2mmap_threshold](conf.ref.malloc2mmap_threshold "malloc2mmap_threshold") and [use_sendfile](conf.ref.use_sendfile "use_sendfile")