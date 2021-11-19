---
lastUpdated: "03/26/2020"
title: "msys.shareUnset"
description: "msys share Unset Remove the association with keystring from the global share space msys share Unset keystring Removes the association with keystring from the global share space This function has been made obsolete by the data sharing features introduced in version 3 2 For more information see msys run In..."
---

<a name="lua.ref.msys.shareUnset"></a> 
## Name

msys.shareUnset — Remove the association with keystring from the global share space

<a name="idp24752672"></a> 
## Synopsis

`msys.shareUnset(keystring);`

`keystring: string`<a name="idp24755360"></a> 
## Description

Removes the association with keystring from the global share space.

### Note

This function has been made obsolete by the data sharing features introduced in version 3.2\. For more information see [msys.runInPool](/momentum/3/3-reference/3-reference-lua-ref-msys-runinpool).

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp24759856"></a> 
## See Also

[msys.shareSet](/momentum/3/3-reference/lua-ref-msys-share-set), [msys.shareGet](/momentum/3/3-reference/lua-ref-msys-share-get)