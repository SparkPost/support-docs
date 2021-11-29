---
lastUpdated: "03/26/2020"
title: "ec_dk_sign"
description: "ec dk sign Function to sign a mail message int ec dk sign m ctx base domain selector key file key ec message m validate context ctx const char base domain const char selector const char key file const char key This reference page was automatically generated from functions found..."
---

<a name="apis.ec_dk_sign"></a> 
## Name

ec_dk_sign — Function to sign a mail message

## Synopsis

`#include "modules/validate/ec_dk.h"`

| `int **ec_dk_sign** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">base_domain</var>, |   |
|   | <var class="pdparam">selector</var>, |   |
|   | <var class="pdparam">key_file</var>, |   |
|   | <var class="pdparam">key</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`const char * <var class="pdparam">base_domain</var>`;
`const char * <var class="pdparam">selector</var>`;
`const char * <var class="pdparam">key_file</var>`;
`const char * <var class="pdparam">key</var>`;<a name="idp50177136"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to sign a mail message.

If not null, base_domain, selector, key_file and key are used to override the values of dk module.

**<a name="idp50180544"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

-- pointer to the email message to be signed.

</dd>

<dt>ctx</dt>

<dd>

-- pointer to validation context.

</dd>

<dt>base_domain</dt>

<dd>

-- to override the base domain value of dk module.

</dd>

<dt>selector</dt>

<dd>

-- to override the selector value of dk module.

</dd>

<dt>key_file</dt>

<dd>

-- to use the key from this file.

</dd>

<dt>key</dt>

<dd>

-- to specify the key.

</dd>

</dl>

**<a name="idp50192816"></a> Return Values**

1 or 0\. Not meaningful at this point.

**Configuration Change. ** This feature is available starting from Momentum 3.1.