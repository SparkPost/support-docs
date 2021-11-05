---
lastUpdated: "03/26/2020"
title: "disable_esmtp_capability"
description: "disable esmtp capability remove a string from the EHLO response disable esmtp capability string Use this function to remove a string from the EHLO response This function is typically used in the connect phase To add a string use advertize esmtp capability Example 16 16 disable esmtp capability example advertize..."
---

<a name="sieve.ref.disable_esmtp_capability"></a> 
## Name

disable_esmtp_capability — remove a string from the EHLO response

## Synopsis

`disable_esmtp_capability` { *`string`* }

<a name="idp28930848"></a> 
## Description

Use this function to remove a string from the EHLO response. This function is typically used in the connect phase. To add a string use `advertize_esmtp_capability`.

<a name="example.disable_esmtp_capability"></a> 


`disable_esmtp_capability "8bitmime"`
<a name="idp28935632"></a> 
## See Also

[advertize_esmtp_capability](/momentum/3/3-reference/sieve-ref-advertize-esmtp-capability)