---
lastUpdated: "03/26/2020"
title: "ec_message_part_get_content_type2"
description: "ec message part get content type 2 Returns the content type and charset for a given part using strings void ec message part get content type 2 p content type charset ec message part p string content type string charset This reference page was automatically generated from functions found in..."
---

<a name="apis.ec_message_part_get_content_type2"></a> 
## Name

ec_message_part_get_content_type2 — Returns the content type and charset for a given part using strings

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_part_get_content_type2** (` | <var class="pdparam">p</var>, |   |
|   | <var class="pdparam">content_type</var>, |   |
|   | <var class="pdparam">charset</var>`)`; |   |

`ec_message_part * <var class="pdparam">p</var>`;
`string * <var class="pdparam">content_type</var>`;
`string * <var class="pdparam">charset</var>`;<a name="idp56374128"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Returns the content type and charset for a given part using strings.

**<a name="idp56377024"></a> Parameters**

<dl class="variablelist">

<dt>content_type</dt>

<dd>

address of string to hold the content type.

</dd>

<dt>charset</dt>

<dd>

address of string to hold the charset.

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.0.16.

**<a name="idp56383312"></a> See Also**

ec_mime_component_extract_content_type().