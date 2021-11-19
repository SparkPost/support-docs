---
lastUpdated: "03/26/2020"
title: "ec_xmpp_route_stanza"
description: "ec xmpp route stanza Submits the transmission of a Stanza void ec xmpp route stanza stanza xml Node Ptr stanza This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum..."
---

<a name="apis.ec_xmpp_route_stanza"></a> 
## Name

ec_xmpp_route_stanza — Submits the transmission of a Stanza

## Synopsis

`#include "modules/xmpp/ec_xmpp.h"`

| `void **ec_xmpp_route_stanza** (` | <var class="pdparam">stanza</var>`)`; |   |

`xmlNodePtr <var class="pdparam">stanza</var>`;<a name="idp64600528"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Submits the transmission of a Stanza.

This will call xmlFreeNode on the stanza node when it is no longer needed.