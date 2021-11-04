---
lastUpdated: "03/26/2020"
title: "ec_dkim_domains_string"
description: "ec dkim domains string Function to return a list of valid signing domains int ec dkim domains string m ctx domains ec message m validate context ctx string domains This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_dkim_domains_string"></a> 
## Name

ec_dkim_domains_string — Function to return a list of valid signing domains

## Synopsis

`#include "modules/validate/ec_dkim.h"`

| `int **ec_dkim_domains_string** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">domains</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`string * <var class="pdparam">domains</var>`;<a name="idp50227728"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to return a list of valid signing domains.

**<a name="idp50230608"></a> Parameters**

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

-- return the list of valid signing domains. Caller must create and initialize domains.

</dd>

</dl>

**<a name="idp50237104"></a> Return Values**

1 or 0\. Not meaningful at this point.

**Configuration Change. ** This feature is available starting from Momentum 3.5.