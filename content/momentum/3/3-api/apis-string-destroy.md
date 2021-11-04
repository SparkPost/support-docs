---
lastUpdated: "03/26/2020"
title: "string_destroy"
description: "string destroy Destroy a string int string destroy str string str Destroy a string created using ec string init type str The string This function returns void It is legal to call this function in any thread string init type..."
---

<a name="apis.string_destroy"></a> 
## Name

string_destroy — Destroy a string

## Synopsis

`#include "misc/ec_string.h"`

| `int **string_destroy** (` | <var class="pdparam">str</var>`)`; |   |

`string * <var class="pdparam">str</var>`;<a name="idp62910800"></a> 
## Description

Destroy a string created using [ec_string_init_type](/momentum/3/3-api/apis-string-init-type).

**<a name="idp62912736"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

The string

</dd>

</dl>

**<a name="idp62915440"></a> Return Values**

This function returns void.

**<a name="idp62916352"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62917456"></a> 
## See Also

[string_init_type](/momentum/3/3-api/apis-string-init-type)