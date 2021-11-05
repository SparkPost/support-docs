---
lastUpdated: "03/26/2020"
title: "ec_blobject_wrap"
description: "ec blobject wrap Allocates memory for an ec blobject and initializes it ec blobject ec blobject wrap cls object ec blobject class cls void object Allocates memory for an Section 68 17 ec blobject initializes it using cls and object then returns the address of the allocated memory cls A..."
---

<a name="apis.ec_blobject_wrap"></a> 
## Name

ec_blobject_wrap — Allocates memory for an ec_blobject and initializes it

## Synopsis

`#include "ec_blobject.h"`

| `ec_blobject * **ec_blobject_wrap** (` | <var class="pdparam">cls</var>, |   |
|   | <var class="pdparam">object</var>`)`; |   |

`ec_blobject_class * <var class="pdparam">cls</var>`;
`void * <var class="pdparam">object</var>`;<a name="idp47789056"></a> 
## Description

Allocates memory for an [“ec_blobject”](/momentum/3/3-api/structs-ec-blobject), initializes it using `cls` and `object`, then returns the address of the allocated memory.

**<a name="idp47791776"></a> Parameters**

<dl class="variablelist">

<dt>cls</dt>

<dd>

A pointer to an [“ec_blobject_class”](/momentum/3/3-api/structs-ec-blobject-class). This is used to initialize the [“ec_blobject”](/momentum/3/3-api/structs-ec-blobject) that is returned.

</dd>

<dt>object</dt>

<dd>

A `void` pointer. This is used to initialize the [“ec_blobject”](/momentum/3/3-api/structs-ec-blobject) that is returned.

</dd>

</dl>

**<a name="idp47798560"></a> Return Values**

This function returns the address of the allocated and initialized [“ec_blobject”](/momentum/3/3-api/structs-ec-blobject).

**<a name="idp47800080"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47801184"></a> 
## See Also

[“ec_blobject”](/momentum/3/3-api/structs-ec-blobject), [“ec_blobject_class”](/momentum/3/3-api/structs-ec-blobject-class), [ec_blobject_addref](/momentum/3/3-api/apis-ec-blobject-addref), [ec_blobject_delref](/momentum/3/3-api/apis-ec-blobject-delref), and [ec_blobject_delref_typeunsafe](/momentum/3/3-api/apis-ec-blobject-delref-typeunsafe).