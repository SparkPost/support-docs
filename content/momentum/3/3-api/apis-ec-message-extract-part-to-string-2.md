---
lastUpdated: "03/26/2020"
title: "ec_message_extract_part_to_string2"
description: "ec message extract part to string 2 Extract a message part to a string decoding transfer encoding int ec message extract part to string 2 part pathway str desired charset ec message part part const char pathway string str const char desired charset This reference page was automatically generated from..."
---

<a name="apis.ec_message_extract_part_to_string2"></a> 
## Name

ec_message_extract_part_to_string2 — Extract a message part to a string, decoding transfer encoding

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_extract_part_to_string2** (` | <var class="pdparam">part</var>, |   |
|   | <var class="pdparam">pathway</var>, |   |
|   | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">desired_charset</var>`)`; |   |

`ec_message_part * <var class="pdparam">part</var>`;
`const char * <var class="pdparam">pathway</var>`;
`string * <var class="pdparam">str</var>`;
`const char * <var class="pdparam">desired_charset</var>`;<a name="idp55620528"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Extract a message part to a string, decoding transfer encoding.

**<a name="idp55623424"></a> Parameters**

<dl class="variablelist">

<dt>part</dt>

<dd>

the message part to be extracted

</dd>

<dt>pathway</dt>

<dd>

the pathway the message came in on.

</dd>

<dt>str</dt>

<dd>

the string to render into

</dd>

<dt>desired_charset</dt>

<dd>

the character set to use for textual parts

</dd>

</dl>

**<a name="idp55631712"></a> Return Values**

Returns the length of the rendered output in bytes.

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.

**<a name="idp55634336"></a> Related Constants**

<dl class="variablelist">

<dt>EC_MSG_RENDER_OMIT_DOT</dt>

<dd>

omit the trailing SMTP termination dot from the rendition

</dd>

<dt>EC_MSG_RENDER_CALCULATE_LENGTH_ONLY</dt>

<dd>

calculate the length only

</dd>

<dt>EC_MSG_RENDER_HEADERS_ONLY</dt>

<dd>

render the rfc2822 headers only

</dd>

<dt>EC_MSG_RENDER_XML</dt>

<dd>

render the output in an XML based format

</dd>

<dt>EC_MSG_RENDER_OMIT_HEADERS</dt>

<dd>

don't render the rfc2822 headers

</dd>

<dt>EC_MSG_RENDER_OMIT_EPILOGUE</dt>

<dd>

don't include epilogue

</dd>

<dt>EC_MSG_RENDER_UNSTUFFED</dt>

<dd>

remove SMTP dot stuffing while rendering, and use LF instead of CRLF

</dd>

<dt>EC_MSG_RENDER_DEBUG</dt>

<dd>

enable additional output in debugging mode

</dd>

<dt>EC_MSG_RENDER_AVOID_IO</dt>

<dd>

don't incur disk IO if we can avoid it

</dd>

<dt>EC_MSG_RENDER_SUPPRESS_WRITE_ERRORS</dt>

<dd>

don't log write errors, useful when rendering to a static string to limit the amount of the message being requested

</dd>

</dl>