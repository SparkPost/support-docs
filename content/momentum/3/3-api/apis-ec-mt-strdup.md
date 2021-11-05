---
lastUpdated: "03/26/2020"
title: "ec_mt_strdup"
description: "ec mt strdup Duplicate a string of the specified memory type ec mt strdup object type str int object type const char str Duplicate a string of the specified memory type The built in memtypes are enumerated at the section called Memory Types To create your own memory type use..."
---

<a name="apis.ec_mt_strdup"></a> 
## Name

ec_mt_strdup — Duplicate a string of the specified memory type

## Synopsis

`#include "ec_malloc.h"`

| `**ec_mt_strdup** (` | <var class="pdparam">object_type</var>, |   |
|   | <var class="pdparam">str</var>`)`; |   |

`int <var class="pdparam">object_type</var>`;
`const char * <var class="pdparam">str</var>`;<a name="idp55027616"></a> 
## Description

Duplicate a string of the specified memory type. The built-in memtypes are enumerated at [the section called “Memory Types”](/momentum/3/3-api/apis-ec-malloc#apis.ec_malloc.types). To create your own memory type use [ec_memtype_register](/momentum/3/3-api/apis-ec-memtype-register).

### Note

This function is only valid with VSIZE memory type, not a fixed size type. For more information about memory types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types).

The `ec_strdup(str)` function is a macro for duplicating a string of the MEMTYPE_MESSAGE_BODY type: It calls `ec_mt_strdup(MEMTYPE_MESSAGE_BODY, __str)`.

**<a name="idp55033264"></a> Parameters**

<dl class="variablelist">

<dt>object_type</dt>

<dd>

This parameter is an integer indicating a specific memory type.

</dd>

<dt>str</dt>

<dd>

A pointer to the string you wish to duplicate.

</dd>

</dl>

**<a name="idp55037888"></a> Return Value**

This function returns a pointer to the duplicated string.

**<a name="idp55038832"></a> Threading**

It is legal to call this function in the `any` thread.

<a name="idp55040688"></a> 
## See Also

[ec_malloc](/momentum/3/3-api/apis-ec-malloc), [ec_malloc_size](/momentum/3/3-api/apis-ec-malloc-size), [ec_realloc](/momentum/3/3-api/apis-ec-realloc) and [ec_memtype_register](/momentum/3/3-api/apis-ec-memtype-register) and [ec_mt_strndup](/momentum/3/3-api/apis-ec-mt-strndup).