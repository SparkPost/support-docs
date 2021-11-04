---
lastUpdated: "03/26/2020"
title: "get_inbound_tls_parameters"
description: "get inbound tls parameters Allows implementors to override and control the usage of TLS on a per message basis when accepting mail into the system int core get inbound tls parameters closure mc ctx params void closure message construct mc validate context ctx ec ssl ctx params params Allows providers..."
---

<a name="hooks.core.get_inbound_tls_parameters"></a> 
## Name

get_inbound_tls_parameters — Allows implementors to override and control the usage of TLS on a per-message basis when accepting mail into the system

## Synopsis

`#include "hooks/core/get_inbound_tls_parameters.h"`

| `int **core_get_inbound_tls_parameters** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">mc</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">params</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`message_construct * <var class="pdparam">mc</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`ec_ssl_ctx_params * <var class="pdparam">params</var>`;<a name="idp45562480"></a> 
## Description

Allows providers to override and control the usage of TLS on a per-message basis when accepting mail into the system.

Your hook provider is responsible for setting the fields of the structure accordingly using [ec_ssl_set_ctx_param](/momentum/3/3-api/apis-ec-ssl-set-ctx-param).

**<a name="idp45564896"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>mc</dt>

<dd>

A `message_construct`. For documentation of this data structure see [“message_construct”](/momentum/3/3-api/structs-message-construct).

</dd>

<dt>ctx</dt>

<dd>

The `validate_context` struct. For documentation of this data structure see [“validate_context”](/momentum/3/3-api/structs-validate-context)

</dd>

<dt>params</dt>

<dd>

An `ec_ssl_ctx_params` struct. For documentation of this data structure see [“ec_ssl_ctx_params”](/momentum/3/3-api/structs-ec-ssl-ctx-params)

</dd>

</dl>

**<a name="idp37445104"></a> Return Values**

Caller is expected to return `0`.

**<a name="idp37446464"></a> Threading**

This hook will be called in the `Scheduler` thread.