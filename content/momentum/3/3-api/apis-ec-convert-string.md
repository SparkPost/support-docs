---
lastUpdated: "03/26/2020"
title: "ec_convert_string"
description: "ec convert string Convert a string from one encoding to another int ec convert string fromcode fromstring tocode deststring const char fromcode string fromstring const char tocode string deststring This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_convert_string"></a> 
## Name

ec_convert_string — Convert a string from one encoding to another

## Synopsis

`#include "misc/converter.h"`

| `int **ec_convert_string** (` | <var class="pdparam">fromcode</var>, |   |
|   | <var class="pdparam">fromstring</var>, |   |
|   | <var class="pdparam">tocode</var>, |   |
|   | <var class="pdparam">deststring</var>`)`; |   |

`const char * <var class="pdparam">fromcode</var>`;
`string * <var class="pdparam">fromstring</var>`;
`const char * <var class="pdparam">tocode</var>`;
`string * <var class="pdparam">deststring</var>`;<a name="idp47654272"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Convert a string from one encoding to another.

This is a convenience wrapper around opening a converter and converting each portion of the source string through it and storing it in the destination string.

**<a name="idp47657760"></a> Parameters**

<dl class="variablelist">

<dt>fromcode</dt>

<dd>

the encoding used for the input data

</dd>

<dt>fromstring</dt>

<dd>

the source of the input data

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

Data is read from the start of the buffer in fromstring. If it is disk backed, the next chunk will be requested until no more chunks are available.

**<a name="idp47666672"></a> Return Values**

Returns ECCONV_OK on success, or some other value on error.

### Note

This function may induce IO or otherwise block the caller. Blocking in the scheduler thread will lead to degraded performance and should be avoided at all costs. If your code is running in the IO subsystem, the core will have already taken steps to ensure that blocking is acceptable. Otherwise, you should look at using the thread pool API to run a job in the IO pool.