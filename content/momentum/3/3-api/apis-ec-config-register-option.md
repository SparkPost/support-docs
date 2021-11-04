---
lastUpdated: "03/26/2020"
title: "ec_config_register_option"
description: "ec config register option Register a module option int ec config register option option ec config option def option Register a module option After registering an option use ec config null value to initialize the value of the option option A pointer to an ec config option def struct On..."
---

<a name="apis.ec_config_register_option"></a> 
## Name

ec_config_register_option — Register a module option

## Synopsis

`#include "ec_config.h"`

| `int **ec_config_register_option** (` | <var class="pdparam">option</var>`)`; |   |

`ec_config_option_def * <var class="pdparam">option</var>`;<a name="idp57743328"></a> 
## Description

Register a module option. After registering an option, use [ec_config_null_value](/momentum/3/3-api/apis-ec-config-null-value) to initialize the value of the option.

**<a name="idp57745344"></a> Parameters**

<dl class="variablelist">

<dt>option</dt>

<dd>

A pointer to an [ec_config_option_def](/momentum/3/3-api/structs-ec-config-option-def) struct.

</dd>

</dl>

**<a name="idp57748832"></a> Return Values**

On success this function returns the slot member of an ec_config_option_internal struct. On failure `-1` is returned.

**<a name="idp57750288"></a> Threading**

It is legal to call this function in the thread.

<a name="idp57751984"></a> 
## See Also

[Primary Momentum APIs](/momentum/3/3-api/arch-primary-apis)