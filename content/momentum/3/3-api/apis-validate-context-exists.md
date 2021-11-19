---
lastUpdated: "03/26/2020"
title: "validate_context_exists"
description: "validate context exists Determine if the specified validation context key exists int validate context exists vctx which key validate context vctx int which const char key Determine if the specified validation context key exists vctx The validation context For documentation of this data structure see Section 68 86 validate context..."
---

<a name="apis.validate_context_exists"></a> 
## Name

validate_context_exists — Determine if the specified validation context key exists

## Synopsis

`#include "validate.h"`

| `int **validate_context_exists** (` | <var class="pdparam">vctx</var>, |   |
|   | <var class="pdparam">which</var>, |   |
|   | <var class="pdparam">key</var>`)`; |   |

`validate_context * <var class="pdparam">vctx</var>`;
`int <var class="pdparam">which</var>`;
`const char * <var class="pdparam">key</var>`;<a name="idp64345984"></a> 
## Description

Determine if the specified validation context key exists.

**<a name="idp64347216"></a> Parameters**

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

**<a name="idp64355200"></a> Return Value**

Returns `1` if the key exists, `0` if it does not exist.

**<a name="idp64357024"></a> Threading**

It is legal to call this function in any thread.

<a name="idp64358128"></a> 
## See Also

[validate_context_get](/momentum/3/3-api/apis-validate-context-get), [validate_context_exists_and_get](/momentum/3/3-api/apis-validate-context-exists-and-get), [validate_context_set](/momentum/3/3-api/apis-validate-context-set), [validate_context_delete](/momentum/3/3-api/apis-validate-context-delete), [validate_context_init](/momentum/3/3-api/apis-validate-context-init), and [validate_context_destroy](/momentum/3/3-api/apis-validate-context-destroy).