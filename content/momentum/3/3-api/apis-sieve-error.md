---
lastUpdated: "03/26/2020"
title: "sieve_error"
description: "sieve error Create a Sieve error message void sieve error sieve lineno fmt SIEVE sieve int lineno const char fmt Write a Sieve error message This function appends output to the sieve state error log if that data member is set sieve The active script For more information about this..."
---

<a name="apis.sieve_error"></a> 
## Name

sieve_error — Create a Sieve error message

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_error** (` | <var class="pdparam">sieve</var>, |   |
|   | <var class="pdparam">lineno</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | <var class="pdparam">...</var>`)`; |   |

`SIEVE * <var class="pdparam">sieve</var>`;
`int <var class="pdparam">lineno</var>`;
`const char * <var class="pdparam">fmt</var>`;
`<var class="pdparam">...</var>`;<a name="idp59920704"></a> 
## Description

Write a Sieve error message. This function appends output to the `_sieve_state` error_log if that data member is set.

**<a name="idp59922432"></a> Parameters**

<dl class="variablelist">

<dt>sieve</dt>

<dd>

The active script. For more information about this data type see [sieve](/momentum/3/3-api/structs-sieve).

</dd>

<dt>lineno</dt>

<dd>

The line number where the error occurred.

</dd>

<dt>fmt</dt>

<dd>

The string with embedded format specifier(s).

</dd>

<dt>...</dt>

<dd>

The variable argument(s) for the format string.

</dd>

</dl>

**<a name="idp59931472"></a> Return Values**

This function returns void.

**<a name="idp59932384"></a> Threading**

It is legal to call this function in any thread.