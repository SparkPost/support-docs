---
lastUpdated: "03/26/2020"
title: "ec_hex_decode"
description: "ec hex decode decodes bytes from ASCII hex characters int ec hex decode src src len dest dest len const char src size t src len char dest size t dest len This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.ec_hex_decode"></a> 
## Name

ec_hex_decode — decodes bytes from ASCII hex characters

## Synopsis

`#include "util.h"`

| `int **ec_hex_decode** (` | <var class="pdparam">src</var>, |   |
|   | <var class="pdparam">src_len</var>, |   |
|   | <var class="pdparam">dest</var>, |   |
|   | <var class="pdparam">dest_len</var>`)`; |   |

`const char * <var class="pdparam">src</var>`;
`size_t <var class="pdparam">src_len</var>`;
`char * <var class="pdparam">dest</var>`;
`size_t <var class="pdparam">dest_len</var>`;<a name="idp63896368"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

decodes bytes from ASCII hex characters

Reads src_len / 2 pairs of ASCII hex characters starting at src, and writes src_len / 2 bytes starting at dst. The first ASCII hex character in a pair becomes the most-significant nibble in the corresponding byte. Decoding stops early if an invalid ASCII hex character is reached.

**<a name="idp63899984"></a> Return Values**

0 if dst_len is too small to hold the decoding or if src_len is not a multiple of 2; else returns the number of character pairs decoded.