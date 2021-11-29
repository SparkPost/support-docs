---
lastUpdated: "03/26/2020"
title: "ec_datasource_cache_delref"
description: "ec datasource cache delref Delete a reference to a datasource cache entry void ec cache delref entry struct ec datasource query cache entry entry Delete a reference to a datasource cache entry entry A pointer to an ec datasource query cache entry struct This function returns void It is legal..."
---

<a name="apis.ec_datasource_cache_delref"></a> 
## Name

ec_datasource_cache_delref — Delete a reference to a datasource cache entry

## Synopsis

`#include "modules/datasource/ecdatasource.h"`

| `void **ec_cache_delref** (` | <var class="pdparam">entry</var>`)`; |   |

`struct ec_datasource_query_cache_entry *<var class="pdparam">entry</var>`;<a name="idp49589456"></a> 
## Description

Delete a reference to a datasource cache entry.

**<a name="idp49590688"></a> Parameters**

<dl class="variablelist">

<dt>entry</dt>

<dd>

A pointer to an [ec_datasource_query_cache_entry](/momentum/3/3-api/structs-ec-datasource-query-cache-entry) struct.

</dd>

</dl>

**<a name="idp49594192"></a> Return Values**

This function returns void.

**<a name="idp49595104"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49596528"></a> 
## See Also

[“ec_datasource_query_cache_entry”](/momentum/3/3-api/structs-ec-datasource-query-cache-entry)