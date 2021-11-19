---
lastUpdated: "03/26/2020"
title: "response_transcode_pattern"
description: "response transcode pattern the regex pattern for comparison to a server response response transcode pattern regex pattern This feature requires the Section 71 58 response transcode Module When the SMTP response from a remote sever indicates an error the response code falls in the range 400 to 599 then that..."
---

<a name="conf.ref.response_transcode_pattern"></a> 
## Name

response_transcode_pattern — the regex pattern for comparison to a server response

## Synopsis

response_transcode_pattern = "*`regex_pattern`*"

<a name="idp25969584"></a> 
## Description

### Note

This feature requires the [“response_transcode – Module”](/momentum/4/modules/response-transcode).

When the SMTP response from a remote sever indicates an error—the response code falls in the range 400 to 599—then that response is compared to the response_transcode_pattern regex. If it matches, the response is replaced with the string in response_transcode_replace; dollar variable expansion is performed, so the entire matching response can be substituted with $0 and the strings matched by grouping parentheses in the regex with $1, $2 and so on. The replacement response is used for deciding what to do with the message next, how it is logged and bounce processed.

### Warning

Since it is possible to rewrite permanent errors as temporary errors, use this module carefully. Resubmitting mail that a remote server has already rejected with a permanent error can be seen as a hostile action.

This option is used in conjunction with `response_transcode_replace`. See below for an example pairing:

```
response_transcode_pattern = "454 no such user ('.*')"
response_transcode_replace = "554 no such user $1"
```

In this case a 'soft' bounce is converted to a "hard' bounce so that there are no further deliver attempts.

<a name="idp25976272"></a> 
## Scope

This option is valid in the binding, binding_group, domain, and global scopes.

<a name="idp25978144"></a> 
## See Also

[“response_transcode – Module”](/momentum/4/modules/response-transcode)