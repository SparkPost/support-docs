---
lastUpdated: "03/26/2020"
title: "ec_xmpp_session_handler_data_set"
description: "ec xmpp session handler data set Stash a per handler per session object void ec xmpp session handler data set sess handler blob ec xmpp session sess ec xmpp handler handler ec blobject blob This reference page was automatically generated from functions found in the header files in the development..."
---

<a name="apis.ec_xmpp_session_handler_data_set"></a> 
## Name

ec_xmpp_session_handler_data_set — Stash a per-handler-per-session object

## Synopsis

`#include "modules/xmpp/ec_xmpp.h"`

| `void **ec_xmpp_session_handler_data_set** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">handler</var>, |   |
|   | <var class="pdparam">blob</var>`)`; |   |

`ec_xmpp_session * <var class="pdparam">sess</var>`;
`ec_xmpp_handler * <var class="pdparam">handler</var>`;
`ec_blobject * <var class="pdparam">blob</var>`;<a name="idp64626720"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Stash a per-handler-per-session object.

This will addref the blobject. If a different object was stored, that object will be delref'd prior to being replaced. Storing a NULL value will delete the reference held by the session.