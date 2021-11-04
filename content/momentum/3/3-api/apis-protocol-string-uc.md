---
lastUpdated: "03/26/2020"
title: "protocol_string_uc"
description: "protocol string uc Returns a protocol string in uppercase const char protocol string uc p num intp num Returns a protocol string in uppercase A sample call proto protocol string uc mess recv method p num A protocol number This function returns the string version of a protocol such as..."
---

<a name="apis.protocol_string_uc"></a> 
## Name

protocol_string_uc — Returns a protocol string in uppercase

## Synopsis

`#include "message.h"`

| `const char * **protocol_string_uc** (` | <var class="pdparam">p_num</var>`)`; |   |

`int<var class="pdparam">p_num</var>`;<a name="idp64183296"></a> 
## Description

Returns a protocol string in uppercase.

A sample call:

`proto = protocol_string_uc(mess->recv_method);`

**<a name="idp64185904"></a> Parameters**

<dl class="variablelist">

<dt>p_num</dt>

<dd>

A protocol number.

</dd>

</dl>

**<a name="idp64188640"></a> Return Value**

This function returns the string version of a protocol such as `ESMTP`, `REST`, or `SMPP`,

**<a name="idp64190944"></a> Threading**

It is legal to call this function in any thread.