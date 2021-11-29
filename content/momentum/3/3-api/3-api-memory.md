---
lastUpdated: "03/26/2020"
title: "Memory Functions"
description: "For an overview of the Momentum memory API see Memory API Memory usage information is available from the ec console memory command For SMPP related memory functions see Chapter 46 SMPP Functions..."
---

              
| Name                                                                                                                              | Description                                                                                    |
|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [ec_free](/momentum/3/3-api/apis-ec-free)                                                     | Free memory allocated                                                                          |
| [ec_malloc](/momentum/3/3-api/apis-ec-malloc)                                                 | Allocate a new instance of a defined object type                                               |
| [ec_malloc_size](/momentum/3/3-api/apis-ec-malloc-size)                                       | Allocate a block of memory of arbitrary size                                                   |
| [ec_mem_get_stats](/momentum/3/3-api/apis-ec-mem-get-stats)                                   | Return usage statistics for all memtypes                                                       |
| [ec_memory_get_total_allocated](/momentum/3/3-api/apis-ec-memory-get-total-allocated)         | Return the total memory allocated via ec_malloc and related functions                          |
| [ec_memory_is_low](/momentum/3/3-api/apis-ec-memory-is-low)                                   | Called when the core detects a memory shortage                                                 |
| [ec_memory_pretty_mem_amount](/momentum/3/3-api/apis-ec-memory-pretty-mem-amount)             | A utility to render an amount with commas                                                      |
| [ec_memory_print_allocator_details](/momentum/3/3-api/apis-ec-memory-print-allocator-details) | Render low-level allocator information to a string buffer                                      |
| [ec_memtype_by_name](/momentum/3/3-api/apis-ec-memtype-by-name)                               | Returns the memtype id for a given memtype name                                                |
| [ec_memtype_get_stats](/momentum/3/3-api/apis-ec-memtype-get-stats)                           | Return usage statistics for a given memtype                                                    |
| [ec_memtype_range_by_module](/momentum/3/3-api/apis-ec-memtype-range-by-module)               | Returns the range of memtypes associated with a given module                                   |
| [ec_memtype_register](/momentum/3/3-api/apis-ec-memtype-register)                             | Register a new memtype with the system                                                         |
| [ec_mt_alloc](/momentum/3/3-api/apis-ec-mt-alloc)                                             | Makes an allocation against a given memtype                                                    |
| [ec_mt_asprintf](/momentum/3/3-api/apis-ec-mt-asprintf)                                       | Memory-typed asprintf function                                                                 |
| [ec_mt_free](/momentum/3/3-api/apis-ec-mt-free)                                               | Reclaim allocated memory                                                                       |
| [ec_mt_realloc](/momentum/3/3-api/apis-ec-mt-realloc)                                         | Reallocate memory against a given memtype                                                      |
| [ec_mt_register](/momentum/3/3-api/apis-ec-mt-register)                                       | Implementation specific memtype initialization routine                                         |
| [ec_mt_strdup](/momentum/3/3-api/apis-ec-mt-strdup)                                           | Duplicate a string of the specified memory type                                                |
| [ec_mt_strndup](/momentum/3/3-api/apis-ec-mt-strndup)                                         | Duplicate a string of the specified message type copying at most the specified number of bytes |
| [ec_mt_vasprintf](/momentum/3/3-api/apis-ec-mt-vasprintf)                                     | Memory-typed vasprintf function                                                                |
| [ec_realloc](/momentum/3/3-api/apis-ec-realloc)                                               | Re-allocate a block of memory, changing its size                                               |

For an overview of the Momentum memory API see [Memory API](/momentum/3/3-api/arch-primary-apis#arch.memory). Memory usage information is available from the ec_console [memory](/momentum/3/3-reference/3-reference-console-commands-memory) command.

### Note

For SMPP-related memory functions see [*SMPP Functions*](/momentum/3/3-api/smpp) .