---
lastUpdated: "03/26/2020"
title: "smpp_write_seg_blob"
description: "smpp write seg blob Change or write the text content of the current segment void smpp write seg blob m seg data ec message m struct smpp seg data seg data Configuration Change This feature is available starting from Momentum 3 2 Change or write the text content of the..."
---

<a name="apis.smpp_write_seg_blob"></a> 
## Name

smpp_write_seg_blob — Change or write the text content of the current segment

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `void **smpp_write_seg_blob** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">seg_data</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`struct smpp_seg_data * <var class="pdparam">seg_data</var>`;<a name="idp61634720"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Change or write the text content of the current segment

**<a name="idp61637616"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

The ec_message.

</dd>

<dt>seg_data</dt>

<dd>

The data to write the the current segment. For a description of this data type see [“smpp_seg_data”](/momentum/3/3-api/structs-smpp-seg-data).

</dd>

</dl>

**<a name="idp61642800"></a> Return Values**

This function returns void.

**<a name="idp61643712"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61644816"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)