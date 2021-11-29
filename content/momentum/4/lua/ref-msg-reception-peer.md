---
lastUpdated: "03/26/2020"
title: "msg:reception_peer"
description: "msg reception peer Get the recv from IP and or PORT msg reception peer flag This function returns the IP and or PORT of the remote injection source In particular it returns the component of the sockaddr in human readable form as indicated by the flag The value of the..."
---

<a name="lua.ref.msg_reception_peer"></a> 
## Name

msg:reception_peer — Get the `recv_from` IP and/or PORT.

<a name="idp15839200"></a> 
## Synopsis

`require('msys.extended.message')`

`msg:reception_peer(flag);`

`flag: string (optional)`<a name="idp15842928"></a> 
## Description

This function returns the IP and/or PORT of the remote injection source. In particular, it returns the component of the sockaddr, in human-readable form, as indicated by the flag. The value of the flag parameter can be `ip`, `port` or `all`. The default input parameter is `all`. That is, if `flag` is `nil`, then this returns the same string as if `all` was passed as the parameter.

<a name="lua.ref.msg_reception_peer.example"></a> 


```
require("msys.extended.message");

local mod = {};

function mod:validate_data(msg, ac, vctx)
  print(msg:reception_peer('ip'));
    -- "10.1.2.3"
  print(msg:reception_peer('port'));
      -- "25"
  print(msg:reception_peer('all'));
      -- "10.1.2.3:25"
  print(msg:reception_peer()); -- defaults to 'all'
      -- "10.1.2.3:25"
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("myMod", mod);
```

<a name="idp15851024"></a> 
## See Also

[msg:listener_addr](/momentum/4/lua/ref-msg-listener-addr)