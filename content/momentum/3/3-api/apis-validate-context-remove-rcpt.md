---
lastUpdated: "03/26/2020"
title: "validate_context_remove_rcpt"
description: "validate context remove rcpt Function to remove addr from recipient list int validate context remove rcpt ctx addr validate context ctx const char addr This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.validate_context_remove_rcpt"></a> 
## Name

validate_context_remove_rcpt — Function to remove addr from recipient list

## Synopsis

`#include "validate.h"`

| `int **validate_context_remove_rcpt** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">addr</var>`)`; |   |

`validate_context * <var class="pdparam">ctx</var>`;
`const char * <var class="pdparam">addr</var>`;<a name="idp64504880"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to remove addr from recipient list.

**<a name="idp64507760"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

- validation context.

</dd>

<dt>addr</dt>

<dd>

- an address to be removed from recipient list.

</dd>

</dl>

**<a name="idp64512336"></a> Return Values**

the old position of addr in the recipient list. Return -1 is addr is not found.

**Configuration Change. ** This feature is available starting from Momentum 3.1.