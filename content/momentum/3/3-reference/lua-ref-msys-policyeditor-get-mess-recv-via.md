---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.get_mess_recv_via"
description: "msys policyeditor get mess recv via Return the IP port combination on which the message was received msys policyeditor get mess recv via ctx vars params Configuration Change This function is deprecated Use local svc point msg listener addr ip to get the IP address of the listener that the..."
---

<a name="lua.ref.msys.policyeditor.get_mess_recv_via"></a> 
## Name

msys.policyeditor.get_mess_recv_via — Return the IP:port combination on which the message was received

<a name="idp24910544"></a> 
## Synopsis

`msys.policyeditor.get_mess_recv_via(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local svc_point = msg:listener_addr('ip')` to get the IP address of the listener that the message was received on. For more information see [msg:listener_addr](/momentum/3/3-reference/3-reference-lua-ref-msg-listener-addr).

<a name="idp24915888"></a> 
## Description

Return the IP:port combination on which the message was received.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

There are no defined parameters for `params`.

<a name="idp24920320"></a> 
## See Also

[msys.policyeditor.get_mess_recv_from](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-mess-recv-from)