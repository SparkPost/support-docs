---
lastUpdated: "03/26/2020"
title: "config_get_spool_mode"
description: "config get spool mode Get the value of the spool mode option int config get spool mode caller scope generic module infrastructure caller scope Get the value of the spool mode option The caller scope argument is virtually always NULL there is no reason for a consumer to make it..."
---

<a name="apis.config_get_spool_mode"></a> 
## Name

config_get_spool_mode — Get the value of the spool_mode option

## Synopsis

`#include "ec_config.h"`

| `int **config_get_spool_mode** (` | <var class="pdparam">caller_scope</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;<a name="idp48909072"></a> 
## Description

Get the value of the [spool_mode](/momentum/3/3-reference/3-reference-conf-ref-spool-mode) option.

### Note

The `caller_scope` argument is virtually always `NULL`; there is no reason for a consumer to make it anything else.

**<a name="idp48912912"></a> Parameters**

<dl class="variablelist">

<dt>caller_scope</dt>

<dd>

A [generic_module_infrastructure](/momentum/3/3-api/structs-generic-module-infrastructure) struct.

</dd>

</dl>

**<a name="idp48916400"></a> Return Values**

This function returns the value of the `spool_mode` option, an octal representation of the file mode for the spool.

**<a name="idp48917840"></a> Threading**

It is legal to call this function in any thread.