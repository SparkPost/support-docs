---
lastUpdated: "03/26/2020"
title: "convert_charset"
description: "convert charset int convert charset closure srccharset destcharset inbuf inbytesleft outbuf outbytesleft void closure const char srccharset const char destcharset char inbuf size t inbytesleft char outbuf size t outbytesleft int has sieve convert charset hook void register sieve convert charset hook first hook closure ec hook sieve convert charset..."
---

<a name="hooks.sieve.convert_charset"></a> 
## Name

convert_charset

## Synopsis

`#include "hooks/sieve/convert_charset.h"`

| `int **convert_charset** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">srccharset</var>, |   |
|   | <var class="pdparam">destcharset</var>, |   |
|   | <var class="pdparam">inbuf</var>, |   |
|   | <var class="pdparam">inbytesleft</var>, |   |
|   | <var class="pdparam">outbuf</var>, |   |
|   | <var class="pdparam">outbytesleft</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">srccharset</var>`;
`const char * <var class="pdparam">destcharset</var>`;
`char ** <var class="pdparam">inbuf</var>`;
`size_t * <var class="pdparam">inbytesleft</var>`;
`char ** <var class="pdparam">outbuf</var>`;
`size_t * <var class="pdparam">outbytesleft</var>`;

| `int **has_sieve_convert_charset_hook** (` | `)`; |   |

| `void **register_sieve_convert_charset_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_sieve_convert_charset_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_sieve_convert_charset_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_sieve_convert_charset_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_sieve_convert_charset_hook** (` | <var class="pdparam">srccharset</var>, |   |
|   | <var class="pdparam">destcharset</var>, |   |
|   | <var class="pdparam">inbuf</var>, |   |
|   | <var class="pdparam">inbytesleft</var>, |   |
|   | <var class="pdparam">outbuf</var>, |   |
|   | <var class="pdparam">outbytesleft</var>`)`; |   |

`const char * <var class="pdparam">srccharset</var>`;
`const char * <var class="pdparam">destcharset</var>`;
`char ** <var class="pdparam">inbuf</var>`;
`size_t * <var class="pdparam">inbytesleft</var>`;
`char ** <var class="pdparam">outbuf</var>`;
`size_t * <var class="pdparam">outbytesleft</var>`;<a name="idp37967216"></a> 
## Description

Parameters:

<dl class="variablelist">

<dt>closure</dt>

<dd>

the implementation specific closure, this is not needed for the hook's caller

</dd>

<dt>srccharset</dt>

<dd>

the source character set

</dd>

<dt>destcharset</dt>

<dd>

the destination chaaracter set

</dd>

<dt>inbuf</dt>

<dd>

the buffer containing data to be converted

</dd>

<dt>inbytesleft</dt>

<dd>

the length of the inbuf

</dd>

<dt>outbuf</dt>

<dd>

the buffer containing converted data after the conversion takes place

</dd>

<dt>outbytesleft</dt>

<dd>

space remaining in the output buffer for conversion

</dd>

</dl>

Called on the conversion of one character set to another. Return the number of bytes successfully converted.