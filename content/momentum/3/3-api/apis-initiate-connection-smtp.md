---
lastUpdated: "03/26/2020"
title: "initiate_connection_smtp"
description: "initiate connection smtp initiates an SMTP connection int initiate connection smtp dr binding now domain record dr int binding struct timeval now This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.initiate_connection_smtp"></a> 
## Name

initiate_connection_smtp — initiates an SMTP connection

## Synopsis

`#include "connection.h"`

| `int **initiate_connection_smtp** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp49150096"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

initiates an SMTP connection

This function is called by the mail queue maintainer to initiate SMTP connections. It calls initiate_connection with the proper callbacks and takes the needed CONN_ACTION_* actions.

**<a name="idp49153600"></a> Parameters**

<dl class="variablelist">

<dt>dr</dt>

<dd>

the domain record on which a connection is to be opened

</dd>

<dt>binding</dt>

<dd>

the binding slot on which a connection is to be opened

</dd>

<dt>now</dt>

<dd>

the current time

</dd>

</dl>

**<a name="idp49160048"></a> Return Values**

0 on success, CONN_ERROR(initiate_connection return value) on error