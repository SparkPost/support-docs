---
lastUpdated: "03/26/2020"
title: "Interface"
description: "Lua implementations use the following interface The parameter msg is an ec message Lua implementations must use the function name mod mm 7 handle submit Rsp C implementations use the following interface e g Note that unlike Lua the function name is not significant since the function is registered during..."
---

### <a name="idp893936"></a> Function Interface for Lua

Lua implementations use the following interface:

`function mod:mm7_handle_submitRsp(msg)`

The parameter "msg" is an ec_message. Lua implementations must use the function name `mod:mm7_handle_submitRsp`.

### <a name="idp936080"></a> Function Interface for C

C implementations use the following interface (e.g.):

```
static int sample_mm7_handle_submitRsp_hook (void  *gself,
ec_message * m)
```

Note that (unlike Lua) the function name is not significant since the function is registered during module initialization (see example).

### <a name="idp938960"></a> Return Values

The hook implementation may set the following return values to instruct the subsequent response process:

*   MM7_CONTINUE (0) - continue normal processing including any temp/perm fail processing indicated by the HTTP/MM7 response status code.

*   MM7_TEMP_FAIL (1) - consider the message tempfailed regardless the status code in the response.

*   MM7_PERM_FAIL (2) - consider the message permfailed regardless the status code in the response.

*   MM7_DELIVERED (3) - consider the message "delivered" (successfully) regardless the status code in the response.