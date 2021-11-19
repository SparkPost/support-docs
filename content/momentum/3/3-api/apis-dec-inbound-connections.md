---
lastUpdated: "03/26/2020"
title: "dec_inbound_connections"
description: "dec inbound connections Decrement the number of global inbound connections by 1 void dec inbound connections typename fd ac char typename int fd accept construct ac Decrement the number of global inbound connections by 1 char The connection type such as SMTP fd The file descriptor of the connection ac..."
---

<a name="apis.dec_inbound_connections"></a> 
## Name

dec_inbound_connections — Decrement the number of global inbound connections by 1

## Synopsis

`#include connection.h"`

| `void **dec_inbound_connections** (` | <var class="pdparam">typename</var>, |   |
|   | <var class="pdparam">fd</var>, |   |
|   | <var class="pdparam">ac</var>`)`; |   |

`char * <var class="pdparam">typename</var>`;
`int <var class="pdparam">fd</var>`;
`accept_construct * <var class="pdparam">ac</var>`;<a name="idp49007136"></a> 
## Description

Decrement the number of global inbound connections by `1`.

**<a name="idp49008816"></a> Parameters**

<dl class="variablelist">

<dt>char *</dt>

<dd>

The connection type, such as `SMTP`.

</dd>

<dt>fd</dt>

<dd>

The file descriptor of the connection.

</dd>

<dt>ac</dt>

<dd>

The address of an [“accept_construct”](/momentum/3/3-api/structs-accept-construct) associated with the session.

</dd>

</dl>

**<a name="idp49016256"></a> Return Values**

This function returns `void`.

**<a name="idp49017616"></a> Threading**

It is *only* legal to call this function in the `Scheduler` thread.

<a name="idp49019600"></a> 
## See Also

[“accept_construct”](/momentum/3/3-api/structs-accept-construct)