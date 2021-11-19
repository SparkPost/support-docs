---
lastUpdated: "03/26/2020"
title: "lookuptable_add2"
description: "lookuptable add 2 Adds a message to the lookuptable and calls dns get M Xs if the domain wasn't in the lookuptable already void lookuptable add 2 mess routing domain ec message mess const char routing domain This reference page was automatically generated from functions found in the header files..."
---

<a name="apis.lookuptable_add2"></a> 
## Name

lookuptable_add2 — Adds a message to the lookuptable, and calls dns_get_MXs if the domain wasn't in the lookuptable already

## Synopsis

`#include "lookuptable.h"`

| `void **lookuptable_add2** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">routing_domain</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`const char * <var class="pdparam">routing_domain</var>`;<a name="idp64125984"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Adds a message to the lookuptable, and calls dns_get_MXs if the domain wasn't in the lookuptable already.

This version is more efficient than the normal lookuptable_exists plus lookuptable_add use case since it doesn't do another routing domain lookup (which also prevents problems if the two lookups return different answers) and only makes one pass over the lookuptable hash bucket.

**<a name="idp64129680"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

the message to add

</dd>

<dt>routing_domain</dt>

<dd>

the routing domain of the message

</dd>

</dl>