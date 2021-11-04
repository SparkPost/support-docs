---
lastUpdated: "03/26/2020"
title: "ec_module_manifest_value_as_list"
description: "ec module manifest value as list retrieves a list of manifest values for a named module int ec module manifest value as list iter modulename keyname list ec module manifest iter t iter const char modulename const char keyname ec ptr array list This reference page was automatically generated from..."
---

<a name="apis.ec_module_manifest_value_as_list"></a> 
## Name

ec_module_manifest_value_as_list — retrieves a list of manifest values for a named module

## Synopsis

`#include "module.h"`

| `int **ec_module_manifest_value_as_list** (` | <var class="pdparam">iter</var>, |   |
|   | <var class="pdparam">modulename</var>, |   |
|   | <var class="pdparam">keyname</var>, |   |
|   | <var class="pdparam">list</var>`)`; |   |

`ec_module_manifest_iter_t * <var class="pdparam">iter</var>`;
`const char * <var class="pdparam">modulename</var>`;
`const char * <var class="pdparam">keyname</var>`;
`ec_ptr_array ** <var class="pdparam">list</var>`;<a name="idp57956192"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

retrieves a list of manifest values for a named module

If keyname is defined by the manifest for modulename, treat its value as a comma and/or space separated list of values.

Sets list to a pointer array containing the list values. The caller is responsible for ec_ptr_array_destroy()ing and free()ing the list if it is returned.

**<a name="idp57960256"></a> Parameters**

<dl class="variablelist">

<dt>iter</dt>

<dd>

the iterator

</dd>

<dt>modulename</dt>

<dd>

the name of the module

</dd>

<dt>keyname</dt>

<dd>

the name of the item to be retrieved

</dd>

<dt>list</dt>

<dd>

the pointer array holding the data

</dd>

</dl>

**<a name="idp57968528"></a> Return Values**

1 if defined, 0 otherwise.