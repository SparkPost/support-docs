---
lastUpdated: "03/26/2020"
title: "smtp_error_register_class"
description: "smtp error register class Register a user defined SMTP error class void smtp error register class class code name desc unsigned short class code const char name const char desc Register a user defined SMTP error class This is similar to the functionality provided by the bounce classifier override Module..."
---

<a name="apis.smtp_error_register_class"></a> 
## Name

smtp_error_register_class — Register a user-defined SMTP error class

## Synopsis

`#include "misc/smtp_error_classify.h"`

| `void **smtp_error_register_class** (` | <var class="pdparam">class_code</var>, |   |
|   | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">desc</var>`)`; |   |

`unsigned short <var class="pdparam">class_code</var>`;
`const char * <var class="pdparam">name</var>`;
`const char * <var class="pdparam">desc</var>`;<a name="idp61971840"></a> 
## Description

Register a user-defined SMTP error class.

This is similar to the functionality provided by the [bounce_classifier_override Module](/momentum/3/3-reference/3-reference-modules-bounce-classifier-override).

**<a name="idp61974352"></a> Parameters**

<dl class="variablelist">

<dt>class_code</dt>

<dd>

The code you want to assign to your new class.

</dd>

<dt>name</dt>

<dd>

The short name of your new class.

</dd>

<dt>desc</dt>

<dd>

A more verbose description of the class.

</dd>

</dl>

**<a name="idp61980816"></a> Return Values**

This function returns void.

**<a name="idp61981728"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61982832"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp)