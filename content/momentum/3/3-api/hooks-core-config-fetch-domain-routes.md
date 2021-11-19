---
lastUpdated: "03/26/2020"
title: "config_fetch_domain_routes"
description: "config fetch domain routes Override the routes setting int core config fetch domain routes closure valueptr from domain void closure ec config value valueptr ec config header from const char domain Use this hook to override the routes setting for a given domain closure The closure function valueptr The value..."
---

<a name="hooks.core.config_fetch_domain_routes"></a> 
## Name

config_fetch_domain_routes — Override the routes setting

## Synopsis

`#include "hooks/auto/routes.h"`

| `int **core_config_fetch_domain_routes** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">valueptr</var>, |   |
|   | <var class="pdparam">from</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_config_value ** <var class="pdparam">valueptr</var>`;
`ec_config_header ** <var class="pdparam">from</var>`;
`const char * <var class="pdparam">domain</var>`;<a name="idp28863040"></a> 
## Description

Use this hook to override the [routes](/momentum/3/3-reference/3-reference-conf-ref-routes) setting for a given domain.

**<a name="idp28865040"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

The closure function.

</dd>

<dt>valueptr</dt>

<dd>

The value of `routes` that is returned to the operating system. For a description of this structure see [ec_config_value](/momentum/3/3-api/structs-ec-config-value).

</dd>

<dt>from</dt>

<dd>

Scope instances in the configuration. For a description of this structure see [ec_config_header](/momentum/3/3-api/structs-ec-config-header). This parameter is optional.

</dd>

<dt>domain</dt>

<dd>

The domain name. This parameter is optional.

</dd>

</dl>

**<a name="idp32358528"></a> Return Values**

When this hook returns non-zero, no further hook providers are called, and the value that the hook provider returned is returned to the caller of the hook.

**<a name="idp32359584"></a> Threading**

This hook will be invoked in any thread.