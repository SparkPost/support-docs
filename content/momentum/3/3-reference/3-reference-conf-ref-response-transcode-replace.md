---
lastUpdated: "03/26/2020"
title: "response_transcode_replace"
description: "response transcode replace the replacement string for a server response Response Transcode Replace replacement string This feature requires the response transcode module See Section 14 58 response transcode Module for more information When the SMTP response from a remote sever indicates an error the response code falls in the range..."
---

<a name="conf.ref.response_transcode_replace"></a> 
## Name

response_transcode_replace — the replacement string for a server response

## Synopsis

Response_Transcode_Replace = "*`replacement_string`*"

<a name="idp11224640"></a> 
## Description

### Note

This feature requires the response_transcode module. See [“response_transcode – Module”](/momentum/3/3-reference/3-reference-modules-response-transcode) for more information.

When the SMTP response from a remote sever indicates an error—the response code falls in the range 400 to 599—then that response is compared to the Response_Transcode_Pattern regex. If it matches, the response is replaced with the string in Response_Transcode_Replace; dollar variable expansion is performed, so the entire matching response can be substituted with $0 and the strings matched by grouping parentheses in the regex with $1, $2 and so on. The replacement response is used for deciding what to do with the message next, how it is logged and bounce processed.

### Warning

Since it is possible to rewrite permanent errors as temporary errors, use this module carefully. Resubmitting mail that a remote server has already rejected with a permanent error can be seen as a hostile action.

This option is used in conjunction with the Response_Transcode_Pattern option. See below for an example pairing:

```
Response_Transcode_Pattern = "454 no such user ('.*')"
Response_Transcode_Replace = "554 no such user $1"
```

In this case a 'soft' bounce is converted to a 'hard' bounce so that there are no further delivery attempts.

<a name="idp11230992"></a> 
## Scope

This option is valid in the binding, binding_group, domain and global scopes.

<a name="idp11232672"></a> 
## See Also

[response_transcode_pattern](/momentum/3/3-reference/3-reference-conf-ref-response-transcode-pattern)