---
lastUpdated: "03/26/2020"
title: "smpp_date_to_long"
description: "smpp date to long Convert date string to time t value long int smpp date to long date str char date str Configuration Change This feature is available starting from Momentum 3 2 Convert a date string to time t value date str The input date string in the format..."
---

<a name="apis.smpp_date_to_long"></a> 
## Name

smpp_date_to_long — Convert date string to time_t value

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `long int **smpp_date_to_long** (` | <var class="pdparam">date_str</var>`)`; |   |

`char * <var class="pdparam">date_str</var>`;<a name="idp61244032"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Convert a date string to time_t value.

**<a name="idp61246912"></a> Parameters**

<dl class="variablelist">

<dt>date_str</dt>

<dd>

The input date string in the format: "YYMMDDHHMMSS"

</dd>

</dl>

**<a name="idp61249680"></a> Return Values**

The date in time_t format.

**<a name="idp61250592"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61251696"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)