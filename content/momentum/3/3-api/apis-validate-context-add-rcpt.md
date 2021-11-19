---
lastUpdated: "03/26/2020"
title: "validate_context_add_rcpt"
description: "validate context add rcpt Function to append an addr to the list int validate context add rcpt ctx addr uniq validate context ctx const char addr int uniq This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.validate_context_add_rcpt"></a> 
## Name

validate_context_add_rcpt — Function to append an addr to the list

## Synopsis

`#include "validate.h"`

| `int **validate_context_add_rcpt** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">addr</var>, |   |
|   | <var class="pdparam">uniq</var>`)`; |   |

`validate_context * <var class="pdparam">ctx</var>`;
`const char * <var class="pdparam">addr</var>`;
`int <var class="pdparam">uniq</var>`;<a name="idp64259808"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to append an addr to the list.

**<a name="idp64262672"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

- validation context.

</dd>

<dt>addr</dt>

<dd>

- address to be added.

</dd>

<dt>uniq</dt>

<dd>

- if true, check for duplicate before adding the address.

</dd>

</dl>

**<a name="idp64269104"></a> Return Values**

position where addr is added. -1 if not added (duplicate).

**Configuration Change. ** This feature is available starting from Momentum 3.1.