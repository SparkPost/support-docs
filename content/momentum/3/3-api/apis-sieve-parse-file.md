---
lastUpdated: "03/26/2020"
title: "sieve_parse_file"
description: "sieve parse file Parse compile a Sieve script from a file SIEVE sieve parse file filename error log const char filename string error log Parse compile a Sieve script from a file The script must be UTF 8 encoded as per RFC 3028 filename The file name error log The..."
---

<a name="apis.sieve_parse_file"></a> 
## Name

sieve_parse_file — Parse/compile a Sieve script from a file

## Synopsis

`#include "sieve/ecsieve.h"`

| `SIEVE * **sieve_parse_file** (` | <var class="pdparam">filename</var>, |   |
|   | <var class="pdparam">error_log</var>`)`; |   |

`const char * <var class="pdparam">filename</var>`;
`string * <var class="pdparam">error_log</var>`;<a name="idp60426768"></a> 
## Description

Parse/compile a Sieve script from a file. The script must be UTF-8 encoded, as per RFC 3028.

**<a name="idp60428048"></a> Parameters**

<dl class="variablelist">

<dt>filename</dt>

<dd>

The file name.

</dd>

<dt>error_log</dt>

<dd>

The message to write to the paniclog. This parameter can be `NULL`.

</dd>

</dl>

**<a name="idp60433088"></a> Return Value**

This function returns a SIEVE pointer.

**<a name="idp60434016"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60435120"></a> 
## See Also

[Section 68.75, “SIEVE (sieve_state)”](structs.sieve "68.75. SIEVE (sieve_state)")