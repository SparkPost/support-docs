---
title: "curl.unescape"
description: "curl unescape Unescape URL encoding in strings curl unescape str This function unescapes URL encoding in strings and is suitable for use when decomposing UR Ls Example 70 19 curl unescape example Example 70 19 curl unescape example outputs curl escape..."
---

<a name="lua.ref.curl.unescape"></a> 
## Name

curl.unescape — Unescape URL encoding in strings

<a name="idp15647392"></a> 
## Synopsis

`require('curl');`

`curl.unescape(str);`

`str: string`<a name="idp15651072"></a> 
## Description

This function unescapes URL encoding in strings and is suitable for use when decomposing URLs.

<a name="lua.ref.curl.unescape.example"></a> 

**Example 70.19. curl.unescape example**

`print(curl.unescape("abcd%24%25%5E%26%2A%28%29"));`

[Example 70.19, “curl.unescape example”](lua.ref.curl.unescape#lua.ref.curl.unescape.example "Example 70.19. curl.unescape example") outputs:

`abcd$%^&*()`<a name="idp15656320"></a> 
### See Also

[curl.escape](lua.ref.curl.escape "curl.escape")