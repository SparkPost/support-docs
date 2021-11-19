---
lastUpdated: "03/26/2020"
title: "smpp_read_msg_text_blob"
description: "smpp read msg text blob Retrieve text blob context variable from an ec message string smpp read msg text blob m key ec message m const char key Configuration Change This feature is available starting from Momentum 3 2 Retrieve text blob context variable from an ec message Valid keys..."
---

<a name="apis.smpp_read_msg_text_blob"></a> 
## Name

smpp_read_msg_text_blob — Retrieve text blob context variable from an ec_message

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `string * **smpp_read_msg_text_blob** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">key</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`const char * <var class="pdparam">key</var>`;<a name="idp61484288"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Retrieve text blob context variable from an ec_message. Valid keys are: `BLOB_KEY_SMS_TEXT`, `BLOB_KEY_MO_EMAIL_TEXT`.

**<a name="idp61488096"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

The ec_message. For a description of this data type see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>key</dt>

<dd>

The text blob context key.

</dd>

</dl>

**<a name="idp61493232"></a> Return Values**

The string value of the text blob key.

**<a name="idp61494160"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61495264"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)