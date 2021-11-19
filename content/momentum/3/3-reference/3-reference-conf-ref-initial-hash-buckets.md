---
lastUpdated: "03/26/2020"
title: "initial_hash_buckets"
description: "initial hash buckets Set the number of hash buckets used by the system initial hash buckets 32 This option sets the number of hash buckets used by the system Configuration Change This feature is available starting from Momentum 3 1 If this value is set too low the system will..."
---

<a name="conf.ref.initial_hash_buckets"></a> 
## Name

initial_hash_buckets — Set the number of hash buckets used by the system

## Synopsis

`initial_hash_buckets = 32`

<a name="idp9866320"></a> 
## Description

This option sets the number of hash buckets used by the system

**Configuration Change. ** This feature is available starting from Momentum 3.1.

If this value is set too low, the system will incur additional overhead during rehashing in order to enlarge the tables to match your workload. Setting this value too high uses more memory, but does not otherwise reduce system performance. If the environmental variable `ECELERITY_TRACE_EC_HASH` is set, the system will collect distribution metrics and display a simple histogram to `stderr` when it exits. Turning on ECELERITY_TRACE_EC_HASH will impact performance.

The default value for this option is `32`.

<a name="idp9873360"></a> 
## Scope

`initial_hash_buckets` is valid in the global scope.