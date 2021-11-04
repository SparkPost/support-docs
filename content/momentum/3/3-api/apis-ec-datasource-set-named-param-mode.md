---
lastUpdated: "03/26/2020"
title: "ec_datasource_set_named_param_mode"
description: "ec datasource set named param mode Initialize a query to use named parameters int ec datasource set named param mode q param count ecdata cache query q intparam count Initialize a query to use named parameters by setting the params positional member of the cache to 0 This function is..."
---

<a name="apis.ec_datasource_set_named_param_mode"></a> 
## Name

ec_datasource_set_named_param_mode — Initialize a query to use named parameters

## Synopsis

`#include "modules/datasource/ecdatasource.h"`

| `(int) **ec_datasource_set_named_param_mode** (` | <var class="pdparam">q</var>, |   |
|   | <var class="pdparam">param_count</var>`)`; |   |

`ecdata_cache_query *<var class="pdparam">q</var>`;
`int<var class="pdparam">param_count</var>`;<a name="idp49718208"></a> 
## Description

Initialize a query to use named parameters by setting the `params_positional` member of the cache to `0`.

### Note

This function is for use with 'bind' variables; the details of how this works depends on the underlying driver being used.

**<a name="idp49721376"></a> Parameters**

<dl class="variablelist">

<dt>q</dt>

<dd>

A pointer to an `ecdata_cache_query`. The following typedef applies to this data type: `typedef struct ec_datasource_cache_query ecdata_cache_query;`.

</dd>

<dt>param_count</dt>

<dd>

The number of parameters.

</dd>

</dl>

**<a name="idp49726928"></a> Return Values**

On success this function returns `1`.

**<a name="idp49728304"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49729728"></a> 
## See Also

[“ec_datasource_cache_query”](/momentum/3/3-api/structs-ec-datasource-cache-query) and [ec_datasource_set_param_by_name](/momentum/3/3-api/apis-ec-datasource-set-param-by-name)