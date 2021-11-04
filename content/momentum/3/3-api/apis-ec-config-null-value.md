---
lastUpdated: "03/26/2020"
title: "ec_config_null_value"
description: "ec config null value Initialize storage for a configuration option ec config value ec config null value option slot int option slot Initialize storage for the value associated with a configuration option If the option specified by option slot exists return a pointer to an ec config value associated with..."
---

<a name="apis.ec_config_null_value"></a> 
## Name

ec_config_null_value — Initialize storage for a configuration option

## Synopsis

`#include "ec_config.h"`

| `ec_config_value * **ec_config_null_value** (` | <var class="pdparam">option_slot</var>`)`; |   |

`int <var class="pdparam">option_slot</var>`;<a name="idp57707408"></a> 
## Description

Initialize storage for the value associated with a configuration option. If the option specified by `option_slot` exists, return a pointer to an ec_config_value associated with that slot.

**<a name="idp57709216"></a> Parameters**

<dl class="variablelist">

<dt>option_slot</dt>

<dd>

The option identifier. This integer is returned when an option is registered.

</dd>

</dl>

**<a name="idp57712016"></a> Return Values**

On success this function returns a pointer to an [ec_config_value](/momentum/3/3-api/structs-ec-config-value) struct. Otherwise it returns NULL.

**<a name="idp57713712"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57715136"></a> 
## See Also

[ec_config_register_option](/momentum/3/3-api/apis-ec-config-register-option)