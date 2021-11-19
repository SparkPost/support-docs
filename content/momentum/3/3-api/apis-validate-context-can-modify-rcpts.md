---
lastUpdated: "03/26/2020"
title: "validate_context_can_modify_rcpts"
description: "validate context can modify rcpts Function to check if it is still ok to change rcpts list int validate context can modify rcpts ctx validate context ctx This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.validate_context_can_modify_rcpts"></a> 
## Name

validate_context_can_modify_rcpts — Function to check if it is still ok to change rcpts list

## Synopsis

`#include "validate.h"`

| `int **validate_context_can_modify_rcpts** (` | <var class="pdparam">ctx</var>`)`; |   |

`validate_context * <var class="pdparam">ctx</var>`;<a name="idp64280272"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to check if it is still ok to change rcpts list.

Basically, rcpts list should be be modified after listener passes MC_STATE_RCPTTO_LIST_FINAL_RESPONSE.

**<a name="idp64283712"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

- validation context.

</dd>

</dl>

**<a name="idp64286720"></a> Return Values**

1 if ok 0 if not.

**Configuration Change. ** This feature is available starting from Momentum 3.1.