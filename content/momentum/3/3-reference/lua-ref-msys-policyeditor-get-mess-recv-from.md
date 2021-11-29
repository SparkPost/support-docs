---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.get_mess_recv_from"
description: "msys policyeditor get mess recv from Return the IP port combination from which the message was received msys policyeditor get mess recv from ctx vars params Configuration Change This function is deprecated Use local rip msg reception peer ip to get the IP address of the injecting server For more..."
---

<a name="lua.ref.msys.policyeditor.get_mess_recv_from"></a> 
## Name

msys.policyeditor.get_mess_recv_from — Return the IP:port combination from which the message was received

<a name="idp24893952"></a> 
## Synopsis

`msys.policyeditor.get_mess_recv_from(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local rip = msg:reception_peer('ip')` to get the IP address of the injecting server. For more information see [msg:reception_peer](/momentum/3/3-reference/3-reference-lua-ref-msg-reception-peer).

<a name="idp24899280"></a> 
## Description

Return the IP:port combination from which the message was received.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

There are no defined parameters for `params`.

<a name="idp24903712"></a> 
## See Also

[msys.policyeditor.get_mess_recv_via](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-mess-recv-via)