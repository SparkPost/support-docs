---
lastUpdated: "03/26/2020"
title: "ec_message_get_headers"
description: "ec message get headers Returns an rfc 2822 context struct which stores the headers for the message part rfc 2822 context ec message get headers part for read ec message part part int for read Returns an rfc 2822 context struct which stores the headers for the message part part..."
---

<a name="apis.ec_message_get_headers"></a> 
## Name

ec_message_get_headers — Returns an rfc2822_context struct which stores the headers for the message part

## Synopsis

`#include "message.h"`

| `rfc2822_context * **ec_message_get_headers** (` | <var class="pdparam">part</var>, |   |
|   | <var class="pdparam">for_read</var>`)`; |   |

`ec_message_part * <var class="pdparam">part</var>`;
`int <var class="pdparam">for_read</var>`;<a name="idp55868768"></a> 
## Description

Returns an rfc2822_context struct which stores the headers for the message part.

**<a name="idp55870032"></a> Parameters**

<dl class="variablelist">

<dt>part</dt>

<dd>

A pointer to an ec_message_part struct. For documentation of this data structure see [“ec_message_part”](/momentum/3/3-api/structs-ec-message-part)

</dd>

<dt>for_read</dt>

<dd>

An integer value. If for_read is 1 (non-zero), then the address of the headers in an rfc2822_context struct within the ec_message_part is returned. If for_read is passed 0, then a clone of the headers is allocated and that address returned.

</dd>

</dl>

**<a name="idp55875520"></a> Return Values**

This function returns the address of an rfc2822_context struct. The rfc2822_context is passed by reference. It is valid until the message part is freed (either directly or indirectly by the message itself being freed). Any modifications made to the rfc2822_context must be noted in the message part with [ec_message_part_touch](/momentum/3/3-api/apis-ec-message-part-touch). For documentation of this data structure see [“rfc2822_context”](/momentum/3/3-api/structs-rfc-2822-context)

**<a name="idp55877904"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55879008"></a> 
## See Also

[ec_message_render_headers_to_string](/momentum/3/3-api/apis-ec-message-render-headers-to-string), [ec_message_part_touch](/momentum/3/3-api/apis-ec-message-part-touch)