---
lastUpdated: "03/26/2020"
title: "curl.escape"
description: "curl escape URL encode a string curl escape str URL encode a string useful when building an URL Example 70 17 curl escape example Example 70 17 curl escape example outputs the following curl unescape..."
---

<a name="lua.ref.curl.escape"></a> 
## Name

curl.escape — URL encode a string

<a name="idp15618512"></a> 
## Synopsis

`require('curl');`

`curl.escape(str);`

`str: string`<a name="idp15622192"></a> 
## Description

URL encode a string; useful when building an URL.

<a name="lua.ref.curl.escape.example"></a> 


`print(curl.escape("abcd$%^&*()"))`

[“curl.escape example”](/momentum/4/lua/ref-curl-escape#lua.ref.curl.escape.example) outputs the following:

`abcd%24%25%5E%26%2A%28%29`<a name="idp15627472"></a> 
### See Also

[curl.unescape](/momentum/4/lua/ref-curl-unescape)