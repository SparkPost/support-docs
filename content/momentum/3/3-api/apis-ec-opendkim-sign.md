---
lastUpdated: "03/26/2020"
title: "ec_opendkim_sign"
description: "ec opendkim sign Function to sign a mail message int ec opendkim sign m ctx base domain header canon body canon digest identity selector key file key body length limit ec message m validate context ctx const char base domain const char header canon const char body canon const char..."
---

<a name="apis.ec_opendkim_sign"></a> 
## Name

ec_opendkim_sign — Function to sign a mail message

## Synopsis

`#include "modules/validate/ec_opendkim.h"`

| `int **ec_opendkim_sign** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">base_domain</var>, |   |
|   | <var class="pdparam">header_canon</var>, |   |
|   | <var class="pdparam">body_canon</var>, |   |
|   | <var class="pdparam">digest</var>, |   |
|   | <var class="pdparam">identity</var>, |   |
|   | <var class="pdparam">selector</var>, |   |
|   | <var class="pdparam">key_file</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">body_length_limit</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`const char * <var class="pdparam">base_domain</var>`;
`const char * <var class="pdparam">header_canon</var>`;
`const char * <var class="pdparam">body_canon</var>`;
`const char * <var class="pdparam">digest</var>`;
`const char * <var class="pdparam">identity</var>`;
`const char * <var class="pdparam">selector</var>`;
`const char * <var class="pdparam">key_file</var>`;
`const char * <var class="pdparam">key</var>`;
`int <var class="pdparam">body_length_limit</var>`;<a name="idp50393520"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Function to sign a mail message.

If not null, base_domain, selector, key_file and key are used to override the values of OpenDKIM module.

**<a name="idp50396944"></a> Parameters**

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

<dt>header_canon</dt>

<dd>

-- to override default method for header canonicalization: relaxed or simple.

</dd>

<dt>body_canon</dt>

<dd>

-- to override default method for body canonicalization: relaxed or simple.

</dd>

<dt>digest</dt>

<dd>

-- to override the digest method.

</dd>

<dt>identity</dt>

<dd>

-- to override the signing identity.

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

-- to use the key stored in this variable.

</dd>

<dt>body_length_limit</dt>

<dd>

-- to override body_length_limit setting. 0 -- false, 1 -- true, -1 -- do not override..

</dd>

</dl>

**<a name="idp50418384"></a> Return Values**

1 or 0\. Not meaningful at this point.

**Configuration Change. ** This feature is available starting from Momentum 3.1.