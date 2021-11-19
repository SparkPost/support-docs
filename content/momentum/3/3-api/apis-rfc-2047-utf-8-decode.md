---
lastUpdated: "03/26/2020"
title: "rfc2047_utf8_decode"
description: "rfc 2047 utf 8 decode Decode rfc 2047 encoding returning a string that is utf 8 encoded char rfc 2047 utf 8 decode header hdrlen outlen needs free const char header int hdrlen int outlen int needs free Decode rfc 2047 encoding returning a string that is utf 8 encoded..."
---

<a name="apis.rfc2047_utf8_decode"></a> 
## Name

rfc2047_utf8_decode — Decode rfc2047 encoding, returning a string that is utf-8 encoded

## Synopsis

`#include "misc/rfc2047.h"`

| `char * **rfc2047_utf8_decode** (` | <var class="pdparam">header</var>, |   |
|   | <var class="pdparam">hdrlen</var>, |   |
|   | <var class="pdparam">outlen</var>, |   |
|   | <var class="pdparam">needs_free</var>`)`; |   |

`const char * <var class="pdparam">header</var>`;
`int <var class="pdparam">hdrlen</var>`;
`int * <var class="pdparam">outlen</var>`;
`int * <var class="pdparam">needs_free</var>`;<a name="idp58425008"></a> 
## Description

Decode rfc2047 encoding, returning a string that is utf-8 encoded.

The `needs_free` parameter indicates whether or not this function has allocated memory. If this function does allocate memory, it is of the `MEMTYPE_MESSAGE_BODY` type. For more information about memory types see [ec_malloc](/momentum/3/3-api/apis-ec-malloc).

<dl class="variablelist">

<dt>header</dt>

<dd>

The header to be decoded.

</dd>

<dt>hdrlen</dt>

<dd>

The length of the header in bytes.

</dd>

<dt>outlen</dt>

<dd>

If `outlen` is not NULL, the integer it points to will be updated to hold the length of the returned string.

</dd>

<dt>needs_free</dt>

<dd>

If `needs_free` is a NULL pointer, you are always responsible for freeing the returned buffer. Free the returned buffer using [ec_free](/momentum/3/3-api/apis-ec-free). If `needs_free` points to an integer, that integer will be set to `1` if the call allocated memory for the returned string (which happens when the header is encoded), but `0` if it did not (which happens when the header is not encoded).

</dd>

</dl>

**<a name="idp58440128"></a> Return Value**

If the header needs decoding, this function returns the decoded header.

**<a name="idp58441104"></a> Threading**

It is legal to call this function in any thread.