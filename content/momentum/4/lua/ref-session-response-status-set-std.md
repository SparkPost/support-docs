---
lastUpdated: "03/26/2020"
title: "session:response_status_set_std"
description: "session response status set std Set the HTTP status for the session response session response status set std cod message mimetype code numeric message string mimetype string optional Use this function with msys httpsrv register to set the HTTP status for the session response For example code see Example 70..."
---

<a name="lua.ref.session_response_status_set_std"></a> 
## Name

session:response_status_set_std — Set the HTTP status for the session response

<a name="idp16442752"></a> 
## Synopsis

`session:response_status_set_std(cod, message, mimetype);`

code: numeric
message: string
mimetype: string (optional)

<a name="idp16445088"></a> 
## Description

Use this function with [msys.httpsrv.register](/momentum/4/lua/ref-msys-httpsrv-register) to set the HTTP status for the session response. For example code see [“msys.httpsrv.register Example”](/momentum/4/lua/ref-msys-httpsrv-register#lua.ref.msys.httpsrv.register.example). For a description of the session object, see [ec_httpsrv_session](/momentum/3/3-api/structs-ec-httpsrv-session).

Set the `code` to a valid HTTP response code, the `message` to an appropriate message, and `mimetype` to a mime type. The following is an example:

`session:response_status_set_std(200, response, "text/plain");`

Enable this function with the statement `require("msys.extended.httpsrv");`.

<a name="idp16452304"></a> 
## See Also

[msys.httpsrv.register](/momentum/4/lua/ref-msys-httpsrv-register) and [session:request_url_get](/momentum/4/lua/ref-session-request-url-get)