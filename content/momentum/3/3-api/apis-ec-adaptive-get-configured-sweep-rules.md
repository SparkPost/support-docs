---
lastUpdated: "03/26/2020"
title: "ec_adaptive_get_configured_sweep_rules"
description: "ec adaptive get configured sweep rules Return a list of configured sweep rules ec adaptive sweep rule ec adaptive get configured sweep rules void This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.ec_adaptive_get_configured_sweep_rules"></a> 
## Name

ec_adaptive_get_configured_sweep_rules — Return a list of configured sweep rules

## Synopsis

`#include "modules/generic/adaptive.h"`

| `ec_adaptive_sweep_rule * **ec_adaptive_get_configured_sweep_rules** (` | `)`; |   |

`void`;<a name="idp46641520"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Return a list of configured sweep rules.

That is those rules defined in configuration file.

**<a name="idp46644624"></a> Return Values**

- linked list of ec_adaptive_sweep_rule. Must call ec_adaptive_delref_sweep_rule to release it.

**Configuration Change. ** This feature is available starting from Momentum 3.2.