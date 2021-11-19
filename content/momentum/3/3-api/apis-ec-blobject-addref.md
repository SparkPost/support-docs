---
lastUpdated: "03/26/2020"
title: "ec_blobject_addref"
description: "ec blobject addref Increments the reference count of obj by 1 void ec blobject addref obj ec blobject obj Increments the reference count of obj by 1 obj A pointer to an Section 68 17 ec blobject This function returns void It is legal to call this function in any..."
---

<a name="apis.ec_blobject_addref"></a> 
## Name

ec_blobject_addref — Increments the reference count of `obj` by `1`

## Synopsis

`#include "ec_blobject.h"`

| `void **ec_blobject_addref** (` | <var class="pdparam">obj</var>`)`; |   |

`ec_blobject * <var class="pdparam">obj</var>`;<a name="idp47725936"></a> 
## Description

Increments the reference count of `obj` by `1`.

**<a name="idp47728048"></a> Parameters**

<dl class="variablelist">

<dt>obj</dt>

<dd>

A pointer to an [“ec_blobject”](/momentum/3/3-api/structs-ec-blobject).

</dd>

</dl>

**<a name="idp47731312"></a> Return Values**

This function returns `void`.

**<a name="idp47732672"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47734096"></a> 
## See Also

[“ec_blobject”](/momentum/3/3-api/structs-ec-blobject), [ec_blobject_delref_typeunsafe](/momentum/3/3-api/apis-ec-blobject-delref-typeunsafe), [ec_blobject_delref](/momentum/3/3-api/apis-ec-blobject-delref), and [ec_blobject_wrap](/momentum/3/3-api/apis-ec-blobject-wrap).