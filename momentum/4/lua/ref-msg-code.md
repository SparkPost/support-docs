---
title: "msg:code"
description: "msg code Get or set the message code msg code number str Get or set the message code In the case of a get call the parameter list is left empty In the case of set call if number is 0 then the number is taken from str otherwise the..."
---

<a name="lua.ref.msg_code"></a> 
## Name

msg:code — Get or set the message code

<a name="idp15717648"></a> 
## Synopsis

`require('msys.extended.message')`

`msg:code(number, str);`

```
number: number (optional)
str: string (optional)
```
<a name="idp15721376"></a> 
## Description

Get or set the message code. In the case of a "get call", the parameter list is left empty. In the case of "set call", if `number` is `0`, then the number is taken from `str`, otherwise, the number is prefixed to `str`. If the string passed to `str` is multi-line and/or the number needs to be prefixed, then the string will be adjusted so that it forms a valid (potentially multi-line) response string.

### Warning

Do not call this function from `validate_set_binding`.

<a name="lua.ref.msg_code.example.get"></a> 

**Example 70.20. Getting a Code**

`local codestr = msg:code();`
<a name="lua.ref.msg_code.example.set"></a> 

**Example 70.21. Setting a Code**

`msg:code("421", "Too much spam.");`

Enable this function with the statement `require('msys.extended.message');`.

### Note

During reception, you will likely want to set the code by using [vctx:set_code](lua.ref.vctx_set_code "vctx:set_code").

<a name="idp15734560"></a> 
## See Also

[vctx:set_code](lua.ref.vctx_set_code "vctx:set_code")