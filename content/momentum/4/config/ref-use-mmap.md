---
lastUpdated: "03/26/2020"
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

If you set `use_mmap` to `true` the `compress_spool` module will not load. For more information see [“compress_spool – Dynamic Spool Compression”](/momentum/4/modules/compress-spool)

<a name="idp27235040"></a> 
## Scope

use_mmap is valid in the global scope.

<a name="idp27236864"></a> 
## See Also

[malloc2mmap_threshold](/momentum/4/config/ref-malloc-2-mmap-threshold) and [use_sendfile](/momentum/4/config/ref-use-sendfile)