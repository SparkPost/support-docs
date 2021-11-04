---
lastUpdated: "03/26/2020"
title: "ec_message_part_copy_to_io_object"
description: "ec message part copy to io object Render Copy a message part to an io object io object ec message part copy to io object part flags ec message part part int flags This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis.ec_message_part_copy_to_io_object"></a> 
## Name

ec_message_part_copy_to_io_object — Render/Copy a message part to an io_object

## Synopsis

`#include "ec_message.h"`

| `io_object * **ec_message_part_copy_to_io_object** (` | <var class="pdparam">part</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`ec_message_part * <var class="pdparam">part</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp56182464"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Render/Copy a message part to an io_object.

**<a name="idp56185328"></a> Parameters**

<dl class="variablelist">

<dt>part , :</dt>

<dd>

the message part to be rendered

</dd>

<dt>flags , :</dt>

<dd>

flags that control the rendition, e.g. EC_MSG_RENDER_OMIT_HEADERS

</dd>

</dl>

**<a name="idp56190848"></a> Return Values**

Returns the length of the rendered output in bytes.

**Configuration Change. ** This feature is available starting from Momentum 3.3.

**<a name="idp56193456"></a> Related Constants**

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