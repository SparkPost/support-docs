---
lastUpdated: "03/26/2020"
title: "connection_used_for_message"
description: "connection used for message Associate a message and a connection void connection used for message h m connection handle h email message m Associate a message and a connection h The connection handle For a description of this data type see Section 68 10 connection handle m The message For..."
---

<a name="apis.connection_used_for_message"></a> 
## Name

connection_used_for_message — Associate a message and a connection

## Synopsis

`#include "connection.h"`

| `void **connection_used_for_message** (` | <var class="pdparam">h</var>, |   |
|   | <var class="pdparam">m</var>`)`; |   |

`connection_handle * <var class="pdparam">h</var>`;
`email_message * <var class="pdparam">m</var>`;<a name="idp48988480"></a> 
## Description

Associate a message and a connection.

**<a name="idp48989696"></a> Parameters**

<dl class="variablelist">

<dt>h</dt>

<dd>

The connection handle. For a description of this data type see [“connection_handle”](/momentum/3/3-api/structs-connection-handle).

</dd>

<dt>m</dt>

<dd>

The message. For a description of this data type see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

</dl>

**<a name="idp48995456"></a> Return Values**

This function returns void.

**<a name="idp48996368"></a> Threading**

It is only legal to call this function in the scheduler thread.