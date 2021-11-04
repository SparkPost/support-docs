---
lastUpdated: "03/26/2020"
title: "config_rsrc_setup"
description: "config rsrc setup Register a resource int config rsrc setup closure transaction void closure ec config header transaction This hook point is suitable for registering resources using the ec config rsrc get function with the EC CFG RSRC REGISTERING flag This hook must be used by non singleton modules to..."
---

<a name="hooks.config_rsrc_setup"></a> 
## Name

config_rsrc_setup — Register a resource

## Synopsis

`#include "hooks/core/config_resource_setup.h"`

| `int **config_rsrc_setup** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">transaction</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_config_header *<var class="pdparam">transaction</var>`;<a name="idp6944368"></a> 
## Description

This hook point is suitable for registering resources using the `[ec_config_rsrc_get](/momentum/4/apis-ec-config-rsrc-get)` function with the `EC_CFG_RSRC_REGISTERING` flag. This hook **must** be used by non-singleton modules to register their resources and can optionally be used by singleton modules.

This hook allows resources to be set up within the current configuration transaction. If this hook is not used, then resources may "disappear" when a configuration option is changed with **config set**     or **config unset** . For documentation of these console commands, see [config](/momentum/4/console-commands/config).

**<a name="idp8573520"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

Pointer to the closure

</dd>

<dt>transaction</dt>

<dd>

For a description of this data type, see [ec_config_header](/momentum/3/3-api/structs-ec-config-header).

</dd>

</dl>

**<a name="idp8578560"></a> Return Values**

This hook returns void.

**<a name="idp8579472"></a> Threading**

This hook will be called in any thread.

**<a name="idp8580848"></a> See Also**

[ec_httpsrv_register_auth](/momentum/4/apis-ec-httpsrv-register-auth), [ec_httpsrv_register](/momentum/3/3-api/apis-ec-httpsrv-register), [ec_control_register_command3](/momentum/3/3-api/apis-ec-control-register-command-3)