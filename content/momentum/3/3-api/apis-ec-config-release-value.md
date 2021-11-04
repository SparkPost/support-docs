---
lastUpdated: "03/26/2020"
title: "ec_config_release_value"
description: "ec config release value Free the memory associated with a ec config value struct void ec config release value tofree void tofree Use this function to free the memory associated with an ec config value struct Do not use free or ec free tofree A pointer to an ec config..."
---

<a name="apis.ec_config_release_value"></a> 
## Name

ec_config_release_value — Free the memory associated with a ec_config_value struct

## Synopsis

`#include "ec_config.c"`

| `void **ec_config_release_value** (` | <var class="pdparam">tofree</var>`)`; |   |

`void * <var class="pdparam">tofree</var>`;<a name="idp57783152"></a> 
## Description

Use this function to free the memory associated with an ec_config_value struct. Do **not** use `free` or [ec_free](/momentum/3/3-api/apis-ec-free).

**<a name="idp57786304"></a> Parameters**

<dl class="variablelist">

<dt>tofree</dt>

<dd>

A pointer to an [ec_config_value](/momentum/3/3-api/structs-ec-config-value) struct.

</dd>

</dl>

**<a name="idp57789776"></a> Return Values**

This function returns void.

**<a name="idp57790688"></a> Threading**

It is legal to call this function in any thread.