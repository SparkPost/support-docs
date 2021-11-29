---
lastUpdated: "03/26/2020"
title: "smtp_error_retrieve_class"
description: "smtp error retrieve class Return the name and description for a bounce code int smtp error retrieve class class code name name len desc desc len unsigned short class code char name int name len char desc int desc len Configuration Change This feature is available starting from Momentum 3..."
---

<a name="apis.smtp_error_retrieve_class"></a> 
## Name

smtp_error_retrieve_class — Return the name and description for a bounce code

## Synopsis

`#include "misc/smtp_error_classify.h"`

| `int **smtp_error_retrieve_class** (` | <var class="pdparam">class_code</var>, |   |
|   | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">name_len</var>, |   |
|   | <var class="pdparam">desc</var>, |   |
|   | <var class="pdparam">desc_len</var>`)`; |   |

`unsigned short <var class="pdparam">class_code</var>`;
`char * <var class="pdparam">name</var>`;
`int <var class="pdparam">name_len</var>`;
`char * <var class="pdparam">desc</var>`;
`int <var class="pdparam">desc_len</var>`;<a name="idp61996160"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.3.

Return the name and description for a bounce code.

**<a name="idp61999056"></a> Parameters**

<dl class="variablelist">

<dt>class_code</dt>

<dd>

The class code.

</dd>

<dt>name</dt>

<dd>

The buffer to store the name.

</dd>

<dt>name_len</dt>

<dd>

The buffer size.

</dd>

<dt>desc</dt>

<dd>

The buffer to store description.

</dd>

<dt>desc_len</dt>

<dd>

The `desc` buffer size.

</dd>

</dl>

**<a name="idp62009584"></a> Return Values**

If the code is found, this function returns `1`; Otherwise `0` is returned.

**<a name="idp62011408"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62012512"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp) and [Bounce Classification Codes](/momentum/3/3-reference/3-reference-bounce-logger-classification-codes).