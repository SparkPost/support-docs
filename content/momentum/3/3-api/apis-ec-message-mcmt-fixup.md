---
lastUpdated: "03/26/2020"
title: "ec_message_mcmt_fixup"
description: "ec message mcmt fixup This function is to be called by a listener when an injected message is a MCMT container i e int ec message mcmt fixup msg ec message msg This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.ec_message_mcmt_fixup"></a> 
## Name

ec_message_mcmt_fixup — This function is to be called by a listener when an injected message is a MCMT container (i.e

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_mcmt_fixup** (` | <var class="pdparam">msg</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;<a name="idp56061488"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

This function is to be called by a listener when an injected message is a MCMT container (i.e.

ec_message_is_mcmt(msg) returns 1). This function implements the following: * call core_ec_message_mcmt_fixup_hook (hooks/core/ec_message_mcmt_fixup.h) * if a hook implementation returns EC_MSG_MCMT-INVALID or EC_MSG_MCMT_ERROR the implementation should have set the appropriate rejection error using ec_message_set_code() ec_message_mcmt_fixup return with the same return cdoe. * now, either there is no implementation of core_ec_message_mcmt_fixup_hook or all of them returns EC_MSG_MCMT_OK. This function will replace the MIME tree with that represented by the message/rfc822 payload. If such payload is not found, it will set the error code and returns EC_MSG_MCMT_INVALID. The message will be permenantly rejected.