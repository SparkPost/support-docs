---
lastUpdated: "03/26/2020"
title: "ec_dkim_responsible_domain_string"
description: "ec dkim responsible domain string Function to return responsible domain int ec dkim responsible domain string m ctx domain ec message m validate context ctx string domain This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_dkim_responsible_domain_string"></a> 
## Name

ec_dkim_responsible_domain_string — Function to return responsible domain

## Synopsis

`#include "modules/validate/ec_dkim.h"`

| `int **ec_dkim_responsible_domain_string** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`string * <var class="pdparam">domain</var>`;<a name="idp50320112"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to return responsible domain.

**<a name="idp50322976"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

-- pointer to the email message to be signed.

</dd>

<dt>ctx</dt>

<dd>

-- pointer to validation context.

</dd>

<dt>domain</dt>

<dd>

-- return the responsible domain if found, otherwise blank.

</dd>

</dl>

**<a name="idp50329424"></a> Return Values**

1 or 0\. Not meaningful at this point.

**Configuration Change. ** This feature is available starting from Momentum 3.5.