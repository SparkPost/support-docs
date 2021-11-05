---
lastUpdated: "03/26/2020"
title: "ec_blobject_delref"
description: "ec blobject delref Decrements the reference count of obj by 1 and releases the memory allocated to it if the reference count is decremented to 0 void ec blobject delref obj ec blobject obj Decrements the reference count of obj by 1 and releases the memory allocated to it if..."
---

<a name="apis.ec_blobject_delref"></a> 
## Name

ec_blobject_delref — Decrements the reference count of `obj` by `1` and releases the memory allocated to it if the reference count is decremented to `0`

## Synopsis

`#include "ec_blobject.h"`

| `void **ec_blobject_delref** (` | <var class="pdparam">obj</var>`)`; |   |

`ec_blobject * <var class="pdparam">obj</var>`;<a name="idp47747104"></a> 
## Description

Decrements the reference count of `obj` by `1` and releases the memory allocated to it if the reference count is decremented to `0`.

**<a name="idp47749744"></a> Parameters**

<dl class="variablelist">

<dt>obj</dt>

<dd>

A pointer to an [“ec_blobject”](/momentum/3/3-api/structs-ec-blobject).

</dd>

</dl>

**<a name="idp47753008"></a> Return Values**

This function returns `void`.

**<a name="idp47754368"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47755472"></a> 
## See Also

[“ec_blobject”](/momentum/3/3-api/structs-ec-blobject), [ec_blobject_delref_typeunsafe](/momentum/3/3-api/apis-ec-blobject-delref-typeunsafe), [ec_blobject_addref](/momentum/3/3-api/apis-ec-blobject-addref) and [ec_blobject_wrap](/momentum/3/3-api/apis-ec-blobject-wrap).