---
lastUpdated: "03/26/2020"
title: "validate_context_set"
description: "validate context set Create or set a validation context keypair determined by key void validate context set vctx which key value validate context vctx int which const char key const char value Create or set a validation context keypair determined by key vctx The validation context For documentation of this..."
---

<a name="apis.validate_context_set"></a> 
## Name

validate_context_set — Create or set a validation context keypair determined by `key`

## Synopsis

`#include "validate.h"`

| `void **validate_context_set** (` | <var class="pdparam">vctx</var>, |   |
|   | <var class="pdparam">which</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`validate_context * <var class="pdparam">vctx</var>`;
`int <var class="pdparam">which</var>`;
`const char * <var class="pdparam">key</var>`;
`const char * <var class="pdparam">value</var>`;<a name="idp64525824"></a> 
## Description

Create or set a validation context keypair determined by `key`.

**<a name="idp64527504"></a> Parameters**

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

The key to create or set.

</dd>

<dt>value</dt>

<dd>

The associated value.

</dd>

</dl>

**<a name="idp64537328"></a> Return Values**

This function returns void.

### Note

If either `key` or `value` is `NULL`, this function will log something like this:

`"Attempt to set null key or value in validate context connection dictionary."`**<a name="idp64541056"></a> Threading**

It is legal to call this function in any thread.

<a name="idp64542160"></a> 
## See Also

[validate_context_exists](/momentum/3/3-api/apis-validate-context-exists), [validate_context_exists_and_get](/momentum/3/3-api/apis-validate-context-exists-and-get), [validate_context_get](/momentum/3/3-api/apis-validate-context-get), [validate_context_delete](/momentum/3/3-api/apis-validate-context-delete), [validate_context_init](/momentum/3/3-api/apis-validate-context-init), and [validate_context_destroy](/momentum/3/3-api/apis-validate-context-destroy).