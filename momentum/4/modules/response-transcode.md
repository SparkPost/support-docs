---
title: "71.58. response_transcode – Module"
description: "The response transcode module can be used to work around broken remote servers that send incorrect response codes For example with you can change a hard bounce to a soft bounce enabling you to log the bounce in order to later resend the message Since it is possible to rewrite..."
---

<a name="idp22682928"></a> 

The response_transcode module can be used to work around broken remote servers that send incorrect response codes. For example, with you can change a hard bounce to a soft bounce, enabling you to log the bounce in order to later resend the message.

### Warning

Since it is possible to rewrite permanent errors as temporary errors, use this module carefully. Resubmitting mail that a remote server has already rejected with a permanent error can be seen as a hostile action.

### <a name="modules.response_transcode.configuration"></a> 71.58.1. Configuration

This module is loaded automatically as required and does not need to be explicitly included.

<a name="example.response_transcode.3"></a> 

**Example 71.82. response_transcode module**

```
response_transcode {
}
```

### Note

You can transcode "[internal]" transient failures but you cannot transcode "[internal]" permanent failures. For a listing of "[internal]" failures see [Appendix A, *Message Responses*](message_responses "Appendix A. Message Responses") .

The following configuration options are available:

<dl class="variablelist">

<dt>Response_Transcode_Pattern</dt>

<dd>

For more information, see [response_transcode_pattern](conf.ref.response_transcode_pattern "response_transcode_pattern").

</dd>

<dt>Response_Transcode_Replace</dt>

<dd>

For more information, see [response_transcode_replace](conf.ref.response_transcode_replace "response_transcode_replace").

</dd>

</dl>

### Note

If you reference either option, the response_transcode module will be loaded automatically.