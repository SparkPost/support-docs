---
lastUpdated: "03/26/2020"
title: "validate_context_delete"
description: "validate context delete Remove the specified key from either the message context or connection context void validate context delete vctx which key validate context vctx int which const char key Remove the key value pair specified by key from either the message context or connection context vctx The validation context..."
---

<a name="apis.validate_context_delete"></a> 
## Name

validate_context_delete — Remove the specified key from either the message context or connection context

## Synopsis

`#include "validate.h"`

| `void **validate_context_delete** (` | <var class="pdparam">vctx</var>, |   |
|   | <var class="pdparam">which</var>, |   |
|   | <var class="pdparam">key</var>`)`; |   |

`validate_context * <var class="pdparam">vctx</var>`;
`int <var class="pdparam">which</var>`;
`const char * <var class="pdparam">key</var>`;<a name="idp64299712"></a> 
## Description

Remove the key/value pair specified by `key` from either the message context or connection context.

**<a name="idp64301424"></a> Parameters**

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

The key indicating the key/value pair to remove.

</dd>

</dl>

**<a name="idp64309440"></a> Return Values**

This function returns void.

**<a name="idp64310352"></a> Threading**

It is legal to call this function in any thread.

<a name="idp64311456"></a> 
## See Also

[validate_context_exists_and_get](/momentum/3/3-api/apis-validate-context-exists-and-get), [validate_context_exists](/momentum/3/3-api/apis-validate-context-exists), [validate_context_get](/momentum/3/3-api/apis-validate-context-get), [validate_context_set](/momentum/3/3-api/apis-validate-context-set), [validate_context_init](/momentum/3/3-api/apis-validate-context-init), and [validate_context_destroy](/momentum/3/3-api/apis-validate-context-destroy).