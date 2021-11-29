---
lastUpdated: "03/26/2020"
title: "ec_config_rsrc_get"
description: "ec config rsrc get Return a resource list blobject from the configuration system ec blobject ec config rsrc get id registering ec atomic t id int registering This function returns a resource list blobject from the configuration system When you are finished with the returned object you must call ec..."
---

<a name="apis.ec_config_rsrc_get"></a> 
## Name

ec_config_rsrc_get — Return a resource list blobject from the configuration system

## Synopsis

`#include "configuration.h"`

| `ec_blobject * **ec_config_rsrc_get** (` | <var class="pdparam">id</var>, |   |
|   | <var class="pdparam">registering</var>`)`; |   |

`ec_atomic_t <var class="pdparam">id</var>`;
`int <var class="pdparam">registering</var>`;<a name="idp8592864"></a> 
## Description

This function returns a resource list blobject from the configuration system.

### Warning

When you are finished with the returned object, you must call [ec_blobject_delref](/momentum/3/3-api/apis-ec-blobject-delref) to dispose of it.

When the `registering` parameter is `EC_CFG_RSRC_REGISTERING`, the configuration system will return the resource list from the currently-being-assembled configuration transaction. If the resource list does not exist in the currently-being-assembled transaction, then it will be created.

When the `registering` parameter is `EC_CFG_RSRC_CONSUMING`, the configuration system will return the resource list from the currently active configuration transaction. If the resource list does not exist in the active transaction, NULL will be returned.

The configuration system semantics are such that there will be a new instance of the resource list for each new configuration generation. That means that modules that register resources against this list will need to ensure that they register them explicitly from their ext_init module function each time it is invoked with `EC_MODULE_INIT_INIT`.

**<a name="idp8600368"></a> Parameters**

<dl class="variablelist">

<dt>id</dt>

<dd>

Resource list identifier returned by `ec_config_rsrc_create`

</dd>

<dt>registering</dt>

<dd>

Constant that indicates either a read or a write operation.

It can be one of the following values:

```
/** Indicates that the caller is consuming the existing, committed resource */
#define EC_CFG_RSRC_CONSUMING   0
/** Indicates that the caller is modifying the pending resource */
#define EC_CFG_RSRC_REGISTERING 1
```
</dd>

</dl>

**<a name="idp8607024"></a> Return Values**

This function returns a [ec_blobject](/momentum/3/3-api/structs-ec-blobject) or `NULL`.

**<a name="idp8609072"></a> Threading**

This hook can be called in any thread.

<a name="idp8610608"></a> 
## See Also

[config_rsrc_setup](/momentum/4/hooks/config-rsrc-setup)