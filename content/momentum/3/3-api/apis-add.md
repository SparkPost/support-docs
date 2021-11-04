---
lastUpdated: "03/26/2020"
title: "add"
description: "add Add disclaimer to a message int add mess plain text html text ec message mess const char plain text const char html text This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.add"></a> 
## Name

add — Add disclaimer to a message

## Synopsis

`#include "modules/generic/disclaimer_api.h"`

| `int **add** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">plain_text</var>, |   |
|   | <var class="pdparam">html_text</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`const char * <var class="pdparam">plain_text</var>`;
`const char * <var class="pdparam">html_text</var>`;<a name="idp55142400"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Add disclaimer to a message.

If plain_text is not null, all message parts of type text/plain will be appended with plain_text. If html_text is not null, all message parts of type text/html will be appended with html_text.

**<a name="idp55145920"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

- the message

</dd>

<dt>plain_text</dt>

<dd>

- contains plain text version of disclaimer

</dd>

<dt>html_text</dt>

<dd>

- contains html text version of disclaimer

</dd>

</dl>

**<a name="idp55152352"></a> Return Values**

0 if disclaimer module is not configured; 1 otherwise.

**Configuration Change. ** This feature is available starting from Momentum 3.1.