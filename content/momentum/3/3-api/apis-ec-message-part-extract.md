---
lastUpdated: "03/26/2020"
title: "ec_message_part_extract"
description: "ec message part extract Prepare to extract a message part in a streaming fashion io object ec message part extract part desired charset ec message part part const char desired charset This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.ec_message_part_extract"></a> 
## Name

ec_message_part_extract — Prepare to extract a message part in a streaming fashion

## Synopsis

`#include "ec_message.h"`

| `io_object * **ec_message_part_extract** (` | <var class="pdparam">part</var>, |   |
|   | <var class="pdparam">desired_charset</var>`)`; |   |

`ec_message_part * <var class="pdparam">part</var>`;
`const char * <var class="pdparam">desired_charset</var>`;<a name="idp56266992"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Prepare to extract a message part in a streaming fashion.

**<a name="idp56269824"></a> Parameters**

<dl class="variablelist">

<dt>part</dt>

<dd>

the message part to be extracted

</dd>

<dt>desired_charset</dt>

<dd>

the character set to use for textual parts.

</dd>

</dl>

If desired_charset is NULL, then no decoding will be performed; the stream will simply return the message part as it appears in the body.

If desired_charset is "/transfer-decode-only/" then only transfer decoding will be performed; the stream will supply the octets after decoding the transfer-encoding for that part.

**<a name="idp56275664"></a> Return Values**

Returns an io_object that will produce the decoded part when read.

While the io_object returned from this function is active, you should not perform operations on the message that might seek the io object that underpins the message, otherwise you will confuse the extractor or vice versa.

**<a name="idp56277312"></a> Related Constants**

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