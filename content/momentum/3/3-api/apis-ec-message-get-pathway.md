---
lastUpdated: "03/26/2020"
title: "ec_message_get_pathway"
description: "ec message get pathway Get the pathway of a message const char ec message get pathway mess ec message mess This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum..."
---

<a name="apis.ec_message_get_pathway"></a> 
## Name

ec_message_get_pathway — Get the pathway of a message

## Synopsis

`#include "ec_message.h"`

| `const char * **ec_message_get_pathway** (` | <var class="pdparam">mess</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;<a name="idp55934128"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Get the pathway of a message.

If you need to get the pathway and you have an ec_message, you should always use this API. If you don't have an ec_message (e.g. at MAIL_FROM time) then use VCTX_KEY_PATHWAY to look in the connection context. Setting the pathway should be done by setting VCTX_KEY_PATHWAY in the message context.

**<a name="idp55937760"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

is the message you wish to get the pathway of

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.