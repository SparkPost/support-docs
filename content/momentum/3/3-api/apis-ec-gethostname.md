---
lastUpdated: "03/26/2020"
title: "ec_gethostname"
description: "ec gethostname lowercase gethostname replacement int ec gethostname hostname len char hostname size t len This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may change in behavior..."
---

<a name="apis.ec_gethostname"></a> 
## Name

ec_gethostname — lowercase gethostname() replacement

## Synopsis

`#include "util.h"`

| `int **ec_gethostname** (` | <var class="pdparam">hostname</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`char * <var class="pdparam">hostname</var>`;
`size_t <var class="pdparam">len</var>`;<a name="idp63876832"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

lowercase gethostname() replacement

Calls the system gethostname() and then normalizes the hostname to all lowercase before returning it in a new buffer

**<a name="idp63880256"></a> Parameters**

<dl class="variablelist">

<dt>hostname</dt>

<dd>

a buffer to return the hostname

</dd>

<dt>len</dt>

<dd>

size of the buffer

</dd>

</dl>

**<a name="idp63884816"></a> Return Values**

On success, zero is returned. On error, -1 is returned, and errno is set appropriately.