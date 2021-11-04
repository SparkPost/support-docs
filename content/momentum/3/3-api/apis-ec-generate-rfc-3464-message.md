---
lastUpdated: "03/26/2020"
title: "ec_generate_rfc3464_message"
description: "ec generate rfc 3464 message creates an RFC 3464 MDN as an ec message ec message ec generate rfc 3464 message message action ec message message dsn actype action This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_generate_rfc3464_message"></a> 
## Name

ec_generate_rfc3464_message — creates an RFC 3464 MDN as an ec_message

## Synopsis

`#include "soft_bounce.h"`

| `ec_message * **ec_generate_rfc3464_message** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">action</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`dsn_actype <var class="pdparam">action</var>`;<a name="idp58359728"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

creates an RFC 3464 MDN as an ec_message.

this function is primarilly designed to be called from a hook.