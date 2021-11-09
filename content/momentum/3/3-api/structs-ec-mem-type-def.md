---
lastUpdated: "03/26/2020"
title: "ec_mem_type_def"
description: "This struct is defined as follows MEMTYPE MAX is the maximum possible number of memory types and is defined in ec malloc h as follows define MEMTYPE MAX 512 To use this struct include the file memory c Chapter 33 Memory Functions..."
---

This struct is defined as follows:

```
static struct ec_mem_type_def memtypes[MEMTYPE_MAX] = {
  {0, 0, 0, 0},
};
```

`MEMTYPE_MAX` is the maximum possible number of memory types and is defined in `ec_malloc.h` as follows: `#define MEMTYPE_MAX 512`.

To use this struct, include the file `memory.c`.

### <a name="idp45443840"></a> See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory)