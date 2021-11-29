---
lastUpdated: "03/26/2020"
title: "dict_key_exists_and_fetch"
description: "dict key exists and fetch If the specified key exists retrieve its value int dict key exists and fetch a key value EC Dict a const char key const char value If the specified key exists retrieve its value a The dictionary An EC Dict is a typedef of an..."
---

<a name="apis.dict_key_exists_and_fetch"></a> 
## Name

dict_key_exists_and_fetch — If the specified key exists, retrieve its value

## Synopsis

`#include "ecdict.h"`

| `int **dict_key_exists_and_fetch** (` | <var class="pdparam">a</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`ECDict <var class="pdparam">a</var>`;
`const char * <var class="pdparam">key</var>`;
`const char ** <var class="pdparam">value</var>`;<a name="idp50058464"></a> 
## Description

If the specified key exists, retrieve its value.

**<a name="idp50059696"></a> Parameters**

<dl class="variablelist">

<dt>a</dt>

<dd>

The dictionary. An ECDict is a typedef of an ec_hash_table.

</dd>

<dt>key</dt>

<dd>

The key.

</dd>

<dt>value</dt>

<dd>

The associated value.

</dd>

</dl>

**<a name="idp50066096"></a> Return Value**

Returns `1` if the key exists, `0` if it does not exist. If the key exists its value can be found at `* value`.

### Warning

When a key or value is returned, the memory is owned by the dictionary. Your memory can become invalid if something else removes an entry from the dictionary after you have queried it.

**<a name="idp50069520"></a> Threading**

It is legal to call this function in any thread.

<a name="idp50070624"></a> 
## See Also

[“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table)