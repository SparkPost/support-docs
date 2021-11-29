---
lastUpdated: "03/26/2020"
title: "cloudmark_score_ip"
description: "cloudmark score ip Determine the Cloudmark score int cloudmark score ip addr str const char addr str Determine the Cloudmark score for an IP address addr The I Pv 4 address to score The Cloudmark score or minus 1 if the module instance is not available i e it is..."
---

<a name="apis.cloudmark_score_ip"></a> 
## Name

cloudmark_score_ip — Determine the Cloudmark score

## Synopsis

`#include "modules/validate/ec_cloudmark_api.h"`

| `int **cloudmark_score_ip** (` | <var class="pdparam">addr_str</var>`)`; |   |

`const char * <var class="pdparam">addr_str</var>`;<a name="idp47091776"></a> 
## Description

Determine the Cloudmark score for an IP address.

**<a name="idp47093008"></a> Parameters**

<dl class="variablelist">

<dt>addr</dt>

<dd>

The IPv4 address to score.

</dd>

</dl>

**<a name="idp47095744"></a> Return Values**

The Cloudmark score or minus 1 if the module instance is not available, i.e. it is not configured yet. For more information see [cloudmark](/momentum/3/3-reference/3-reference-modules-cloudmark).

**Configuration Change. ** This feature is available as of version 3.4.