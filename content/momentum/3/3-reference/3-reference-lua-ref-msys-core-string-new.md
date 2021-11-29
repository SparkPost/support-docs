---
lastUpdated: "03/26/2020"
title: "msys.core.string_new"
description: "msys core string new Create an ec string msys core string new Create userdata of the ec string type Some functions such as msg get envelope 2 require ec string type userdata the Lua rendering of the C struct string Because this function is in the msys core namespace an..."
---

<a name="lua.ref.msys.core.string_new"></a> 
## Name

msys.core.string_new — Create an ec_string

<a name="idp24134272"></a> 
## Synopsis

`msys.core.string_new();`

<a name="idp24135872"></a> 
## Description

Create userdata of the ec_string type. Some functions such as `msg:get_envelope2`, require ec_string type userdata, the Lua rendering of the C struct, [string](/momentum/3/3-api/structs-string).

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

For a code example see [“msg:binding example”](/momentum/3/3-reference/3-reference-lua-ref-msg-binding#lua.ref.msg_binding.example).