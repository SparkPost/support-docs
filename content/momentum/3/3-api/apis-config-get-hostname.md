---
lastUpdated: "03/26/2020"
title: "config_get_hostname"
description: "config get hostname Get the value of the hostname option char config get hostname caller scope generic module infrastructure caller scope Get the value of the hostname option The caller scope argument is virtually always NULL there is no reason for a consumer to make it anything else caller scope..."
---

<a name="apis.config_get_hostname"></a> 
## Name

config_get_hostname — Get the value of the hostname option

## Synopsis

`#include "ec_config.h"`

| `char * **config_get_hostname** (` | <var class="pdparam">caller_scope</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;<a name="idp48891088"></a> 
## Description

Get the value of the [hostname](/momentum/3/3-reference/3-reference-conf-ref-hostname) option.

### Note

The `caller_scope` argument is virtually always `NULL`; there is no reason for a consumer to make it anything else.

**<a name="idp48894928"></a> Parameters**

<dl class="variablelist">

<dt>caller_scope</dt>

<dd>

An [generic_module_infrastructure](/momentum/3/3-api/structs-generic-module-infrastructure) struct.

</dd>

</dl>

**<a name="idp48898416"></a> Return Values**

This function returns the value of the `hostname` option.

**<a name="idp48899792"></a> Threading**

It is legal to call this function in any thread.