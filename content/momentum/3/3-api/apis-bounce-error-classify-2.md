---
lastUpdated: "03/26/2020"
title: "bounce_error_classify2"
description: "bounce error classify 2 Classify a message in the context of an out of band bounce int bounce error classify 2 mess orig rcpt ignorelist limit ec message mess char orig rcpt const char ignorelist int limit This reference page was automatically generated from functions found in the header files..."
---

<a name="apis.bounce_error_classify2"></a> 
## Name

bounce_error_classify2 — Classify a message in the context of an out-of-band bounce

## Synopsis

`#include "misc/smtp_error_classify.h"`

| `int **bounce_error_classify2** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">orig_rcpt</var>, |   |
|   | <var class="pdparam">ignorelist</var>, |   |
|   | <var class="pdparam">limit</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`char ** <var class="pdparam">orig_rcpt</var>`;
`const char * <var class="pdparam">ignorelist</var>`;
`int <var class="pdparam">limit</var>`;<a name="idp47910384"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Classify a message in the context of an out-of-band bounce.

If the message is an RFC 3464 compliant MDN, the original recipient and disposition information will be extracted and used to drive the classification.

Otherwise, this function will fall-back to invoking the core_bounce_error_classify_hook(). The bounce_classifier module may implement this hook if MDN rules are configured.

The caller is responsible for releasing the memory returned for orig_rcpt using free(3).

**<a name="idp47915040"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

the message to parse

</dd>

<dt>orig_rcpt</dt>

<dd>

the likely recipient of the original message that bounced

</dd>

<dt>ignorelist</dt>

<dd>

ignored and unused

</dd>

<dt>limit</dt>

<dd>

a byte-limit of message content to scan (default 8192) for non-RFC 3464 compliant messages.

</dd>

</dl>

**<a name="idp47923408"></a> Return Values**

the smtp classification id