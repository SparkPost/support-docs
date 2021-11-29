---
lastUpdated: "03/26/2020"
title: "ec_mt_strndup"
description: "ec mt strndup Duplicate a string of the specified message type copying at most the specified number of bytes char ec mt strndup object type str len int object type const char str size t len Duplicate a string of the specified message type copying at most the specified number..."
---

<a name="apis.ec_mt_strndup"></a> 
## Name

ec_mt_strndup — Duplicate a string of the specified message type copying at most the specified number of bytes

## Synopsis

`#include "ec_malloc.h"`

| `(char *) **ec_mt_strndup** (` | <var class="pdparam">object_type</var>, |   |
|   | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`int <var class="pdparam">object_type</var>`;
`const char * <var class="pdparam">str</var>`;
`size_t <var class="pdparam">len</var>`;<a name="idp55054576"></a> 
## Description

Duplicate a string of the specified message type copying at most the specified number of bytes. A terminating null byte is added. The build-in memtypes are enumerated at [the section called “Memory Types”](/momentum/3/3-api/apis-ec-malloc#apis.ec_malloc.types). To create your own memory type use [ec_memtype_register](/momentum/3/3-api/apis-ec-memtype-register).

### Note

This function is only valid with VSIZE memory type, not a fixed size type. For more information about memory types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types).

The `ec_strndup` function is a macro for duplicating a string of the MEMTYPE_MESSAGE_BODY type: It calls `ec_mt_strdup(MEMTYPE_MESSAGE_BODY, __str, len)`.

**<a name="idp55060320"></a> Parameters**

<dl class="variablelist">

<dt>object_type</dt>

<dd>

This parameter is an integer indicating a specific memory type.

</dd>

<dt>str</dt>

<dd>

A pointer to the string you wish to duplicate.

</dd>

<dt>len</dt>

<dd>

The number of bytes to copy, typically the length of the string.

</dd>

</dl>

**<a name="idp55066816"></a> Return Value**

This function returns a pointer to the duplicated string.

**<a name="idp55067760"></a> Threading**

It is legal to call this function in the `any` thread.

<a name="idp55069616"></a> 
## See Also

[ec_malloc](/momentum/3/3-api/apis-ec-malloc), [ec_malloc_size](/momentum/3/3-api/apis-ec-malloc-size), [ec_realloc](/momentum/3/3-api/apis-ec-realloc), [ec_memtype_register](/momentum/3/3-api/apis-ec-memtype-register) and [ec_mt_strdup](/momentum/3/3-api/apis-ec-mt-strdup).