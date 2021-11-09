---
lastUpdated: "03/26/2020"
title: "validate_context_exists_and_get"
description: "validate context exists and get If a validation context key exists then retrieve its value int validate context exists and get vctx which key value validate context vctx int which const char key const char value If the specified validation context key exists then retrieve its value vctx The validation..."
---

<a name="apis.validate_context_exists_and_get"></a> 
## Name

validate_context_exists_and_get — If a validation context key exists, then retrieve its value

## Synopsis

`#include "validate.h"`

| `int **validate_context_exists_and_get** (` | <var class="pdparam">vctx</var>, |   |
|   | <var class="pdparam">which</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`validate_context * <var class="pdparam">vctx</var>`;
`int <var class="pdparam">which</var>`;
`const char * <var class="pdparam">key</var>`;
`const char ** <var class="pdparam">value</var>`;<a name="idp64373360"></a> 
## Description

If the specified validation context key exists, then retrieve its value.

**<a name="idp64374624"></a> Parameters**

<dl class="variablelist">

<dt>vctx</dt>

<dd>

The validation context. For documentation of this data structure see [“validate_context”](/momentum/3/3-api/structs-validate-context).

</dd>

<dt>which</dt>

<dd>

An integer, typically `VCTX_MESS` or `VCTX_CONN`, which determines which dictionary to consult: the connection context or the message context dictionary.

</dd>

<dt>key</dt>

<dd>

The key to query.

</dd>

<dt>value</dt>

<dd>

The associated value.

</dd>

</dl>

**<a name="idp64384496"></a> Return Value**

Returns `1` if the key exists, `0` if it does not exist. If the key exists its value can be found at `*value`.

**<a name="idp64386816"></a> Threading**

It is legal to call this function in any thread.

<a name="idp64387920"></a> 
## See Also

[validate_context_exists](/momentum/3/3-api/apis-validate-context-exists), [validate_context_get](/momentum/3/3-api/apis-validate-context-get), [validate_context_set](/momentum/3/3-api/apis-validate-context-set), [validate_context_delete](/momentum/3/3-api/apis-validate-context-delete), [validate_context_init](/momentum/3/3-api/apis-validate-context-init), and [validate_context_destroy](/momentum/3/3-api/apis-validate-context-destroy).