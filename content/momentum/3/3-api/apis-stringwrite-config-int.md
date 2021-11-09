---
lastUpdated: "03/26/2020"
title: "stringwrite_config_int"
description: "stringwrite config int Output an integer to the system console string stringwrite config int str label value xml string str const char label int value int xml Output an integer to the system console This function is deprecated in Momentum version 3 0 It is suitable only for supporting legacy..."
---

<a name="apis.stringwrite_config_int"></a> 
## Name

stringwrite_config_int — Output an integer to the system console

## Synopsis

`#include "misc/ec_string.h"`

| `string * **stringwrite_config_int** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">label</var>, |   |
|   | <var class="pdparam">value</var>, |   |
|   | <var class="pdparam">xml</var>`)`; |   |

`string * <var class="pdparam">str</var>`;
`const char * <var class="pdparam">label</var>`;
`int <var class="pdparam">value</var>`;
`int <var class="pdparam">xml</var>`;<a name="idp63067056"></a> 
## Description

Output an integer to the system console.

### Note

This function is deprecated in Momentum version 3.0\. It is suitable only for supporting legacy modules doing 'write config'.

**<a name="idp63069312"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

An ec_string.

</dd>

<dt>label</dt>

<dd>

A character array, typically an option name.

</dd>

<dt>int</dt>

<dd>

The value of `label`.

</dd>

<dt>xml</dt>

<dd>

Whether or not to render as XML. Set this value to `0` or `1`.

</dd>

</dl>

**<a name="idp63078880"></a> Return Values**

This function returns an ec_string terminated by a newline.

**<a name="idp63079824"></a> Threading**

It is legal to call this function in any thread.