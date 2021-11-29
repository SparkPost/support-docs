---
lastUpdated: "03/26/2020"
title: "response_transcode – Module"
description: "The response transcode module can be used to work around broken remote servers that send incorrect response codes For example with you can change a hard bounce to a soft bounce enabling you to log the bounce in order to later resend the message Since it is possible to rewrite..."
---

<a name="idp22682928"></a> 

The response_transcode module can be used to work around broken remote servers that send incorrect response codes. For example, with you can change a hard bounce to a soft bounce, enabling you to log the bounce in order to later resend the message.

### Warning

Since it is possible to rewrite permanent errors as temporary errors, use this module carefully. Resubmitting mail that a remote server has already rejected with a permanent error can be seen as a hostile action.

### <a name="modules.response_transcode.configuration"></a> Configuration

This module is loaded automatically as required and does not need to be explicitly included.

<a name="example.response_transcode.3"></a> 


```
response_transcode {
}
```

### Note

You can transcode "[internal]" transient failures but you cannot transcode "[internal]" permanent failures. For a listing of "[internal]" failures see [*Message Responses*](/momentum/4/message-responses) .

The following configuration options are available:

<dl class="variablelist">

<dt>Response_Transcode_Pattern</dt>

<dd>

For more information, see [response_transcode_pattern](/momentum/4/config/ref-response-transcode-pattern).

</dd>

<dt>Response_Transcode_Replace</dt>

<dd>

For more information, see [response_transcode_replace](/momentum/4/config/ref-response-transcode-replace).

</dd>

</dl>

### Note

If you reference either option, the response_transcode module will be loaded automatically.