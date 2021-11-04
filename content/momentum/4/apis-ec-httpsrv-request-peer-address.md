---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_peer_address"
description: "ec httpsrv request peer address Returns the remote peer address from the current session ec sockaddr ec httpsrv request peer address sess ec httpsrv session sess Configuration Change This option is available as of version 4 0 This function returns the remote peer IP address from the current session sess..."
---

<a name="apis.ec_httpsrv_request_peer_address"></a> 
## Name

ec_httpsrv_request_peer_address — Returns the remote peer address from the current session

## Synopsis

`#include "/modules/listeners/httpsrv.h"`

| `ec_sockaddr * **ec_httpsrv_request_peer_address** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp7250064"></a> 
## Description

**Configuration Change. ** This option is available as of version 4.0.

This function returns the remote peer IP address from the current session.

**<a name="idp7252992"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

session to interrogate

</dd>

</dl>

**<a name="idp7255728"></a> Return Values**

address in ec_sockaddr * format

The remote peer IP address will be valid for the lifetime of the session.