---
lastUpdated: "03/26/2020"
title: "ec_convert_buffer_to_string"
description: "ec convert buffer to string Convert a buffer from one encoding to another int ec convert buffer to string fromcode frombuf frombuflen tocode deststring const char fromcode const char frombuf int frombuflen const char tocode string deststring This reference page was automatically generated from functions found in the header files..."
---

<a name="apis.ec_convert_buffer_to_string"></a> 
## Name

ec_convert_buffer_to_string — Convert a buffer from one encoding to another

## Synopsis

`#include "misc/converter.h"`

| `int **ec_convert_buffer_to_string** (` | <var class="pdparam">fromcode</var>, |   |
|   | <var class="pdparam">frombuf</var>, |   |
|   | <var class="pdparam">frombuflen</var>, |   |
|   | <var class="pdparam">tocode</var>, |   |
|   | <var class="pdparam">deststring</var>`)`; |   |

`const char * <var class="pdparam">fromcode</var>`;
`const char * <var class="pdparam">frombuf</var>`;
`int <var class="pdparam">frombuflen</var>`;
`const char * <var class="pdparam">tocode</var>`;
`string * <var class="pdparam">deststring</var>`;<a name="idp47584800"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Convert a buffer from one encoding to another.

This is a convenience wrapper around opening a converter and converting each portion of the source string through it and storing it in the destination string.

**<a name="idp47588288"></a> Parameters**

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

size of input data

</dd>

<dt>tocode</dt>

<dd>

the encoding to be used for the output data

</dd>

<dt>deststring</dt>

<dd>

the destination for the converted data

</dd>

</dl>

Data is read from the start of the buffer in frombuf.

**<a name="idp47598928"></a> Return Values**

Returns ECCONV_OK on success, or some other value on error.

### Note

This function may induce IO or otherwise block the caller. Blocking in the scheduler thread will lead to degraded performance and should be avoided at all costs. If your code is running in the IO subsystem, the core will have already taken steps to ensure that blocking is acceptable. Otherwise, you should look at using the thread pool API to run a job in the IO pool.

**Configuration Change. ** This feature is available starting from Momentum 3.1.