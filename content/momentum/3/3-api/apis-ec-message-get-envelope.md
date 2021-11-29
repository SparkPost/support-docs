---
lastUpdated: "03/26/2020"
title: "ec_message_get_envelope"
description: "ec message get envelope Returns information from the envelope of the message int ec message get envelope mess flags localpart llen domain dlen isnull ec message mess int flags char localpart int llen char domain int dlen int isnull Fetches information from the envelope of the message Example 34 1..."
---

<a name="apis.ec_message_get_envelope"></a> 
## Name

ec_message_get_envelope — Returns information from the envelope of the message

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_get_envelope** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">flags</var>, |   |
|   | <var class="pdparam">localpart</var>, |   |
|   | <var class="pdparam">llen</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">dlen</var>, |   |
|   | <var class="pdparam">isnull</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`int <var class="pdparam">flags</var>`;
`char * <var class="pdparam">localpart</var>`;
`int <var class="pdparam">llen</var>`;
`char * <var class="pdparam">domain</var>`;
`int <var class="pdparam">dlen</var>`;
`int * <var class="pdparam">isnull</var>`;<a name="idp55757584"></a> 
## Description

Fetches information from the envelope of the message.

<a name="idp55758816"></a> 


`ec_message_get_envelope(message, EC_MSG_ENV_FROM|EC_MSG_ENV_COMPLETE, emailaddr, sizeof(emailaddr), NULL, 0, &is_null)`
**<a name="idp55760496"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>flags</dt>

<dd>

An int parameter as follows:

*   If flags includes `EC_MSG_ENV_FROM` then the envelope sender will be the source of the information.

*   If flags includes `EC_MSG_ENV_TO`, then the envelope recipient will be the source of the information.

*   If `EC_MSG_ENV_COMPLETE` is contained in flags, then the address will be copied into the localpart buffer only, without any protocol decoration (eg: no MAIL FROM:<>CRLF).

### Warning

It is not valid to pass `EC_MSG_ENV_FROM | EC_MSG_ENV_TO` as a parameter to flags. See also [the section called “The `EC_MSG_ENV_COMPLETE` Flag”](/momentum/3/3-api/apis-ec-message-get-envelope#apis.ec_message_get_envelope.complete).

</dd>

<dt>localpart</dt>

<dd>

The address of localpart buffer which is llen bytes long. The localpart of the email address will be copied into the provided localpart buffer if it is not NULL.

</dd>

<dt>llen</dt>

<dd>

The size of the localpart buffer. No more than llen bytes will be copied into the buffer, and the buffer is guaranteed to be NUL terminated.

</dd>

<dt>domain</dt>

<dd>

The address of domain buffer which is dlen bytes long. The domain of the email address will be copied into the provided domain buffer if it is not NULL.

</dd>

<dt>dlen</dt>

<dd>

The size of the domain buffer. No more than dlen bytes will be copied into the buffer and the buffer is guaranteed to be NUL terminated.

</dd>

<dt>isnull</dt>

<dd>

A pointer to int. If isnull is not NULL, then it will be set to 1 to indicate that the address is the null email address. It will be set to 0 otherwise.

</dd>

</dl>

**<a name="apis.ec_message_get_envelope.complete"></a> The `EC_MSG_ENV_COMPLETE` Flag**

If you want the complete email address you must use the `EC_MSG_ENV_COMPLETE` flag. Consider the following code invoked during the log_delivery hook:

```
ec_message_get_envelope(msg, EC_MSG_ENV_TO|EC_MSG_ENV_COMPLETE, to, sizeof(to), NULL, 0, NULL);
fprintf(stderr, "with complete: %s\n", to);
ec_message_get_envelope(msg, EC_MSG_ENV_TO, to1, sizeof(to1), NULL, 0, NULL);
fprintf(stderr, "withOUT complete: %s\n", to1);
```

The first print statement outputs the complete rcptto address, for example, `test@example.com`. The second print statement outputs the localpart only, for example, `test`.

**<a name="idp55787440"></a> Return Values**

Returns 1 on success (including if the envelope address is empty) and 0 if the address is not understood by the system.

**<a name="idp55788464"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55789568"></a> 
## See Also

[ec_message_set_envelope](/momentum/3/3-api/apis-ec-message-set-envelope)