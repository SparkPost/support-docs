---
lastUpdated: "03/26/2020"
title: "Use_MMAP"
description: "Use MMAP use mmap when spooling messages from disk Use MMAP false Use MMAP true When set to true Momentum will attempt to memory map message bodies via mmap rather than allocating memory from the heap and reading the file from disk The default for this option is false This..."
---

<a name="conf.ref.use_mmap"></a> 
## Name

Use_MMAP — use mmap when spooling messages from disk

## Synopsis

`Use_MMAP = false`

`Use_MMAP = true`

<a name="idp12384432"></a> 
## Description

When set to true, Momentum will attempt to memory map message bodies (via `mmap` ), rather than allocating memory from the heap and reading the file from disk.

The default for this option is `false`. This option should be set dependent on the performance and stability of `mmap` on your system.

### Warning

If you set `Use_MMAP` to `true` the `compress_spool` module will not load. For more information see [“compress_spool – Dynamic Spool Compression”](/momentum/3/3-reference/3-reference-modules-compress-spool)

<a name="idp12390736"></a> 
## Scope

use_mmap is valid in the global scope.

<a name="idp12392368"></a> 
## See Also

[malloc2mmap_threshold](/momentum/3/3-reference/3-reference-conf-ref-malloc-2-mmap-threshold) and [Use_SendFile](/momentum/3/3-reference/3-reference-conf-ref-use-sendfile)