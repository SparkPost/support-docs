---
lastUpdated: "03/26/2020"
title: "bounce_error_classify"
description: "bounce error classify Classify a buffer in the context of an out of band bounce int bounce error classify body body len orig rcpt ignorelist mid const char body int body len char orig rcpt const char ignorelist message id mid Use bounce error classify 2 instead Classify a buffer..."
---

<a name="apis.bounce_error_classify"></a> 
## Name

bounce_error_classify — Classify a buffer in the context of an out-of-band bounce

## Synopsis

`#include "misc/smtp_error_classify.h"`

| `int **bounce_error_classify** (` | <var class="pdparam">body</var>, |   |
|   | <var class="pdparam">body_len</var>, |   |
|   | <var class="pdparam">orig_rcpt</var>, |   |
|   | <var class="pdparam">ignorelist</var>, |   |
|   | <var class="pdparam">mid</var>`)`; |   |

`const char * <var class="pdparam">body</var>`;
`int <var class="pdparam">body_len</var>`;
`char ** <var class="pdparam">orig_rcpt</var>`;
`const char * <var class="pdparam">ignorelist</var>`;
`message_id * <var class="pdparam">mid</var>`;<a name="idp47882640"></a> 
## Description

### Deprecated

Use [bounce_error_classify2](/momentum/3/3-api/apis-bounce-error-classify-2) instead!

Classify a buffer in the context of an out-of-band bounce.

This function will NOT parse out RFC 3464 dispositions.

Starting with version 3.3.0, this function will simply call the core_bounce_error_classify_hook(), utilizing a cache for the result. If no hook is registered, this function will return BC_UNDETERMINED.

In earlier versions, additional heuristics were employed.

The caller is responsible for releasing the memory returned for orig_rcpt using free(3).

Prior to version 3.3.0, the body parameter was temporarily modified to truncate it at the terminator of the message. Since 3.3.0, an internal copy is constructed if body ends with <CRLF.CRLF>.

**<a name="idp47888640"></a> Parameters**

<dl class="variablelist">

<dt>body</dt>

<dd>

A buffer containing the message body to parse.

</dd>

<dt>body_len</dt>

<dd>

How much of body to parse.

</dd>

<dt>orig_rcpt</dt>

<dd>

The likely recipient of the original message that bounced.

</dd>

<dt>ignorelist</dt>

<dd>

Ignored and unused.

</dd>

<dt>mid</dt>

<dd>

The message-id (to update the internal cache) - may be NULL.

</dd>

</dl>

**<a name="idp47898800"></a> Return Values**

The SMTP classification ID.