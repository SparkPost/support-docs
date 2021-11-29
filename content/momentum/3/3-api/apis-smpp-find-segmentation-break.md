---
lastUpdated: "03/26/2020"
title: "smpp_find_segmentation_break"
description: "smpp find segmentation break Return a pointer to the break between two message segments within the complete text string const char smpp find segmentation break dp seg len data coding is gsm const char dp int seg len int data coding int is gsm Configuration Change This feature is available..."
---

<a name="apis.smpp_find_segmentation_break"></a> 
## Name

smpp_find_segmentation_break — Return a pointer to the break between two message segments within the complete text string

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `const char * **smpp_find_segmentation_break** (` | <var class="pdparam">dp</var>, |   |
|   | <var class="pdparam">seg_len</var>, |   |
|   | <var class="pdparam">data_coding</var>, |   |
|   | <var class="pdparam">is_gsm</var>`)`; |   |

`const char * <var class="pdparam">dp</var>`;
`int <var class="pdparam">seg_len</var>`;
`int <var class="pdparam">data_coding</var>`;
`int <var class="pdparam">is_gsm</var>`;<a name="idp61288688"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Return a pointer to the break between two message segments within the complete text string.

**<a name="idp61291632"></a> Parameters**

<dl class="variablelist">

<dt>dp</dt>

<dd>

The buffer holding the whole input text string.

</dd>

<dt>seg_len</dt>

<dd>

The length of each segment.

</dd>

<dd>

The data coding of the input string: `1` indicates GSM data coding and `0` indicates non-GSM data coding.

</dd>

</dl>

**<a name="idp61298832"></a> Return Values**

The location of the start of the next segment.

**<a name="idp61299776"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61300880"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)