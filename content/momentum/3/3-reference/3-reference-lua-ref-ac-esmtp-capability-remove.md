---
lastUpdated: "03/26/2020"
title: "ac:esmtp_capability_remove"
description: "ac esmtp capability remove Remove a capability string from the EHLO response ac esmtp capability remove name Removes a capability string from the EHLO response It is most useful in the connect phase and raises an error if the session is not attached to an SMTP listener ac is an..."
---

<a name="lua.ref.ac_esmtp_capability_remove"></a> 
## Name

ac:esmtp_capability_remove — Remove a capability string from the EHLO response

<a name="idp23380000"></a> 
## Synopsis

`require('msys.extended.ac')`

`ac:esmtp_capability_remove(name);`

`name: string`<a name="idp23383392"></a> 
## Description

Removes a capability string from the EHLO response. It is most useful in the connect phase and raises an error if the session is not attached to an SMTP listener.

`ac` is an accept construct userdata data type. For a description of the C struct see [accept_construct](/momentum/3/3-api/structs-accept-construct).

Enable this function with the statement `require('msys.extended.ac');`.

<a name="idp23387744"></a> 
## See Also

[ac:esmtp_capability_add](/momentum/3/3-reference/3-reference-lua-ref-ac-esmtp-capability-add)