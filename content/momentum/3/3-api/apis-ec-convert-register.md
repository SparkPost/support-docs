---
lastUpdated: "03/26/2020"
title: "ec_convert_register"
description: "ec convert register Register a converter implementation int ec convert register closure funcs void closure struct ec converter funcs funcs This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum..."
---

<a name="apis.ec_convert_register"></a> 
## Name

ec_convert_register — Register a converter implementation

## Synopsis

`#include "misc/converter.h"`

| `int **ec_convert_register** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">funcs</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`struct ec_converter_funcs * <var class="pdparam">funcs</var>`;<a name="idp47634560"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Register a converter implementation.

You may register a converter to handle additional encodings.

**<a name="idp47637936"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

an optional closure that will be passed to your opener routine.

</dd>

<dt>funcs</dt>

<dd>

defines the converter implementation.

</dd>

</dl>

When the system opens a converter, it will call the opener routine for each registered implementation in the order that they were registered.

If none were registered, an internal implementation based upon iconv(3) will be used instead.