---
lastUpdated: "03/26/2020"
title: "ec_message_get_envelope2"
description: "ec message get envelope 2 Return information from the envelope of the message int ec message get envelope 2 mess flags localpart domain isnull ec message mess int flags string localpart string domain int isnull Configuration Change This feature is available starting from Momentum 3 0 9 Returns information from..."
---

<a name="apis.ec_message_get_envelope2"></a> 
## Name

ec_message_get_envelope2 — Return information from the envelope of the message

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_get_envelope2** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">flags</var>, |   |
|   | <var class="pdparam">localpart</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">isnull</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`int <var class="pdparam">flags</var>`;
`string * <var class="pdparam">localpart</var>`;
`string * <var class="pdparam">domain</var>`;
`int * <var class="pdparam">isnull</var>`;<a name="idp55802880"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.9.

Returns information from the envelope of the message.

If flags includes `EC_MSG_ENV_FROM` then the envelope sender will be the source of the information. If flags includes `EC_MSG_ENV_TO`, then the envelope recipient will be the source of the information. The local portion of the address will be copied into the localpart buffer if it is not NULL. Similarly, the domain portion of the address will be copied into the domain buffer if it is not NULL.

If `isnull` is not NULL, then it will be set to `1` if the address is the null sender address, `0` otherwise. If `EC_MSG_ENV_COMPLETE` is contained in flags, then the address will be copied into the localpart buffer only, without any protocol decoration (eg: no MAIL FROM:<>CRLF).

**<a name="apis.ec_message_get_envelope2.complete"></a> The EC_MSG_ENV_COMPLETE Flag**

To retrieve the complete email address, the localpart and the domain name, you must use the `EC_MSG_ENV_COMPLETE` flag. See also [ec_message_get_envelope](/momentum/3/3-api/apis-ec-message-get-envelope).

**<a name="idp55812368"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

The [ec_message](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>flags</dt>

<dd>

Any OR'ed combination of `EC_MSG_ENV_XXX` flags shown below. However, *It is not valid to pass `EC_MSG_ENV_FROM | EC_MSG_ENV_TO` as the flags parameter.* 

</dd>

<dt>localpart</dt>

<dd>

Storage for the local portion of the address.

</dd>

<dt>domain</dt>

<dd>

Storage for the domain portion of the address.

</dd>

<dt>isnull</dt>

<dd>

If not NULL, this parameter will be set to `1` to indicate that the address is the null sender address, `0` otherwise.

</dd>

</dl>

**<a name="idp55825552"></a> Related Constants**

<dl class="variablelist">

<dt>`EC_MSG_ENV_FROM`</dt>

<dd>

Operate on the envelope sender.

</dd>

<dt>`EC_MSG_ENV_TO`</dt>

<dd>

Operate on the envelope recipient.

</dd>

<dt>`EC_MSG_ENV_COMPLETE`</dt>

<dd>

Ignore the domain parameter; the entire address is either in or will be placed in the localpart buffer.

</dd>

</dl>

**<a name="idp55833376"></a> Return Values**

Returns `1` on success, `0` if the address is not understood by the system.

**<a name="idp55835216"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55836320"></a> 
## See Also

[ec_message_get_envelope](/momentum/3/3-api/apis-ec-message-get-envelope)