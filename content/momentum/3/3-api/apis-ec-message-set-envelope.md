---
lastUpdated: "03/26/2020"
title: "ec_message_set_envelope"
description: "ec message set envelope Sets envelope information for the message int ec message set envelope mess flags localpart llen domain dlen ec message mess int flags const char localpart int llen const char domain int dlen Sets envelope information for the message Example 34 5 ec message set envelope Example..."
---

<a name="apis.ec_message_set_envelope"></a> 
## Name

ec_message_set_envelope — Sets envelope information for the message

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_set_envelope** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">flags</var>, |   |
|   | <var class="pdparam">localpart</var>, |   |
|   | <var class="pdparam">llen</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">dlen</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`int <var class="pdparam">flags</var>`;
`const char * <var class="pdparam">localpart</var>`;
`int <var class="pdparam">llen</var>`;
`const char * <var class="pdparam">domain</var>`;
`int <var class="pdparam">dlen</var>`;<a name="idp57045232"></a> 
## Description

Sets envelope information for the message.

<a name="idp57046448"></a> 


`ec_message_set_envelope(bounce_mess, EC_MSG_ENV_TO|EC_MSG_ENV_COMPLETE, emailaddr, -1, NULL, 0);`
**<a name="idp57048112"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>flags</dt>

<dd>

An int parameter which is passed one or more of:

*   If flags includes EC_MSG_ENV_FROM then the envelope sender will be set.

*   If flags includes EC_MSG_ENV_TO, then the envelope recipient will be set.

*   If EC_MSG_ENV_COMPLETE is contained in flags, then the entire address in the localpart buffer will be copied to the appropriate field in ec_message (envelope to or from), and the domain buffer will be ignored.

### Warning

It is not valid to pass EC_MSG_ENV_FROM | EC_MSG_ENV_TO as a parameter to flags.

</dd>

<dt>localpart</dt>

<dd>

The address of the provided localpart buffer. The localpart of the email address will be set, assuming the localpart buffer is not NULL.

</dd>

<dt>llen</dt>

<dd>

llen bytes will be copied from the localpart buffer, which need not be NUL terminated. If llen is -1, then the corresponding buffer is assumed to be NUL terminated and data up until the NUL terminator will be copied.

</dd>

<dt>domain</dt>

<dd>

The address of the provided domain buffer. The domain of the email address will be set, assuming the domain buffer is not NULL.

</dd>

<dt>dlen</dt>

<dd>

dlen bytes will be copied from the buffer, which need not be NUL terminated. If dlen is -1, then the corresponding buffer is assumed to be NUL terminated and data up until the NUL terminator will be copied.

</dd>

</dl>

### Note

If localpart and domain are both NULL, then the address will be set to the null sender address.

**<a name="idp57067040"></a> Return Values**

Returns 1 on success, 0 in case of error (such as out-of-memory).

**<a name="idp57068000"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57069104"></a> 
## See Also

[ec_message_get_envelope](/momentum/3/3-api/apis-ec-message-get-envelope)