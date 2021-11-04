---
lastUpdated: "03/26/2020"
title: "ec_message_rsrc_copy"
description: "ec message rsrc copy Duplicate resource identifiers from source into destination int ec message rsrc copy src dest ec message src ec message dest This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.ec_message_rsrc_copy"></a> 
## Name

ec_message_rsrc_copy — Duplicate resource identifiers from source into destination

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_rsrc_copy** (` | <var class="pdparam">src</var>, |   |
|   | <var class="pdparam">dest</var>`)`; |   |

`ec_message * <var class="pdparam">src</var>`;
`ec_message * <var class="pdparam">dest</var>`;<a name="idp56768816"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Duplicate resource identifiers from source into destination.

**<a name="idp56771712"></a> Parameters**

<dl class="variablelist">

<dt>src</dt>

<dd>

the message to copy resources from

</dd>

<dt>dest</dt>

<dd>

the message to copy resources to

</dd>

</dl>

**<a name="idp56776304"></a> Return Values**

Returns 0 on success. On failure returns -1 and sets errno.

**Configuration Change. ** This feature is available starting from Momentum 3.1.