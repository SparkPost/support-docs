---
lastUpdated: "03/26/2020"
title: "msg:binding_group"
description: "msg binding group Sets the binding group to the named binding if one is provided msg binding group value Sets the binding to one in the named binding group if one is provided using logic similar to the Sieve function ec set binding group Returns the current or new value..."
---

<a name="lua.ref.msg_binding_group"></a> 
## Name

msg:binding_group — Sets the binding_group to the named binding, if one is provided.

<a name="idp25347824"></a> 
## Synopsis

`msg:binding_group(value);`

`value: string, optional`<a name="idp25350480"></a> 
## Description

Sets the binding to one in the named binding_group, if one is provided, using logic similar to the Sieve function `ec_set_binding_group`. Returns the current or new value for the binding_group.

If the [adaptive module](/momentum/3/3-reference/3-reference-modules-adaptive) is enabled the logic for choosing a binding is as follows:

1.  An unsuspended binding local to the MTA

2.  A non-local unsuspended binding

3.  If all bindings are suspended, a local binding is randomly chosen

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25357792"></a> 
## See Also

[msg:binding](/momentum/3/3-reference/3-reference-lua-ref-msg-binding)