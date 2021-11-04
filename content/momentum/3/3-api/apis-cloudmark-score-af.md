---
lastUpdated: "03/26/2020"
title: "cloudmark_score_af"
description: "cloudmark score af Examine a message using Cloudmark Active Filter int cloudmark score af m acpt ctx af id af score threshold ec message m accept construct acpt validate context ctx const char af id unsigned int af score threshold Cloudmark Active Filter tracks fingerprints of previously scanned and delivered..."
---

<a name="apis.cloudmark_score_af"></a> 
## Name

cloudmark_score_af — Examine a message using Cloudmark ActiveFilter

## Synopsis

`#include "modules/validate/ec_cloudmark_api.h"`

| `int **cloudmark_score_af** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">acpt</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">af_id</var>, |   |
|   | <var class="pdparam">af_score_threshold</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`accept_construct * <var class="pdparam">acpt</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`const char * <var class="pdparam">af_id</var>`;
`unsigned int <var class="pdparam">af_score_threshold</var>`;<a name="idp47066960"></a> 
## Description

Cloudmark ActiveFilter tracks fingerprints of previously scanned and delivered messages while continually monitoring for new threat updates.

**<a name="idp47068288"></a> Parameters**

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

<dt>af_id</dt>

<dd>

A string defining what the ActiveFilter message ID is.

</dd>

<dt>af_score_threshold</dt>

<dd>

The threshold over which to trigger an AF re-score.

</dd>

</dl>

**<a name="idp47080272"></a> Return Values**

The Cloudmark score or minus 1 if the module instance is not available, i.e. it is not configured yet. For more information see [cloudmark](/momentum/3/3-reference/3-reference-modules-cloudmark).

**Configuration Change. ** This feature is available as of version 3.4.