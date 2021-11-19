---
lastUpdated: "03/26/2020"
title: "ec_dkim_reflect"
description: "ec dkim reflect Function to reflect validation result to email address specified in rcpts int ec dkim reflect m ctx sender rcpts subject note ec message m validate context ctx const char sender const char rcpts const char subject const char note This reference page was automatically generated from functions..."
---

<a name="apis.ec_dkim_reflect"></a> 
## Name

ec_dkim_reflect — Function to reflect validation result to email address specified in "rcpts"

## Synopsis

`#include "modules/validate/ec_dkim.h"`

| `int **ec_dkim_reflect** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">sender</var>, |   |
|   | <var class="pdparam">rcpts</var>, |   |
|   | <var class="pdparam">subject</var>, |   |
|   | <var class="pdparam">note</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`const char * <var class="pdparam">sender</var>`;
`const char * <var class="pdparam">rcpts</var>`;
`const char * <var class="pdparam">subject</var>`;
`const char * <var class="pdparam">note</var>`;<a name="idp50269392"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to reflect validation result to email address specified in "rcpts".

Module dkim_validate must be configured.

**<a name="idp50272784"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

- email message.

</dd>

<dt>ctx</dt>

<dd>

- validation context.

</dd>

<dt>sender</dt>

<dd>

- email address of sender of this reflection email.

</dd>

<dt>rcpts</dt>

<dd>

- list of recipients separated by ";".

</dd>

<dt>subject</dt>

<dd>

- text to be used in the subject line.

</dd>

<dt>note</dt>

<dd>

- additional explanatory text to be added to the reflection email.

</dd>

</dl>

**<a name="idp50285088"></a> Return Values**

1 - successful; 0 - module is not configured; -1 - wrong state; -2 - wrong phase; -3 - incorrect input.

**Configuration Change. ** This feature is available starting from Momentum 3.1.