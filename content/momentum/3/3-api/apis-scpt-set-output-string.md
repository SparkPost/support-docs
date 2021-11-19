---
lastUpdated: "03/26/2020"
title: "scpt_set_output_string"
description: "scpt set output string Set the output string for a scriptlet thread string scpt set output string thr output scpt thread thr string output This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.scpt_set_output_string"></a> 
## Name

scpt_set_output_string — Set the output string for a scriptlet thread

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `string * **scpt_set_output_string** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">output</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`string * <var class="pdparam">output</var>`;<a name="idp59528560"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Set the output string for a scriptlet thread.

If output is set to NULL, the print() function will emit to the paniclog. Otherwise, it will output to the string.