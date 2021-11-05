---
lastUpdated: "03/26/2020"
title: "smtp_error_for_id"
description: "smtp error for id Fetch the details for a given SMTP classification id struct smtp error class smtp error for id smtp error type unsigned short smtp error type Fetch the details for a given SMTP classification id smtp error type The classification id returned from one of the classification..."
---

<a name="apis.smtp_error_for_id"></a> 
## Name

smtp_error_for_id — Fetch the details for a given SMTP classification id

## Synopsis

`#include "misc/smtp_error_classify.h"`

| `struct _smtp_error_class * **smtp_error_for_id** (` | <var class="pdparam">smtp_error_type</var>`)`; |   |

`unsigned short <var class="pdparam">smtp_error_type</var>`;<a name="idp61952272"></a> 
## Description

Fetch the details for a given SMTP classification id.

**<a name="idp61953504"></a> Parameters**

<dl class="variablelist">

<dt>smtp_error_type</dt>

<dd>

The classification id returned from one of the classification routines.

</dd>

</dl>

**<a name="idp61956304"></a> Return Values**

This function returns the [“_smtp_error_class”](/momentum/3/3-api/structs-smtp-error-class) data structure.

You must not modify or attempt to free the returned data structure.

**<a name="idp61958304"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61959408"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp) , [smtp_error_classify_len](/momentum/3/3-api/apis-smtp-error-classify-len)