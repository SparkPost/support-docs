---
lastUpdated: "03/26/2020"
title: "config_get_binding_group"
description: "config get binding group Get the name of a binding group const char config get binding group caller scope slot generic module infrastructure caller scope int slot Get the name of the binding group The caller scope argument is virtually always NULL there is no reason for a consumer to..."
---

<a name="apis.config_get_binding_group"></a> 
## Name

config_get_binding_group — Get the name of a binding group

## Synopsis

`#include "ec_config.h"`

| `const char * **config_get_binding_group** (` | <var class="pdparam">caller_scope</var>, |   |
|   | <var class="pdparam">slot</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;
`int <var class="pdparam">slot</var>`;<a name="idp48819136"></a> 
## Description

Get the name of the binding_group.

### Note

The `caller_scope` argument is virtually always `NULL`; there is no reason for a consumer to make it anything else.

**<a name="idp48822224"></a> Parameters**

<dl class="variablelist">

<dt>caller_scope</dt>

<dd>

A pointer to a [generic_module_infrastructure](/momentum/3/3-api/structs-generic-module-infrastructure)

</dd>

<dt>slot</dt>

<dd>

The binding_group identifier.

</dd>

</dl>

**<a name="idp48827552"></a> Return Values**

On success, this function returns the name of the binding_group. Otherwise it returns NULL.

**<a name="idp48828544"></a> Threading**

It is legal to call this function in any thread.