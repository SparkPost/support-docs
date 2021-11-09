---
lastUpdated: "03/26/2020"
title: "smtp_client_args_delete"
description: "smtp client args delete Remove an argument from an smtp client args structure void smtp client args delete args extension smtp client args args const char extension Remove an argument from an smtp client args structure For a description of this struct see Section 68 81 smtp client args args..."
---

<a name="apis.smtp_client_args_delete"></a> 
## Name

smtp_client_args_delete — Remove an argument from an smtp_client_args structure

## Synopsis

`#include "smtp.h"`

| `void **smtp_client_args_delete** (` | <var class="pdparam">args</var>, |   |
|   | <var class="pdparam">extension</var>`)`; |   |

`smtp_client_args * <var class="pdparam">args</var>`;
`const char * <var class="pdparam">extension</var>`;<a name="idp61859216"></a> 
## Description

Remove an argument from an smtp_client_args structure. For a description of this struct see [“smtp_client_args”](/momentum/3/3-api/structs-smtp-client-args).

**<a name="idp61861072"></a> Parameters**

<dl class="variablelist">

<dt>args</dt>

<dd>

The args structure to remove the argument from.

</dd>

<dt>extension</dt>

<dd>

The name of the extension argument to remove.

</dd>

</dl>

**<a name="idp61865680"></a> Return Value**

This function returns void.

**<a name="idp61866592"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61868144"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp) and [smtp_client_args_add](/momentum/3/3-api/apis-smtp-client-args-add)