---
lastUpdated: "03/26/2020"
title: "ec_mem_type_usage"
description: "This struct is defined as follows To use this struct include the file ec malloc h Chapter 33 Memory Functions..."
---

This struct is defined as follows:

```
struct ec_mem_type_usage {
  /** the registered object_type */
  int object_type;
  /** the corresponding label for the object_type */
  const char *memtype_description;
  /** the number of allocations.
   *
   * Effectively, the number of calls to ec_malloc, ec_malloc_size, less
   * the number of calls to ec_free.
   *
   * This gives the number of outstanding instances that are active
   * in the system.
   *
   * For variable-size allocations, this value is the same as the
   * "current" field.
   *
   * This number includes allocations satisfied via malloc2mmap.
   */
  uint64_t allocations;
  /** peak utilization for this memtype.
   *
   * For fixed size allocations, this is the peak number of objects.
   * For variable size allocations, this is the peak number of bytes.
   *
   * This number includes allocations satisfied via malloc2mmap.
   */
  uint64_t peak;
  /** current utilization for this memtype, in bytes
   *
   * This number includes allocations satisfied via malloc2mmap.
   */
  uint64_t current;
  /** number of allocations satisfied by mmap
   *
   * Tracks the number of allocations satisfied by the malloc2mmap
   * threshold condition.
   */
  uint64_t mmap_allocations;
  /** peak number of mmap allocations
   *
   * Tracks the peak of mmap_allocations.
   */
  uint64_t mmap_peak_allocations;
  /** peak mmap utilization for this memtype, in bytes.
   *
   * Tracks the peak value of allocations satisfied by the
   * malloc2mmap threshold condition.
   */
  uint64_t mmap_peak_bytes;
  /** current mmap utilization for this memtype, in bytes.
   *
   * Tracks the current amount of memory satified by the malloc2mmap
   * threshold condition.
   */
  uint64_t mmap_current;
  /** for fixed size memtypes, this is the size of each instance */
  size_t object_size;
};
```

To use this struct, include the file `ec_malloc.h`.

### <a name="idp46561984"></a> See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory)