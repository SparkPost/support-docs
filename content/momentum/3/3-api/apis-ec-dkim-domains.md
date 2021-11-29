---
lastUpdated: "03/26/2020"
title: "ec_dkim_domains"
description: "ec dkim domains Function to return a list of valid signing domains int ec dkim domains m ctx domains ec message m validate context ctx char domains This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_dkim_domains"></a> 
## Name

ec_dkim_domains — Function to return a list of valid signing domains

## Synopsis

`#include "modules/validate/ec_dkim.h"`

| `int **ec_dkim_domains** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">domains</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`char ** <var class="pdparam">domains</var>`;<a name="idp50205872"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to return a list of valid signing domains.

**<a name="idp50208752"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

-- pointer to the email message to be signed.

</dd>

<dt>ctx</dt>

<dd>

-- pointer to validation context.

</dd>

<dt>domains</dt>

<dd>

-- return the list of valid signing domains. Caller must free it.

</dd>

</dl>

**<a name="idp50215216"></a> Return Values**

1 or 0\. Not meaningful at this point.

**Configuration Change. ** This feature is available starting from Momentum 3.1.