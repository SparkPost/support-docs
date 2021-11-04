---
lastUpdated: "03/26/2020"
title: "validate_context_remove_all_rcpts"
description: "validate context remove all rcpts Function to remove all addr from recipient list int validate context remove all rcpts ctx validate context ctx This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available..."
---

<a name="apis.validate_context_remove_all_rcpts"></a> 
## Name

validate_context_remove_all_rcpts — Function to remove all addr from recipient list

## Synopsis

`#include "validate.h"`

| `int **validate_context_remove_all_rcpts** (` | <var class="pdparam">ctx</var>`)`; |   |

`validate_context * <var class="pdparam">ctx</var>`;<a name="idp64487440"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to remove all addr from recipient list.

**<a name="idp64490320"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

- validation context.

</dd>

</dl>

**<a name="idp64493040"></a> Return Values**

1 if successful; 0 if failed.

**Configuration Change. ** This feature is available starting from Momentum 3.1.