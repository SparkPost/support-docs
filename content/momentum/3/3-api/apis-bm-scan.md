---
lastUpdated: "03/26/2020"
title: "bm_scan"
description: "bm scan Invoke the Brightmail scanner int bm scan msg ac vctx verdict rules tracker is default ec message msg accept construct ac validate context vctx string verdict string rules string tracker int is default Invoke the Brightmail scanner msg The message to be scanned For documentation of this data..."
---

<a name="apis.bm_scan"></a> 
## Name

bm_scan — Invoke the Brightmail scanner

## Synopsis

`#include "modules/validate/ec_brightmail_api.h"`

| `int **bm_scan** (` | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">vctx</var>, |   |
|   | <var class="pdparam">verdict</var>, |   |
|   | <var class="pdparam">rules</var>, |   |
|   | <var class="pdparam">tracker</var>, |   |
|   | <var class="pdparam">is_default</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">vctx</var>`;
`string * <var class="pdparam">verdict</var>`;
`string * <var class="pdparam">rules</var>`;
`string * <var class="pdparam">tracker</var>`;
`int * <var class="pdparam">is_default</var>`;<a name="idp46990192"></a> 
## Description

Invoke the Brightmail scanner.

**<a name="idp46991408"></a> Parameters**

<dl class="variablelist">

<dt>msg</dt>

<dd>

The message to be scanned. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>ac</dt>

<dd>

The address of an [“accept_construct”](/momentum/3/3-api/structs-accept-construct) associated with the session.

</dd>

<dt>vctx</dt>

<dd>

The validation context. For documentation of this data structure see [“validate_context”](/momentum/3/3-api/structs-validate-context).

</dd>

<dt>verdict</dt>

<dd>

The verdict from the scan.

</dd>

<dt>rules</dt>

<dd>

The rules used to judge the mail.

</dd>

<dt>tracker</dt>

<dd>

A string can be used as a header in the email.

</dd>

<dt>is_default</dt>

<dd>

`*is_default` is `1` if the final destination is the default destination.

</dd>

</dl>

**<a name="idp47007936"></a> Return Values**

-1 if module is not available; -2 if called in a wrong phase; 0 if scan is already done for this mail and 1 if success.

**Configuration Change. ** This feature is available starting from Momentum 3.1.