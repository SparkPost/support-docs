---
lastUpdated: "03/26/2020"
title: "ec_message_context_copy"
description: "ec message context copy Copy a context variable from one ec message to another int ec message context copy src dest ctx ec message src ec message dest const char ctx Configuration Change This function is available as of Momentum version 3 5 6 Copy a context variable from one..."
---

<a name="apis.ec_message_context_copy"></a> 
## Name

ec_message_context_copy — Copy a context variable from one ec_message to another

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_context_copy** (` | <var class="pdparam">src</var>, |   |
|   | <var class="pdparam">dest</var>, |   |
|   | <var class="pdparam">ctx</var>`)`; |   |

`ec_message * <var class="pdparam">src</var>`;
`ec_message * <var class="pdparam">dest</var>`;
`const char * <var class="pdparam">ctx</var>`;<a name="idp55351744"></a> 
## Description

**Configuration Change. ** This function is available as of Momentum version 3.5.6.

Copy a context variable from one ec_message to another.

**<a name="idp55354624"></a> Parameters**

<dl class="variablelist">

<dt>src</dt>

<dd>

The source ec_message. See [“ec_message”](/momentum/3/3-api/structs-ec-message) for a description of this data type.

</dd>

<dt>dest</dt>

<dd>

The destination ec_message.

</dd>

<dt>ctx</dt>

<dd>

The name of the context variable that you wish to copy.

</dd>

</dl>

**<a name="idp55361648"></a> Return Values**

This function returns `0` on failure; on success, `1` is returned.

**<a name="idp55363472"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55364576"></a> 
## See Also

[*Message Functions*](/momentum/3/3-api/ec-message)