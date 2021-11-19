---
lastUpdated: "03/26/2020"
title: "json.strerror"
description: "json strerror Return the description of a JSON error code json strerror code This function returns a description of the JSON error code returned when json decode fails Example 15 40 json strerror example The follow constants are defined and can be used to determine the cause of failure in..."
---

<a name="lua.ref.json.strerror"></a> 
## Name

json.strerror — Return the description of a JSON error code

<a name="idp25259280"></a> 
## Synopsis

`require("json");`

`json.strerror(code);`

`code: numeric`<a name="idp25262640"></a> 
## Description

This function returns a description of the JSON error code returned when [json.decode](/momentum/3/3-reference/3-reference-lua-ref-json-decode) fails.

<a name="lua.ref.json.strerror.example"></a> 


`str = json.strerror(code);`

The follow constants are defined and can be used to determine the cause of failure in certain JSON operations; you may pass any of these to `json.strerror` to obtain a description:

*   `json.ERROR_DEPTH`

*   `json.ERROR_PARSE_EOF`

*   `json.ERROR_PARSE_UNEXPECTED`

*   `json.ERROR_PARSE_NULL`

*   `json.ERROR_PARSE_BOOLEAN`

*   `json.ERROR_PARSE_NUMBER`

*   `json.ERROR_PARSE_ARRAY`

*   `json.ERROR_PARSE_OBJECT_KEY_NAME`

*   `json.ERROR_PARSE_OBJECT_KEY_SEP`

*   `json.ERROR_PARSE_OBJECT_VALUE_SEP`

*   `json.ERROR_PARSE_STRING`

*   `json.ERROR_PARSE_COMMENT`

<a name="idp25282896"></a> 
## See Also

[json.new](/momentum/3/3-reference/3-reference-lua-ref-json-new)