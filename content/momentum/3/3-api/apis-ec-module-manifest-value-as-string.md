---
lastUpdated: "03/26/2020"
title: "ec_module_manifest_value_as_string"
description: "ec module manifest value as string retrieves a manifest value for a named module int ec module manifest value as string iter modulename keyname string val ec module manifest iter t iter const char modulename const char keyname const char string val This reference page was automatically generated from functions..."
---

<a name="apis.ec_module_manifest_value_as_string"></a> 
## Name

ec_module_manifest_value_as_string — retrieves a manifest value for a named module

## Synopsis

`#include "module.h"`

| `int **ec_module_manifest_value_as_string** (` | <var class="pdparam">iter</var>, |   |
|   | <var class="pdparam">modulename</var>, |   |
|   | <var class="pdparam">keyname</var>, |   |
|   | <var class="pdparam">string_val</var>`)`; |   |

`ec_module_manifest_iter_t * <var class="pdparam">iter</var>`;
`const char * <var class="pdparam">modulename</var>`;
`const char * <var class="pdparam">keyname</var>`;
`const char ** <var class="pdparam">string_val</var>`;<a name="idp57980176"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

retrieves a manifest value for a named module

If keyname is defined by the manifest for modulename, sets string_val to point to its value.

**<a name="idp57983600"></a> Parameters**

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

<dt>string_val</dt>

<dd>

the returned value

</dd>

</dl>

string_val is valid to read until the iterator is destroyed.

**<a name="idp57992368"></a> Return Values**

1 if the value was defined, 0 otherwise