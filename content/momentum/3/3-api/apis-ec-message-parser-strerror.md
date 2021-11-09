---
lastUpdated: "03/26/2020"
title: "ec_message_parser_strerror"
description: "ec message parser strerror Returns a string representation of a message parsing error code const char ec message parser strerror err int err Returns a string representation of a message parsing error code in the form of an SMTP response line err An integer representing a parsing error code This..."
---

<a name="apis.ec_message_parser_strerror"></a> 
## Name

ec_message_parser_strerror — Returns a string representation of a message parsing error code

## Synopsis

`#include "ec_message.h"`

| `const char * **ec_message_parser_strerror** (` | <var class="pdparam">err</var>`)`; |   |

`int <var class="pdparam">err</var>`;<a name="idp56126816"></a> 
## Description

Returns a string representation of a message parsing error code in the form of an SMTP response line.

**<a name="idp56128096"></a> Parameters**

<dl class="variablelist">

<dt>err</dt>

<dd>

An integer representing a parsing error code.

</dd>

</dl>

**<a name="idp56130832"></a> Return Values**

This function returns void.

**<a name="idp56131744"></a> Threading**

It is legal to call this function in any thread.