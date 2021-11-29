---
lastUpdated: "03/26/2020"
title: "stringwrite_canonical_crlf"
description: "stringwrite canonical crlf Write a string terminated by a carriage return and line feed string stringwrite canonical crlf str buf buflen string str const char buf int buflen Write a string with the canonical carriage return and line feed indicating a line break str An ec string buf The character..."
---

<a name="apis.stringwrite_canonical_crlf"></a> 
## Name

stringwrite_canonical_crlf — Write a string terminated by a carriage return and line feed

## Synopsis

`#include "misc/ec_string.h"`

| `string * **stringwrite_canonical_crlf** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">buflen</var>`)`; |   |

`string * <var class="pdparam">str</var>`;
`const char * <var class="pdparam">buf</var>`;
`int <var class="pdparam">buflen</var>`;<a name="idp63020960"></a> 
## Description

Write a string with the canonical carriage return and line feed indicating a line break.

**<a name="idp63022240"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

An ec_string.

</dd>

<dt>buf</dt>

<dd>

The character array.

</dd>

<dt>buflen</dt>

<dd>

The length of the character array.

</dd>

</dl>

**<a name="idp63028624"></a> Return Values**

Return an ec_string with the canonical carriage return and line feed to indicate a line break.

**<a name="idp63029616"></a> Threading**

It is legal to call this function in any thread.

<a name="idp63030720"></a> 
## See Also

[“string”](/momentum/3/3-api/structs-string)