---
lastUpdated: "03/26/2020"
title: "ec_blobject_delref_typeunsafe"
description: "ec blobject delref typeunsafe Decrements the reference count of blobject by 1 and releases the memory allocated to it if the reference count is decremented to 0 void ec blobject delref typeunsafe blobject void blobject Decrements the reference count of blobject by 1 and releases the memory allocated to it..."
---

<a name="apis.ec_blobject_delref_typeunsafe"></a> 
## Name

ec_blobject_delref_typeunsafe — Decrements the reference count of `blobject` by `1` and releases the memory allocated to it if the reference count is decremented to `0`

## Synopsis

`#include "ec_blobject.h"`

| `void **ec_blobject_delref_typeunsafe** (` | <var class="pdparam">blobject</var>`)`; |   |

`void * <var class="pdparam">blobject</var>`;<a name="idp47768656"></a> 
## Description

Decrements the reference count of `blobject` by `1` and releases the memory allocated to it if the reference count is decremented to `0`.

**<a name="idp47771296"></a> Parameters**

<dl class="variablelist">

<dt>blobject</dt>

<dd>

A void pointer.

</dd>

</dl>

**<a name="idp47774016"></a> Return Values**

This function returns `void`.

**<a name="idp47775376"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47776480"></a> 
## See Also

[“ec_blobject”](/momentum/3/3-api/structs-ec-blobject), [ec_blobject_delref](/momentum/3/3-api/apis-ec-blobject-delref), [ec_blobject_addref](/momentum/3/3-api/apis-ec-blobject-addref) and [ec_blobject_wrap](/momentum/3/3-api/apis-ec-blobject-wrap).