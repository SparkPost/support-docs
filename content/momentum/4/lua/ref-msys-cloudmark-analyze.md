---
lastUpdated: "03/26/2020"
title: "msys.cloudmark.analyze"
description: "msys cloudmark analyze Analyze a message using Cloudmark msys cloudmark analyze hdr msg vctx This function analyzes the input string hdr and returns a table of the following key value pairs score Authority score for the message a number between 0 and 100 The higher the number the more certain..."
---

<a name="lua.ref.msys.cloudmark.analyze"></a> 
## Name

msys.cloudmark.analyze — Analyze a message using Cloudmark

<a name="idp14936496"></a> 
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.analyze(hdr, msg, vctx)`

```
hdr: string
msg: userdata, ec_message type (optional)
vctx: userdata, validate_context type (optional)
```
<a name="idp14940304"></a> 
## Description

This function analyzes the input string `hdr` and returns a table of the following key/value pairs:

*   `score` – Authority score for the message, a number between 0 and 100\. The higher the number, the more certain the engine is that the mail is spam.

*   `is_spam` – If the cloudmark module `MinimumScore` option is set, this flag is set for messages whose score exceeds `MinimumScore`, indicating the engine has determined the message is spam. No action is directly taken on the message; that is left to the user to do using a policy script.

*   `category` – Category assigned to the message by the Cloudmark Authority

*   `category-desc` – Description of the category

*   `sub-category` – Sub-category assigned to the message by the Cloudmark Authority

*   `sub-category-desc` – Description of sub-category

*   `rescan` – rescan flag. If this flag is set to `yes`, the email would benefit from a rescan.

*   `analysis` – Cloudmark Authority analysis header

If `msg` or `vctx` is not provided, they will be inferred from the current context. The above name value pairs are also set within the validation context (VCTX_MESS with cmae- as prefix) except `analysis`.

For a listing of the available context variables, see [“cloudmark – Cloudmark Authority® Content Scanning”](/momentum/4/modules/cloudmark). .

### Warning

Do not use `pcall` with this function.

<a name="idp14954720"></a> 
## See Also

[msys.cloudmark.score](/momentum/4/lua/ref-msys-cloudmark-score)