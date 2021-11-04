---
lastUpdated: "03/26/2020"
title: "config_get_message_routing_domain"
description: "config get message routing domain Determine where to place a message int core config get message routing domain closure cs m buff len void closure generic module infrastructure cs ec message m char buff int len This hook is called when the system needs to determine what domain to send..."
---

<a name="hooks.core.config_get_message_routing_domain"></a> 
## Name

config_get_message_routing_domain — Determine where to place a message

## Synopsis

`#include "hooks/core/config_get_message_routing_domain.h"`

| `int **core_config_get_message_routing_domain** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">cs</var>, |   |
|   | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">buff</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`generic_module_infrastructure * <var class="pdparam">cs</var>`;
`ec_message * <var class="pdparam">m</var>`;
`char * <var class="pdparam">buff</var>`;
`int <var class="pdparam">len</var>`;<a name="idp34981920"></a> 
## Description

This hook is called when the system needs to determine what domain to send a message to. It provides a way to set the [gateway](/momentum/3/3-reference/3-reference-conf-ref-gateway) configuration directive at the per-message level.

This hook is called to determine which domain's queue messages should be placed in. The default queue is based on the result of `config_get_binding_domain_gateway`, but the queue can be overridden by registering a custom function at this hook. `buff` is supplied by the caller and is at least `len` bytes long. `buff` will be populated with the full gateway domain.

**<a name="idp34986528"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>cs</dt>

<dd>

For a description of this data type see [generic_module_infrastructure](/momentum/3/3-api/structs-generic-module-infrastructure).

</dd>

<dt>buff</dt>

<dd>

The buffer for holding the routing domain.

</dd>

<dt>len</dt>

<dd>

The length of the buffer.

</dd>

</dl>

**<a name="idp33659120"></a> Return Values**

This hook returns zero or `1`. If non-zero, no further hook providers are called.

**<a name="idp33660528"></a> Threading**

This hook will be called in any thread.