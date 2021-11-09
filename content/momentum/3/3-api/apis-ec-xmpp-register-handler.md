---
lastUpdated: "03/26/2020"
title: "ec_xmpp_register_handler"
description: "ec xmpp register handler Registers an XMPP handler int ec xmpp register handler handler ec xmpp handler handler This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may..."
---

<a name="apis.ec_xmpp_register_handler"></a> 
## Name

ec_xmpp_register_handler — Registers an XMPP handler

## Synopsis

`#include "modules/xmpp/ec_xmpp.h"`

| `int **ec_xmpp_register_handler** (` | <var class="pdparam">handler</var>`)`; |   |

`ec_xmpp_handler * <var class="pdparam">handler</var>`;<a name="idp64588656"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Registers an XMPP handler.

The registration is scoped to the current configuration generation and will be automatically revoked when a new configuration is activated.