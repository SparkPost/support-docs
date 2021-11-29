---
lastUpdated: "03/26/2020"
title: "get_received_header_text"
description: "get received header text Use this hook to set the text of the Received header in a message int core get received header text closure msg mc ac ctx response void closure ec message msg message construct mc accept construct ac validate context ctx string response Use this hook to..."
---

<a name="hooks.core.get_received_header_text"></a> 
## Name

get_received_header_text — Use this hook to set the text of the `Received` header in a message

## Synopsis

`#include "hooks/core/get_received_header_text.h"`

| `int **core_get_received_header_text** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">mc</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">response</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`message_construct * <var class="pdparam">mc</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`string * <var class="pdparam">response</var>`;<a name="idp32793168"></a> 
## Description

Use this hook to set the text of the `Received` header in a message.

**<a name="idp32794848"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>msg</dt>

<dd>

An `ec_message`. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>mc</dt>

<dd>

A `message_construct`. For documentation of this data structure see [“message_construct”](/momentum/3/3-api/structs-message-construct).

</dd>

<dt>ac</dt>

<dd>

The `accept_construct`. For documentation of this data structure see [“accept_construct”](/momentum/3/3-api/structs-accept-construct).

</dd>

<dt>ctx</dt>

<dd>

The `validate_context` struct. For documentation of this data structure see [“validate_context”](/momentum/3/3-api/structs-validate-context).

</dd>

<dt>response</dt>

<dd>

A pointer to a `string`. Use this to set the `Received` header text.

</dd>

</dl>

**<a name="idp32811808"></a> Return Values**

Return `0` if you use the default text and `1` if you use the text in the `response` parameter.

**<a name="idp32814080"></a> Threading**

This hook will be called in `any` thread.