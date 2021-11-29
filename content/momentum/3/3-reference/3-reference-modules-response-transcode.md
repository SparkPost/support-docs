---
lastUpdated: "03/26/2020"
title: "response_transcode – Module"
description: "The response transcode module can be used to work around broken remote servers that send incorrect response codes For example with this module you can change a hard bounce to a soft bounce enabling you to log the bounce in order to later resend the message When implemented by the..."
---

<a name="idp20997520"></a> 

The response_transcode module can be used to work around broken remote servers that send incorrect response codes. For example, with this module you can change a hard bounce to a soft bounce, enabling you to log the bounce in order to later resend the message. When implemented by the `transcode` rule action in `adaptive_rules.lua`, it is only available for disposition rules.

### Warning

Since it is possible to rewrite permanent errors as temporary errors, use this module carefully. Resubmitting mail that a remote server has already rejected with a permanent error can be seen as a hostile action.

### <a name="modules.response_transcode.configuration"></a> Configuration

<a name="example.response_transcode.3"></a> 


```
response_transcode {
}
```

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

### Note

You can transcode "[internal]" transient failures but you cannot transcode "[internal]" permanent failures. For a listing of "[internal]" failures see [*Message Responses*](/momentum/3/3-reference/responses) .

The module defines two options, Response_Transcode_Pattern and Response_Transcode_Replace. For more information about these options see [response_transcode_replace](/momentum/3/3-reference/3-reference-conf-ref-response-transcode-replace) and [response_transcode_pattern](/momentum/3/3-reference/3-reference-conf-ref-response-transcode-pattern). If you reference either of these options, the response_transcode module will be loaded automatically.