---
lastUpdated: "03/26/2020"
title: "ec_message_part_create_multipart"
description: "ec message part create multipart Create a new multipart container part ec message part ec message part create multipart mimetype boundary const char mimetype const char boundary This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_message_part_create_multipart"></a> 
## Name

ec_message_part_create_multipart — Create a new multipart container part

## Synopsis

`#include "ec_message.h"`

| `ec_message_part * **ec_message_part_create_multipart** (` | <var class="pdparam">mimetype</var>, |   |
|   | <var class="pdparam">boundary</var>`)`; |   |

`const char * <var class="pdparam">mimetype</var>`;
`const char * <var class="pdparam">boundary</var>`;<a name="idp56222384"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Create a new multipart container part.

Creates a new message part representing a multipart container.

The returned value has a single reference; the caller is responsible for releasing it at the appropriate time.

The newly created part has an initial Content-Type header created based on the supplied mimetype parameter.

If boundary is NULL, the system will generate a random boundary string.

**<a name="idp56227408"></a> Parameters**

<dl class="variablelist">

<dt>mimetype</dt>

<dd>

Value to use in constructing the Content-Type header. eg: "multipart/alternative"

</dd>

<dt>boundary</dt>

<dd>

the boundary string to use for child parts. May be NULL.

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.