---
lastUpdated: "03/26/2020"
title: "ec_spool_ctx_enum_messages"
description: "ec spool ctx enum messages Enumerate messages in a spool int ec spool ctx enum messages ctx ht on insert closure ec spool ctx ctx ec hash table ht ec spool ctx insertion func on insert void closure This reference page was automatically generated from functions found in the header..."
---

<a name="apis.ec_spool_ctx_enum_messages"></a> 
## Name

ec_spool_ctx_enum_messages — Enumerate messages in a spool

## Synopsis

`#include "spool.h"`

| `int **ec_spool_ctx_enum_messages** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">ht</var>, |   |
|   | <var class="pdparam">on_insert</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_spool_ctx * <var class="pdparam">ctx</var>`;
`ec_hash_table * <var class="pdparam">ht</var>`;
`ec_spool_ctx_insertion_func <var class="pdparam">on_insert</var>`;
`void * <var class="pdparam">closure</var>`;<a name="idp62302224"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Enumerate messages in a spool.

This routine must be called after the spool lock has been obtained. It will migrate older spool formats to the current version and perform an initial summary of the contents of the spool, which are exposed in the provided hashtable.

on_insert is called just prior to inserting into ht; its return value will be used as the dataptr inserted to the hash. You may also perform other tasks here, such as queuing up jobs.

### Note

This function may induce IO or otherwise block the caller. Blocking in the scheduler thread will lead to degraded performance and should be avoided at all costs. If your code is running in the IO subsystem, the core will have already taken steps to ensure that blocking is acceptable. Otherwise, you should look at using the thread pool API to run a job in the IO pool.