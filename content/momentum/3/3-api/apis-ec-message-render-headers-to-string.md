---
lastUpdated: "03/26/2020"
title: "ec_message_render_headers_to_string"
description: "ec message render headers to string Renders the headers of the first part of a message to a string int ec message render headers to string mess str flags ec message mess string str int flags Renders the headers of the first part of a message to a string Example..."
---

<a name="apis.ec_message_render_headers_to_string"></a> 
## Name

ec_message_render_headers_to_string — Renders the headers of the first part of a message to a string

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_render_headers_to_string** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`string * <var class="pdparam">str</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp56559536"></a> 
## Description

Renders the headers of the first part of a message to a string.

<a name="idp56560784"></a> 


`ec_message_render_headers_to_string(message, &str, 0)`
**<a name="idp56562448"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>str</dt>

<dd>

The target string for the rendering

</dd>

<dt>flags</dt>

<dd>

Flags that control the message parts that are rendered. See the [the section called “Related Constants”](/momentum/3/3-api/apis-ec-message-render-headers-to-string#apis.ec_message_render_headers_to_string.related_constants)

</dd>

</dl>

**<a name="idp56570144"></a> Return Values**

Returns the length of the rendered output in bytes.

**<a name="apis.ec_message_render_headers_to_string.related_constants"></a> Related Constants**

<dl class="variablelist">

<dt>EC_MSG_RENDER_OMIT_DOT</dt>

<dd>

Omit the trailing SMTP termination dot from the rendition.

</dd>

<dt>EC_MSG_RENDER_CALCULATE_LENGTH_ONLY</dt>

<dd>

Calculate the length only.

</dd>

<dt>EC_MSG_RENDER_HEADERS_ONLY</dt>

<dd>

Render the rfc2822 headers only

</dd>

<dt>EC_MSG_RENDER_XML</dt>

<dd>

Render the output in an XML based format

</dd>

<dt>EC_MSG_RENDER_OMIT_HEADERS</dt>

<dd>

Don't render the rfc2822 headers

</dd>

<dt>EC_MSG_RENDER_OMIT_EPILOGUE</dt>

<dd>

Don't include the epilogue

</dd>

<dt>EC_MSG_RENDER_UNSTUFFED</dt>

<dd>

Remove SMTP dot stuffing while rendering, and use LF instead of CRLF

</dd>

<dt>EC_MSG_RENDER_DEBUG</dt>

<dd>

Enable additional output in debugging mode

</dd>

<dt>EC_MSG_RENDER_AVOID_IO</dt>

<dd>

Don't incur disk IO if we can avoid it

</dd>

<dt>EC_MSG_RENDER_SUPPRESS_WRITE_ERRORS</dt>

<dd>

Don't log write errors. This is useful when rendering to a static string to limit the amount of the message being requested

</dd>

</dl>

**<a name="idp56591328"></a> Threading**

It is legal to call this function in any thread.

<a name="idp56592432"></a> 
## See Also

[ec_message_render_to_string](/momentum/3/3-api/apis-ec-message-render-to-string)