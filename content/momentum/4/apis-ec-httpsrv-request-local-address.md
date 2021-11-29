---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_local_address"
description: "ec httpsrv request local address Returns the local IP address from the current session ec sockaddr ec httpsrv request local address sess ec httpsrv session sess Configuration Change This option is available as of version 4 0 This function returns the local IP address from the current session sess session..."
---

<a name="apis.ec_httpsrv_request_local_address"></a> 
## Name

ec_httpsrv_request_local_address — Returns the local IP address from the current session

## Synopsis

`#include "/modules/listeners/httpsrv.h"`

| `ec_sockaddr * **ec_httpsrv_request_local_address** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp7234656"></a> 
## Description

**Configuration Change. ** This option is available as of version 4.0.

This function returns the local IP address from the current session.

**<a name="idp7237568"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

session to interrogate

</dd>

</dl>

**<a name="idp7240304"></a> Return Values**

address in ec_sockaddr * format

The local IP address will be valid for the lifetime of the session.