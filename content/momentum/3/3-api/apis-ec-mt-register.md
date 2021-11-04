---
lastUpdated: "03/26/2020"
title: "ec_mt_register"
description: "ec mt register Implementation specific memtype initialization routine int ec mt register def impl data const mem type def def void impl data Configuration Change This feature is available starting from Momentum 3 0 18 Implementation specific memtype initialization routine For more information about memory types see Memory Types Do..."
---

<a name="apis.ec_mt_register"></a> 
## Name

ec_mt_register — Implementation specific memtype initialization routine

## Synopsis

`#include "ec_malloc.h"`

| `int **ec_mt_register** (` | <var class="pdparam">def</var>, |   |
|   | <var class="pdparam">impl_data</var>`)`; |   |

`const mem_type_def * <var class="pdparam">def</var>`;
`void ** <var class="pdparam">impl_data</var>`;<a name="idp55008272"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.

Implementation specific memtype initialization routine. For more information about memory types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types).

### Warning

Do not call this function directly, use [ec_memtype_register](/momentum/3/3-api/apis-ec-memtype-register).

This is used to allow an allocator implementation to perform memtype-specific initialization. For instance, a slab allocator may want to initialize the slab information here.

The implementation may set `*impl_data` to hold a pointer to its state.

If this function returns `0`, the registration of the given memtype is treated as failed. If this function returns `1`, the registration of the given memtype is treated as successful. If this function returns any other value, the behavior is undefined.

<a name="idp55016768"></a> 
## See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory)