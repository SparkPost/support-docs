---
lastUpdated: "03/26/2020"
title: "ec_generate_rfc3464_delivery_status2"
description: "ec generate rfc 3464 delivery status 2 renders an RFC 3464 report block into the provided string void ec generate rfc 3464 delivery status 2 mess custom fields action attempt tbl output ec message mess EC Dict custom fields dsn actype action struct timeval attempt EC Dict tbl char output..."
---

<a name="apis.ec_generate_rfc3464_delivery_status2"></a> 
## Name

ec_generate_rfc3464_delivery_status2 — renders an RFC3464 report block into the provided string

## Synopsis

`#include "soft_bounce.h"`

| `void **ec_generate_rfc3464_delivery_status2** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">custom_fields</var>, |   |
|   | <var class="pdparam">action</var>, |   |
|   | <var class="pdparam">attempt</var>, |   |
|   | <var class="pdparam">tbl</var>, |   |
|   | <var class="pdparam">output</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`ECDict <var class="pdparam">custom_fields</var>`;
`dsn_actype <var class="pdparam">action</var>`;
`struct timeval * <var class="pdparam">attempt</var>`;
`ECDict <var class="pdparam">tbl</var>`;
`char ** <var class="pdparam">output</var>`;<a name="idp58335472"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

renders an RFC3464 report block into the provided string.

**<a name="idp58338352"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

- Email message from which the headers are generated.

</dd>

<dt>custom_fields</dt>

<dd>

- dictionary containing custom headers.

</dd>

<dt>action</dt>

<dd>

- type of action for the MDN which the headers are generated for.

</dd>

<dt>attempt</dt>

<dd>

- attempt date/time.

</dd>

<dt>tbl</dt>

<dd>

- A ECDict to store the generated headers as key/value pairs. Caller provided.

</dd>

<dt>output</dt>

<dd>

- output string to receive headers.

</dd>

</dl>