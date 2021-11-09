---
lastUpdated: "03/26/2020"
title: "h_to_c"
description: "h to c Returns the connection data associated with a connection handle connection h to c a connection handle a Returns the connection data associated with a connection handle a A pointer to a connection handle struct For documentation of this data structure see Section 68 10 connection handle This..."
---

<a name="apis.h_to_c"></a> 
## Name

h_to_c — Returns the `connection` data associated with a `connection_handle`

## Synopsis

`#include "connection.h"`

| `connection * **h_to_c** (` | <var class="pdparam">a</var>`)`; |   |

`connection_handle * <var class="pdparam">a</var>`;<a name="idp49098560"></a> 
## Description

Returns the `connection` data associated with a `connection_handle`.

**<a name="idp49100656"></a> Parameters**

<dl class="variablelist">

<dt>a</dt>

<dd>

A pointer to a `connection_handle` struct. For documentation of this data structure see [“connection_handle”](/momentum/3/3-api/structs-connection-handle).

</dd>

</dl>

**<a name="idp49104448"></a> Return Values**

This function returns the address of the [connection](/momentum/3/3-api/structs-connection) data associated with the `connection_handle`.

**<a name="idp49106560"></a> Threading**

It is only legal to call this function in the `Scheduler` thread.