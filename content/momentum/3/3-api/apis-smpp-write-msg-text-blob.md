---
lastUpdated: "03/26/2020"
title: "smpp_write_msg_text_blob"
description: "smpp write msg text blob Write a text blob to an SMPP message void smpp write msg text blob m msg text msg text len key ec message m char msg text int msg text len const char key Configuration Change This feature is available starting from Momentum 3 2..."
---

<a name="apis.smpp_write_msg_text_blob"></a> 
## Name

smpp_write_msg_text_blob — Write a text blob to an SMPP message

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `void **smpp_write_msg_text_blob** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">msg_text</var>, |   |
|   | <var class="pdparam">msg_text_len</var>, |   |
|   | <var class="pdparam">key</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`char * <var class="pdparam">msg_text</var>`;
`int <var class="pdparam">msg_text_len</var>`;
`const char * <var class="pdparam">key</var>`;<a name="idp61609120"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Write a text blob to an SMPP message. Valid keys are: `BLOB_KEY_SMS_TEXT` and `BLOB_KEY_MO_EMAIL_TEXT`.

**<a name="idp61612912"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

The ec_message. For a description of this data type see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>msg_txt</dt>

<dd>

The input message string.

</dd>

<dt>msg_text_len</dt>

<dd>

The length of the input string.

</dd>

<dt>key</dt>

<dd>

The text blob context key of the text blob to set.

</dd>

</dl>

**<a name="idp61621760"></a> Return Values**

This function returns void.

**<a name="idp61622672"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61623776"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)