---
lastUpdated: "03/26/2020"
title: "netlistener_clean_accept_construct"
description: "netlistener clean accept construct Deletes a reference to a netlistener instance void netlistener clean accept construct ac accept construct ac Deletes a reference to a netlistener instance ac The address of an Section 68 2 accept construct associated with the session A reference to the netlistener instance field is deleted..."
---

<a name="apis.netlistener_clean_accept_construct"></a> 
## Name

netlistener_clean_accept_construct — Deletes a reference to a *netlistener* instance

## Synopsis

`#include "netlistener.h"`

| `void **netlistener_clean_accept_construct** (` | <var class="pdparam">ac</var>`)`; |   |

`accept_construct * <var class="pdparam">ac</var>`;<a name="idp58112944"></a> 
## Description

Deletes a reference to a *netlistener* instance.

**<a name="idp58114592"></a> Parameters**

<dl class="variablelist">

<dt>ac</dt>

<dd>

The address of an [“accept_construct”](/momentum/3/3-api/structs-accept-construct) associated with the session. A reference to the `netlistener_instance` field is deleted.

</dd>

</dl>

**<a name="idp58118400"></a> Return Values**

This function returns `void`.

**<a name="idp58119760"></a> Threading**

It is *only* legal to call this function in the `Scheduler` thread.