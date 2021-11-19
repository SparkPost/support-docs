---
lastUpdated: "03/26/2020"
title: "time_series_init2"
description: "time series init 2 Similar to time series init and supporting deleting item from a bucket time series time series init 2 add data del data alloc bucket free bucket void void void add data void void void del data void alloc bucket void void free bucket This reference page..."
---

<a name="apis.time_series_init2"></a> 
## Name

time_series_init2 — Similar to time_series_init() and supporting deleting item from a bucket

## Synopsis

`#include "misc/time_series.h"`

| `time_series * **time_series_init2** (` | <var class="pdparam">add_data</var>, |   |
|   | <var class="pdparam">del_data</var>, |   |
|   | <var class="pdparam">alloc_bucket</var>, |   |
|   | <var class="pdparam">free_bucket</var>`)`; |   |

`void(*)(void *, void *) <var class="pdparam">add_data</var>`;
`void(*)(void *, void *) <var class="pdparam">del_data</var>`;
`void *(*)() <var class="pdparam">alloc_bucket</var>`;
`void(*)(void *) <var class="pdparam">free_bucket</var>`;<a name="idp63781440"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Similar to time_series_init() and supporting deleting item from a bucket.

**<a name="idp63784352"></a> Parameters**

<dl class="variablelist">

<dt>add_data(void</dt>

<dd>

*bucket, void *data) - function to add data to a bucket.

</dd>

<dt>del_data(void</dt>

<dd>

*bucket, void *data) - function to delete data from a bucket.

</dd>

<dt>alloc_bucket()</dt>

<dd>

- function to allocate a bucket.

</dd>

<dt>free_bucket(void</dt>

<dd>

*bucket) - function to free a bucket.

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.1.

**<a name="idp63794384"></a> Return Values**

instance of a time series.