---
lastUpdated: "03/26/2020"
title: "stringwrite_config_string"
description: "stringwrite config string Output a string to the system console string stringwrite config string str label value xml string str const char label const char value int xml Output a string to the system console This function is deprecated in Momentum version 3 0 It is suitable only for supporting..."
---

<a name="apis.stringwrite_config_string"></a> 
## Name

stringwrite_config_string — Output a string to the system console

## Synopsis

`#include "misc/ec_string.h"`

| `string * **stringwrite_config_string** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">label</var>, |   |
|   | <var class="pdparam">value</var>, |   |
|   | <var class="pdparam">xml</var>`)`; |   |

`string * <var class="pdparam">str</var>`;
`const char * <var class="pdparam">label</var>`;
`const char * <var class="pdparam">value</var>`;
`int <var class="pdparam">xml</var>`;<a name="idp63116960"></a> 
## Description

Output a string to the system console.

### Note

This function is deprecated in Momentum version 3.0\. It is suitable only for supporting legacy modules doing 'write config'.

**<a name="idp63119216"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

An ec_string.

</dd>

<dt>label</dt>

<dd>

A character array, typically an option name.

</dd>

<dt>value</dt>

<dd>

The value of `label`.

</dd>

<dt>xml</dt>

<dd>

Whether or not to render as XML. Set this value to `0` or `1`.

</dd>

</dl>

**<a name="idp63128800"></a> Return Values**

This function returns an ec_string terminated by a newline.

**<a name="idp63129744"></a> Threading**

It is legal to call this function in any thread.