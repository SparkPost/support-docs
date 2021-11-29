---
lastUpdated: "03/26/2020"
title: "config_get_connect_timeout"
description: "config get connect timeout Get the value of the connect timeout option int config get connect timeout caller scope generic module infrastructure caller scope Get the value of the connect timeout option The caller scope argument is virtually always NULL there is no reason for a consumer to make it..."
---

<a name="apis.config_get_connect_timeout"></a> 
## Name

config_get_connect_timeout — Get the value of the connect_timeout option

## Synopsis

`#include "ec_config.h"`

| `int **config_get_connect_timeout** (` | <var class="pdparam">caller_scope</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;<a name="idp48873024"></a> 
## Description

Get the value of the [connect_timeout](/momentum/3/3-reference/3-reference-conf-ref-connect-timeout) option.

### Note

The `caller_scope` argument is virtually always `NULL`; there is no reason for a consumer to make it anything else.

**<a name="idp48876880"></a> Parameters**

<dl class="variablelist">

<dt>caller_scope</dt>

<dd>

An [generic_module_infrastructure](/momentum/3/3-api/structs-generic-module-infrastructure) struct.

</dd>

</dl>

**<a name="idp48880368"></a> Return Values**

This function returns the value of the `connect_timeout` option.

**<a name="idp48881744"></a> Threading**

It is legal to call this function in any thread.