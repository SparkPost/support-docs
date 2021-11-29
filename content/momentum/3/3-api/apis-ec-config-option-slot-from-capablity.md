---
lastUpdated: "03/26/2020"
title: "ec_config_option_slot_from_capability"
description: "ec config option slot from capability Determine an option identifier from a capability int ec config option slot from capability capability char capability A capability is a fully qualified option name such as config Global dkim sign all headers capability The fully qualified option name On success this function returns..."
---

<a name="apis.ec_config_option_slot_from_capablity"></a> 
## Name

ec_config_option_slot_from_capability — Determine an option identifier from a capability

## Synopsis

`#include "ec_config.h"`

| `int **ec_config_option_slot_from_capability** (` | <var class="pdparam">capability</var>`)`; |   |

`char * <var class="pdparam">capability</var>`;<a name="idp57725408"></a> 
## Description

A capability is a fully qualified option name such as: `config.Global:dkim_sign.all_headers`.

**<a name="idp57727552"></a> Parameters**

<dl class="variablelist">

<dt>capability</dt>

<dd>

The fully qualified option name.

</dd>

</dl>

**<a name="idp57730304"></a> Return Values**

On success this function returns an option slot. On failure it returns `-1`.

**<a name="idp57731712"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57733136"></a> 
## See Also

[ec_config_register_option](/momentum/3/3-api/apis-ec-config-register-option)