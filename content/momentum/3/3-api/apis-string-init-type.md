---
lastUpdated: "03/26/2020"
title: "string_init_type"
description: "string init type Initialize a string and pre allocate its storage specifying its backing type int string init type str size type string str size t size int type Initialize a string and pre allocate its storage specifying its backing type Objects created using string init type should be destroyed..."
---

<a name="apis.string_init_type"></a> 
## Name

string_init_type — Initialize a string and pre-allocate its storage, specifying its backing type

## Synopsis

`#include "misc/ec_string.h"`

| `int **string_init_type** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">size</var>, |   |
|   | <var class="pdparam">type</var>`)`; |   |

`string * <var class="pdparam">str</var>`;
`size_t <var class="pdparam">size</var>`;
`int <var class="pdparam">type</var>`;<a name="idp62929088"></a> 
## Description

Initialize a string and pre-allocate its storage, specifying its backing type.

### Note

Objects created using `string_init_type` should be destroyed using [string_destroy](/momentum/3/3-api/apis-string-destroy).

**<a name="idp62932464"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

The string.

</dd>

<dt>size</dt>

<dd>

The size of the initial buffer to allocate (including the terminating NULL); must not be `0`.

</dd>

<dt>type</dt>

<dd>

The string type (one of STRING_TYPE_*). For a listing of the string types see [“string”](/momentum/3/3-api/structs-string).

Starting with Momentum 3.0, the type parameter may be any valid sized memtype ID, either one from the core product (MEMTYPE_XXX defines) or registered by a module.

</dd>

</dl>

**<a name="idp62940608"></a> Return Values**

Returns `1` if the buffer was successfully allocated, otherwise `0`.

**<a name="idp62942448"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62943552"></a> 
## See Also

[string_destroy](/momentum/3/3-api/apis-string-destroy)