---
lastUpdated: "03/26/2020"
title: "config_get_domain_host_failure_retry"
description: "config get domain host failure retry Determine whether there should be another delivery attempt int core config get host failure retry closure caller scope value void closure generic module infrastructure caller scope int value This hook is called to determine whether a delivery should be attempted after a connection failure..."
---

<a name="hooks.auto.config_get_domain_host_failure_retry"></a> 
## Name

config_get_domain_host_failure_retry — Determine whether there should be another delivery attempt

## Synopsis

`#include "hooks/auto/host_failure_retry.h"`

| `int **core_config_get_host_failure_retry** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">caller_scope</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`generic_module_infrastructure * <var class="pdparam">caller_scope</var>`;
`int * <var class="pdparam">value</var>`;<a name="idp32370256"></a> 
## Description

This hook is called to determine whether a delivery should be attempted after a connection failure. The wait period before attempting a retry is determined by the configuration option [host_failure_retry](/momentum/3/3-reference/3-reference-conf-ref-host-failure-retry).

**<a name="idp32372784"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

The closure function. This parameter can be `NULL`.

</dd>

<dt>caller_scope</dt>

<dd>

The module infrastructure. For more information see [generic_module_infrastructure](/momentum/3/3-api/structs-generic-module-infrastructure).

</dd>

<dt>value</dt>

<dd>

The value of [host_failure_retry](/momentum/3/3-reference/3-reference-conf-ref-host-failure-retry) that is returned to the operating system. This parameter is optional.

</dd>

</dl>

**<a name="idp34966608"></a> Return Values**

When this hook returns non-zero, no further hook providers are called, and the value that the hook provider returned is returned to the caller of the hook.

**<a name="idp34967664"></a> Threading**

This hook will be invoked in any thread.

<a name="idp34969072"></a> 
## See Also

[host_failure_retry](/momentum/3/3-reference/3-reference-conf-ref-host-failure-retry)