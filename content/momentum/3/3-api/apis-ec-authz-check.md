---
lastUpdated: "03/26/2020"
title: "ec_authz_check"
description: "ec authz check Check if commands are authorized int ec authz check cc e unpriv commands command construct cc Event e const char unpriv commands This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.ec_authz_check"></a> 
## Name

ec_authz_check — Check if commands are authorized

## Synopsis

`#include "security/auth_lookup.h"`

| `int **ec_authz_check** (` | <var class="pdparam">cc</var>, |   |
|   | <var class="pdparam">e</var>, |   |
|   | <var class="pdparam">unpriv_commands</var>`)`; |   |

`command_construct * <var class="pdparam">cc</var>`;
`Event * <var class="pdparam">e</var>`;
`const char ** <var class="pdparam">unpriv_commands</var>`;<a name="idp59591328"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Check whether commands are authorized.

**<a name="idp59594192"></a> Parameters**

<dl class="variablelist">

<dt>cc</dt>

<dd>

A command construct. See [“command_construct”](/momentum/3/3-api/structs-command-construct).

</dd>

<dt>e</dt>

<dd>

An event. See [“Event”](/momentum/3/3-api/structs-event).

</dd>

<dt>unpriv_commands</dt>

<dd>

The commands.

</dd>

</dl>

**<a name="idp59601680"></a> Return Values**

This function returns `EC_AUTH_OK`, `EC_AUTH_FAIL` or `EC_AUTH_ERROR`.

**<a name="idp59603936"></a> Threading**

It is legal to call this function in any thread.