---
title: "opendkim_sign"
description: "opendkim sign whether or not to enable Open DKIM signing opendkim sign true Use this option to enable or disable Open DKIM signing To use Open DKIM you must also configure the opendkim module Default value is true opendkim sign is valid in the binding binding group domain and global..."
---

<a name="conf.ref.opendkim_sign"></a> 
## Name

opendkim_sign — whether or not to enable OpenDKIM signing

## Synopsis

`opendkim_sign = "true"`

<a name="idp25628304"></a> 
## Description

Use this option to enable or disable OpenDKIM signing. To use OpenDKIM, you must also configure the [`opendkim`](modules.opendkim "71.50. opendkim – Open Source DKIM") module.

Default value is `true`.

<a name="idp25632304"></a> 
## Scope

`opendkim_sign` is valid in the binding, binding_group, domain, and global scopes.

<a name="idp25634160"></a> 
## See Also

[`opendkim`](modules.opendkim "71.50. opendkim – Open Source DKIM")