---
lastUpdated: "03/26/2020"
title: "exclude_vctx"
description: "exclude vctx mess exclude vctx conn Exclude validation context keys from being journaled in the spool metadata Exclude VCTX Mess regex otherregex Exclude VCTX Conn regex otherregex With more advanced policy configurations the aggregate size of the validation context data retained in memory may become significant especially if keep message..."
---

<a name="conf.ref.exclude_vctx"></a> 
## Name

exclude_vctx_mess, exclude_vctx_conn — Exclude validation context keys from being journaled in the spool metadata.

## Synopsis

`Exclude_VCTX_Mess = ("regex$" "otherregex")`
`Exclude_VCTX_Conn = ("regex$" "otherregex")`

<a name="idp9537056"></a> 
## Description

With more advanced policy configurations, the aggregate size of the validation context data retained in memory may become significant, especially if `keep_message_dicts_in_memory` is enabled.

Both `Exclude_VCTX_Mess` and `Exclude_VCTX_Conn` allow you to specify a list of one or more Perl compatible regular expressions. During swap out, the keys to the message and connection dictionaries are compared against the patterns listed by the `Exclude_VCTX_Mess` and `Exclude_VCTX_Conn` respectively. If a key matches, then that data value will be deleted from the respective dictionary.

Note that keys that have special significance to the core product (these typically have a `#` prefix) can not be filtered by this module.

```
# filters all keys ending in _string from the per-message context
Exclude_VCTX_Mess = ( "_string$" )
```
<a name="idp9544112"></a> 
## Scope

Exclude_VCTX_Mess and Exclude_VCTX_Conn are valid in the global, binding, binding_group and domain scopes.

<a name="idp9545824"></a> 
## See Also

[keep_message_dicts_in_memory](/momentum/3/3-reference/3-reference-conf-ref-keep-message-dicts-in-memory) and [*Validation Context Variables*](/momentum/3/3-reference/3-reference-policy-context-variables)