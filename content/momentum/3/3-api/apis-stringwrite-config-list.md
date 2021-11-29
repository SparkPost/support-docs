---
lastUpdated: "03/26/2020"
title: "stringwrite_config_list"
description: "stringwrite config list Output a list to the system console string stringwrite config list str label value xml string str const char label eclist node value int xml Output a list to the system console This function is deprecated in Momentum version 3 0 It is suitable only for supporting..."
---

<a name="apis.stringwrite_config_list"></a> 
## Name

stringwrite_config_list — Output a list to the system console

## Synopsis

`#include "misc/ec_list.h"`

| `string * **stringwrite_config_list** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">label</var>, |   |
|   | <var class="pdparam">value</var>, |   |
|   | <var class="pdparam">xml</var>`)`; |   |

`string * <var class="pdparam">str</var>`;
`const char * <var class="pdparam">label</var>`;
`eclist_node * <var class="pdparam">value</var>`;
`int <var class="pdparam">xml</var>`;<a name="idp63091232"></a> 
## Description

Output a list to the system console.

### Note

This function is deprecated in Momentum version 3.0\. It is suitable only for supporting legacy modules doing 'write config'.

**<a name="idp63093488"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

An ec_string.

</dd>

<dt>label</dt>

<dd>

A character array, typically an option name.

</dd>

<dt>list</dt>

<dd>

The eclist_node you wish to output.

</dd>

<dt>xml</dt>

<dd>

Whether or not to render as XML. Set this value to `0` or `1`.

</dd>

</dl>

**<a name="idp63102656"></a> Return Values**

This function returns an ec_string terminated by a newline.

**<a name="idp63103600"></a> Threading**

It is legal to call this function in any thread.

<a name="idp63104704"></a> 
## See Also

[“eclist_node”](/momentum/3/3-api/structs-eclist-node)