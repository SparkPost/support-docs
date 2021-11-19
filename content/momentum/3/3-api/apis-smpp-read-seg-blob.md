---
lastUpdated: "03/26/2020"
title: "smpp_read_seg_blob"
description: "smpp read seg blob Return the data for the current segment struct smpp seg data smpp read seg blob m ec message m Configuration Change This feature is available starting from Momentum 3 2 Return the data for the current segment m The ec message This function returns the current..."
---

<a name="apis.smpp_read_seg_blob"></a> 
## Name

smpp_read_seg_blob — Return the data for the current segment

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `struct smpp_seg_data * **smpp_read_seg_blob** (` | <var class="pdparam">m</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;<a name="idp61505440"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Return the data for the current segment.

**<a name="idp61508320"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

The ec_message.

</dd>

</dl>

**<a name="idp61511024"></a> Return Values**

This function returns the current segment blob data.

**<a name="idp61511968"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61513072"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)