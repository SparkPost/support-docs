---
lastUpdated: "03/26/2020"
title: "initiate_connection"
description: "initiate connection Intiate an outbound connection connection handle initiate connection dr binding now finish connect func timeout func user data error domain record dr int binding struct timeval now Event Func finish connect func Event Func timeout func void user data int error This reference page was automatically generated from..."
---

<a name="apis.initiate_connection"></a> 
## Name

initiate_connection — Intiate an outbound connection

## Synopsis

`#include "connection.h"`

| `connection_handle * **initiate_connection** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">finish_connect_func</var>, |   |
|   | <var class="pdparam">timeout_func</var>, |   |
|   | <var class="pdparam">user_data</var>, |   |
|   | <var class="pdparam">error</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`EventFunc <var class="pdparam">finish_connect_func</var>`;
`EventFunc <var class="pdparam">timeout_func</var>`;
`void * <var class="pdparam">user_data</var>`;
`int * <var class="pdparam">error</var>`;<a name="idp49120800"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Intiate an outbound connection

This function initiates an outbound connection. It either returns a connection handle or sets error; if error contains one of the CONN_ACTION_* flags, the called needs to take the specified action on the binding,domain it was called on: CONN_ACTION_REQUEUE1: take a message from the active queue and requeue it CONN_ACTION_PURGE_DOMAIN: purge the entire domain (not just one binding) In case of error, the caller is also responsible for checking of MX_Failures_To_Delay has been exceeded and taking the appropriate action.

**<a name="idp49124672"></a> Parameters**

<dl class="variablelist">

<dt>dr</dt>

<dd>

The domain record on which a connection is to be opened.

</dd>

<dt>binding</dt>

<dd>

The binding slot on which a connection is to be opened.

</dd>

<dt>now</dt>

<dd>

The current time.

</dd>

<dt>finish_connect_func</dt>

<dd>

This function is called if the connection attempt succeeeds, or if it fails after connect() returns EINPROGRESS and we receive an error (as opposed to timing out).

</dd>

<dt>timeout_func</dt>

<dd>

This function is called if the connection attempt times out.

</dd>

<dt>user_data</dt>

<dd>

This is set as the user_data in the resulting connection.

</dd>

<dt>error</dt>

<dd>

If NULL is returned, this is set to a CONN_ERR_* possibly ORed with a CONN_ACTION_*

</dd>

</dl>

**<a name="idp49138768"></a> Return Values**

On success the connection handle is returned; on error, `NULL`.