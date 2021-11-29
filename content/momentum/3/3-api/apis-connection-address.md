---
lastUpdated: "03/26/2020"
title: "connection_address"
description: "connection address Returns the address data associated with a connection address connection address c connection c Returns the address data associated with a connection c A pointer to a connection struct For documentation of this data structure see Section 68 9 connection This function either returns valid address data associated..."
---

<a name="apis.connection_address"></a> 
## Name

connection_address — Returns the `address` data associated with a `connection`

## Synopsis

`#include "connection.h"`

| `address * **connection_address** (` | <var class="pdparam">c</var>`)`; |   |

`connection * <var class="pdparam">c</var>`;<a name="idp48956512"></a> 
## Description

Returns the `address` data associated with a `connection`.

**<a name="idp48958608"></a> Parameters**

<dl class="variablelist">

<dt>c</dt>

<dd>

A pointer to a `connection` struct. For documentation of this data structure see [“connection”](/momentum/3/3-api/structs-connection).

</dd>

</dl>

**<a name="idp48962384"></a> Return Values**

This function either returns valid [address](/momentum/3/3-api/structs-address) data associated with `connection` data, or it returns `NULL` if there is no `address` associated with the `connection`.

**<a name="idp48965872"></a> Threading**

It is only legal to call this function in the `Scheduler` thread.