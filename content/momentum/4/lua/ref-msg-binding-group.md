---
lastUpdated: "03/26/2020"
title: "msg:binding_group"
description: "msg binding group Sets the binding group to the named binding if one is provided msg binding group value Sets the binding to one in the named binding group if one is provided Returns the current or new value for the binding group If the adaptive module is enabled the..."
---

<a name="lua.ref.msg_binding_group"></a> 
## Name

msg:binding_group — Sets the binding_group to the named binding, if one is provided.

<a name="idp16632512"></a> 
## Synopsis

`msg:binding_group(value);`

`value: string, optional`<a name="idp16635456"></a> 
## Description

Sets the binding to one in the named binding_group, if one is provided. Returns the current or new value for the binding_group.

If the [adaptive module](/momentum/4/modules/4-adaptive) is enabled the logic for choosing a binding is as follows:

1.  An unsuspended binding local to the MTA

2.  A non-local unsuspended binding

3.  If all bindings are suspended, a local binding is randomly chosen

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp16642880"></a> 
## See Also

[msg:binding](/momentum/4/lua/ref-msg-binding)