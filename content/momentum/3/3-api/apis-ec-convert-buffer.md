---
lastUpdated: "03/26/2020"
title: "ec_convert_buffer"
description: "ec convert buffer Convert a fixed length buffer from one encoding to another int ec convert buffer fromcode frombuf frombuflen tocode tobuf tobuflen bytes consumed bytes produced const char fromcode const char frombuf size t frombuflen const char tocode char tobuf size t tobuflen size t bytes consumed size t..."
---

<a name="apis.ec_convert_buffer"></a> 
## Name

ec_convert_buffer — Convert a fixed length buffer from one encoding to another

## Synopsis

`#include "misc/converter.h"`

| `int **ec_convert_buffer** (` | <var class="pdparam">fromcode</var>, |   |
|   | <var class="pdparam">frombuf</var>, |   |
|   | <var class="pdparam">frombuflen</var>, |   |
|   | <var class="pdparam">tocode</var>, |   |
|   | <var class="pdparam">tobuf</var>, |   |
|   | <var class="pdparam">tobuflen</var>, |   |
|   | <var class="pdparam">bytes_consumed</var>, |   |
|   | <var class="pdparam">bytes_produced</var>`)`; |   |

`const char * <var class="pdparam">fromcode</var>`;
`const char * <var class="pdparam">frombuf</var>`;
`size_t <var class="pdparam">frombuflen</var>`;
`const char * <var class="pdparam">tocode</var>`;
`char * <var class="pdparam">tobuf</var>`;
`size_t <var class="pdparam">tobuflen</var>`;
`size_t * <var class="pdparam">bytes_consumed</var>`;
`size_t * <var class="pdparam">bytes_produced</var>`;<a name="idp47555168"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Convert a fixed length buffer from one encoding to another.

Converts data from one encoding to another using fixed length buffers.

**<a name="idp47558576"></a> Parameters**

<dl class="variablelist">

<dt>fromcode</dt>

<dd>

the encoding used for the input data

</dd>

<dt>frombuf</dt>

<dd>

the source of the input data

</dd>

<dt>frombuflen</dt>

<dd>

the size of the source buffer

</dd>

<dt>tobuf</dt>

<dd>

the destination buffer

</dd>

<dt>tobuflen</dt>

<dd>

the size of the destination buffer

</dd>

<dt>bytes_consumed</dt>

<dd>

the number of bytes consumed from the source buffer.

</dd>

<dt>bytes_produced</dt>

<dd>

the number of bytes that wound up in the destination buffer.

</dd>

</dl>

**<a name="idp47572448"></a> Return Values**

Returns ECCONV_OK on success, or some other value on error.