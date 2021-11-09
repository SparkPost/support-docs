---
lastUpdated: "03/26/2020"
title: "smtp_client_args_exists_and_fetch"
description: "smtp client args exists and fetch Check for the existence of and fetch an argument from an smtp client args structure int smtp client args exists and fetch args extension value smtp client args args const char extension const char value Check for the existence of and fetch an argument..."
---

<a name="apis.smtp_client_args_exists_and_fetch"></a> 
## Name

smtp_client_args_exists_and_fetch — Check for the existence of and fetch an argument from an smtp_client_args structure

## Synopsis

`#include "smtp.h"`

| `int **smtp_client_args_exists_and_fetch** (` | <var class="pdparam">args</var>, |   |
|   | <var class="pdparam">extension</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`smtp_client_args * <var class="pdparam">args</var>`;
`const char * <var class="pdparam">extension</var>`;
`const char ** <var class="pdparam">value</var>`;<a name="idp61880496"></a> 
## Description

Check for the existence of and fetch an argument from an smtp_client_args structure. For a description of this struct see [“smtp_client_args”](/momentum/3/3-api/structs-smtp-client-args).

**<a name="idp61882384"></a> Parameters**

<dl class="variablelist">

<dt>args</dt>

<dd>

The args structure to query.

</dd>

<dt>extension</dt>

<dd>

The extension name to query.

</dd>

<dt>value</dt>

<dd>

Where to place the pointer to the value of the extension.

</dd>

</dl>

**<a name="idp61888832"></a> Return Values**

On success, this function returns non-zero and stores the value of the extension (if any) in `value`. On failure, it returns zero and does nothing to value.

**<a name="idp61890320"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61891872"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp) and [smtp_client_args_add](/momentum/3/3-api/apis-smtp-client-args-add)