---
lastUpdated: "03/26/2020"
title: "io_wrapper_open_tmpspool"
description: "io wrapper open tmpspool creates a temporary file in the spool io object io wrapper open tmpspool void This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may..."
---

<a name="apis.io_wrapper_open_tmpspool"></a> 
## Name

io_wrapper_open_tmpspool — creates a temporary file in the spool

## Synopsis

`#include "io_wrapper.h"`

| `io_object * **io_wrapper_open_tmpspool** (` | `)`; |   |

`void`;<a name="idp53919696"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

creates a temporary file in the spool.

This differs from a regular tmpfile in that it is anticipated that this file will be renamed or hard linked to form a message in the spool proper "soon".