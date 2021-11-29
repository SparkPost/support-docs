---
lastUpdated: "03/26/2020"
title: "validate_context_destroy"
description: "validate context destroy Release resources associated with this validation context dictionary void validate context destroy vctx validate context vctx Release resources associated with this validation context dictionary vctx The validation context For documentation of this data structure see Section 68 86 validate context This function returns void It is only..."
---

<a name="apis.validate_context_destroy"></a> 
## Name

validate_context_destroy — Release resources associated with this validation context dictionary

## Synopsis

`#include "validate.h"`

| `void **validate_context_destroy** (` | <var class="pdparam">vctx</var>`)`; |   |

`validate_context * <var class="pdparam">vctx</var>`;<a name="idp64324448"></a> 
## Description

Release resources associated with this validation context dictionary.

**<a name="idp64325696"></a> Parameters**

<dl class="variablelist">

<dt>vctx</dt>

<dd>

The validation context. For documentation of this data structure see [“validate_context”](/momentum/3/3-api/structs-validate-context).

</dd>

</dl>

**<a name="idp64329056"></a> Return Values**

This function returns void.

**<a name="idp64329968"></a> Threading**

It is only legal to call this function in the `Scheduler` thread.

<a name="idp64331520"></a> 
## See Also

[validate_context_exists_and_get](/momentum/3/3-api/apis-validate-context-exists-and-get), [validate_context_exists](/momentum/3/3-api/apis-validate-context-exists), [validate_context_get](/momentum/3/3-api/apis-validate-context-get), [validate_context_delete](/momentum/3/3-api/apis-validate-context-delete), [validate_context_set](/momentum/3/3-api/apis-validate-context-set), and [validate_context_init](/momentum/3/3-api/apis-validate-context-init).