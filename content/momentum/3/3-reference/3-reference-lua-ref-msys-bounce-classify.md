---
lastUpdated: "03/26/2020"
title: "msys.bounce.classify"
description: "msys bounce classify Create a bounce classification for a message msys bounce classify msg This function takes a mail message msys core ec message and returns a tuple code code string description orig rcpt code is a numerical classification code code string is the string representation of the code such..."
---

<a name="lua.ref.msys.bounce.classify"></a> 
## Name

msys.bounce.classify — Create a bounce classification for a message

<a name="idp26203472"></a> 
## Synopsis

`msys.bounce.classify(msg);`

`msg: userdata, ec_message type`<a name="idp26206128"></a> 
## Description

This function takes a mail message (msys.core:_ec_message) and returns a tuple (code, code_string, description, orig_rcpt). `code` is a numerical classification code; `code_string` is the string representation of the code (such as BC_UNDETERMINED, BC_SOFT_TIMEOUT, etc); `description` is the textual description of the code; `orig_rcpt` is the original recipient of the mail. This function should be called only if a mail is an MDN. The bounce_classifier_override module must be configured for this function to produce the correct result.

Enable this function with the statement `require('msys.bounce');`.

<a name="idp26210944"></a> 
## See Also

[“bounce_classifier_override – The Bounce Classifier Override Module”](/momentum/3/3-reference/3-reference-modules-bounce-classifier-override), [msys.bounce.classify_smtp_response](/momentum/3/3-reference/3-reference-lua-ref-msys-bounce-classify-smtp-response)