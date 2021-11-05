---
lastUpdated: "03/26/2020"
title: "sieve_register_action"
description: "sieve register action Register a sieve action int sieve register action closure action reqd capability compile cb action cb void closure const char action const char reqd capability sieve compile callback compile cb sieve action callback action cb Use sieve register extension instead Register a sieve action flags A combination..."
---

<a name="apis.sieve_register_action"></a> 
## Name

sieve_register_action — Register a sieve action

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_register_action** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">action</var>, |   |
|   | <var class="pdparam">reqd_capability</var>, |   |
|   | <var class="pdparam">compile_cb</var>, |   |
|   | <var class="pdparam">action_cb</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">action</var>`;
`const char * <var class="pdparam">reqd_capability</var>`;
`sieve_compile_callback <var class="pdparam">compile_cb</var>`;
`sieve_action_callback <var class="pdparam">action_cb</var>`;<a name="idp60462224"></a> 
## Description

### Deprecated

Use [sieve_register_extension](/momentum/3/3-api/apis-sieve-register-extension) instead.

Register a sieve action.

**<a name="idp60465344"></a> Parameters**

<dl class="variablelist">

<dt>flags</dt>

<dd>

A combination of SIV_EXT_* flags (if any).

</dd>

<dt>closure</dt>

<dd>

Pointer that's passed to callbacks.

</dd>

<dt>action</dt>

<dd>

Name of the extension in Sieve scripts.

</dd>

<dt>reqd_capability</dt>

<dd>

Name that the script needs to require; NULL means the same as action.

</dd>

<dt>compile_cb</dt>

<dd>

Callback for compile phase.

</dd>

<dt>action_cb</dt>

<dd>

Callback for execution phase.

</dd>

</dl>

This is equivalent to calling [sieve_register_extension](/momentum/3/3-api/apis-sieve-register-extension) with the SIV_EXT_SUPPORTS_V0 flag (which introduces overhead for compatibility). New code should use [sieve_register_extension](/momentum/3/3-api/apis-sieve-register-extension) instead.

**<a name="idp60479136"></a> Return Values**

Returns 1 on success, 0 on failure.