---
lastUpdated: "03/26/2020"
title: "ec_hex_encode"
description: "ec hex encode encodes bytes into ASCII hex characters int ec hex encode src src len dest dest len const char src size t src len char dest size t dest len This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.ec_hex_encode"></a> 
## Name

ec_hex_encode — encodes bytes into ASCII hex characters

## Synopsis

`#include "util.h"`

| `int **ec_hex_encode** (` | <var class="pdparam">src</var>, |   |
|   | <var class="pdparam">src_len</var>, |   |
|   | <var class="pdparam">dest</var>, |   |
|   | <var class="pdparam">dest_len</var>`)`; |   |

`const char * <var class="pdparam">src</var>`;
`size_t <var class="pdparam">src_len</var>`;
`char * <var class="pdparam">dest</var>`;
`size_t <var class="pdparam">dest_len</var>`;<a name="idp63911872"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

encodes bytes into ASCII hex characters

Reads src_len bytes starting at src and writes src_len * 2 bytes of ASCII hex characters starting at dest. The high-order nibble is written first.

**<a name="idp63915344"></a> Return Values**

0 if dest_len is too small to hold the entire encoding, or the number of ASCII hex characters written.