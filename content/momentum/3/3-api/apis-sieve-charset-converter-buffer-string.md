---
lastUpdated: "03/26/2020"
title: "sieve_charset_converter_buffer_string"
description: "sieve charset converter buffer string perform character encoding conversion int int sieve charset converter buffer string srccharset destcharset inbuf inbuflen outstr const char srccharset const char destcharset char inbuf int inbuflen string outstr This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis.sieve_charset_converter_buffer_string"></a> 
## Name

sieve_charset_converter_buffer_string — perform character encoding conversion

## Synopsis

`#include "util.h"`

| `int int **sieve_charset_converter_buffer_string** (` | <var class="pdparam">srccharset</var>, |   |
|   | <var class="pdparam">destcharset</var>, |   |
|   | <var class="pdparam">inbuf</var>, |   |
|   | <var class="pdparam">inbuflen</var>, |   |
|   | <var class="pdparam">outstr</var>`)`; |   |

`const char * <var class="pdparam">srccharset</var>`;
`const char * <var class="pdparam">destcharset</var>`;
`char * <var class="pdparam">inbuf</var>`;
`int <var class="pdparam">inbuflen</var>`;
`string * <var class="pdparam">outstr</var>`;<a name="idp59762880"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

perform character encoding conversion.

**<a name="idp59765744"></a> Parameters**

<dl class="variablelist">

<dt>srccharset</dt>

<dd>

the source character set.

</dd>

<dt>destcharset</dt>

<dd>

the character set to be converted to.

</dd>

<dt>inbuf</dt>

<dd>

the pointer source string.

</dd>

<dt>inbufleft</dt>

<dd>

the number of chars to convert from the source.

</dd>

<dt>outstr</dt>

<dd>

the string containing the converted text.

</dd>

</dl>

**<a name="idp59775888"></a> Return Values**

0 if failed.

**Configuration Change. ** This feature is available starting from Momentum 3.1.