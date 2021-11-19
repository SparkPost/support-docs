---
lastUpdated: "03/26/2020"
title: "validate_context_iterate_rcpt"
description: "validate context iterate rcpt Function to iterate through recipient list int validate context iterate rcpt ctx pos addr validate context ctx int pos char addr This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.validate_context_iterate_rcpt"></a> 
## Name

validate_context_iterate_rcpt — Function to iterate through recipient list

## Synopsis

`#include "validate.h"`

| `int **validate_context_iterate_rcpt** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">pos</var>, |   |
|   | <var class="pdparam">addr</var>`)`; |   |

`validate_context * <var class="pdparam">ctx</var>`;
`int <var class="pdparam">pos</var>`;
`char ** <var class="pdparam">addr</var>`;<a name="idp64468512"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to iterate through recipient list.

**<a name="idp64471376"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

- validation context.

</dd>

<dt>pos</dt>

<dd>

- the position where address is to be returned. The first address corresponds to pos = 0.

</dd>

<dt>addr</dt>

<dd>

- pointer to a pointer of ec_string where address is stored. If invalid pos, NULL is returned.

</dd>

</dl>

**<a name="idp64477920"></a> Return Values**

next position in the list. If no more address is available, -1 is returned.