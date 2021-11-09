---
lastUpdated: "03/26/2020"
title: "ec_datasource_set_param_by_name"
description: "ec datasource set param by name Initialize the value of a parameter using the name as a key int ec datasource set param by name q key val ecdata cache query q const char key const ecdata value val Initialize the value of a parameter using the name as a..."
---

<a name="apis.ec_datasource_set_param_by_name"></a> 
## Name

ec_datasource_set_param_by_name — Initialize the value of a parameter using the name as a key

## Synopsis

`#include "modules/datasource/ecdatasource.h"`

| `(int) **ec_datasource_set_param_by_name** (` | <var class="pdparam">q</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">val</var>`)`; |   |

`ecdata_cache_query *<var class="pdparam">q</var>`;
`const char *<var class="pdparam">key</var>`;
`const ecdata_value *<var class="pdparam">val</var>`;<a name="idp49742000"></a> 
## Description

Initialize the value of a parameter using the name as a key.

### Note

This function is for use with 'bind' variables; the details of how this works depends on the underlying driver being used.

**<a name="idp49744272"></a> Parameters**

<dl class="variablelist">

<dt>q</dt>

<dd>

A pointer to an ecdata_cache_query. The following typedef applies to this data type: `typedef struct ec_datasource_cache_query ecdata_cache_query;`.

</dd>

<dt>key</dt>

<dd>

The name of the parameter that is being initialized.

</dd>

<dt>val</dt>

<dd>

The value of the parameter being initialized. For a description of this data type [ecdata_value](/momentum/3/3-api/structs-ecdata-value).

</dd>

</dl>

**<a name="idp49752032"></a> Return Values**

On success this function returns

**<a name="idp49752960"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49754384"></a> 
## See Also

[“ec_datasource_cache_query”](/momentum/3/3-api/structs-ec-datasource-cache-query)