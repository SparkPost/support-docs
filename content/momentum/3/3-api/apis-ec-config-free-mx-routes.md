---
lastUpdated: "03/26/2020"
title: "ec_config_free_mx_routes"
description: "ec config free mx routes Free the memory associated with an mx routes struct void ec config free mx routes r mx routes r Free the memory associated with an mx routes struct Be sure to use this function to free memory of the MEMTYPE MX ROUTES type Do not..."
---

<a name="apis.ec_config_free_mx_routes"></a> 
## Name

ec_config_free_mx_routes — Free the memory associated with an mx_routes struct

## Synopsis

`#include "ec_config.h"`

| `void **ec_config_free_mx_routes** (` | <var class="pdparam">r</var>`)`; |   |

`mx_routes * <var class="pdparam">r</var>`;<a name="idp57687072"></a> 
## Description

Free the memory associated with an mx_routes struct. Be sure to use this function to free memory of the `MEMTYPE_MX_ROUTES` type. Do **not** use `free` or [ec_free](/momentum/3/3-api/apis-ec-free). For more information about memory types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types).

**<a name="idp57691472"></a> Parameters**

<dl class="variablelist">

<dt>r</dt>

<dd>

A pointer to an [mx_routes](/momentum/3/3-api/structs-mx-routes) struct.

</dd>

</dl>

**<a name="idp57694912"></a> Return Values**

This function returns void.

**<a name="idp57695824"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57697248"></a> 
## See Also

[ec_malloc](/momentum/3/3-api/apis-ec-malloc)