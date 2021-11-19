---
lastUpdated: "03/26/2020"
title: "smtp_get_state"
description: "smtp get state Fetch a particular SMTP client state smtp state smtp get state state int state Fetchs a particular SMTP client state passing the state ID state The SMTP connection state ID An smtp state pointer to the requested SMTP state NULL if the state was not found For..."
---

<a name="apis.smtp_get_state"></a> 
## Name

smtp_get_state — Fetch a particular SMTP client state

## Synopsis

`#include "smtp.h"`

| `smtp_state * **smtp_get_state** (` | <var class="pdparam">state</var>`)`; |   |

`int <var class="pdparam">state</var>`;<a name="idp62023456"></a> 
## Description

Fetchs a particular SMTP client state passing the state ID.

**<a name="idp62024688"></a> Parameters**

<dl class="variablelist">

<dt>state</dt>

<dd>

The SMTP connection state ID.

</dd>

</dl>

**<a name="idp62027424"></a> Return Values**

An smtp_state pointer to the requested SMTP state, NULL if the state was not found. For a description of this structure see [“smtp_state”](/momentum/3/3-api/structs-smtp-state).

**<a name="idp62029008"></a> Threading**

It is only legal to call this function in the Scheduler thread.

<a name="idp62030576"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp)