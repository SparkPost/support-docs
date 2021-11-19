---
lastUpdated: "03/26/2020"
title: "ec_dk_responsible_domain"
description: "ec dk responsible domain Function to return responsible domain int ec dk responsible domain m ctx domain ec message m validate context ctx char domain This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.ec_dk_responsible_domain"></a> 
## Name

ec_dk_responsible_domain — Function to return responsible domain

## Synopsis

`#include "modules/validate/ec_dk.h"`

| `int **ec_dk_responsible_domain** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`char ** <var class="pdparam">domain</var>`;<a name="idp50153120"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to return responsible domain.

**<a name="idp50155984"></a> Parameters**

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

-- return the responsible domain if found, otherwise NULL. Caller must free it.

</dd>

</dl>

**<a name="idp50162464"></a> Return Values**

1 or 0\. Not meaningful at this point.

**Configuration Change. ** This feature is available starting from Momentum 3.1.