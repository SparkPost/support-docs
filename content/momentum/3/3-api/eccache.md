---
lastUpdated: "03/26/2020"
title: "ec_cache Functions"
description: "A common requirement for high performance modules is to cache information that is expensive to obtain The generic cache implementation in Momentum operates by having an upper bound on the number of elements to be stored in a cache pushing out the least recently used item when an insert is..."
---


| Name                                                                                                                                      | Description                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [ec_cache_create](/momentum/3/3-api/apis-ec-cache-create)                                             | Create a cache with max_elts                                         |
| [ec_cache_create2](/momentum/3/3-api/apis-ec-cache-create-2)                                           | Create a cache with max_elts                                         |
| [ec_cache_delete](/momentum/3/3-api/apis-ec-cache-delete)                                             | Delete an item determined by key from a cache                        |
| [ec_cache_delref](/momentum/3/3-api/apis-ec-cache-delref)                                             | Delete a reference from a cached item determined by elt in a cache   |
| [ec_cache_destroy](/momentum/3/3-api/apis-ec-cache-destroy)                                           | Purge all entries from the cache and free all memory allocated to it |
| [ec_cache_find](/momentum/3/3-api/apis-ec-cache-find)                                                 | Find a cache item determined by a key                                |
| [ec_cache_get_stats](/momentum/3/3-api/apis-ec-cache-get-stats)                                       | Get cache statistics (deprecated)                                    |
| [ec_cache_get_stats2](/momentum/3/3-api/apis-ec-cache-get-stats-2)                                     | get cache statistics                                                 |
| [ec_cache_get_stats_by_name](/momentum/3/3-api/apis-ec-cache-get-stats-by-name)                       | get cache statistics for a named cache                               |
| [ec_cache_insert](/momentum/3/3-api/apis-ec-cache-insert)                                             | Insert a key/value pair into a cache                                 |
| [ec_cache_purge](/momentum/3/3-api/apis-ec-cache-purge)                                               | Explicitly remove elements from the cache                            |
| [ec_cache_resolve](/momentum/3/3-api/apis-ec-cache-resolve)                                           | Look up an element from the cache                                    |
| [ec_cache_resolver_delref](/momentum/3/3-api/apis-ec-cache-resolver-delref)                           | Release a resolver object reference                                  |
| [ec_cache_resolver_run_on_completion](/momentum/3/3-api/apis-ec-cache-resolver-run-on-completion)     | Schedule a function to run when the resolver completes               |
| [ec_cache_resolver_set_complete](/momentum/3/3-api/apis-ec-cache-resolver-set-complete)               | Stores the resolved cache element in the resolver                    |
| [ec_cache_resolver_wait_for_completion](/momentum/3/3-api/apis-ec-cache-resolver-wait-for-completion) | Blocks the caller until cache resolution completes                   |
| [ec_cache_resolver_wake_on_completion](/momentum/3/3-api/apis-ec-cache-resolver-wake-on-completion)   | Allows a thread to block, pending completion of the cache resolution |

A common requirement for high performance modules is to cache information that is expensive to obtain. The generic cache implementation in Momentum operates by having an upper bound on the number of elements to be stored in a cache, pushing out the least recently used item when an insert is made and the cache is full. You may optionally set a time-to-live for the cache; elements that have been stored in the cache for longer than the time-to-live will, periodically, be expired from the cache.

The APIs documented here relate to the [cache list](/momentum/3/3-reference/3-reference-console-commands-cache-list) console command.