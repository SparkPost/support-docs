---
lastUpdated: "03/26/2020"
title: "validate_context_get"
description: "validate context get Retrieve the value associated with a message context key or connection context key const char validate context get vctx which key validate context vctx int which const char key Retrieve the value associated with a message context key or connection context key vctx The validation context For..."
---

<a name="apis.validate_context_get"></a> 
## Name

validate_context_get — Retrieve the value associated with a message context key or connection context key

## Synopsis

`#include "validate.h"`

| `const char * **validate_context_get** (` | <var class="pdparam">vctx</var>, |   |
|   | <var class="pdparam">which</var>, |   |
|   | <var class="pdparam">key</var>`)`; |   |

`validate_context * <var class="pdparam">vctx</var>`;
`int <var class="pdparam">which</var>`;
`const char * <var class="pdparam">key</var>`;<a name="idp64422432"></a> 
## Description

Retrieve the value associated with a message context key or connection context key.

**<a name="idp64423696"></a> Parameters**

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

</dl>

**<a name="idp64431728"></a> Return Value**

Returns the value associated with the key, if it exists. If the key does not exist in the validation context, then a reference to an empty string ("") is returned.

**<a name="idp64432800"></a> Threading**

It is legal to call this function in any thread.

<a name="idp64433904"></a> 
## See Also

[validate_context_exists](/momentum/3/3-api/apis-validate-context-exists), [validate_context_exists_and_get](/momentum/3/3-api/apis-validate-context-exists-and-get), [validate_context_set](/momentum/3/3-api/apis-validate-context-set), [validate_context_delete](/momentum/3/3-api/apis-validate-context-delete), [validate_context_init](/momentum/3/3-api/apis-validate-context-init), and [validate_context_destroy](/momentum/3/3-api/apis-validate-context-destroy).