---
lastUpdated: "03/26/2020"
title: "ec_fc_init"
description: "ec fc init Initializes the faster cache subsystem void ec fc init void This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may change in behavior when it..."
---

<a name="apis.ec_fc_init"></a> 
## Name

ec_fc_init — Initializes the faster-cache subsystem

## Synopsis

`#include "ec_fc.h"`

| `void **ec_fc_init** (` | `)`; |   |

`void`;<a name="idp52169552"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Initializes the faster-cache subsystem.

This function must be called for any use of FC functions. It is called in libecelerity_init.

**<a name="idp52172960"></a> See Also**

libecelerity_init