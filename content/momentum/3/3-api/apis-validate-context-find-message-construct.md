---
lastUpdated: "03/26/2020"
title: "validate_context_find_message_construct"
description: "validate context find message construct Find the specified message construct int validate context find message construct vctx mc validate context vctx message construct mc Find the specified message construct vctx The validation context For a description of this data type see Section 68 86 validate context mc A pointer to..."
---

<a name="apis.validate_context_find_message_construct"></a> 
## Name

validate_context_find_message_construct — Find the specified message construct.

## Synopsis

`#include "validate.h"`

| `int **validate_context_find_message_construct** (` | <var class="pdparam">vctx</var>, |   |
|   | <var class="pdparam">mc</var>`)`; |   |

`validate_context * <var class="pdparam">vctx</var>`;
`message_construct ** <var class="pdparam">mc</var>`;<a name="idp64402064"></a> 
## Description

Find the specified message construct.

**<a name="idp64403216"></a> Parameters**

<dl class="variablelist">

<dt>vctx</dt>

<dd>

The validation context. For a description of this data type see [“validate_context”](/momentum/3/3-api/structs-validate-context).

</dd>

<dt>mc</dt>

<dd>

A pointer to a pointer of message_construct. For a description of this data type see [“message_construct”](/momentum/3/3-api/structs-message-construct).

</dd>

</dl>

**<a name="idp64409056"></a> Return Values**

This function returns `1` if the message_construct is found (only available for an ESMTP session) and `0` if not found.

**Configuration Change. ** This feature is available starting from Momentum 3.1.