---
lastUpdated: "03/26/2020"
title: "register_smtp_client_state"
description: "register smtp client state Register a custom state in the SMTP client state machine int register smtp client state state insert after smtp state state int insert after Register a custom state in the SMTP client state machine The SMTP client state machine is modular external modules may register their..."
---

<a name="apis.register_smtp_client_state"></a> 
## Name

register_smtp_client_state — Register a custom state in the SMTP client state machine

## Synopsis

`#include "dns_ds.h"`

| `int **register_smtp_client_state** (` | <var class="pdparam">state</var>, |   |
|   | <var class="pdparam">insert_after</var>`)`; |   |

`smtp_state * <var class="pdparam">state</var>`;
`int <var class="pdparam">insert_after</var>`;<a name="idp61811360"></a> 
## Description

Register a custom state in the SMTP client state machine.

The SMTP client state machine is modular: external modules may register their own states to be called after a particular built-in or custom state.

**<a name="idp61813200"></a> Parameters**

<dl class="variablelist">

<dt>state</dt>

<dd>

The SMTP client state to register. All values of this structure (except for `smtp_state.closure`) are copied to a static variable so memory for `state` may be released after registering it. For more information on this data structure see [“smtp_state”](/momentum/3/3-api/structs-smtp-state).

</dd>

<dt>insert_after</dt>

<dd>

The state ID to insert the client state after. Passing a value of `-1` places the SMTP state at the beginning, prior to the *banner* state.

</dd>

</dl>

**<a name="idp61820448"></a> Return Values**

Returns an SMTP state ID computed by this function or -1 in the case of a failure.

**<a name="idp61821424"></a> Threading**

It is *only* legal to call this function in the `Scheduler` thread.

<a name="idp61823408"></a> 
## See Also

[ec_smtp_closeconn](/momentum/3/3-api/apis-ec-smtp-closeconn), and [smtp_next_state](/momentum/3/3-api/apis-smtp-next-state).