---
lastUpdated: "03/26/2020"
title: "ec_opendkim_verify"
description: "ec opendkim verify Function to validate a message's DKIM signature int ec opendkim verify m dkim status resume func resume closure ec message m DKIM dkim int status Open DKIM Resume Func resume func void resume closure This reference page was automatically generated from functions found in the header files..."
---

<a name="apis.ec_opendkim_verify"></a> 
## Name

ec_opendkim_verify — Function to validate a message's DKIM signature

## Synopsis

`#include "modules/validate/ec_opendkim.h"`

| `int **ec_opendkim_verify** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">dkim</var>, |   |
|   | <var class="pdparam">status</var>, |   |
|   | <var class="pdparam">resume_func</var>, |   |
|   | <var class="pdparam">resume_closure</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`DKIM * <var class="pdparam">dkim</var>`;
`int * <var class="pdparam">status</var>`;
`OpenDKIMResumeFunc <var class="pdparam">resume_func</var>`;
`void * <var class="pdparam">resume_closure</var>`;<a name="idp50444272"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to validate a message's DKIM signature.

This is designed to be an overlay on top of the OpenDKIM APIs.

**<a name="idp50447664"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

-- pointer to an ec_message to be validated

</dd>

<dt>dkim</dt>

<dd>

-- DKIM pointer

</dd>

<dt>status</dt>

<dd>

-- OpenDKIM status, only valid when returning VALIDATE_CONT

</dd>

<dt>resume_func</dt>

<dd>

-- Function to resume when we return VALIDATE_AGAIN

</dd>

<dt>resume_closure</dt>

<dd>

-- Closure for resume func

</dd>

</dl>

**<a name="idp50457808"></a> Return Values**

VALIDATE_CONT on success, VALIDATE_AGAIN on need for re-entry