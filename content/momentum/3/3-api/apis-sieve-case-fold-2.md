---
lastUpdated: "03/26/2020"
title: "sieve_case_fold2"
description: "sieve case fold 2 int sieve case fold 2 folding srccharset srcstring srclen destcharset folded foldlen int folding const char srccharset const char srcstring unsigned int srclen const char destcharset char folded int foldlen This reference page was automatically generated from functions found in the header files in the development..."
---

<a name="apis.sieve_case_fold2"></a> 
## Name

sieve_case_fold2

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_case_fold2** (` | <var class="pdparam">folding</var>, |   |
|   | <var class="pdparam">srccharset</var>, |   |
|   | <var class="pdparam">srcstring</var>, |   |
|   | <var class="pdparam">srclen</var>, |   |
|   | <var class="pdparam">destcharset</var>, |   |
|   | <var class="pdparam">folded</var>, |   |
|   | <var class="pdparam">foldlen</var>`)`; |   |

`int <var class="pdparam">folding</var>`;
`const char * <var class="pdparam">srccharset</var>`;
`const char * <var class="pdparam">srcstring</var>`;
`unsigned int <var class="pdparam">srclen</var>`;
`const char * <var class="pdparam">destcharset</var>`;
`char ** <var class="pdparam">folded</var>`;
`int * <var class="pdparam">foldlen</var>`;<a name="idp59747072"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

**Configuration Change. ** This feature is available starting from Momentum 3.3.0.