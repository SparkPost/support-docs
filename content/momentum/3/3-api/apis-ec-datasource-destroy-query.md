---
lastUpdated: "03/26/2020"
title: "ec_datasource_destroy_query"
description: "ec datasource destroy query Release the resources used by the specified query void ec datasource destroy query q ecdata cache query q Release the resources used by the specified query q A pointer to an ecdata cache query The following typedef applies to this data type typedef struct ec datasource..."
---

<a name="apis.ec_datasource_destroy_query"></a> 
## Name

ec_datasource_destroy_query — Release the resources used by the specified query

## Synopsis

`#include "modules/datasource/ecdatasource.h"`

| `void **ec_datasource_destroy_query** (` | <var class="pdparam">q</var>`)`; |   |

`ecdata_cache_query * <var class="pdparam">q</var>`;<a name="idp49650096"></a> 
## Description

Release the resources used by the specified query.

**<a name="idp49651328"></a> Parameters**

<dl class="variablelist">

<dt>q</dt>

<dd>

A pointer to an ecdata_cache_query. The following typedef applies to this data type: `typedef struct ec_datasource_cache_query ecdata_cache_query;`.

</dd>

</dl>

**<a name="idp49654624"></a> Return Values**

This function returns void.

**<a name="idp49655536"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49656960"></a> 
## See Also

[ds_core Module](/momentum/3/3-reference/3-reference-modules-ds-core) and [“ec_datasource_cache_query”](/momentum/3/3-api/structs-ec-datasource-cache-query)