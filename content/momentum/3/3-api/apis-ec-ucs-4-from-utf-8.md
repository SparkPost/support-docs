---
lastUpdated: "03/26/2020"
title: "ec_ucs4_from_utf8"
description: "ec ucs 4 from utf 8 Decodes a single code point from a utf 8 buffer u int 32 t ec ucs 4 from utf 8 ptr lim unsigned char ptr unsigned char lim This reference page was automatically generated from functions found in the header files in the development..."
---

<a name="apis.ec_ucs4_from_utf8"></a> 
## Name

ec_ucs4_from_utf8 — Decodes a single code point from a utf8 buffer

## Synopsis

`#include "util.h"`

| `u_int32_t **ec_ucs4_from_utf8** (` | <var class="pdparam">ptr</var>, |   |
|   | <var class="pdparam">lim</var>`)`; |   |

`unsigned char ** <var class="pdparam">ptr</var>`;
`unsigned char * <var class="pdparam">lim</var>`;<a name="idp63946208"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Decodes a single code point from a utf8 buffer.

**<a name="idp63949088"></a> Parameters**

<dl class="variablelist">

<dt>ptr</dt>

<dd>

references the buffer

</dd>

<dt>lim</dt>

<dd>

points at the end of the buffer.

</dd>

</dl>

ptr will be updated to point to the start of the next character in the input stream.

**<a name="idp63954176"></a> Return Values**

Returns 0 when the limit is reached, or if there is an invalid input.