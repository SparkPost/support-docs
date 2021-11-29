---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.get_rcptto"
description: "msys policyeditor get rcptto Return the recipient msys policyeditor get rcptto ctx vars params Configuration Change This function is deprecated Use local recip msg rcptto to get the RCPT TO email address For more information see msg rcptto Return the recipient The ctx parameter is the context containing objects from..."
---

<a name="lua.ref.msys.policyeditor.get_rcptto"></a> 
## Name

msys.policyeditor.get_rcptto — Return the recipient

<a name="idp24927120"></a> 
## Synopsis

`msys.policyeditor.get_rcptto(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local recip = msg:rcptto()` to get the RCPT TO email address. For more information see [msg:rcptto](/momentum/3/3-reference/3-reference-lua-ref-msg-rcptto).

<a name="idp24932432"></a> 
## Description

Return the recipient.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

<a name="idp24935920"></a> 
## See Also

[msys.policyeditor.get_mess_recv_via](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-mess-recv-via), [msys.policyeditor.get_mailfrom](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-mailfrom)