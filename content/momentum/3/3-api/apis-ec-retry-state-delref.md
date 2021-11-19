---
lastUpdated: "03/26/2020"
title: "ec_retry_state_delref"
description: "ec retry state delref Removes a reference from a retry state and destroys it if no more exist void ec retry state delref state ec retry state t state This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_retry_state_delref"></a> 
## Name

ec_retry_state_delref — Removes a reference from a retry state, and destroys it if no more exist

## Synopsis

`#include "message/ec_retry_state.h"`

| `void **ec_retry_state_delref** (` | <var class="pdparam">state</var>`)`; |   |

`ec_retry_state_t * <var class="pdparam">state</var>`;<a name="idp57294960"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Removes a reference from a retry state, and destroys it if no more exist.

After a retry state has been retrieved with ec_retry_state_get, ec_retry_state_delref should be called once it is no longer going to be used by the caller.

**<a name="idp57298480"></a> Parameters**

<dl class="variablelist">

<dt>state</dt>

<dd>

retry state to delete a reference to

</dd>

</dl>