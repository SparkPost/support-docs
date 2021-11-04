---
lastUpdated: "03/26/2020"
title: "ec_message_get_body_io_object"
description: "ec message get body io object Requests an io object from the IO layer io object ec message get body io object mess ec message mess Requests an io object from the IO layer You should call ec message get body io object when you have finished consuming the io..."
---

<a name="apis.ec_message_get_body_io_object"></a> 
## Name

ec_message_get_body_io_object — Requests an io_object from the IO layer

## Synopsis

`#include "ec_message.h"`

| `io_object * **ec_message_get_body_io_object** (` | <var class="pdparam">mess</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;<a name="idp55695200"></a> 
## Description

Requests an io_object from the IO layer.

### Note

You should call [ec_message_get_body_io_object](/momentum/3/3-api/apis-ec-message-get-body-io-object) when you have finished consuming the io object to release its resources.

### Note

During validation, this will fabricate an IO object that pulls the content of the message in its current state. If the message is modified while such an object is open, then the results are undefined.

**<a name="idp55699120"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

The message. A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp55702496"></a> Return Values**

This returns the address of an io_object. It MAY return NULL.

**<a name="idp55703456"></a> Threading**

It is legal to call this function in any thread but should not be called in the Scheduler thread.

### Note

This function may induce IO blocking or otherwise block the caller. Blocking in the scheduler thread will lead to degraded performance and should be avoided at all costs. If your code is running in the IO subsystem, the core will have already taken steps to ensure that blocking is acceptable. Otherwise, you should look at using the thread pool API to run a job in the IO pool.

<a name="idp55706320"></a> 
## See Also

[ec_message_get_body_io_object](/momentum/3/3-api/apis-ec-message-get-body-io-object).