---
lastUpdated: "03/26/2020"
title: "ec_xmpp_session_handler_data_get"
description: "ec xmpp session handler data get Retrieve a per handler per session object previously stored via ec xmpp session handler data set ec blobject ec xmpp session handler data get sess handler ec xmpp session sess ec xmpp handler handler This reference page was automatically generated from functions found in..."
---

<a name="apis.ec_xmpp_session_handler_data_get"></a> 
## Name

ec_xmpp_session_handler_data_get — Retrieve a per-handler-per-session object previously stored via ec_xmpp_session_handler_data_set

## Synopsis

`#include "modules/xmpp/ec_xmpp.h"`

| `ec_blobject * **ec_xmpp_session_handler_data_get** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">handler</var>`)`; |   |

`ec_xmpp_session * <var class="pdparam">sess</var>`;
`ec_xmpp_handler * <var class="pdparam">handler</var>`;<a name="idp64613248"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Retrieve a per-handler-per-session object previously stored via ec_xmpp_session_handler_data_set.

Adds a reference for the blobject; the caller is responsible for releasing that reference at the appropriate time