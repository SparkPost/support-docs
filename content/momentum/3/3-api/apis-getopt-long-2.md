---
lastUpdated: "03/26/2020"
title: "getopt_long2"
description: "getopt long 2 a thread safe re entrant getopt long int getopt long 2 state argc argv shortopts longopts longind struct getopt state state int argc char const argv const char shortopts const struct option longopts int longind This reference page was automatically generated from functions found in the header..."
---

<a name="apis.getopt_long2"></a> 
## Name

getopt_long2 — a thread safe, re-entrant, getopt_long

## Synopsis

`#include "getopt_long.h"`

| `int **getopt_long2** (` | <var class="pdparam">state</var>, |   |
|   | <var class="pdparam">argc</var>, |   |
|   | <var class="pdparam">argv</var>, |   |
|   | <var class="pdparam">shortopts</var>, |   |
|   | <var class="pdparam">longopts</var>, |   |
|   | <var class="pdparam">longind</var>`)`; |   |

`struct getopt_state * <var class="pdparam">state</var>`;
`int <var class="pdparam">argc</var>`;
`char *const * <var class="pdparam">argv</var>`;
`const char * <var class="pdparam">shortopts</var>`;
`const struct option * <var class="pdparam">longopts</var>`;
`int * <var class="pdparam">longind</var>`;<a name="idp64029472"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

a thread safe, re-entrant, getopt_long