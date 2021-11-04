---
lastUpdated: "03/26/2020"
title: "ec_retry_state_get"
description: "ec retry state get Retrieves or allocates a retry state associated with the given binding and domain struct ec retry state ec retry state get binding domain ec binding slot binding const char domain This reference page was automatically generated from functions found in the header files in the development..."
---

<a name="apis.ec_retry_state_get"></a> 
## Name

ec_retry_state_get — Retrieves or allocates a retry state associated with the given binding and domain

## Synopsis

`#include "message/ec_retry_state.h"`

| `struct ec_retry_state * **ec_retry_state_get** (` | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`ec_binding_slot <var class="pdparam">binding</var>`;
`const char * <var class="pdparam">domain</var>`;<a name="idp57310368"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Retrieves or allocates a retry state associated with the given binding and domain.

**<a name="idp57313280"></a> Parameters**

<dl class="variablelist">

<dt>binding</dt>

<dd>

associated binding slot

</dd>

<dt>domain</dt>

<dd>

associated domain name

</dd>

</dl>

**<a name="idp57317856"></a> Return Values**

Returns non-NULL on success.