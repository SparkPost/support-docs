---
lastUpdated: "03/26/2020"
title: "exclude_vctx_conn"
description: "exclude vctx conn exclude validation context keys from being journaled in the spool metadata Exclude VCTX Conn regex otherregex With more advanced policy configurations the aggregate size of the validation context data retained in memory may become significant especially if keep message dicts in memory is enabled Exclude VCTX Conn..."
---

<a name="conf.ref.exclude_vctx_conn"></a> 
## Name

exclude_vctx_conn — exclude validation context keys from being journaled in the spool metadata.

## Synopsis

`Exclude_VCTX_Conn = ("regex$" "otherregex")`

<a name="idp24551072"></a> 
## Description

With more advanced policy configurations, the aggregate size of the validation context data retained in memory may become significant, especially if `keep_message_dicts_in_memory` is enabled.

`Exclude_VCTX_Conn` allows you to specify a list of one or more Perl-compatible regular expressions. During swap out, the keys to the connection dictionary are compared against the patterns listed by `Exclude_VCTX_Conn`. If a key matches, then that data value will be deleted from the dictionary.

Note that keys that have special significance to the core product (these typically have a `#` prefix) can not be filtered by this module.

<a name="idp24556432"></a> 
## Scope

Exclude_VCTX_Conn is valid in the global, binding, binding_group, and domain scopes.

<a name="idp24558304"></a> 
## See Also

[exclude_vctx_mess](/momentum/4/config/ref-exclude-vctx-mess), [keep_message_dicts_in_memory](/momentum/4/config/ref-keep-message-dicts-in-memory)