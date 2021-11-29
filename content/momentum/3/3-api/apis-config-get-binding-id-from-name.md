---
lastUpdated: "03/26/2020"
title: "config_get_binding_id_from_name"
description: "config get binding id from name Get the identifier associated with a binding name ec binding slot config get binding id from name name const char name Get the identifier associated with a binding name name The name of the binding This function returns a binding identifier An ec binding..."
---

<a name="apis.config_get_binding_id_from_name"></a> 
## Name

config_get_binding_id_from_name — Get the identifier associated with a binding name

## Synopsis

`#include "ec_config.h"`

| `ec_binding_slot **config_get_binding_id_from_name** (` | <var class="pdparam">name</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;<a name="idp48837984"></a> 
## Description

Get the identifier associated with a binding name.

**<a name="idp48839216"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

The name of the binding.

</dd>

</dl>

**<a name="idp48841952"></a> Return Values**

This function returns a binding identifier. An `ec_binding_slot` is defined as `typedef int ec_binding_slot;`.

**<a name="idp48843808"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48845232"></a> 
## See Also

[config_get_binding_name_from_id](/momentum/3/3-api/apis-config-get-binding-name-from-id)