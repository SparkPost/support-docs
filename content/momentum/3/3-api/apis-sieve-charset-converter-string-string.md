---
lastUpdated: "03/26/2020"
title: "sieve_charset_converter_string_string"
description: "sieve charset converter string string perform character encoding conversion int sieve charset converter string string srccharset destcharset instr outstr const char srccharset const char destcharset string instr string outstr This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.sieve_charset_converter_string_string"></a> 
## Name

sieve_charset_converter_string_string — perform character encoding conversion

## Synopsis

`#include "util.h"`

| `int **sieve_charset_converter_string_string** (` | <var class="pdparam">srccharset</var>, |   |
|   | <var class="pdparam">destcharset</var>, |   |
|   | <var class="pdparam">instr</var>, |   |
|   | <var class="pdparam">outstr</var>`)`; |   |

`const char * <var class="pdparam">srccharset</var>`;
`const char * <var class="pdparam">destcharset</var>`;
`string * <var class="pdparam">instr</var>`;
`string * <var class="pdparam">outstr</var>`;<a name="idp59789200"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

perform character encoding conversion.

**<a name="idp59792064"></a> Parameters**

<dl class="variablelist">

<dt>srccharset</dt>

<dd>

the source character set.

</dd>

<dt>destcharset</dt>

<dd>

the character set to be converted to.

</dd>

<dt>instr</dt>

<dd>

the source string.

</dd>

<dt>outstr</dt>

<dd>

the string containing the converted text.

</dd>

</dl>

**<a name="idp59800352"></a> Return Values**

0 if failed.

**Configuration Change. ** This feature is available starting from Momentum 3.1.