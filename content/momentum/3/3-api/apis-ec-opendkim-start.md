---
lastUpdated: "03/26/2020"
title: "ec_opendkim_start"
description: "ec opendkim start Create a DKIM verify structure DKIM ec opendkim start void This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may change in behavior when it..."
---

<a name="apis.ec_opendkim_start"></a> 
## Name

ec_opendkim_start — Create a DKIM verify structure

## Synopsis

`#include "modules/validate/ec_opendkim.h"`

| `DKIM * **ec_opendkim_start** (` | `)`; |   |

`void`;<a name="idp50429104"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Create a DKIM verify structure.

**<a name="idp50431968"></a> Return Values**

DKIM pointer, NULL on failure