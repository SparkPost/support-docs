---
lastUpdated: "03/26/2020"
title: "Fast Cache Functions"
description: "Table of Contents ec fc caches find Find a cache with the provided name ec fc caches purge Purge all caches ec fc create Returns a new cache with maximum number of entries and a default expiration time ec fc delref Destroy cache if destruction has been deferred ec fc..."
---


| Name                                                                                                    | Description                                                                                    |
|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [ec_fc_caches_find](/momentum/3/3-api/apis-ec-fc-caches-find)       | Find a cache with the provided name                                                            |
| [ec_fc_caches_purge](/momentum/3/3-api/apis-ec-fc-caches-purge)     | Purge all caches                                                                               |
| [ec_fc_create](/momentum/3/3-api/apis-ec-fc-create)                 | Returns a new cache with maximum number of entries and a default expiration time               |
| [ec_fc_delref](/momentum/3/3-api/apis-ec-fc-delref)                 | Destroy cache if destruction has been deferred                                                 |
| [ec_fc_destroy](/momentum/3/3-api/apis-ec-fc-destroy)               | Destroys the cache is no references exist to it                                                |
| [ec_fc_entry_addref](/momentum/3/3-api/apis-ec-fc-entry-addref)     | Add a reference to an entry                                                                    |
| [ec_fc_entry_delref](/momentum/3/3-api/apis-ec-fc-entry-delref)     | Delete a reference from an entry, if no references exist then also call the destructor routine |
| [ec_fc_entry_reset](/momentum/3/3-api/apis-ec-fc-entry-reset)       | Reset an entry to a known state                                                                |
| [ec_fc_init](/momentum/3/3-api/apis-ec-fc-init)                     | Initializes the faster-cache subsystem                                                         |
| [ec_fc_invalidate](/momentum/3/3-api/apis-ec-fc-invalidate)         | Remove an entry from the cache and delete the cache reference                                  |
| [ec_fc_invalidate_key](/momentum/3/3-api/apis-ec-fc-invalidate-key) | Remove an entry from the cache with the associated key and key length                          |
| [ec_fc_load](/momentum/3/3-api/apis-ec-fc-load)                     | Load an entry from the cache with the provided key and key_length                              |
| [ec_fc_purge](/momentum/3/3-api/apis-ec-fc-purge)                   | Quickly purge all items from the cache                                                         |
| [ec_fc_purge2](/momentum/3/3-api/apis-ec-fc-purge-2)                 | Quickly purge all items from the cache                                                         |
| [ec_fc_purge_time](/momentum/3/3-api/apis-ec-fc-purge-time)         | Purge the cache's LRU and expired entries (relative to tv-&gt;tv_sec)                          |
| [ec_fc_set_capacity](/momentum/3/3-api/apis-ec-fc-set-capacity)     | Sets a new capacity for a given cache                                                          |
| [ec_fc_set_expire](/momentum/3/3-api/apis-ec-fc-set-expire)         | Sets a new expiration time for a given cache                                                   |
| [ec_fc_stat](/momentum/3/3-api/apis-ec-fc-stat)                     | Return statistics for given cache                                                              |
| [ec_fc_store](/momentum/3/3-api/apis-ec-fc-store)                   | Store entry in the cache with the provided key and key length                                  |
| [ec_fc_store_expire](/momentum/3/3-api/apis-ec-fc-store-expire)     | Store entry in the cache with the provided key, key length and expiration time                 |
