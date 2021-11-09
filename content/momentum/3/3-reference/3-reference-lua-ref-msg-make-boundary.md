---
lastUpdated: "03/26/2020"
title: "msg:makeBoundary"
description: "msg make Boundary Generates a unique boundary string msg make Boundary The MIME specification requires that each boundary be a unique string that is not a common prefix substring of any other boundary in the complete message This function generates a unique boundary string by assessing the boundaries defined for..."
---

<a name="lua.ref.msg_makeBoundary"></a> 
## Name

msg:makeBoundary — Generates a unique boundary string

<a name="idp25510608"></a> 
## Synopsis

`msg:makeBoundary(...);`

`...: mixed`<a name="idp25513280"></a> 
## Description

The MIME specification requires that each boundary be a unique string that is not a common prefix/substring of any other boundary in the complete message. This function generates a unique boundary string by assessing the boundaries defined for all the parts in the current message, in addition to those defined in the mime tree for each mime part passed to it as a parameter. This function is called by `makeContainer` when its boundary parameter is `nil`.

Enable this function with the statement `require('msys.extended.message');`.

The ellipsis (...) in the parameter list indicate that this function has any number of arguments.

<a name="idp25517680"></a> 
## See Also

[msg:makeContainer](/momentum/3/3-reference/3-reference-lua-ref-msg-make-container)