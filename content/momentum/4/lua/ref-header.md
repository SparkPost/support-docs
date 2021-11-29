---
lastUpdated: "03/26/2020"
title: "msg:header"
description: "msg header Manipulate message headers msg header hdr value mode This Lua function may not give expected results for multi part MIME messages such as an MCMT message It will behave as expected in the first MIME part Consider using msgpart header This function may be used to manipulate message..."
---

<a name="lua.ref.header"></a> 
## Name

msg:header — Manipulate message headers

<a name="idp15781280"></a> 
## Synopsis

`require('msys.extended.message')`

`msg:header(hdr, value, mode)`

```
hdr: string
value: string (optional)
mode: string (optional)
```

### Warning

This Lua function may not give expected results for multi-part MIME messages such as an MCMT message. It will behave as expected in the first MIME part. Consider using [msgpart:header](/momentum/4/lua/ref-msgpart-header).

<a name="idp15786688"></a> 
## Description

This function may be used to manipulate message headers in a variety of ways: get, set, delete, prepend, append, and replace.

In order to *get* headers, pass only the first parameter and msg:header returns an array of header values. The headers will have RFC2047 header encoding removed, which means that any non-ASCII characters that are properly encoded according to MIME will be translated to UTF-8 text.

When used to *delete* a header, specify the name of the header you wish to delete and pass an empty string, `""`, as the second parameter.

If `mode` is `replace` (or omitted) then the following occurs: first all other headers of that name are deleted and then the new value is appended to the message headers. If `mode` is `prepend`, existing headers are preserved with the same name and the new value is prepended to the message. If the `mode` is `append`, existing headers are preserved with the same name and the new value is appended to the message. If the `value` is a table, multiple headers are added. When setting headers, any non-ASCII content will be subject to RFC2047 MIME header encoding, and stored in the header as UTF-8 encoded text.

<a name="lua.ref.msg_header.example.get"></a> 


```
local header_list;
header_list =  msg:header("X-Custom-Header");
local hdrval = header_list[1];
```

Note that when getting a header, the return value is a table.

<a name="lua.ref.msg_header.example.delete"></a> 


`msg:header("X-Custom-Header", "");`

In this case, the return value of the `msg:header` function is a boolean.

<a name="lua.ref.msg_header.example.set"></a> 


`msg:header("X-Custom-Header", "header value");`

When adding a header, the third parameter defaults to `append`. If you wish to prepend the header specify `prepend` as the third parameter. In this case, the return value of the `msg:header` function is a boolean.

<a name="lua.ref.msg_header.example.replace"></a> 


`msg:header("X-Custom-Header", "123456", "replace");`

In this case the return value of the `msg:header` function is also a boolean.

<a name="idp15809824"></a> 
## See Also

[msg:body](/momentum/4/lua/ref-msg-body) and [msgpart:header](/momentum/4/lua/ref-msgpart-header).