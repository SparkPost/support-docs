---
lastUpdated: "03/26/2020"
title: "ec_message_release_body_io_object"
description: "ec message release body io object Releases the body io object void ec message release body io object mess ec message mess Releases the body io object that is allocated by ec message get body io object It is important to realize that this function results in recovered system memory..."
---

<a name="apis.ec_message_release_body_io_object"></a> 
## Name

ec_message_release_body_io_object — Releases the body io_object

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_release_body_io_object** (` | <var class="pdparam">mess</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;<a name="idp56539680"></a> 
## Description

Releases the body io_object that is allocated by [ec_message_get_body_io_object](/momentum/3/3-api/apis-ec-message-get-body-io-object).

### Note

It is important to realize that this function results in recovered system memory, but the message is still stored in the spool

**<a name="idp56542528"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

The message. A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp56545904"></a> Return Values**

This function returns void.

**<a name="idp56546816"></a> Threading**

It is legal to call this function in any thread.

<a name="idp56547920"></a> 
## See Also

[ec_message_get_body_io_object](/momentum/3/3-api/apis-ec-message-get-body-io-object).