---
lastUpdated: "01/31/2026"
title: "msg:attempted_ip"
description: "msg attempted_ip Gets the IP address (if any) that was attempted for a failed outbound connection"
---

<a name="lua.ref.msg_attempted_ip"></a> 
## Name

msg:attempted_ip — Gets the IP address (if any) that was attempted for a failed outbound connection.

> This function was introduced in Momentum 5.2.

<a name="idp69519529"></a> 
## Synopsis

`msg:attempted_ip()`

<a name="idp69519530"></a> 
## Description

For successful mail deliveries, connection details are available through the connection handle (`conn_handle`) in the message object (`ec_message`). However, when a connection fails, the handle is null. The `attempted_ip` field in the message object can be checked for the IP address that Momentum attempted to connect to. This is useful for logging connection attempts and troubleshooting delivery issues. The `attempted_ip()` function returns `nil` if the IP address is unknown.

<a name="lua.ref.msg_attempted_ip.example"></a> 

```
require("msys.core")
require("msys.extended.message")

local mod = {}

function mod:core_log_transient_failure_v1(msg, dr, now, note, note_len)
  print(tostring(msg.id) .. ": failed to connect to mail server using the IP address " .. tostring(msg:attempted_ip()))
end

msys.registerModule("example", mod)
```
