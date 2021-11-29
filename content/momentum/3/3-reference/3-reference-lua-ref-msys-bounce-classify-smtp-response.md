---
lastUpdated: "03/26/2020"
title: "msys.bounce.classify_smtp_response"
description: "msys bounce classify smtp response Create a bounce classification from SMTP response text and the domain name msys bounce classify smtp response response text domain This function takes the SMTP response text and the domain name as input and returns a tuple code code string description code is a numerical..."
---

<a name="lua.ref.msys.bounce.classify_smtp_response"></a> 
## Name

msys.bounce.classify_smtp_response — Create a bounce classification from SMTP response text and the domain name

<a name="idp26216640"></a> 
## Synopsis

`msys.bounce.classify_smtp_response(response_text, domain);`

```
response_text: string
domain: string
```
<a name="idp26219376"></a> 
## Description

This function takes the SMTP response text and the domain name as input and returns a tuple (code, code_string, description). `code` is a numerical classification code; `code_string` is the string representation of the code; `description` is the textual description of the code. The bounce_classifier_override module must be configured for this function to produce the correct result.

<a name="lua.ref.msys.bounce.classify_smtp_response.example"></a> 


```
require("msys.bounce");

local mod = {};

function mod:validate_data_spool(msg, accept, vctx)
  code, name, desc, rcpts = msys.bounce.classify(msg);
  print("msys.bounce.classify: code = ", code, " symbol = ", name, " desc = ", desc, " orig rcpt: ", rcpts);
  code, name, desc = msys.bounce.classify_smtp_response("this domain is no longer used");
  print("msys.bounce.classify_smtp_response: code = ", code, " symbol = ", name, " desc = ", desc );
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("test_bc", mod);
```

Enable this function with the statement `require('msys.bounce');`.

<a name="idp26226400"></a> 
## See Also

[“bounce_classifier_override – The Bounce Classifier Override Module”](/momentum/3/3-reference/3-reference-modules-bounce-classifier-override), [msys.bounce.classify](/momentum/3/3-reference/3-reference-lua-ref-msys-bounce-classify)