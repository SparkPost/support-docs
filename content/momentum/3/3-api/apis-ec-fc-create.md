---
lastUpdated: "03/26/2020"
title: "ec_fc_create"
description: "ec fc create Returns a new cache with maximum number of entries and a default expiration time ec fc t ec fc create name n entries expire destroy entry char name size t n entries unsigned int expire ec fc entry dtor destroy entry This reference page was automatically generated..."
---

<a name="apis.ec_fc_create"></a> 
## Name

ec_fc_create — Returns a new cache with maximum number of entries and a default expiration time

## Synopsis

`#include "ec_fc.h"`

| `ec_fc_t * **ec_fc_create** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">n_entries</var>, |   |
|   | <var class="pdparam">expire</var>, |   |
|   | <var class="pdparam">destroy_entry</var>`)`; |   |

`char * <var class="pdparam">name</var>`;
`size_t <var class="pdparam">n_entries</var>`;
`unsigned int <var class="pdparam">expire</var>`;
`ec_fc_entry_dtor <var class="pdparam">destroy_entry</var>`;<a name="idp52074752"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Returns a new cache with maximum number of entries and a default expiration time.

Creates a faster cache whose entries have a maximum TTL of expire unless expire is EC_FC_EXPIRE_NEVER. destroy_entry is the destructor for the object. Note, the caller should add a reference to the entry before adding an item unless it isn't important that the cache delete it during book-keeping. If name is NULL then a name is auto-generated based on the memory location of the new cache.

**<a name="idp52078528"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

name of the cache, if NULL, name is auto-generated

</dd>

<dt>entries</dt>

<dd>

number of entries in cache, rounded up to nearest power-of-two

</dd>

<dt>expire</dt>

<dd>

default expiration time in seconds of items in the cache

</dd>

<dt>destroy_entry</dt>

<dd>

destructor function for cache entries

</dd>

</dl>

**<a name="idp52086912"></a> Return Values**

Returns a new cache instance.

**<a name="idp52087840"></a> Related Constants**

<dl class="variablelist">

<dt>EC_FC_EXPIRE_NEVER</dt>

<dd>

No default expiration time.

</dd>

</dl>