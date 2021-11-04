---
lastUpdated: "03/26/2020"
title: "accept_construct_get_message_construct"
description: "accept construct get message construct Add a function to return message construct from accept construct struct message construct accept construct get message construct ac struct accept construct ac This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.accept_construct_get_message_construct"></a> 
## Name

accept_construct_get_message_construct — Add a function to return message_construct from accept_construct

## Synopsis

`#include "netlistener.h"`

| `struct _message_construct * **accept_construct_get_message_construct** (` | <var class="pdparam">ac</var>`)`; |   |

`struct _accept_construct * <var class="pdparam">ac</var>`;<a name="idp58094368"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Add a function to return message_construct from accept_construct.

(NOTE: this is to be used by Lua script (LuaGen generated function. if there is another way to do the samething, this API should be removed.)

**<a name="idp58097856"></a> Parameters**

<dl class="variablelist">

<dt>ac</dt>

<dd>

-- accept_contruct

</dd>

</dl>

**<a name="idp58100864"></a> Return Values**

message_construct

**Configuration Change. ** This feature is available starting from Momentum 3.1.