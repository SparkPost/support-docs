---
lastUpdated: "03/26/2020"
title: "ec_datasource_first_column"
description: "ec datasource first column Move the cursor to the first column of the specified row int ec datasource first column ent nrow iter const ecdata cache ent ent int nrow ec datasource value iter iter Move the cursor to the first column of the specified row ent This parameter is..."
---

<a name="apis.ec_datasource_first_column"></a> 
## Name

ec_datasource_first_column — Move the cursor to the first column of the specified row

## Synopsis

`#include "modules/datasource/ecdatasource.h"`

| `(int) **ec_datasource_first_column** (` | <var class="pdparam">ent</var>, |   |
|   | <var class="pdparam">nrow</var>, |   |
|   | <var class="pdparam">iter</var>`)`; |   |

`const ecdata_cache_ent * <var class="pdparam">ent</var>`;
`int <var class="pdparam">nrow</var>`;
`ec_datasource_value_iter * <var class="pdparam">iter</var>`;<a name="idp49669424"></a> 
## Description

Move the cursor to the first column of the specified row.

**<a name="idp49670656"></a> Parameters**

<dl class="variablelist">

<dt>ent</dt>

<dd>

This parameter is a pointer to a const `ecdata_cache_ent` struct, a typedef for a `ec_datasource_query_cache_entry` struct.

</dd>

<dt>nrow</dt>

<dd>

The affected row.

</dd>

<dt>iter</dt>

<dd>

A pointer to an `ec_datasource_value_iter`. This iterator is a typedef of the [ec_datasource_value_iterator](/momentum/3/3-api/structs-ec-datasource-value-iterator) iterator.

</dd>

</dl>

**<a name="idp49679264"></a> Return Values**

On success this function returns `1` and on failure `0`.

**<a name="idp49681088"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49682512"></a> 
## See Also

[ec_datasource_next_column](/momentum/3/3-api/apis-ec-datasource-next-column)