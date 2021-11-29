---
lastUpdated: "03/26/2020"
title: "get_outbound_tls_parameters"
description: "get outbound tls parameters Allows implementors to override and control the usage of TLS on a per message basis when delivering mail out of the system int get outbound tls parameters closure msg params void closure ec message msg ec ssl ctx params params Allows providers to override and control..."
---

<a name="hooks.core.get_outbound_tls_parameters"></a> 
## Name

get_outbound_tls_parameters — Allows implementors to override and control the usage of TLS on a per-message basis when delivering mail out of the system

## Synopsis

`#include "hooks/core/get_outbound_tls_parameters.h"`

| `int **get_outbound_tls_parameters** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">params</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`ec_ssl_ctx_params * <var class="pdparam">params</var>`;<a name="idp37313760"></a> 
## Description

Allows providers to override and control the usage of TLS on a per-message basis when delivering mail out of the system.

Your hook provider is responsible for setting the fields of the structure accordingly using [ec_ssl_set_ctx_param](/momentum/3/3-api/apis-ec-ssl-set-ctx-param).

**<a name="idp37316192"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>msg</dt>

<dd>

An `ec_message`. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>params</dt>

<dd>

An `ec_ssl_ctx_params` struct. For documentation of this data structure see [“ec_ssl_ctx_params”](/momentum/3/3-api/structs-ec-ssl-ctx-params).

</dd>

</dl>

**<a name="idp37324688"></a> Return Values**

Caller is expected to return `0`.

**<a name="idp37326048"></a> Threading**

This hook will be called in the `Scheduler` thread.