---
lastUpdated: "03/26/2020"
title: "advertize_esmtp_capability"
description: "advertize esmtp capability add a string to the EHLO response advertize esmtp capability string Use this function to add a string to the EHLO response This function is typically used in the connect phase To remove a string use disable esmtp capability Example 16 3 advertize esmtp capability example disable..."
---

<a name="sieve.ref.advertize_esmtp_capability"></a> 
## Name

advertize_esmtp_capability — add a string to the EHLO response

## Synopsis

`advertize_esmtp_capability` { *`string`* }

<a name="idp28537456"></a> 
## Description

Use this function to add a string to the EHLO response. This function is typically used in the connect phase. To remove a string use `disable_esmtp_capability`.

<a name="example.advertize_esmtp_capability"></a> 


`advertize_esmtp_capability "8bitmime"`
<a name="idp28542320"></a> 
## See Also

[disable_esmtp_capability](/momentum/3/3-reference/sieve-ref-disable-esmtp-capability)