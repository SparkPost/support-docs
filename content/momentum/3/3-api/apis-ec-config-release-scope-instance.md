---
lastUpdated: "03/26/2020"
title: "ec_config_release_scope_instance"
description: "ec config release scope instance Free the memory associated with an ec config header struct void ec config release scope instance tofree void tofree Use this function to release the ec config header struct acquired via ec config fetch globalconf Do not use free or ec free tofree A pointer..."
---

<a name="apis.ec_config_release_scope_instance"></a> 
## Name

ec_config_release_scope_instance — Free the memory associated with an ec_config_header struct

## Synopsis

`#include "ec_config.h"`

| `void **ec_config_release_scope_instance** (` | <var class="pdparam">tofree</var>`)`; |   |

`void * <var class="pdparam">tofree</var>`;<a name="idp57762384"></a> 
## Description

Use this function to release the [ec_config_header](/momentum/3/3-api/structs-ec-config-header) struct acquired via [ec_config_fetch_globalconf](/momentum/3/3-api/apis-ec-config-fetch-globalconf). Do **not** use `free` or [ec_free](/momentum/3/3-api/apis-ec-free).

**<a name="idp57766992"></a> Parameters**

<dl class="variablelist">

<dt>tofree</dt>

<dd>

A pointer to an [ec_config_header](/momentum/3/3-api/structs-ec-config-header) struct.

</dd>

</dl>

**<a name="idp57770480"></a> Return Values**

This function returns void.

**<a name="idp57771392"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57772816"></a> 
## See Also

[ec_config_header](/momentum/3/3-api/structs-ec-config-header)