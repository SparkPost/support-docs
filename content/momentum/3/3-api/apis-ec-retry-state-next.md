---
lastUpdated: "03/26/2020"
title: "ec_retry_state_next"
description: "ec retry state next Return next offset associated with a retry state distribution bounded to ceiling unsigned int ec retry state next state ceiling ec retry state t state unsigned int ceiling This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.ec_retry_state_next"></a> 
## Name

ec_retry_state_next — Return next offset associated with a retry state distribution, bounded to ceiling

## Synopsis

`#include "message/ec_retry_state.h"`

| `unsigned int **ec_retry_state_next** (` | <var class="pdparam">state</var>, |   |
|   | <var class="pdparam">ceiling</var>`)`; |   |

`ec_retry_state_t * <var class="pdparam">state</var>`;
`unsigned int <var class="pdparam">ceiling</var>`;<a name="idp57328016"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Return next offset associated with a retry state distribution, bounded to ceiling.

**<a name="idp57330928"></a> Parameters**

<dl class="variablelist">

<dt>state</dt>

<dd>

the retry state to retrieve the offset from

</dd>

<dt>ceiling</dt>

<dd>

the value which the offset is less than

</dd>

</dl>

**<a name="idp57335536"></a> Return Values**

Returns an unsigned integer between 0 and up to ceiling - 1.