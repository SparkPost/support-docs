---
lastUpdated: "03/26/2020"
title: "msys.readfile"
description: "msys readfile Read the entire contents of the specified file or URI msys readfile filename or uri Reads the entire contents of the specified file or URI and returns it as a string Where possible the act of reading will be delegated to an IO thread and the current session..."
---

<a name="lua.ref.msys.readfile"></a> 
## Name

msys.readfile — Read the entire contents of the specified file or URI

<a name="idp16208368"></a> 
## Synopsis

`msys.readfile(filename_or_uri);`

`filename_or_uri: string`<a name="idp16211360"></a> 
## Description

Reads the entire contents of the specified file or URI and returns it as a string. Where possible, the act of reading will be delegated to an IO thread and the current session will be suspended pending completion of the read. If an error occurs, this function returns a nil value and a second string value to indicate the reason for the error.

Because this function is in the `msys` namespace, an explicit `require` is not necessary.