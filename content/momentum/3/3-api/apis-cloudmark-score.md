---
lastUpdated: "03/26/2020"
title: "cloudmark_score"
description: "cloudmark score Determine the Cloudmark score of a message int cloudmark score m acpt ctx ec message m accept construct acpt validate context ctx Determine the Cloudmark score of a message m The mail message to be scored For more information about this struct see Section 68 38 ec message..."
---

<a name="apis.cloudmark_score"></a> 
## Name

cloudmark_score — Determine the Cloudmark score of a message

## Synopsis

`#include "modules/validate/ec_cloudmark_api.h"`

| `int **cloudmark_score** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">acpt</var>, |   |
|   | <var class="pdparam">ctx</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`accept_construct * <var class="pdparam">acpt</var>`;
`validate_context * <var class="pdparam">ctx</var>`;<a name="idp47042576"></a> 
## Description

Determine the Cloudmark score of a message.

**<a name="idp47043792"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

The mail message to be scored. For more information about this struct see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>acpt</dt>

<dd>

The accept construct. For more information about this struct see [“accept_construct”](/momentum/3/3-api/structs-accept-construct).

</dd>

<dt>ctx</dt>

<dd>

The validation context. For more information about this struct see [“validate_context”](/momentum/3/3-api/structs-validate-context).

</dd>

</dl>

**<a name="idp47052032"></a> Return Values**

The Cloudmark score or minus 1 if the module instance is not available, i.e. it has not been configured yet. For more information see [cloudmark](/momentum/3/3-reference/3-reference-modules-cloudmark).

**Configuration Change. ** This feature is available starting from Momentum 3.1.