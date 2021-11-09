---
lastUpdated: "03/26/2020"
title: "strlcpy"
description: "strlcpy Size bounded C string copying function size t strlcpy dst src size char dst const char src size t size This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of..."
---

<a name="apis.strlcpy"></a> 
## Name

strlcpy — Size-bounded C string copying function

## Synopsis

`#include "util.h"`

| `size_t **strlcpy** (` | <var class="pdparam">dst</var>, |   |
|   | <var class="pdparam">src</var>, |   |
|   | <var class="pdparam">size</var>`)`; |   |

`char * <var class="pdparam">dst</var>`;
`const char * <var class="pdparam">src</var>`;
`size_t <var class="pdparam">size</var>`;<a name="idp63179712"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Size-bounded C string copying function.

Copies as many characters from src as will fit in dst, given that dst has at least size bytes of storage space available. Guarantees to NUL-terminate dst if size > 0.

**<a name="idp63183200"></a> Parameters**

<dl class="variablelist">

<dt>src</dt>

<dd>

the string to copy from

</dd>

<dt>dst</dt>

<dd>

the string to copy to

</dd>

<dt>size</dt>

<dd>

the size of dst (including the terminating NUL)

</dd>

</dl>

**<a name="idp63189600"></a> Return Values**

Returns the length of src. If the return value >= size, there was insufficient space in dst and truncation took place.