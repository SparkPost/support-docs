---
lastUpdated: "03/26/2020"
title: "ec_dkim_get_verify_results"
description: "ec dkim get verify results Return the number of DKIM signature results int ec dkim get verify results vctx results validate context vctx ec dkim verify results results This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.ec_dkim_get_verify_results"></a> 
## Name

ec_dkim_get_verify_results — Return the number of DKIM signature results

## Synopsis

`#include "modules/validate/dkim.h"`

| `int **ec_dkim_get_verify_results** (` | <var class="pdparam">vctx</var>, |   |
|   | <var class="pdparam">results</var>`)`; |   |

`validate_context * <var class="pdparam">vctx</var>`;
`ec_dkim_verify_results ** <var class="pdparam">results</var>`;<a name="idp50248912"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Return the number of DKIM signature results.

**<a name="idp50251792"></a> Parameters**

<dl class="variablelist">

<dt>vctx</dt>

<dd>

-- validation context

</dd>

<dt>results</dt>

<dd>

-- signature results.

</dd>

</dl>

**<a name="idp50256368"></a> Return Values**

1 or 0