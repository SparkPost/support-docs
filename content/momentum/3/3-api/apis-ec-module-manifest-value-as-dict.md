---
lastUpdated: "03/26/2020"
title: "ec_module_manifest_value_as_dict"
description: "ec module manifest value as dict retrieves a dictionary of manifest values for a named module int ec module manifest value as dict iter modulename keyname dict ec module manifest iter t iter const char modulename const char keyname EC Dict dict This reference page was automatically generated from functions..."
---

<a name="apis.ec_module_manifest_value_as_dict"></a> 
## Name

ec_module_manifest_value_as_dict — retrieves a dictionary of manifest values for a named module

## Synopsis

`#include "module.h"`

| `int **ec_module_manifest_value_as_dict** (` | <var class="pdparam">iter</var>, |   |
|   | <var class="pdparam">modulename</var>, |   |
|   | <var class="pdparam">keyname</var>, |   |
|   | <var class="pdparam">dict</var>`)`; |   |

`ec_module_manifest_iter_t * <var class="pdparam">iter</var>`;
`const char * <var class="pdparam">modulename</var>`;
`const char * <var class="pdparam">keyname</var>`;
`ECDict * <var class="pdparam">dict</var>`;<a name="idp57931664"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

retrieves a dictionary of manifest values for a named module

If keyname is defined by the manifest for modulename, treat its value as a comma and/or space separated list of values.

Sets dict to a dictionary whose keys are "0", "1" etc. (stringified versions of the numeric positioning in the list), with values corresponding to those in the list.

The caller is responsible for dropping that dict if it is returned. Note that a dictionary is used here to simplify the memory management.

**<a name="idp57936352"></a> Parameters**

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

<dt>dict</dt>

<dd>

the dictionary holding the data

</dd>

</dl>

**<a name="idp57944608"></a> Return Values**

1 if defined, 0 otherwise.