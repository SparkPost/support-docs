---
lastUpdated: "03/26/2020"
title: "ec_message_part_create_singleton"
description: "ec message part create singleton Create a new singleton message part ec message part ec message part create singleton mimetype encoding body const char mimetype int encoding io object body This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.ec_message_part_create_singleton"></a> 
## Name

ec_message_part_create_singleton — Create a new singleton message part

## Synopsis

`#include "ec_message.h"`

| `ec_message_part * **ec_message_part_create_singleton** (` | <var class="pdparam">mimetype</var>, |   |
|   | <var class="pdparam">encoding</var>, |   |
|   | <var class="pdparam">body</var>`)`; |   |

`const char * <var class="pdparam">mimetype</var>`;
`int <var class="pdparam">encoding</var>`;
`io_object * <var class="pdparam">body</var>`;<a name="idp56243744"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Create a new singleton message part.

Creates a new message part representing a singleton (or leaf).

The returned value has a single reference; the caller is responsible for releasing it at the appropriate time.

The newly created part has an initial Content-Type header created based on the supplied mimetype parameter.

encoding is one of EC_MIME_TE_7BIT, EC_MIME_TE_8BIT, EC_MIME_TE_BINARY, EC_MIME_TE_QUOTED_PRINTABLE or EC_MIME_TE_BASE64\. It must match the encoding of the content referenced by the body parameter.

body is an optional io_object containing the literal non-header content for the message part. For example, if encoding is EC_MIME_TE_QUOTED_PRINTABLE then body is assumed to be a stream of quoted-printable encoded data.

**<a name="idp56249584"></a> Parameters**

<dl class="variablelist">

<dt>mimetype</dt>

<dd>

used to construct the Content-Type header

</dd>

<dt>encoding</dt>

<dd>

indicates the encoding used in the body

</dd>

<dt>body</dt>

<dd>

an io_object for the body content. May be NULL.

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.