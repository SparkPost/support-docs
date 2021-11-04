---
lastUpdated: "03/26/2020"
title: "ec_config_fetch_globalconf"
description: "ec config fetch globalconf Return the current configuration context ec config header ec config fetch globalconf void Return the current configuration context No parameters are passed to this function This function returns an ec config header use ec config release scope instance when you no longer need the ec config..."
---

<a name="apis.ec_config_fetch_globalconf"></a> 
## Name

ec_config_fetch_globalconf — Return the current configuration context

## Synopsis

`#include "ec_config.h"`

| `ec_config_header * **ec_config_fetch_globalconf** (` | <var class="pdparam"></var>`)`; |   |

`void<var class="pdparam"></var>`;<a name="idp57672288"></a> 
## Description

Return the current configuration context.

**<a name="idp57673504"></a> Parameters**

No parameters are passed to this function.

**<a name="idp57674432"></a> Return Values**

This function returns an [ec_config_header](/momentum/3/3-api/structs-ec-config-header); use [ec_config_release_scope_instance](/momentum/3/3-api/apis-ec-config-release-scope-instance) when you no longer need the ec_config_header. Do **not** directly change any of the members of an ec_config_header; use the appropriate API.

**<a name="idp57677680"></a> Threading**

It is legal to call this function in any thread.