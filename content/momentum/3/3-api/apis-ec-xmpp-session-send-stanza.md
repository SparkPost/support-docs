---
lastUpdated: "03/26/2020"
title: "ec_xmpp_session_send_stanza"
description: "ec xmpp session send stanza Submits the transmission of a Stanza int ec xmpp session send stanza sess stanza ec xmpp session sess xml Node Ptr stanza This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_xmpp_session_send_stanza"></a> 
## Name

ec_xmpp_session_send_stanza — Submits the transmission of a Stanza

## Synopsis

`#include "modules/xmpp/ec_xmpp.h"`

| `int **ec_xmpp_session_send_stanza** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">stanza</var>`)`; |   |

`ec_xmpp_session * <var class="pdparam">sess</var>`;
`xmlNodePtr <var class="pdparam">stanza</var>`;<a name="idp64639472"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Submits the transmission of a Stanza.

This will call xmlFreeNode on the stanza node when it is no longer needed. This will trigger before_stanza_send callouts. The send process is asynchronous and will complete at some point after this function call returns.