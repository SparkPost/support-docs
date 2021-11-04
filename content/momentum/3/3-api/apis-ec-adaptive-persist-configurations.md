---
lastUpdated: "03/26/2020"
title: "ec_adaptive_persist_configurations"
description: "ec adaptive persist configurations function to save suspensions and optvals for a binding domain to backstore int ec adaptive persist configurations spaths prefd nodename bdr ages ages lock suspensions suspensions lock optvals optvals lock err buf buf len const char spaths int prefd const char nodename ec adaptive bdr bdr..."
---

<a name="apis.ec_adaptive_persist_configurations"></a> 
## Name

ec_adaptive_persist_configurations — function to save suspensions, and optvals for a binding/domain to backstore

## Synopsis

`#include "modules/generic/adaptive_replicate.h"`

| `int **ec_adaptive_persist_configurations** (` | <var class="pdparam">spaths</var>, |   |
|   | <var class="pdparam">prefd</var>, |   |
|   | <var class="pdparam">nodename</var>, |   |
|   | <var class="pdparam">bdr</var>, |   |
|   | <var class="pdparam">ages</var>, |   |
|   | <var class="pdparam">ages_lock</var>, |   |
|   | <var class="pdparam">suspensions</var>, |   |
|   | <var class="pdparam">suspensions_lock</var>, |   |
|   | <var class="pdparam">optvals</var>, |   |
|   | <var class="pdparam">optvals_lock</var>, |   |
|   | <var class="pdparam">err_buf</var>, |   |
|   | <var class="pdparam">buf_len</var>`)`; |   |

`const char ** <var class="pdparam">spaths</var>`;
`int * <var class="pdparam">prefd</var>`;
`const char * <var class="pdparam">nodename</var>`;
`ec_adaptive_bdr * <var class="pdparam">bdr</var>`;
`ec_hash_table * <var class="pdparam">ages</var>`;
`pthread_rwlock_t * <var class="pdparam">ages_lock</var>`;
`ec_hash_table * <var class="pdparam">suspensions</var>`;
`pthread_rwlock_t * <var class="pdparam">suspensions_lock</var>`;
`ec_hash_table * <var class="pdparam">optvals</var>`;
`pthread_rwlock_t * <var class="pdparam">optvals_lock</var>`;
`char * <var class="pdparam">err_buf</var>`;
`size_t <var class="pdparam">buf_len</var>`;<a name="idp28914256"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

function to save suspensions, and optvals for a binding/domain to backstore.

before calling this function, the two hash tables should be locked. To increase the availability, function takes in a list of server paths. If prefd is provided, the list will be attempted starting from the passed in prefd till a success. The "good" server is indicated by the index passed out through prefd.

**<a name="idp28917952"></a> Parameters**

<dl class="variablelist">

<dt>spaths</dt>

<dd>

- backstore server paths

</dd>

<dt>prefd</dt>

<dd>

- the prefd server index

</dd>

<dt>nodename</dt>

<dd>

- the node name

</dd>

<dt>bdr</dt>

<dd>

- binding/domain record

</dd>

<dt>suspensions</dt>

<dd>

- hash table for suspensions

</dd>

<dt>suspensions_loc</dt>

<dd>

- lock for suspensions table

</dd>

<dt>optvals</dt>

<dd>

- hash table for binding ages

</dd>

<dt>optvals_lock</dt>

<dd>

- lock for options table

</dd>

<dt>err_buf</dt>

<dd>

- if provided, error message will be written to it.

</dd>

<dt>err_len</dt>

<dd>

- the size of error buffer.

</dd>

</dl>

**<a name="idp46706432"></a> Return Values**

1 - successful; 0 - failure

**Configuration Change. ** This feature is available starting from Momentum 3.3.