---
lastUpdated: "03/26/2020"
title: "ec_message_part_get_content_type3"
description: "ec message part get content type 3 Returns the content type and charset for a given part void ec message part get content type 3 p pathway content type ct len charset charset len ec message part p const char pathway char content type int ct len char charset int..."
---

<a name="apis.ec_message_part_get_content_type3"></a> 
## Name

ec_message_part_get_content_type3 — Returns the content type and charset for a given part

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_part_get_content_type3** (` | <var class="pdparam">p</var>, |   |
|   | <var class="pdparam">pathway</var>, |   |
|   | <var class="pdparam">content_type</var>, |   |
|   | <var class="pdparam">ct_len</var>, |   |
|   | <var class="pdparam">charset</var>, |   |
|   | <var class="pdparam">charset_len</var>`)`; |   |

`ec_message_part * <var class="pdparam">p</var>`;
`const char * <var class="pdparam">pathway</var>`;
`char * <var class="pdparam">content_type</var>`;
`int <var class="pdparam">ct_len</var>`;
`char * <var class="pdparam">charset</var>`;
`int <var class="pdparam">charset_len</var>`;<a name="idp56396432"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Returns the content type and charset for a given part.

**<a name="idp56399312"></a> Parameters**

<dl class="variablelist">

<dt>path</dt>

<dd>

pathway the messahe came in on.

</dd>

<dt>content_type</dt>

<dd>

a buffer to hold the content type.

</dd>

<dt>ct_len</dt>

<dd>

the size of the content_type buffer in bytes

</dd>

<dt>charset</dt>

<dd>

a buffer to hold the charset.

</dd>

<dt>charset_set</dt>

<dd>

the size of charset buffer in bytes.

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.

**<a name="idp56411136"></a> See Also**

ec_mime_component_extract_content_type().