---
lastUpdated: "03/26/2020"
title: "get_msg_expiration_params"
description: "get msg expiration params Allows modules to customize the expiration parameters on a per message basis int core get msg expiration params closure am message expiration retry interval max retries void closure abstract message am time t message expiration time t retry interval int max retries Allows modules to customize..."
---

<a name="hooks.core.get_msg_expiration_params"></a> 
## Name

get_msg_expiration_params — Allows modules to customize the expiration parameters on a per-message basis

## Synopsis

`#include "hooks/core/get_msg_expiration_params.h"`

| `int **core_get_msg_expiration_params** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">am</var>, |   |
|   | <var class="pdparam">message_expiration</var>, |   |
|   | <var class="pdparam">retry_interval</var>, |   |
|   | <var class="pdparam">max_retries</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`abstract_message * <var class="pdparam">am</var>`;
`time_t * <var class="pdparam">message_expiration</var>`;
`time_t * <var class="pdparam">retry_interval</var>`;
`int * <var class="pdparam">max_retries</var>`;<a name="idp37458720"></a> 
## Description

Allows modules to customize the expiration parameters on a per-message basis. The *`message_expiration`*, *`retry_interval`* and *`max_retries`* parameters correspond to the `Message_Expiration`, `Retry_Interval` and `Max_Retries` configuration parameters, respectively.

**<a name="idp37462720"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>am</dt>

<dd>

An `abstract_message`. For documentation of this data structure see [“abstract_message”](/momentum/3/3-api/structs-abstract-message)

</dd>

<dt>message_expiration</dt>

<dd>

Corresponds to the [Message_Expiration](/momentum/3/3-reference/3-reference-conf-ref-message-expiration) configuration option.

</dd>

<dt>retry_interval</dt>

<dd>

Corresponds to the [Retry_Interval](/momentum/3/3-reference/3-reference-conf-ref-retry-interval) configuration option.

</dd>

<dt>max_retries</dt>

<dd>

Corresponds to the [Max_Retries](/momentum/3/3-reference/3-reference-conf-ref-max-retries) configuration option.

</dd>

</dl>

**<a name="idp37476304"></a> Return Values**

If you decide to take no action (and simply want the default behavior), then return `0`. If you set any of the parameters, then return `1`.

**<a name="idp37478208"></a> Threading**

This hook will be called in any thread.