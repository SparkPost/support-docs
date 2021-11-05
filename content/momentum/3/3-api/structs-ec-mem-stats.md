---
lastUpdated: "03/26/2020"
title: "ec_mem_stats"
description: "This struct is defined as follows To use this struct include the file ec malloc h Chapter 33 Memory Functions and ec mem get stats..."
---

This struct is defined as follows:

```
/** overall system memory utilization stats */
struct ec_mem_stats {
  /** the total amount of memory allocated via ec_malloc, ec_malloc_size,
   * ec_realloc.  Note that this will not include memory allocated via
   * malloc(), or other memory allocated for things like stack space for
   * threads and other lower level memory utilization. */
  uint64_t total_allocated;
  /** The resident set size, as reported by the system */
  uint64_t system_rss;
  /** The amount of physical memory installed in the system */
  uint64_t physmem;
};
```

To use this struct, include the file `ec_malloc.h`.

### <a name="idp46391856"></a> See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory) and [ec_mem_get_stats](/momentum/3/3-api/apis-ec-mem-get-stats)