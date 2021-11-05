---
lastUpdated: "03/26/2020"
title: "esmtp_destroy_message_construct"
description: "esmtp destroy message construct Destroy the specified message construct void esmtp destroy message construct info message construct info Destroy the specified message construct info The message construct This function returns void It is legal to call this function in the Scheduler thread Section 68 59 message construct..."
---

<a name="apis.esmtp_destroy_message_construct"></a> 
## Name

esmtp_destroy_message_construct — Destroy the specified message construct

## Synopsis

`#include "esmtp_factory.h"`

| `(void) **esmtp_destroy_message_construct** (` | <var class="pdparam">info</var>`)`; |   |

`message_construct * <var class="pdparam">info</var>`;<a name="idp61656752"></a> 
## Description

Destroy the specified message construct.

**<a name="idp61657968"></a> Parameters**

<dl class="variablelist">

<dt>info</dt>

<dd>

The message construct.

</dd>

</dl>

**<a name="idp61660704"></a> Return Values**

This function returns void.

**<a name="idp61661616"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp61663472"></a> 
## See Also

[“message_construct”](/momentum/3/3-api/structs-message-construct)