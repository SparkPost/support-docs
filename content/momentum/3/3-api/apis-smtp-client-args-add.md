---
lastUpdated: "03/26/2020"
title: "smtp_client_args_add"
description: "smtp client args add Add an argument to an smtp client args structure int smtp client args add args extension value smtp client args args const char extension const char value Add an argument to an smtp client args structure For a description of this struct see Section 68 81..."
---

<a name="apis.smtp_client_args_add"></a> 
## Name

smtp_client_args_add — Add an argument to an smtp_client_args structure

## Synopsis

`#include "smtp.h"`

| `int **smtp_client_args_add** (` | <var class="pdparam">args</var>, |   |
|   | <var class="pdparam">extension</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`smtp_client_args * <var class="pdparam">args</var>`;
`const char * <var class="pdparam">extension</var>`;
`const char * <var class="pdparam">value</var>`;<a name="idp61835952"></a> 
## Description

Add an argument to an smtp_client_args structure. For a description of this struct see [“smtp_client_args”](/momentum/3/3-api/structs-smtp-client-args).

**<a name="idp61837808"></a> Parameters**

<dl class="variablelist">

<dt>args</dt>

<dd>

The args structure to add the argument to.

</dd>

<dt>extension</dt>

<dd>

The name of the extension.

</dd>

<dt>value</dt>

<dd>

The value to use for the extension, for example `ESMTP`.

</dd>

</dl>

**<a name="idp61844720"></a> Return Values**

On success, `0` is returned. On failure, non-zero is returned, and the caller can either decide to proceed or fail the message.

**<a name="idp61846176"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61847728"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp) and [smtp_client_args_delete](/momentum/3/3-api/apis-smtp-client-args-delete)