---
lastUpdated: "03/26/2020"
title: "sieve_parse_text"
description: "sieve parse text parse compile a sieve script from a memory buffer SIEVE sieve parse text sourcename script scriptlen error log const char sourcename const char script int scriptlen string error log This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.sieve_parse_text"></a> 
## Name

sieve_parse_text — parse/compile a sieve script from a memory buffer

## Synopsis

`#include "sieve/ecsieve.h"`

| `SIEVE * **sieve_parse_text** (` | <var class="pdparam">sourcename</var>, |   |
|   | <var class="pdparam">script</var>, |   |
|   | <var class="pdparam">scriptlen</var>, |   |
|   | <var class="pdparam">error_log</var>`)`; |   |

`const char * <var class="pdparam">sourcename</var>`;
`const char * <var class="pdparam">script</var>`;
`int <var class="pdparam">scriptlen</var>`;
`string * <var class="pdparam">error_log</var>`;<a name="idp60447488"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

parse/compile a sieve script from a memory buffer.

Script must be utf-8 encoded, as per RFC 3028.